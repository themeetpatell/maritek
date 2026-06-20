import { sharedContact } from './branches'

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(sharedContact.email)}`

/**
 * Submits inquiry via FormSubmit (https://formsubmit.co).
 * Delivered to sharedContact.email — first submission sends a one-time activation link to that inbox.
 */
export async function submitInquiry(formData) {
  const body = {
    _subject: `Maritek Inquiry: ${formData.inquiryType}`,
    _template: 'table',
    _captcha: 'false',
    name: formData.name,
    email: formData.email,
    company: formData.company,
    phone: formData.phone || 'Not provided',
    inquiry_type: formData.inquiryType,
    part_number: formData.partNumber,
    message: formData.message || 'No additional details provided.',
  }

  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  })

  let result = {}
  try {
    result = await response.json()
  } catch {
    // FormSubmit occasionally returns non-JSON on edge cases
  }

  if (!response.ok) {
    throw new Error(
      result.message || 'Unable to send your inquiry. Please try again or email us directly.'
    )
  }

  return result
}

export function validateInquiryForm(formData) {
  const errors = {}

  if (!formData.name.trim()) errors.name = 'Please enter your name.'
  if (!formData.company.trim()) errors.company = 'Please enter your company or vessel name.'
  if (!formData.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!formData.inquiryType) errors.inquiryType = 'Please select an inquiry type.'
  if (!formData.partNumber.trim()) errors.partNumber = 'Please describe the part or requirement.'

  return errors
}
