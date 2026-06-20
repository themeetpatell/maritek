import PageBanner from '../components/PageBanner'
import PageMeta from '../components/PageMeta'
import AnimateIn from '../components/AnimateIn'
import BottomCTA from '../components/BottomCTA'
import ChevronRight from '../components/ChevronRight'
import { servicesList } from '../lib/servicesData'
import { whatsappUrlForService } from '../lib/inquiryMessages'
import { pageMeta } from '../lib/siteMeta'
import '../pages/pages.css'
import './ServicesPage.css'

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

export default function ServicesPage() {
  return (
    <>
      <PageMeta {...pageMeta.services} path="/services" />
      <PageBanner
        title="Our Services"
        subtitle="Reliable procurement, technical sourcing, and expert consultancy for the marine, offshore, oil and gas sectors."
      />
      <section className="page-content page-content-alt services-page-section">
        <div className="container">
          <div className="section-block">
            <AnimateIn>
              <div className="page-intro">
                <span className="section-tag">What We Provide</span>
                <h2 className="section-title">End-to-End Supply and Support</h2>
                <p className="section-desc">
                  From emergency spare parts to full project consultancy — we cover every requirement
                  across marine and oilfield operations.
                </p>
              </div>
            </AnimateIn>

            <div className="services-page-grid">
            {servicesList.map(({ slug, number, icon, title, intro, includes, closing }, i) => (
              <AnimateIn key={number} delay={i * 50}>
                <article
                  id={slug}
                  className={`service-detail service-detail-anchor${slug === 'emergency-procurement' ? ' service-detail--urgent' : ''}`}
                >
                  <div className="service-detail-top">
                    <span className="service-detail-icon">{iconMap[icon]}</span>
                    <span className="service-detail-number">{number}</span>
                  </div>
                  <h2>{title}</h2>
                  <p>{intro}</p>
                  <p className="includes-label">Includes</p>
                  <ul className="content-list service-detail-list">
                    {includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="service-detail-closing">{closing}</p>
                  <a
                    href={whatsappUrlForService(slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-detail-link"
                  >
                    Send inquiry
                    <ChevronRight size={16} className="service-detail-arrow-icon" />
                  </a>
                </article>
              </AnimateIn>
            ))}
            </div>
          </div>
        </div>
      </section>
      <BottomCTA />
    </>
  )
}
