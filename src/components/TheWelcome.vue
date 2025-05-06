<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const url = ref('')
const isLoading = ref(false)

const increment = async () => {
  isLoading.value = true
  count.value++
  setTimeout(async () => {
    url.value = await fetchUrl()
    isLoading.value = false
  }, 500)
}

const fetchUrl = async () => {
  const response = await fetch(
    `https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=${count.value}`,
  )
  const data = await response.json()
  return data.results[count.value - 1].media[0].gif.url
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
        @click="increment"
      >
        Click me! {{ count }}
      </button>
    </div>
    <div
      class="rounded-3xl overflow-hidden transition-opacity aspect-square w-full xl:w-[55%] bg-gray-200"
      :class="{
        'bg-gray-400': !url,
      }"
    >
      <div
        v-if="!url"
        class="flex items-center justify-center w-full h-full bg-gray-400 text-gray-600 text-7xl font-bold"
      >
        GIF
      </div>
      <img
        v-if="url"
        class="w-full h-full transition-opacity duration-500"
        :src="url"
        alt="API consumption"
        :class="{
          'opacity-0': isLoading,
          'opacity-100': !isLoading,
        }"
      />
    </div>
  </div>
</template>
