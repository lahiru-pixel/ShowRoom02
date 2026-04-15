<template>
  <div class="max-w-7xl mx-auto px-6 py-10">
    <h2 class="text-3xl font-bold text-stone-800 mb-8">Our Products</h2>

    <!-- Search & Filter -->
    <div class="flex flex-col md:flex-row gap-4 mb-8">
      <input
        v-model="search"
        type="text"
        placeholder="Search products..."
        class="border border-stone-300 rounded-full px-5 py-2 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-stone-400"
      />
      <select
        v-model="selectedCategory"
        class="border border-stone-300 rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400"
      >
        <option value="">All Categories</option>
        <option v-for="cat in categories" :key="cat.slug" :value="cat.slug">
          {{ cat.name }}
        </option>
      </select>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="text-center text-stone-400 py-20 text-xl">
      Loading products...
    </div>

    <!-- No Results -->
    <div v-else-if="filteredProducts.length === 0" class="text-center text-stone-400 py-20 text-xl">
      No products found.
    </div>

    <!-- Products Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import type { Product, ProductsResponse, Category } from '@/types'

const products = ref<Product[]>([])
const categories = ref<Category[]>([])
const search = ref('')
const selectedCategory = ref('')
const loading = ref(true)

// Fetch all products
onMounted(async () => {
  const [productsRes, categoriesRes] = await Promise.all([
    fetch('https://dummyjson.com/products?limit=100'),
    fetch('https://dummyjson.com/products/categories')
  ])
  const productsData: ProductsResponse = await productsRes.json()
  const categoriesData: Category[] = await categoriesRes.json()

  products.value = productsData.products
  categories.value = categoriesData
  loading.value = false
})

// Filter products by search and category
const filteredProducts = computed(() => {
  return products.value.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.value.toLowerCase())
    const matchesCategory = selectedCategory.value === '' || p.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})
</script>
