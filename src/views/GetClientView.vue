<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Détail du client</h1>

    <div v-if="client">
      <p><strong>ID :</strong> {{ client.id }}</p>
      <p><strong>Nom :</strong> {{ client.nom }}</p>
      <p><strong>Adresse :</strong> {{ client.adresse }}</p>
      <p><strong>Ville :</strong> {{ client.ville }}</p>
      <p><strong>Téléphone :</strong> {{ client.tel }}</p>
    </div>

    <div v-else>
      <p class="text-gray-500">Chargement...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getClientById } from '@/services/client/clientService'
import type { Client } from '@/models/client'

const clientId = 'C-00005'

const client = ref<Client | null>(null)

onMounted(async () => {
  try {
    const response = await getClientById(clientId)
    client.value = response.datas
  } catch (error) {
    console.error('Erreur lors du chargement du client :', error)
  }
})
</script>
