<template>
  <div class="min-h-screen bg-white">
    <!-- Navbar -->
    <nav class="fixed top-0 w-full bg-white shadow-md z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-stone-800 tracking-widest">EG 5690</h1>
        <ul class="hidden md:flex gap-8 text-stone-600 font-medium">
          <li><RouterLink to="/" class="hover:text-stone-900">Home</RouterLink></li>
          <li><RouterLink to="/products" class="hover:text-stone-900">Products</RouterLink></li>
          <li><RouterLink to="/about" class="hover:text-stone-900">About</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-stone-900">Contact</RouterLink></li>
        </ul>
        <button @click="menuOpen = !menuOpen" class="md:hidden text-stone-800 text-2xl">☰</button>
      </div>
      <div v-if="menuOpen" class="md:hidden bg-white px-6 pb-4 flex flex-col gap-4 text-stone-600 font-medium">
        <RouterLink to="/" @click="menuOpen=false">Home</RouterLink>
        <RouterLink to="/products" @click="menuOpen=false">Products</RouterLink>
        <RouterLink to="/about" @click="menuOpen=false">About</RouterLink>
        <RouterLink to="/contact" @click="menuOpen=false">Contact</RouterLink>
      </div>
    </nav>

    <main class="pt-20">
      <RouterView />
    </main>

    <footer class="bg-stone-800 text-stone-300 text-center py-6 mt-10">
      <p>© 2026 ShowRoom. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
const menuOpen = ref(false)
</script>
