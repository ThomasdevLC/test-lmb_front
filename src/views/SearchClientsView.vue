<template>
  <div class="p-6 space-y-4">
    <h1 class="text-2xl font-bold">Liste des clients</h1>

    <input
      v-model="searchTerm"
      type="text"
      placeholder="Rechercher par nom"
      class="w-full p-2 border rounded shadow-sm"
      @input="fetchClients"
    />

    <ul class="space-y-2">
      <li
        v-for="client in clients"
        :key="client.id"
        class="bg-white p-4 rounded shadow-sm border"
      >
        <p class="text-lg font-semibold">{{ client.nom }}</p>
        <p class="text-sm text-gray-600">{{ client.ville }}</p>
        <p class="text-sm text-gray-500">{{ client.adresse }}</p>
        <p class="text-sm text-gray-500">{{ client.tel }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getClients } from '@/services/client/clientService'
import type { Client } from '@/models/client'

const clients = ref<Client[]>([])
const searchTerm = ref('')

async function fetchClients() {
  try {
    const response = await getClients({
      nom: searchTerm.value,
      fields: 'id,nom,adresse,ville,tel',
    })
    clients.value = response.datas
  } catch (error) {
    console.error('Erreur chargement clients:', error)
    clients.value = []
  }
}

fetchClients()
</script>
