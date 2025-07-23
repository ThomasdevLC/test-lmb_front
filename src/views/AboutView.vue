<template>
  <div class="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-semibold text-gray-800">Client Info</h2>
      <User class="w-6 h-6 text-gray-500" />
    </div>

    <div>
      <p class="text-sm text-gray-500">Nom:</p>
      <p class="text-lg text-gray-800 font-medium">{{ client.nom }}</p>
    </div>

    <div>
      <p class="text-sm text-gray-500">Email:</p>
      <p class="text-lg text-gray-800">{{ client.email }}</p>
    </div>

    <button
      class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition"
      @click="handleClick"
    >
      <Pencil class="w-5 h-5" />
      Modifier
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { User, Pencil } from 'lucide-vue-next'

const client = ref({
  nom: 'Jean Dupont',
  email: 'jean.dupont@example.com'
})

function handleClick() {
  alert(`Modifier ${client.value.nom}`)
}
</script>
