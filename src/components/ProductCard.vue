<template>
  <div
    @click="$router.push(`/product/${product.id}`)"
    class="bg-white dark:bg-stone-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
  >
    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="w-full h-48 object-cover"
    />
    <div class="p-4">
      <span class="text-xs text-stone-400 uppercase tracking-wider">{{ product.category }}</span>
      <h3 class="text-stone-800 dark:text-white font-semibold text-lg mt-1 truncate">{{ product.title }}</h3>
      <p class="text-stone-500 dark:text-stone-400 text-sm mt-1 line-clamp-2">{{ product.description }}</p>
      <div class="flex justify-between items-center mt-4">
        <span class="text-xl font-bold text-stone-800 dark:text-white">${{ product.price }}</span>
        <span class="text-yellow-500 text-sm">⭐ {{ product.rating }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types'

defineProps<{
  product: Product
}>()
</script>
