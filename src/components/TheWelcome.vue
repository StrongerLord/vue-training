<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>
<template>
  <div class="flex flex-col md:w-[20%] m-10 text-2xl space-y-3 w-[80%]">
    <h1 class="">Welcome to the app!</h1>
    <p>This is a simple Vue.js application.</p>
    <p>This is a counter app but using vue!</p>
    <button
      class="bg-blue-950 text-white p-2 rounded-2xl hover:bg-blue-800 transition"
      @click="increment"
    >
      Click me! {{ count }}
    </button>
  </div>
</template>
