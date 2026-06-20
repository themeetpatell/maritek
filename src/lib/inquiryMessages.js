import { whatsappUrl } from './whatsapp'
import { serviceInquiryType } from './serviceInquiryTypes'

const serviceTitles = {
  'marine-spare-parts': 'Marine Equipment and Spare Parts Supply',
  'oilfield-equipment': 'Oilfield Equipment and Industrial Supply',
  'marine-consultancy': 'Marine Consultancy and Technical Support',
  'emergency-procurement': 'Emergency Procurement Support',
  'technical-sourcing': 'Technical Sourcing and Vendor Coordination',
  'pipeline-equipment': 'Pipeline and Process Equipment Supply',
}

function serviceInquiryMessage(slug) {
  const type = serviceInquiryType[slug] || 'General Inquiry'
  const title = serviceTitles[slug] || type

  return [
    'Hi, I would like to send an inquiry to Maritek Solutions.',
    '',
    `Inquiry type: ${type}`,
    `Service: ${title}`,
    '',
    'Please share details about my requirement.',
  ].join('\n')
}

export function whatsappUrlForService(slug) {
  return whatsappUrl(serviceInquiryMessage(slug))
}

export function whatsappUrlForProductCategory(categoryTitle) {
  return whatsappUrl(
    [
      'Hi, I would like to request a quote from Maritek Solutions.',
      '',
      `Product category: ${categoryTitle}`,
      '',
      'Please share details about the parts I need.',
    ].join('\n')
  )
}

function generalServiceInquiryMessage() {
  return [
    'Hi, I would like to inquire about Maritek Solutions services.',
    '',
    'Please share details about my requirement.',
  ].join('\n')
}

function sparePartsInquiryMessage() {
  return [
    'Hi, I would like to send a Spare Parts Inquiry to Maritek Solutions.',
    '',
    'Please share details about the parts I need.',
  ].join('\n')
}

export function whatsappUrlForGeneralService() {
  return whatsappUrl(generalServiceInquiryMessage())
}

export function whatsappUrlForSparePartsInquiry() {
  return whatsappUrl(sparePartsInquiryMessage())
}

export { generalServiceInquiryMessage, sparePartsInquiryMessage }
