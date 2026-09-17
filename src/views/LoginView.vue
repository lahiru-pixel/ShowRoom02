<template>
  <div class="max-w-md mx-auto px-6 py-20">
    <div class="bg-stone-50 dark:bg-stone-800 p-8 rounded-3xl shadow-sm">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-stone-800 dark:text-white mb-2">Welcome Back</h2>
        <p class="text-stone-500 dark:text-stone-400">Please enter your details to sign in.</p>
      </div>

      <form @submit.prevent="handleLogin" class="flex flex-col gap-5">
        <div>
          <label class="text-stone-700 dark:text-stone-300 font-medium block mb-1.5">Email</label>
          <input
            v-model="email"
            type="email"
            required
            placeholder="your@email.com"
            class="w-full border border-stone-300 dark:border-stone-600 dark:bg-stone-700 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-400"
          />
        </div>
        
        <div>
          <label class="text-stone-700 dark:text-stone-300 font-medium block mb-1.5">Password</label>
          <input
            v-model="password"
            type="password"
            required
            placeholder="••••••••"
            class="w-full border border-stone-300 dark:border-stone-600 dark:bg-stone-700 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-400"
          />
        </div>

        <div class="flex justify-between items-center text-sm mt-1">
          <label class="flex items-center gap-2 text-stone-600 dark:text-stone-400 cursor-pointer">
            <input type="checkbox" class="rounded text-stone-800 focus:ring-stone-800" />
            Remember me
          </label>
          <a href="#" class="text-stone-800 dark:text-stone-300 font-medium hover:underline">Forgot password?</a>
        </div>

        <button
          type="submit"
          class="mt-4 w-full bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-900 py-3 rounded-xl text-lg font-medium hover:bg-stone-700 dark:hover:bg-white transition"
        >
          Sign In
        </button>
      </form>

      <p class="text-center text-stone-500 dark:text-stone-400 mt-8">
        Don't have an account? 
        <a href="#" class="text-stone-800 dark:text-stone-300 font-medium hover:underline">Sign up</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const handleLogin = () => {
  // Mock login behavior
  if (email.value && password.value) {
    alert(`Logged in successfully as ${email.value}!`)
    // Redirect to home
    router.push('/')
  }
}
</script>
