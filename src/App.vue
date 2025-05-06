<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-full flex flex-row h-16 bg-green-200 items-center px-4 space-x-4">
    <img alt="Vue logo" class="w-8" src="@/assets/logo.svg" />
    <RouterLink to="/" class="hover:bg-green-900 hover:text-white transition-colors"
      >Random Gif</RouterLink
    >
    <RouterLink to="/forms" class="hover:bg-green-900 hover:text-white transition-colors"
      >Forms</RouterLink
    >
    <RouterLink to="/sockets" class="hover:bg-green-900 hover:text-white transition-colors"
      >Sockets</RouterLink
    >
    <RouterLink to="/canvas" class="hover:bg-green-900 hover:text-white transition-colors"
      >Canvas</RouterLink
    >
    <RouterLink to="/media" class="hover:bg-green-900 hover:text-white transition-colors"
      >Media</RouterLink
    >
  </header>
  <div class="bg-green-300 min-w-full h-[calc(100dvh-4rem)] flex text-green-900">
    <RouterView />
  </div>
</template>
