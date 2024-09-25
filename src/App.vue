<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MouseFollower from './components/MouseFollower.vue'
</script>

<template>
  <div class="min-h-screen">
    <MouseFollower />
    <RouterView />
  </div>
</template>
