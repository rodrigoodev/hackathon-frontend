import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
         token: '',
         user: null
    }),
    getters: {
        getToken(): string {
            return this.token
        }
    },
    actions: {
        updateToken(token: any){
            this.token = token
        }
      },
  })