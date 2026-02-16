<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-20 md:py-28 px-6 overflow-hidden">
      <!-- Pattern Overlay -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;);"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <!-- Profile Image -->
        <div class="flex-shrink-0">
          <img
            src="/br-profile.jpg"
            :alt="content.hero.name"
            class="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl"
          >
        </div>

        <!-- Hero Text -->
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            {{ content.hero.name }}
          </h1>
          <p class="text-xl md:text-2xl mb-6 text-emerald-400 font-medium">
            {{ content.hero.subtitle }}
          </p>
          <p class="text-lg md:text-xl mb-8 opacity-90 leading-relaxed max-w-2xl">
            {{ content.hero.bio }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              class="inline-block px-8 py-4 bg-emerald-500 text-white font-semibold text-lg rounded-lg hover:bg-emerald-600 hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              {{ content.hero.ctaText }}
            </a>
            <a
              href="#family"
              class="inline-block px-8 py-4 bg-white/10 text-white font-semibold text-lg rounded-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 border border-white/20"
            >
              {{ content.hero.secondaryCtaText }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-white px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
          {{ content.about.heading }}
        </h2>
        <p class="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          {{ content.about.description }}
        </p>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div v-for="stat in content.stats" :key="stat.label" class="bg-slate-50 p-8 rounded-xl text-center border border-slate-200">
            <div class="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">{{ stat.value }}</div>
            <p class="text-gray-600 font-medium">{{ stat.label }}</p>
          </div>
        </div>

        <!-- Bio Text -->
        <div class="max-w-4xl mx-auto bg-gradient-to-br from-slate-800 to-slate-700 text-white p-10 md:p-12 rounded-2xl shadow-xl">
          <p class="text-lg leading-relaxed mb-6">
            {{ content.about.bioParagraph1 }}
          </p>
          <p class="text-lg leading-relaxed">
            {{ content.about.bioParagraph2 }} <span class="text-emerald-400 font-medium">{{ content.about.bioHighlight }}</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Brokerage Slides Carousel -->
    <section v-if="content.brokerageSlides.length" class="py-20 bg-gradient-to-br from-slate-800 to-slate-700 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          The Brokerage
        </h2>
        <p class="text-center text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
          See what makes Real Brokerage stand out.
        </p>

        <Swiper
          :modules="[Navigation, Pagination]"
          :navigation="true"
          :pagination="{ clickable: true }"
          :loop="content.brokerageSlides.length > 1"
          :space-between="0"
          :slides-per-view="1"
          class="brokerage-carousel rounded-2xl overflow-hidden shadow-2xl"
        >
          <SwiperSlide v-for="(slide, i) in content.brokerageSlides" :key="i">
            <div class="relative">
              <img
                :src="urlFor(slide.image)?.width(1200).auto('format').url()"
                :alt="slide.title || `Slide ${i + 1}`"
                class="w-full h-auto object-contain bg-white"
              >
              <div v-if="slide.title" class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p class="text-white text-lg font-medium">{{ slide.title }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <!-- Real Estate Family Section -->
    <section id="family" class="py-20 bg-slate-50 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          The Real Estate Family
        </h2>
        <p class="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Proud to have mentored and worked alongside these talented real estate professionals.
        </p>

        <!-- Featured Teams -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            v-for="team in content.featuredTeams"
            :key="team.name"
            :href="team.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
          >
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">{{ team.name }}</h3>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </div>
            <p class="text-gray-600">{{ team.description }}</p>
          </a>
        </div>

        <!-- All Family Members -->
        <div class="bg-white p-8 md:p-10 rounded-xl border border-slate-200">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Family Members</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div v-for="member in content.familyMembers" :key="member" class="text-center py-3 px-2 rounded-lg bg-slate-50 text-gray-700 font-medium text-sm">
              {{ member }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 bg-gradient-to-b from-slate-50 to-gray-100 px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
          {{ content.contact.heading }}
        </h2>
        <p class="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          {{ content.contact.description }}
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
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all"
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
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all"
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
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all"
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
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-base resize-y min-h-[120px] focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-lg font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
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
        <p class="opacity-90">&copy; {{ currentYear }} {{ content.footer.copyrightName }}. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useSanityContent } from './composables/useSanityContent'
import { urlFor } from './lib/sanity'

const { content } = useSanityContent()

const WEB3FORMS_KEY = 'a7ac5dac-8e3f-4f9e-b93b-b5188ba5ed14'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref('')

const currentYear = computed(() => new Date().getFullYear())

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `New inquiry from ${formData.value.name}`,
        from_name: formData.value.name,
        name: formData.value.name,
        email: formData.value.email,
        phone: formData.value.phone || 'Not provided',
        message: formData.value.message
      })
    })

    const result = await response.json()
    if (!result.success) throw new Error(result.message)

    submitMessage.value = content.value.contact.successMessage
    submitStatus.value = 'success'

    formData.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  } catch (error) {
    console.error('Form submission error:', error)
    submitMessage.value = content.value.contact.errorMessage
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>
