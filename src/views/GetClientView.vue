<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Détails du client</h1>

    <div v-if="client">
      <p><strong>Nom complet :</strong> {{ client.nom }}</p>
      <p><strong>Téléphone :</strong> {{ client.tel }}</p>
      <p><strong>Email :</strong> {{ client.email }}</p>
      <p><strong>Adresse :</strong> {{ client.adresse }}</p>
    </div>

    <div v-else>
      <p class="text-gray-500">Chargement...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getClientById } from '@/services/client/clientService'
import type { Client } from '@/models/client'

const route = useRoute()
const clientId = route.params.id as string

const client = ref<Client | null>(null)

onMounted(async () => {
  try {
    const response = await getClientById(clientId)
    client.value = response.datas
  } catch (error) {
    console.error('Error loading client:', error)
  }
})
</script>
