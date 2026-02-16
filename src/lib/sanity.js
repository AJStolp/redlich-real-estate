import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const apiVersion = '2025-01-01'

export const sanity = projectId
  ? createClient({
      projectId,
      dataset,
      useCdn: true,
      apiVersion,
    })
  : null

export const previewClient = projectId
  ? createClient({
      projectId,
      dataset,
      useCdn: false,
      apiVersion,
      stega: {
        enabled: true,
        studioUrl: 'http://localhost:3333',
      },
    })
  : null

export const isSanityConfigured = !!sanity

const builder = sanity ? imageUrlBuilder(sanity) : null
export function urlFor(source) {
  return builder?.image(source)
}

export function isInPresentationTool() {
  if (typeof window === 'undefined') return false
  try {
    return (
      window.self !== window.top ||
      new URLSearchParams(window.location.search).has('sanity-preview')
    )
  } catch {
    return true
  }
}
