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
            alt="Brian Redlich"
            class="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl"
          >
        </div>

        <!-- Hero Text -->
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Brian Redlich
          </h1>
          <p class="text-xl md:text-2xl mb-6 text-emerald-400 font-medium">
            Real Estate Agent | Real Brokerage
          </p>
          <p class="text-lg md:text-xl mb-8 opacity-90 leading-relaxed max-w-2xl">
            With over 20 years of real estate experience, I've built a successful business by sticking to old school principles: hard work, knowledge, and communication.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              class="inline-block px-8 py-4 bg-emerald-500 text-white font-semibold text-lg rounded-lg hover:bg-emerald-600 hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#family"
              class="inline-block px-8 py-4 bg-white/10 text-white font-semibold text-lg rounded-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 border border-white/20"
            >
              Meet the Family
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-white px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
          About Brian
        </h2>
        <p class="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          As a leading agent in the Milwaukee market, I've achieved top agent recognition and built a group of over 100 agents. I'm now recognized as an industry leader and mentor for real estate professionals.
        </p>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div class="bg-slate-50 p-8 rounded-xl text-center border border-slate-200">
            <div class="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">20+</div>
            <p class="text-gray-600 font-medium">Years Experience</p>
          </div>
          <div class="bg-slate-50 p-8 rounded-xl text-center border border-slate-200">
            <div class="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">1,000+</div>
            <p class="text-gray-600 font-medium">Transactions Closed</p>
          </div>
          <div class="bg-slate-50 p-8 rounded-xl text-center border border-slate-200">
            <div class="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">$200M</div>
            <p class="text-gray-600 font-medium">In Sales</p>
          </div>
          <div class="bg-slate-50 p-8 rounded-xl text-center border border-slate-200">
            <div class="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">100+</div>
            <p class="text-gray-600 font-medium">Agents Mentored</p>
          </div>
        </div>

        <!-- Bio Text -->
        <div class="max-w-4xl mx-auto bg-gradient-to-br from-slate-800 to-slate-700 text-white p-10 md:p-12 rounded-2xl shadow-xl">
          <p class="text-lg leading-relaxed mb-6">
            Taking care of my clients is my number one goal. Brian and his team have closed over 1,000 transactions and nearly $200 million dollars in real estate sold in the last ten years.
          </p>
          <p class="text-lg leading-relaxed">
            I'm honored to help real estate professionals scale their business to become better agents and leaders. <span class="text-emerald-400 font-medium">Buyers and Sellers, just know I am a phone call away to help you reach your real estate goals!</span>
          </p>
        </div>
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
            href="https://www.thepowerhousepartners.com"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
          >
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">Powerhouse Partners</h3>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </div>
            <p class="text-gray-600">Led by Alexis Hirsig & Alex Derenne</p>
          </a>

          <a
            href="https://www.fernwoodrealestate.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
          >
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">Fernwood Real Estate</h3>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </div>
            <p class="text-gray-600">Led by Lindsey Vebber</p>
          </a>

          <a
            href="https://www.facebook.com/barbandkent/"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
          >
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">Breitenfeldt Team</h3>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </div>
            <p class="text-gray-600">Led by Barb & Kent Breitenfeldt</p>
          </a>

          <a
            href="https://www.everly.properties/"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-white p-8 rounded-xl border-2 border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
          >
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">Everly Properties</h3>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </div>
            <p class="text-gray-600">Property Management led by James Marquardt</p>
          </a>
        </div>

        <!-- All Family Members -->
        <div class="bg-white p-8 md:p-10 rounded-xl border border-slate-200">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Family Members</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div v-for="member in familyMembers" :key="member" class="text-center py-3 px-2 rounded-lg bg-slate-50 text-gray-700 font-medium text-sm">
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

// Real Estate Family members (alphabetical order)
const familyMembers = [
  'Aisha Rent',
  'Allana Gonzalez',
  'Anthony Stolp',
  'Austin Cole',
  'Barbara Miller',
  'Bijay Shah',
  'Brianna Pavloski',
  'Caleb Atkinson',
  'Carrie Kutz',
  'Chad Hofmann',
  'Elana Kootstra',
  'Janean Peeler',
  'Jennifer Revord',
  'Joseph Borkhus',
  'Kim Acompanado Bohmann',
  'Mallori Wieland',
  'Marissa Harrington',
  'Megan Wing',
  'Meghan Dinmore',
  'Mindy Riesen',
  'Natalia Renteria',
  'Peter Suhm',
  'Russell Tillmann',
  'Sarah Clements',
  'Shalonda McCrory',
  'Stevi Chadwick',
  'Tammy Shaw-Stelter'
]

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
