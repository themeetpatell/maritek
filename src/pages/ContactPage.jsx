import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import PageMeta from '../components/PageMeta'
import AnimateIn from '../components/AnimateIn'
import SocialIcons from '../components/SocialIcons'
import MobileContactBar from '../components/MobileContactBar'
import BranchLocationCards from '../components/BranchLocationCards'
import ChevronRight from '../components/ChevronRight'
import { branches, sharedContact } from '../lib/branches'
import { submitInquiry, validateInquiryForm } from '../lib/contactForm'
import { whatsappUrl } from '../lib/whatsapp'
import { whatsappUrlForGeneralService } from '../lib/inquiryMessages'
import { pageMeta } from '../lib/siteMeta'
import '../components/Contact.css'

const INQUIRY_TYPES = [
  'Spare Parts Inquiry',
  'Equipment Inquiry',
  'Emergency Procurement',
  'Marine Consultancy',
  'Technical Sourcing',
  'General Inquiry',
]

const emptyForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  inquiryType: '',
  partNumber: '',
  message: '',
}

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const type = searchParams.get('type')
    if (type && INQUIRY_TYPES.includes(type)) {
      setFormData((prev) => ({ ...prev, inquiryType: type }))
    }
  }, [searchParams])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
    if (submitError) setSubmitError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateInquiryForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmitError('Please correct the highlighted fields before sending.')
      return
    }

    setIsSubmitting(true)
    setSubmitError('')
    setErrors({})

    try {
      await submitInquiry(formData)
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const whatsappInquiryText = [
    'Hi, I would like to send an inquiry to Maritek Solutions.',
    '',
    `Name: ${formData.name || '—'}`,
    `Company: ${formData.company || '—'}`,
    `Email: ${formData.email || '—'}`,
    `Phone: ${formData.phone || '—'}`,
    `Inquiry type: ${formData.inquiryType || '—'}`,
    `Part / description: ${formData.partNumber || '—'}`,
    formData.message ? `\n${formData.message}` : '',
  ].join('\n')

  if (submitted) {
    return (
      <>
        <PageMeta {...pageMeta.contact} path="/contact" />
        <PageBanner
          title="Contact Us"
          subtitle="Thank you — we'll be in touch shortly."
        />
        <section className="contact contact-confirmation">
          <div className="container">
            <div className="confirmation-card">
              <span className="confirmation-icon" aria-hidden="true">✓</span>
              <h2>Inquiry received</h2>
              <p>
                Thank you for reaching out. Our team will respond immediately. For urgent
                requirements, call <a href={sharedContact.phoneHref}>{sharedContact.phone}</a> or
                message us on WhatsApp.
              </p>
              <div className="confirmation-actions">
                <Link to="/" className="confirmation-back">Back to home</Link>
                <a
                  href={whatsappUrlForGeneralService()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="confirmation-whatsapp"
                >
                  Chat on WhatsApp
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <div className="contact-page-wrap">
      <PageMeta {...pageMeta.contact} path="/contact" />
      <PageBanner
        title="Contact Us"
        subtitle="Reach our team in Fujairah or Sharjah — we respond immediately."
      />

      <section className="contact">
        <div className="container contact-main-grid">
          <AnimateIn>
            <div className="contact-form-panel">
              <span className="section-tag">Send an Inquiry</span>
              <h2 className="contact-form-heading">Tell us what you need</h2>
              <p className="contact-form-lead">
                Fill in your details and requirement — our team will follow up immediately.
              </p>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                {submitError && (
                  <p className="form-submit-error" role="alert">{submitError}</p>
                )}
                <div className="form-grid">
                  <label className={`form-field ${errors.name ? 'form-field-error' : ''}`}>
                    <span className="form-label">Name <span className="required">*</span></span>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" aria-invalid={!!errors.name} />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </label>
                  <label className={`form-field ${errors.company ? 'form-field-error' : ''}`}>
                    <span className="form-label">Company <span className="required">*</span></span>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company or vessel" aria-invalid={!!errors.company} />
                    {errors.company && <span className="form-error">{errors.company}</span>}
                  </label>
                  <label className={`form-field ${errors.email ? 'form-field-error' : ''}`}>
                    <span className="form-label">Email <span className="required">*</span></span>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Work email" aria-invalid={!!errors.email} />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </label>
                  <label className="form-field">
                    <span className="form-label">Phone <span className="form-optional">(optional)</span></span>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+971 XX XXX XXXX" />
                  </label>
                  <label className={`form-field form-field-full ${errors.inquiryType ? 'form-field-error' : ''}`}>
                    <span className="form-label">Inquiry type <span className="required">*</span></span>
                    <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} aria-invalid={!!errors.inquiryType}>
                      <option value="">Select type</option>
                      {INQUIRY_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.inquiryType && <span className="form-error">{errors.inquiryType}</span>}
                  </label>
                  <label className={`form-field form-field-full ${errors.partNumber ? 'form-field-error' : ''}`}>
                    <span className="form-label">Part number / description <span className="required">*</span></span>
                    <input type="text" name="partNumber" value={formData.partNumber} onChange={handleChange} placeholder="Part number or equipment description" aria-invalid={!!errors.partNumber} />
                    {errors.partNumber && <span className="form-error">{errors.partNumber}</span>}
                  </label>
                  <label className="form-field form-field-full">
                    <span className="form-label">Additional details <span className="form-optional">(optional)</span></span>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Quantities, urgency, delivery location" />
                  </label>
                </div>
                <div className="contact-form-actions">
                  <button type="submit" className="btn-send" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending…' : 'Send inquiry'}
                  </button>
                  <a
                    href={whatsappUrl(whatsappInquiryText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-send-whatsapp"
                  >
                    Send via WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </AnimateIn>

          <AnimateIn delay={40}>
            <aside className="contact-aside">
              <span className="section-tag">Contact Details</span>
              <h2 className="contact-aside-heading">How to reach us</h2>
              <div className="contact-detail-list">
                <div className="contact-detail-item">
                  <span className="contact-detail-label">Phone</span>
                  <a href={sharedContact.phoneHref}>{sharedContact.phone}</a>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-label">Email</span>
                  <a href={`mailto:${sharedContact.email}`}>{sharedContact.email}</a>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-label">Working hours</span>
                  <span>{sharedContact.hours.days}, {sharedContact.hours.time}</span>
                  <span className="contact-detail-sub">{sharedContact.hours.closed}</span>
                </div>
              </div>

              <div className="contact-branches-list">
                <span className="contact-detail-label">Branches</span>
                {branches.map(({ id, name, location, phone, phoneHref }) => (
                  <div key={id} className="contact-branch-item">
                    <strong>{name}</strong>
                    <span>{location}</span>
                    <a href={phoneHref}>{phone}</a>
                  </div>
                ))}
              </div>

              <div className="contact-next-steps">
                <p className="contact-next-steps-title">What happens next</p>
                <ol className="contact-next-steps-list">
                  <li>We review your inquiry immediately</li>
                  <li>You receive a quotation with lead time and pricing</li>
                  <li>We coordinate sourcing and delivery to your location</li>
                </ol>
              </div>

              <SocialIcons className="social-icons--contact" />
            </aside>
          </AnimateIn>
        </div>
      </section>

      <section className="contact-locations">
        <div className="container">
          <div className="section-block">
            <AnimateIn>
              <div className="page-intro">
                <span className="section-tag">Our Locations</span>
                <h2 className="section-title">Find us in the UAE</h2>
              </div>
            </AnimateIn>
            <BranchLocationCards />
          </div>
        </div>
      </section>

      <MobileContactBar />
    </div>
  )
}
