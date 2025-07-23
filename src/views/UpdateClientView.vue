<template>
  <div class="p-6 max-w-md mx-auto space-y-4">
    <h1 class="text-xl font-bold">Mettre à jour un client</h1>

    <input v-model="form.nom" placeholder="Nom" class="input" />
    <input v-model="form.ville" placeholder="Ville" class="input" />
    <input v-model="form.email" placeholder="Email" class="input" />
    <input v-model="form.tel" placeholder="Téléphone" class="input" />

    <button @click="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
      Mettre à jour
    </button>

    <p v-if="message" class="text-green-600 mt-2">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { updateClient } from '@/services/client/clientService'
import type { ClientUpdate } from '@/models/client'

const clientId = 'C-00005'

const form = ref<ClientUpdate>({
  nom: '',
  ville: '',
  email: '',
  tel: ''
})

const message = ref('')

async function submit() {
  try {
    await updateClient(clientId, form.value)
    console.log(updateClient)
    message.value = 'Client mis à jour avec succès !'
  } catch (error) {
    console.error('Erreur update client :', error)
    message.value = 'Erreur lors de la mise à jour'
  }
}
</script>

<style scoped>

</style>
