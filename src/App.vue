<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {
  decodeCredential,
  GoogleSignInButton,
  idRevoke,
  type CredentialResponse,
} from 'vue3-google-signin'
import { useUserStore } from '@/store/userStore'
import type { User } from './types/User'

const userStore = useUserStore()

const handleLoginSuccess = (response: CredentialResponse) => {
  const { credential } = response
  const decodedCredential = decodeCredential(credential ? credential : '')
  userStore.setUser(decodedCredential as User, true)
}

const handleLogOut = () => {
  userStore.setUser(
    {
      email: '',
      name: '',
      family_name: '',
      given_name: '',
      picture: '',
      id: '',
    } as User,
    false,
  )
  const { google } = window
  if (google) {
    idRevoke(userStore.user.id)
  }
}
</script>

<template>
  <header class="w-full flex flex-row h-16 bg-green-200 items-center px-4 space-x-4">
    <div class="w-1/2 flex flex-row items-center space-x-4">
      <img
        alt="Vue logo"
        class="w-8"
        :src="userStore.isLoggedIn ? userStore.user.picture : 'logo.svg'"
      />
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
    </div>
    <div class="w-1/2 flex flex-row items-center justify-end space-x-4">
      <button class="hover:bg-green-900 hover:text-white transition-colors" @click="handleLogOut">
        Logout
      </button>
      <GoogleSignInButton @success="handleLoginSuccess" />
    </div>
  </header>
  <div class="bg-green-300 min-w-full h-[calc(100dvh-4rem)] flex text-green-900">
    <RouterView />
  </div>
</template>
