import { useEffect } from 'react'
import { defaultMeta, SITE_NAME, SITE_URL } from '../lib/siteMeta'
import { branches, sharedContact } from '../lib/branches'

function setMetaTag(attr, key, content) {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function PageMeta({ title, description, path = '' }) {
  const fullTitle = title || defaultMeta.title
  const desc = description || defaultMeta.description
  const url = `${SITE_URL}${path}`

  useEffect(() => {
    document.title = fullTitle
    setMetaTag('name', 'description', desc)
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', desc)
    setMetaTag('property', 'og:type', 'website')
    setMetaTag('property', 'og:url', url)
    setMetaTag('property', 'og:site_name', SITE_NAME)
    setMetaTag('property', 'og:image', defaultMeta.ogImage)
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', fullTitle)
    setMetaTag('name', 'twitter:description', desc)
  }, [fullTitle, desc, url])

  return null
}

export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    email: sharedContact.email,
    telephone: sharedContact.phone,
    description: defaultMeta.description,
    areaServed: ['United Arab Emirates', 'Middle East'],
    department: branches.map((branch) => ({
      '@type': 'LocalBusiness',
      name: `${SITE_NAME} — ${branch.name}`,
      telephone: branch.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: branch.location.split(',')[0],
        addressCountry: 'AE',
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FaqJsonLd({ faqs }) {
  if (!faqs?.length) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
