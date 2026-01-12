<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 text-white py-32 md:py-40 px-6 text-center overflow-hidden">
      <!-- Pattern Overlay -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;);"></div>
      </div>

      <div class="relative z-10 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold mb-4 tracking-tight animate-fade-in-up">
          Brian Redlich
        </h1>
        <p class="text-xl md:text-2xl mb-2 opacity-95 animate-fade-in-up-delay-1">
          Real Estate Agent | Real Brokerage
        </p>
        <p class="text-lg md:text-xl mb-10 opacity-90 animate-fade-in-up-delay-2">
          Your trusted partner in finding the perfect home
        </p>
        <a
          href="#contact"
          class="inline-block px-10 py-4 bg-white text-gray-800 font-semibold text-lg rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl animate-fade-in-up-delay-3"
        >
          Get In Touch
        </a>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-24 bg-white px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Why Work With Me
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <!-- Service Card 1 -->
          <div class="bg-white p-10 rounded-xl text-center border-2 border-gray-200 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 transition-all duration-300">
            <div class="text-5xl mb-6">🏡</div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-800">Local Expertise</h3>
            <p class="text-gray-600 leading-relaxed">Deep knowledge of the local real estate market and neighborhoods</p>
          </div>

          <!-- Service Card 2 -->
          <div class="bg-white p-10 rounded-xl text-center border-2 border-gray-200 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 transition-all duration-300">
            <div class="text-5xl mb-6">🤝</div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-800">Personalized Service</h3>
            <p class="text-gray-600 leading-relaxed">Dedicated support throughout your entire buying or selling journey</p>
          </div>

          <!-- Service Card 3 -->
          <div class="bg-white p-10 rounded-xl text-center border-2 border-gray-200 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 transition-all duration-300">
            <div class="text-5xl mb-6">💼</div>
            <h3 class="text-2xl font-semibold mb-4 text-gray-800">Professional Network</h3>
            <p class="text-gray-600 leading-relaxed">Access to trusted professionals including inspectors, lenders, and contractors</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 bg-gradient-to-b from-white to-gray-100 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
          Let's Connect
        </h2>
        <p class="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Ready to take the next step? Send me a message and I'll get back to you shortly.
        </p>

        <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto bg-white p-12 rounded-2xl shadow-lg">
          <!-- Name Field -->
          <div class="mb-6">
            <label for="name" class="block mb-2 font-medium text-gray-800">Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              required
              placeholder="Your name"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
            >
          </div>

          <!-- Email Field -->
          <div class="mb-6">
            <label for="email" class="block mb-2 font-medium text-gray-800">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              placeholder="your@email.com"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
            >
          </div>

          <!-- Phone Field -->
          <div class="mb-6">
            <label for="phone" class="block mb-2 font-medium text-gray-800">Phone (Optional)</label>
            <input
              type="tel"
              id="phone"
              v-model="formData.phone"
              placeholder="(555) 555-5555"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
            >
          </div>

          <!-- Message Field -->
          <div class="mb-6">
            <label for="message" class="block mb-2 font-medium text-gray-800">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              required
              rows="5"
              placeholder="Tell me about your real estate needs..."
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base resize-y min-h-[120px] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-lg font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>

          <!-- Success/Error Message -->
          <div
            v-if="submitMessage"
            :class="[
              'mt-6 p-4 rounded-lg text-center font-medium',
              submitStatus === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'
            ]"
          >
            {{ submitMessage }}
          </div>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8 px-6 text-center mt-auto">
      <div class="max-w-6xl mx-auto">
        <p class="opacity-90">&copy; {{ currentYear }} Brian Redlich. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { supabase, isSupabaseConfigured } from './lib/supabase'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref('')
const agentId = ref(null)

const currentYear = computed(() => new Date().getFullYear())

// Get Brian's agent ID on component mount (only if Supabase is configured)
onMounted(async () => {
  if (!isSupabaseConfigured) {
    console.warn('Supabase not configured. Form submissions will not be saved.')
    return
  }

  try {
    const { data, error } = await supabase
      .from('agents')
      .select('id')
      .eq('name', 'Brian Redlich')
      .single()

    if (error) throw error
    agentId.value = data.id
  } catch (error) {
    console.error('Error fetching agent:', error)
  }
})

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    // If Supabase is configured, save to database
    if (isSupabaseConfigured) {
      if (!agentId.value) {
        throw new Error('Agent configuration not found')
      }

      const { error } = await supabase
        .from('form_submissions')
        .insert([
          {
            agent_id: agentId.value,
            name: formData.value.name,
            email: formData.value.email,
            phone: formData.value.phone || null,
            message: formData.value.message
          }
        ])

      if (error) throw error
    } else {
      // Fallback: Just log to console if Supabase isn't configured
      console.log('Form submission (Supabase not configured):', formData.value)
      await new Promise(resolve => setTimeout(resolve, 1000))
    }

    submitMessage.value = 'Thank you for reaching out! I\'ll get back to you soon.'
    submitStatus.value = 'success'

    // Reset form
    formData.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  } catch (error) {
    console.error('Form submission error:', error)
    submitMessage.value = 'Sorry, something went wrong. Please try again or email me directly.'
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>
