import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useGifStore = defineStore('gif', () => {
  const gif = ref('')
  const count = ref(0)
  const isLoading = ref(false)

  watch([count], async () => {
    if (count.value > 0) {
      await fetch(`https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=${count.value}`)
        .then((response) => response.json())
        .then((data) => (gif.value = data.results[count.value - 1].media[0].gif.url))
    } else {
      gif.value = ''
    }
  })

  const increment = async () => {
    isLoading.value = true
    count.value++
    await new Promise((resolve) => setTimeout(resolve, 500))
    isLoading.value = false
  }

  return { gif, count, isLoading, increment }
})
