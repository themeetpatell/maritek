import { whatsappUrl } from '../lib/whatsapp'
import './Services.css'

const services = [
  {
    title: 'Ship Chandlering',
    desc: 'Comprehensive ship supply services including provisions, cabin stores, and deck equipment for vessels of all types.',
    icon: 'anchor',
  },
  {
    title: 'Engine Store Supplies',
    desc: 'High-quality engine room equipment, spare parts, lubricants, and technical supplies for optimal vessel performance.',
    icon: 'wrench',
  },
  {
    title: 'Safety Equipment',
    desc: 'Complete range of maritime safety gear including lifesaving appliances, fire-fighting equipment, and protective wear.',
    icon: 'shield',
  },
  {
    title: 'Deck Store Equipment',
    desc: 'Ropes, hawsers, anchoring equipment, mooring gear, and all essential deck supplies for maritime operations.',
    icon: 'box',
  },
  {
    title: 'Marine Paints',
    desc: 'Premium quality marine coatings, anti-fouling paints, and protective finishes from leading manufacturers.',
    icon: 'paint',
  },
  {
    title: 'Technical Services',
    desc: 'Expert technical support, equipment installation, and maintenance services for maritime equipment.',
    icon: 'gear',
  },
]

const iconMap = {
  anchor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
  box: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/></svg>
  ),
  paint: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
  ),
}

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Provide</span>
          <h2 className="section-title">Our Marine Services</h2>
          <p className="section-desc">
            We offer a comprehensive range of marine equipment and services to meet all your maritime needs.
          </p>
        </div>
        <div className="services-grid">
          {services.map(({ title, desc, icon }) => (
            <article key={title} className="service-card">
              <div className="service-icon">{iconMap[icon]}</div>
              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{desc}</p>
              <a href={whatsappUrl(`Hi, I'm interested in ${title}. Please share more information.`)} target="_blank" rel="noopener noreferrer" className="service-link">Learn More <span className="service-arrow">&gt;</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
