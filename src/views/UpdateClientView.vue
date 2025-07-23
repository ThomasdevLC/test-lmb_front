<template>
  <div class="p-6 max-w-3xl mx-auto space-y-4">
    <div v-if="form" class="px-1 py-2 border border-border flex justify-between items-center">
      <p class="text-2xl">{{ form.nom }}</p>
    </div>

    <div v-if="form" class="px-1 py-4 border border-border">
      <p class="text-xl font-semibold border-b pb-2 mb-4">Édition</p>

      <div class="flex justify-center">
        <table class="table-auto">
          <tbody>
            <tr>
              <td class="py-1 pr-4 font-semibold text-right border-r border-gray-300">Nom :</td>
              <td class="py-1 pl-4">
                <input v-model="form.nom" placeholder="Nom" class="w-full p-2 border rounded" />
              </td>
            </tr>
            <tr>
              <td class="py-1 pr-4 font-semibold text-right border-r border-gray-300">
                Téléphone :
              </td>
              <td class="py-1 pl-4">
                <input
                  v-model="form.tel"
                  placeholder="Téléphone"
                  class="w-full p-2 border rounded"
                />
              </td>
            </tr>
            <tr>
              <td class="py-1 pr-4 font-semibold text-right border-r border-gray-300">Email :</td>
              <td class="py-1 pl-4">
                <input v-model="form.email" placeholder="Email" class="w-full p-2 border rounded" />
              </td>
            </tr>
            <tr>
              <td class="py-1 pr-4 font-semibold text-right border-r border-gray-300">Adresse :</td>
              <td class="py-1 pl-4">
                <input
                  v-model="form.adresse"
                  placeholder="Adresse"
                  class="w-full p-2 border rounded"
                />
              </td>
            </tr>
            <tr>
              <td class="py-1 pr-4 font-semibold text-right border-r border-gray-300">
                Code postal :
              </td>
              <td class="py-1 pl-4">
                <input
                  v-model="form.code_postal"
                  placeholder="Code postal"
                  class="w-full p-2 border rounded"
                />
              </td>
            </tr>
            <tr>
              <td class="py-1 pr-4 font-semibold text-right border-r border-gray-300">Ville :</td>
              <td class="py-1 pl-4">
                <input v-model="form.ville" placeholder="Ville" class="w-full p-2 border rounded" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-end mt-4">
        <div class="flex gap-2">
        <button @click="cancel" class="cursor-pointer  text-text-color px-4 py-2 rounded border bordr-border">
          Annuler
        </button>
        <button @click="submit" class="cursor-pointer bg-validate text-white px-4 py-2 rounded">
          Enregistrer
        </button>
        </div>
      </div>


      <p v-if="message" class="text-green-600 mt-2">{{ message }}</p>
    </div>

    <div v-else>
      <p class="text-gray-500">Chargement...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getClientById, updateClient } from '@/services/client/clientService'
import type { ClientUpdate } from '@/models/client'
import { validateClientForm } from '@/Utils/clientValidator.ts'

const route = useRoute()
const router = useRouter()
const clientId = route.params.id as string

const form = ref<ClientUpdate | null>(null)
const message = ref('')

onMounted(async () => {
  try {
    const response = await getClientById(clientId)
    form.value = {
      nom: response.datas.nom,
      tel: response.datas.tel,
      email: response.datas.email,
      adresse: response.datas.adresse,
      code_postal: response.datas.code_postal,
      ville: response.datas.ville,
    }
  } catch (error) {
    console.error('Erreur lors du chargement du client :', error)
  }
})

async function submit() {
  if (!form.value) return

  const error = validateClientForm(form.value)
  if (error) {
    message.value = error
    return
  }

  try {
    await updateClient(clientId, form.value)
    message.value = 'Informations mises à jour'

    setTimeout(() => {
      router.push({ name: 'home' })
    }, 1500)
  } catch (error) {
    console.error('Erreur lors de la mise à jour :', error)
    message.value = 'Erreur lors de la mise à jour du client.'
  }

}
  function cancel() {
    router.push({ name: 'home' })
  }
</script>
