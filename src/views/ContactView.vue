<template>
  <div class="max-w-4xl mx-auto px-6 py-16">
    <h2 class="text-4xl font-bold text-stone-800 mb-2 text-center">Contact Us</h2>
    <p class="text-stone-500 text-center mb-12">We'd love to hear from you!</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div class="bg-stone-50 p-8 rounded-2xl">
        <div class="flex flex-col gap-4">
          <div>
            <label class="text-stone-700 font-medium block mb-1">Name</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Your name"
              class="w-full border border-stone-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>
          <div>
            <label class="text-stone-700 font-medium block mb-1">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="your@email.com"
              class="w-full border border-stone-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>
          <div>
            <label class="text-stone-700 font-medium block mb-1">Message</label>
            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Your message..."
              class="w-full border border-stone-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>
          <button
            @click="submitForm"
            class="bg-stone-800 text-white py-3 rounded-full hover:bg-stone-700 transition font-medium"
          >
            Send Message
          </button>
          <p v-if="submitted" class="text-green-600 text-center font-medium">
            ✅ Message sent successfully!
          </p>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="flex flex-col gap-6 justify-center">
        <div v-for="info in contactInfo" :key="info.label" class="flex items-start gap-4">
          <span class="text-3xl">{{ info.icon }}</span>
          <div>
            <h4 class="font-bold text-stone-800">{{ info.label }}</h4>
            <p class="text-stone-500">{{ info.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const contactInfo = [
  { icon: '📍', label: 'Address', value: '123 Design Street, Colombo, Sri Lanka' },
  { icon: '📞', label: 'Phone', value: '+94 11 234 5678' },
  { icon: '📧', label: 'Email', value: 'hello@showroom.lk' },
  { icon: '🕐', label: 'Hours', value: 'Mon-Sat: 9AM - 6PM' }
]

const submitForm = () => {
  if (form.name && form.email && form.message) {
    submitted.value = true
    form.name = ''
    form.email = ''
    form.message = ''
  } else {
    alert('Please fill in all fields!')
  }
}
</script>
