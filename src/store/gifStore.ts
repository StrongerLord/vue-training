import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useGifStore = defineStore('gif', () => {
  const gif = ref('')
  const count = ref(0)
  const isLoading = ref(false)

  watch([count], async () => {
    if (count.value > 0) {
      isLoading.value = true
      await fetch(`https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=${count.value}`)
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => {
            gif.value = data.results[count.value - 1].media[0].gif.url
            isLoading.value = false
          }, 500)
        })
    } else {
      gif.value = ''
    }
  })

  const increment = async () => {
    count.value++
  }

  return { gif, count, isLoading, increment }
})
