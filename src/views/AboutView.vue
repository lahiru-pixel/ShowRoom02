<template>
  <div>
    <!-- Hero -->
    <section class="bg-stone-100 py-20 px-6 text-center">
      <h2 class="text-5xl font-bold text-stone-800 mb-4">About ShowRoom</h2>
      <p class="text-stone-500 text-lg max-w-2xl mx-auto">
        We are passionate about bringing beautiful, modern furniture to every home.
        Our curated collection combines style, comfort, and quality.
      </p>
    </section>

    <!-- Values -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <h3 class="text-3xl font-bold text-stone-800 text-center mb-12">Our Values</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="value in values"
          :key="value.title"
          class="text-center p-8 bg-stone-50 rounded-2xl"
        >
          <div class="text-5xl mb-4">{{ value.icon }}</div>
          <h4 class="text-xl font-bold text-stone-800 mb-2">{{ value.title }}</h4>
          <p class="text-stone-500">{{ value.description }}</p>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="bg-stone-100 py-16 px-6">
      <div class="max-w-7xl mx-auto">
        <h3 class="text-3xl font-bold text-stone-800 text-center mb-12">Our Team</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in team"
            :key="member.name"
            class="bg-white rounded-2xl p-6 text-center shadow-sm"
          >
            <div class="text-6xl mb-4">{{ member.avatar }}</div>
            <h4 class="text-xl font-bold text-stone-800">{{ member.name }}</h4>
            <p class="text-stone-500 mt-1">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const values = [
  {
    icon: '🛋️',
    title: 'Quality First',
    description: 'Every piece in our collection is carefully selected for durability and craftsmanship.'
  },
  {
    icon: '🌿',
    title: 'Sustainability',
    description: 'We source materials responsibly and work with eco-conscious manufacturers.'
  },
  {
    icon: '💡',
    title: 'Modern Design',
    description: 'Our team curates the latest trends to keep your home looking fresh and modern.'
  }
]

const team = [
  { avatar: '👨‍💼', name: 'Lahiru Sandaruwan', role: 'Founder & CEO' },
  { avatar: '👩‍🎨', name: 'Ishani Jayawardhana', role: 'Head of Design' },
  { avatar: '👨‍💻', name: 'Ashan Dinushka', role: 'Product Manager' }
]
</script>
