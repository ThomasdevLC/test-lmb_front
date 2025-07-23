<template>
  <div class="p-6 max-w-md mx-auto space-y-4">
    <h1 class="text-xl font-bold">Mettre à jour un client</h1>

    <div v-if="form">
      <input v-model="form.nom" placeholder="Nom" class="input w-full p-2 border rounded" />
      <input v-model="form.tel" placeholder="Téléphone" class="input w-full p-2 border rounded" />
      <input v-model="form.email" placeholder="Email" class="input w-full p-2 border rounded" />
      <input v-model="form.adresse" placeholder="Adresse" class="input w-full p-2 border rounded" />
      <input v-model="form.code_postal" placeholder="Code postal" class="input w-full p-2 border rounded" />
      <input v-model="form.ville" placeholder="Ville" class="input w-full p-2 border rounded" />

      <button @click="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Mettre à jour
      </button>

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
    message.value = 'informations mise à jour'

    setTimeout(() => {
      router.push({ name: 'home', })
    }, 1500)
  } catch (error) {
    console.error('Erreur lors de la mise à jour :', error)
    message.value = 'Erreur lors de la mise à jour du client.'
  }
}

</script>

<style scoped>
.input {
  display: block;
  margin-bottom: 1rem;
}
</style>
