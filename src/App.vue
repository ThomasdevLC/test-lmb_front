<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>
