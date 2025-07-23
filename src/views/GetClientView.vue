<template>
  <div class="p-6">
    <div v-if="client" class="px-1 py-2 border border-border flex justify-between items-center">
      <p class="text-2xl">{{ client.nom }}</p>

      <button @click="goToEdit" class="cursor-pointer flex items-center gap-2  text-white px-4 py-2 rounded bg-primary">
        <Settings class="w-4 h-4" />
        Éditer
      </button>
    </div>


    <div  class=" px-1 py-2 border border-border mt-2"  v-if="client">
      <p class="items-start text-xl  border-b">Informations</p>
      <div  class="flex justify-center mt-2">
        <table class="table-auto">
          <tbody>
          <tr>
            <td class="py-1 pr-4 font-semibold text-right border-r border-gray-300">
              Prénom & Nom :
            </td>
            <td class="py-1 pl-4">{{ client.nom }}</td>
          </tr>
          <tr>
            <td class="py-1 pr-4 font-semibold text-right border-r border-gray-300">
              Téléphone :
            </td>
            <td class="py-1 pl-4">{{ client.tel }}</td>
          </tr>
          <tr>
            <td class="py-1 pr-4 font-semibold text-right border-r border-gray-300">
              Email :
            </td>
            <td class="py-1 pl-4">{{ client.email }}</td>
          </tr>
          <tr>
            <td class="py-1 pr-4 font-semibold text-right border-r border-gray-300 align-top">
              Adresse :
            </td>
            <td class="py-1 pl-4">
              {{ client.adresse }}<br />
              {{ client.code_postal }} {{ client.ville }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      </div>


    <div v-else>
      <p class="text-gray-500">Chargement...</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getClientById } from '@/services/client/clientService'
import type { Client } from '@/models/client'
import { Settings } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const clientId = route.params.id as string

const client = ref<Client | null>(null)

function goToEdit() {
  router.push({ name: 'edit-client', params: { id: clientId } })
}

onMounted(async () => {
  try {
    const response = await getClientById(clientId)
    client.value = response.datas
  } catch (error) {
    console.error('Error loading client:', error)
  }
})
</script>
