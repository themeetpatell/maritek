import { Link } from 'react-router-dom'
import ChevronRight from './ChevronRight'
import InlineCTA from './InlineCTA'
import { generalServiceInquiryMessage, whatsappUrlForService } from '../lib/inquiryMessages'
import './Services.css'

const services = [
  {
    slug: 'marine-spare-parts',
    title: 'Marine Equipment and Spare Parts Supply',
    desc: 'Supply of marine machinery parts, deck and engine consumables, hydraulic components, navigation and safety equipment.',
    icon: 'ship',
  },
  {
    slug: 'oilfield-equipment',
    title: 'Oilfield Equipment and Industrial Supply',
    desc: 'Pumps, valves, piping materials, pipeline equipment, and industrial tools for the oil and gas and offshore sectors.',
    icon: 'oil',
  },
  {
    slug: 'marine-consultancy',
    title: 'Marine Consultancy and Technical Support',
    desc: 'Expert advisory and technical guidance for marine and offshore operations, procurement strategy, and vendor selection.',
    icon: 'consult',
  },
  {
    slug: 'emergency-procurement',
    title: 'Emergency Procurement Support',
    desc: 'Fast-response sourcing for urgent operational needs. We have the network to deliver critical parts quickly when vessels or plants cannot wait.',
    icon: 'emergency',
  },
  {
    slug: 'technical-sourcing',
    title: 'Technical Sourcing and Vendor Coordination',
    desc: 'We leverage our global supplier network to locate and procure specific components, including hard-to-find and OEM parts.',
    icon: 'sourcing',
  },
  {
    slug: 'pipeline-equipment',
    title: 'Pipeline and Process Equipment Supply',
    desc: 'Specialised procurement for plant shutdown and pipeline projects across the oil and gas and petrochemical sectors.',
    icon: 'pipeline',
  },
]

const iconMap = {
  ship: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-9-4 4-6-2 2 6 9 4a11.6 11.6 0 0 1-6 1.62z"/></svg>
  ),
  oil: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M12 22V12"/></svg>
  ),
  consult: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  ),
  emergency: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  sourcing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  ),
  pipeline: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h16"/><path d="M4 8h8"/><path d="M4 16h12"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/></svg>
  ),
}

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-block">
        <div className="section-header">
          <span className="section-tag">What We Provide</span>
          <h2 className="section-title">End-to-End Supply and Support</h2>
          <p className="section-desc">
            Spare parts, emergency procurement, oilfield equipment, technical sourcing, pipeline
            supply, and expert consultancy — one partner for marine and oilfield operations across
            the UAE and Middle East region.
          </p>
        </div>
        <div className="services-grid">
          {services.map(({ slug, title, desc, icon }) => (
            <article key={slug} className={`service-card${slug === 'emergency-procurement' ? ' service-card--urgent' : ''}`}>
              <div className="service-icon">{iconMap[icon]}</div>
              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{desc}</p>
              <Link to={`/services#${slug}`} className="service-link">
                Learn more
                <ChevronRight size={16} />
              </Link>
              {slug === 'emergency-procurement' && (
                <a
                  href={whatsappUrlForService(slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-link service-link-urgent"
                >
                  Request urgent support
                  <ChevronRight size={16} />
                </a>
              )}
            </article>
          ))}
        </div>
        <InlineCTA
          title="Need a specific service?"
          description="Send your requirement on WhatsApp and we'll confirm scope, lead time, and pricing promptly."
          buttonLabel="Chat on WhatsApp"
          whatsappMessage={generalServiceInquiryMessage()}
          variant="light"
        />
        </div>
      </div>
    </section>
  )
}
