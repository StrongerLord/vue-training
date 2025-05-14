<script setup lang="ts">
import { useGifStore } from '@/store/gifStore'
const store = useGifStore()

const handleClick = () => {
  store.increment()
}
</script>
<template>
  <div
    class="p-[10%] text-2xl w-full flex flex-col xl:flex-row items-center xl:justify-center xl:space-x-32"
  >
    <div class="flex flex-col items-center space-y-3 mb-3 xl:w-[30%]">
      <h1 class="">Welcome to the app!</h1>
      <p>This is a simple Vue.js application.</p>
      <p>This is a counter app but using vue!</p>
      <button
        class="bg-blue-950 text-white p-4 rounded-2xl hover:bg-blue-800 transition"
        @click="handleClick"
      >
        Click me! {{ store.count }}
      </button>
    </div>
    <div
      class="rounded-3xl overflow-hidden transition-opacity aspect-square w-full xl:w-[55%] bg-gray-200"
      :class="{
        'bg-gray-400': !store.gif,
      }"
    >
      <div
        v-if="!store.gif"
        class="flex items-center justify-center w-full h-full bg-gray-400 text-gray-600 text-7xl font-bold"
      >
        GIF
      </div>
      <img
        v-if="store.gif"
        class="w-full h-full transition-opacity duration-500"
        :src="store.gif"
        alt="API consumption"
        :class="{
          'opacity-0': store.isLoading,
          'opacity-100': !store.isLoading,
        }"
      />
    </div>
  </div>
</template>
