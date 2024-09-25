import { defineStore } from 'pinia'

import { fetchWrapper } from '../lib/fetchWrapper'
import router from '@/router'

const baseUrl = `${import.meta.env.VITE_API_URL}`

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    jwt: localStorage.getItem('jwt') || ''
  }),
  actions: {
    async login(username: string, password: string) {
      try {
        const body = new URLSearchParams({
          username,
          password
        })
        const user = await fetchWrapper.post(`/api/login`, body)

        this.jwt = user.access_token

        localStorage.setItem('jwt', user.access_token)

        router.push('/dashboard')
      } catch (e) {
        throw new Error('Error: ' + e)
      }
    },
    logout() {
      this.jwt = ''
      localStorage.removeItem('jwt')
      router.push('/login')
    }
  }
})
