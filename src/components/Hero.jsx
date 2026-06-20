import { Link } from 'react-router-dom'
import ChevronRight from './ChevronRight'
import './Hero.css'

const stats = [
  { value: '2', label: 'UAE Branches', icon: 'branch' },
  { value: 'Instant', label: 'Inquiry Response', icon: 'clock' },
  { value: '6', label: 'Core Services', icon: 'services' },
  { value: '3', label: 'Industries', icon: 'industries' },
]

function StatIcon({ type }) {
  const icons = {
    branch: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v0"/><path d="M9 12v0"/><path d="M9 15v0"/><path d="M9 18v0"/></svg>
    ),
    clock: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    services: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    ),
    industries: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="14" width="16" height="6"/><path d="M8 14V8h8v6"/><line x1="12" y1="8" x2="12" y2="4"/><line x1="8" y1="4" x2="16" y2="4"/></svg>
    ),
  }
  return <span className="stat-icon">{icons[type] || null}</span>
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/hero.jpg"
          alt="Marine and offshore operations at sea"
          className="hero-bg-img"
          fetchPriority="high"
        />
        <div className="hero-bg-overlay" />
      </div>
      <div className="container hero-inner">
        <p className="hero-badge">
          <span className="hero-badge-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-9-4 4-6-2 2 6 9 4a11.6 11.6 0 0 1-6 1.62z"/></svg>
          </span>
          Maritek Solutions
        </p>
        <h1 className="hero-title">
          <span className="hero-title-line">Ultimate Solutions for</span>
          <span className="hero-title-accent">Comprehensive Marine Services</span>
        </h1>
        <p className="hero-desc">
          Trusted marine and oilfield solutions from a UAE-registered company that serves clients across the UAE and Middle East region.
        </p>
        <div className="hero-cta">
          <Link to="/contact" className="btn btn-primary btn-hero-primary">
            Send an Inquiry
            <ChevronRight size={18} />
          </Link>
          <Link to="/services" className="btn btn-secondary btn-hero-outline">
            Explore Services
            <ChevronRight size={18} />
          </Link>
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
