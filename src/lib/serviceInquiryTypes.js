export const serviceInquiryType = {
  'marine-spare-parts': 'Spare Parts Inquiry',
  'oilfield-equipment': 'Equipment Inquiry',
  'marine-consultancy': 'Marine Consultancy',
  'emergency-procurement': 'Emergency Procurement',
  'technical-sourcing': 'Technical Sourcing',
  'pipeline-equipment': 'Equipment Inquiry',
}

export function contactUrlForService(slug) {
  const type = serviceInquiryType[slug]
  if (!type) return '/contact'
  return `/contact?type=${encodeURIComponent(type)}`
}
