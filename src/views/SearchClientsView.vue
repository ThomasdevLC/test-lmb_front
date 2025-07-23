<template>
  <div class="p-6 space-y-4">
    <div>
      <h1 class="text-XL font-medium px-1 py-2 border border-border">
        Recherche d'une fiche de contact
      </h1>
    </div>

    <div class="text-sm font-bold py-4 border border-border">
      <div class="flex justify-center">
        <div class="w-1/3 flex flex-col items-start space-y-2">
          <p>Renseigner un nom ou une dénomination</p>

          <input
            v-model="searchTerm"
            type="text"
            placeholder="Nom ou dénomination"
            class="w-full p-2 border rounded"
          />

          <button
            @click="fetchClients"
            class="cursor-pointer self-end bg-primary  text-white px-4 py-2 rounded hover:bg-primary-700"          >
            Rechercher
          </button>
        </div>
      </div>
    </div>


    <div class="overflow-x-auto">
      <table class="w-full table-auto border-separate border border-gray-300 mt-4" style="border-spacing: 0">
        <thead>
        <tr class="bg-gray-100">
          <th class="p-2 text-left">Nom</th>
          <th class="p-2 text-left">Adresse</th>
          <th class="p-2 text-left">Ville</th>
          <th class="p-2 text-left">Téléphone</th>
          <th class="p-2 text-left">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="client in clients"
          :key="client.id"
          class="bg-white hover:bg-gray-50"
        >
          <td class="p-2">{{ client.nom }}</td>
          <td class="p-2">{{ client.adresse }}</td>
          <td class="p-2">{{ client.ville }}</td>
          <td class="p-2">{{ client.tel }}</td>
          <td class="p-2">
            <button
              class="cursor-pointer flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded-2xl hover:bg-secondary"
              @click="seeClient(client)"
            >
              <Search class="w-4 h-4" />
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
import { Search } from 'lucide-vue-next'

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
