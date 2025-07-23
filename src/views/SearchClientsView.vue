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

    <div class="overflow-x-auto">
      <table class="w-full table-auto border-collapse mt-4">
        <thead>
        <tr class="bg-gray-100">
          <th class="border p-2 text-left">Nom</th>
          <th class="border p-2 text-left">Adresse</th>
          <th class="border p-2 text-left">Ville</th>
          <th class="border p-2 text-left">Téléphone</th>
          <th class="border p-2 text-left">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="client in clients"
          :key="client.id"
          class="bg-white hover:bg-gray-50"
        >
          <td class="border p-2">{{ client.nom }}</td>
          <td class="border p-2">{{ client.adresse }}</td>
          <td class="border p-2">{{ client.ville }}</td>
          <td class="border p-2">{{ client.tel }}</td>
          <td class="border p-2">
            <button
              class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              @click="seeClient(client)"
            >
              Voir
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getClients } from '@/services/client/clientService'
import { useRouter } from 'vue-router'
import type { Client } from '@/models/client'

const router = useRouter()
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

function seeClient(client: Client) {
  router.push({ name: 'client-details', params: { id: client.id } })
}

fetchClients()
</script>
