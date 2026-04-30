<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-stone-100 dark:bg-stone-800 py-20 px-6 text-center">
      <h2 class="text-5xl font-bold text-stone-800 dark:text-white mb-4">Modern Furniture</h2>
      <p class="text-stone-500 dark:text-stone-300 text-lg mb-8">Discover beautiful pieces for your home</p>
      <RouterLink
        to="/products"
        class="bg-stone-800 dark:bg-white dark:text-stone-800 text-white px-8 py-3 rounded-full hover:bg-stone-700 transition"
      >
        Shop Now
      </RouterLink>
    </section>

    <!-- Featured Products -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <h2 class="text-3xl font-bold text-stone-800 dark:text-white mb-8">Featured Products</h2>
      <div v-if="loading" class="text-center text-stone-400 py-20">Loading...</div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in featured"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'
import type { Product, ProductsResponse } from '@/types'

const featured = ref<Product[]>([])
const loading = ref(true)

onMounted(async () => {
  const res = await fetch('https://dummyjson.com/products?limit=8')
  const data: ProductsResponse = await res.json()
  featured.value = data.products
  loading.value = false
})
</script>
