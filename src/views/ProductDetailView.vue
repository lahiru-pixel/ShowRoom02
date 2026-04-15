<template>
  <div class="max-w-5xl mx-auto px-6 py-10">
    <!-- Loading -->
    <div v-if="loading" class="text-center text-stone-400 py-20 text-xl">
      Loading product...
    </div>

    <!-- Product Detail -->
    <div v-else-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Images -->
      <div>
        <img
          :src="selectedImage"
          :alt="product.title"
          class="w-full h-80 object-cover rounded-2xl shadow-md"
        />
        <div class="flex gap-3 mt-4 overflow-x-auto">
          <img
            v-for="img in product.images"
            :key="img"
            :src="img"
            @click="selectedImage = img"
            class="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 hover:border-stone-800 transition"
            :class="selectedImage === img ? 'border-stone-800' : 'border-transparent'"
          />
        </div>
      </div>

      <!-- Info -->
      <div>
        <span class="text-sm text-stone-400 uppercase tracking-wider">{{ product.category }}</span>
        <h1 class="text-3xl font-bold text-stone-800 mt-2">{{ product.title }}</h1>
        <p class="text-stone-500 mt-4 leading-relaxed">{{ product.description }}</p>

        <div class="flex items-center gap-4 mt-6">
          <span class="text-4xl font-bold text-stone-800">${{ product.price }}</span>
          <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            {{ product.discountPercentage }}% OFF
          </span>
        </div>

        <div class="flex gap-6 mt-4 text-stone-500 text-sm">
          <span>⭐ {{ product.rating }} Rating</span>
          <span>📦 {{ product.stock }} in stock</span>
          <span>🏷️ {{ product.brand }}</span>
        </div>

        <button
          @click="addToCart"
          class="mt-8 w-full bg-stone-800 text-white py-3 rounded-full text-lg font-medium hover:bg-stone-700 transition"
        >
          Add to Cart
        </button>

        <button
          @click="$router.back()"
          class="mt-3 w-full border border-stone-300 text-stone-600 py-3 rounded-full text-lg hover:bg-stone-50 transition"
        >
          ← Go Back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/types'

const route = useRoute()
const cartStore = useCartStore()

const product = ref<Product | null>(null)
const selectedImage = ref('')
const loading = ref(true)

onMounted(async () => {
  const id = route.params.id
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  product.value = await res.json()
  selectedImage.value = product.value?.thumbnail || ''
  loading.value = false
})

const addToCart = () => {
  if (product.value) {
    cartStore.addItem(product.value)
    alert(`${product.value.title} added to cart!`)
  }
}
</script>
