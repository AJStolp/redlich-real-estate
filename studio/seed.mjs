import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'lvtzddlq',
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
  apiVersion: '2025-01-01',
})

const documents = [
  {
    _id: 'hero',
    _type: 'hero',
    name: 'Brian Redlich',
    subtitle: 'Real Estate Agent | Real Brokerage',
    bio: "With over 20 years of real estate experience, I've built a successful business by sticking to old school principles: hard work, knowledge, and communication.",
    ctaText: 'Get In Touch',
    secondaryCtaText: 'Meet the Family',
  },
  {
    _id: 'about',
    _type: 'about',
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
  {
    _id: 'stat-1',
    _type: 'stat',
    value: '20+',
    label: 'Years Experience',
    sortOrder: 1,
  },
  {
    _id: 'stat-2',
    _type: 'stat',
    value: '1,000+',
    label: 'Transactions Closed',
    sortOrder: 2,
  },
  {
    _id: 'stat-3',
    _type: 'stat',
    value: '$200M',
    label: 'In Sales',
    sortOrder: 3,
  },
  {
    _id: 'stat-4',
    _type: 'stat',
    value: '100+',
    label: 'Agents Mentored',
    sortOrder: 4,
  },
  {
    _id: 'team-1',
    _type: 'featuredTeam',
    name: 'Powerhouse Partners',
    description: 'Led by Alexis Hirsig & Alex Derenne',
    url: 'https://www.thepowerhousepartners.com',
    sortOrder: 1,
  },
  {
    _id: 'team-2',
    _type: 'featuredTeam',
    name: 'Fernwood Real Estate',
    description: 'Led by Lindsey Vebber',
    url: 'https://www.fernwoodrealestate.com/',
    sortOrder: 2,
  },
  {
    _id: 'team-3',
    _type: 'featuredTeam',
    name: 'Breitenfeldt Team',
    description: 'Led by Barb & Kent Breitenfeldt',
    url: 'https://www.facebook.com/barbandkent/',
    sortOrder: 3,
  },
  {
    _id: 'team-4',
    _type: 'featuredTeam',
    name: 'Everly Properties',
    description: 'Property Management led by James Marquardt',
    url: 'https://www.everly.properties/',
    sortOrder: 4,
  },
  ...[
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
  ].map((name, i) => ({
    _id: `family-${i + 1}`,
    _type: 'familyMember',
    name,
    sortOrder: i + 1,
  })),
  {
    _id: 'contact',
    _type: 'contact',
    heading: "Let's Connect",
    description:
      "Ready to take the next step? Send me a message and I'll get back to you shortly.",
    successMessage: "Thank you for reaching out! I'll get back to you soon.",
    errorMessage:
      'Sorry, something went wrong. Please try again or email me directly.',
  },
  {
    _id: 'footer',
    _type: 'footer',
    copyrightName: 'Brian Redlich',
  },
]

async function seed() {
  const tx = client.transaction()
  for (const doc of documents) {
    tx.createOrReplace(doc)
  }
  const result = await tx.commit()
  console.log(`Seeded ${documents.length} documents`, result.documentIds)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
