import { whatsappUrl } from '../lib/whatsapp'
import './Hero.css'

const stats = [
  { value: '500+', label: 'Vessels Served', icon: 'ship' },
  { value: '25+', label: 'Countries', icon: 'globe' },
  { value: '15+', label: 'Years Experience', icon: 'anchor' },
  { value: '10K+', label: 'Products', icon: 'boxes' },
]

function StatIcon({ type }) {
  const icons = {
    ship: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-9-4 4-6-2 2 6 9 4a11.6 11.6 0 0 1-6 1.62z"/></svg>
    ),
    globe: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
    anchor: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>
    ),
    boxes: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
    ),
  }
  return <span className="stat-icon">{icons[type] || null}</span>
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&q=80"
          alt=""
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay" />
      </div>
      <div className="container hero-inner">
        <p className="hero-badge">
          <span className="hero-badge-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-9-4 4-6-2 2 6 9 4a11.6 11.6 0 0 1-6 1.62z"/></svg>
          </span>
          Leading Marine Equipment Supplier in UAE
        </p>
        <h1 className="hero-title">
          <span className="hero-title-line">Your Trusted Partner for</span>
          <span className="hero-title-accent">Marine Solutions</span>
        </h1>
        <p className="hero-desc">
          Maritek Solutions FZE LLC provides premium marine equipment, ship chandlering services,
          and comprehensive maritime solutions to vessels across the globe.
        </p>
        <div className="hero-cta">
          <a href={whatsappUrl("Hi, I'm interested in exploring your marine products. Please share more information.")} target="_blank" rel="noopener noreferrer" className="btn btn-hero-primary">Explore Our Products →</a>
          <a href={whatsappUrl("Hi, I'd like to contact Maritek Solutions. Please assist.")} target="_blank" rel="noopener noreferrer" className="btn btn-hero-outline">Contact Us</a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="container hero-stats-inner">
          {stats.map(({ value, label, icon }) => (
            <div key={label} className="hero-stat">
              <StatIcon type={icon} />
              <div>
                <span className="hero-stat-value">{value}</span>
                <span className="hero-stat-label">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
