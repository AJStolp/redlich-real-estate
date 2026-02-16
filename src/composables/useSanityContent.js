import { ref, onMounted, onUnmounted } from 'vue'
import {
  sanity,
  previewClient,
  isSanityConfigured,
  isInPresentationTool,
} from '../lib/sanity'

const query = `{
  "hero": *[_type == "hero"][0]{name, subtitle, bio, ctaText, secondaryCtaText},
  "about": *[_type == "about"][0]{heading, description, bioParagraph1, bioParagraph2, bioHighlight},
  "stats": *[_type == "stat"] | order(sortOrder asc){value, label},
  "featuredTeams": *[_type == "featuredTeam"] | order(sortOrder asc){name, description, url},
  "familyMembers": *[_type == "familyMember"] | order(sortOrder asc).name,
  "brokerageSlides": *[_type == "brokerageSlide"] | order(sortOrder asc){title, image, sortOrder},
  "contact": *[_type == "contact"][0]{heading, description, successMessage, errorMessage},
  "footer": *[_type == "footer"][0]{copyrightName}
}`

const defaults = {
  hero: {
    name: 'Brian Redlich',
    subtitle: 'Real Estate Agent | Real Brokerage',
    bio: "With over 20 years of real estate experience, I've built a successful business by sticking to old school principles: hard work, knowledge, and communication.",
    ctaText: 'Get In Touch',
    secondaryCtaText: 'Meet the Family',
  },
  about: {
    heading: 'About Brian',
    description:
      "As a leading agent in the Milwaukee market, I've achieved top agent recognition and built a group of over 100 agents. I'm now recognized as an industry leader and mentor for real estate professionals.",
    bioParagraph1:
      'Taking care of my clients is my number one goal. Brian and his team have closed over 1,000 transactions and nearly $200 million dollars in real estate sold in the last ten years.',
    bioParagraph2:
      "I'm honored to help real estate professionals scale their business to become better agents and leaders.",
    bioHighlight:
      'Buyers and Sellers, just know I am a phone call away to help you reach your real estate goals!',
  },
  stats: [
    { value: '20+', label: 'Years Experience' },
    { value: '1,000+', label: 'Transactions Closed' },
    { value: '$200M', label: 'In Sales' },
    { value: '100+', label: 'Agents Mentored' },
  ],
  featuredTeams: [
    {
      name: 'Powerhouse Partners',
      description: 'Led by Alexis Hirsig & Alex Derenne',
      url: 'https://www.thepowerhousepartners.com',
    },
    {
      name: 'Fernwood Real Estate',
      description: 'Led by Lindsey Vebber',
      url: 'https://www.fernwoodrealestate.com/',
    },
    {
      name: 'Breitenfeldt Team',
      description: 'Led by Barb & Kent Breitenfeldt',
      url: 'https://www.facebook.com/barbandkent/',
    },
    {
      name: 'Everly Properties',
      description: 'Property Management led by James Marquardt',
      url: 'https://www.everly.properties/',
    },
  ],
  familyMembers: [
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
    'Tammy Shaw-Stelter',
  ],
  brokerageSlides: [],
  contact: {
    heading: "Let's Connect",
    description:
      "Ready to take the next step? Send me a message and I'll get back to you shortly.",
    successMessage:
      "Thank you for reaching out! I'll get back to you soon.",
    errorMessage:
      'Sorry, something went wrong. Please try again or email me directly.',
  },
  footer: {
    copyrightName: 'Brian Redlich',
  },
}

function mergeWithDefaults(result) {
  const merged = { ...defaults }
  for (const key of Object.keys(defaults)) {
    const val = result[key]
    if (val == null) continue
    if (Array.isArray(val) && val.length === 0) continue
    merged[key] = val
  }
  return merged
}

export function useSanityContent() {
  const content = ref(structuredClone(defaults))
  const loading = ref(false)
  const error = ref(null)
  let subscription = null

  const preview = isSanityConfigured && isInPresentationTool()
  const client = preview ? previewClient : sanity

  onMounted(async () => {
    if (!isSanityConfigured) return

    loading.value = true
    try {
      const result = await client.fetch(query)
      content.value = mergeWithDefaults(result)
    } catch (err) {
      console.error('Sanity fetch error:', err)
      error.value = err
    } finally {
      loading.value = false
    }

    // In preview mode, subscribe to live updates so content refreshes as Brian types
    if (preview) {
      subscription = previewClient.listen(query).subscribe({
        next: (update) => {
          if (update.result) {
            content.value = mergeWithDefaults(update.result)
          }
        },
        error: (err) => console.error('Sanity listener error:', err),
      })
    }
  })

  onUnmounted(() => {
    if (subscription) {
      subscription.unsubscribe()
    }
  })

  return { content, loading, error }
}
