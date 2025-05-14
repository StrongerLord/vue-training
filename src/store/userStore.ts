import type { User } from '@/types/User'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    email: '',
    name: '',
    family_name: '',
    given_name: '',
    picture: '',
    id: '',
  })
  const isLoggedIn = ref(false)

  const setUser = (userData: User, loggedIn: boolean) => {
    user.value.email = userData.email
    user.value.name = userData.name
    user.value.family_name = userData.family_name
    user.value.given_name = userData.given_name
    user.value.picture = userData.picture
    user.value.id = userData.id
    isLoggedIn.value = loggedIn
  }

  return { user, isLoggedIn, setUser }
})
