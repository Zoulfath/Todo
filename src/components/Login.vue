<template>
  <MouseFollower />
  <div
    class="flex items-center justify-center w-1/2 rounded-2xl max-w-sm backdrop-blur-2xl bg-gradient-to-b from-sky-100 to-white"
  >
    <div class="border border-red-500 rounded-xl p-8 w-full">
      <!-- Icon and Title -->
      <div class="flex justify-center mb-6">
        <div class="bg-gray-200 px-3 py-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
            />
          </svg>
        </div>
      </div>
      <h2 class="text-center text-2xl font-semibold text-gray-800 mb-2 tracking-wider">
        Se connecter
      </h2>
      <p class="text-center text-gray-400 text-sm mb-8">
        Connectez vous et gérez vos tâches dès maintenant
      </p>

      <div
        v-if="error"
        class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span class="font-medium">Invalid Credentials!</span>
      </div>
      <!-- Form -->
      <form @submit.prevent="onSubmit">
        <div class="mb-4 relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <input
            v-model="email"
            type="email"
            id="email"
            placeholder="Email"
            class="w-full pl-10 text-gray-500 text-sm px-4 py-2 bg-gray-100 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <div class="mb-8">
          <label for="password" class="sr-only">Password</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              id="password"
              placeholder="Password"
              class="w-full pl-10 text-gray-500 text-sm px-4 py-2 bg-gray-100 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            />
            <button
              type="button"
              @click="togglePassword"
              class="absolute inset-y-0 right-4 text-gray-500 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                :class="showPassword ? 'hidden' : 'block'"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.2 9.5a5.8 5.8 0 019.6 0A5.8 5.8 0 015.2 9.5z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                :class="showPassword ? 'block' : 'hidden'"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Get Started Button -->
        <button
          type="submit"
          class="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 mb-2"
        >
          Se connecter
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { useAuthStore } from '@/stores/auth.store'
const email = ref('')
const password = ref('')
const error = ref(false)
const showPassword = ref(false)

const onSubmit = async () => {
  try {
    error.value = false
    const authStore = useAuthStore()
    console.log(authStore)

    await authStore.login(email.value, password.value)
  } catch (e) {
    error.value = true
    console.log(e, 'error', error)
  }
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<style scoped></style>
