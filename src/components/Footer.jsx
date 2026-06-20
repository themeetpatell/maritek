import { Link } from 'react-router-dom'
import SocialIcons from './SocialIcons'
import { branches, sharedContact } from '../lib/branches'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-logo-link">
            <img src="/Maritek Logo.png" alt="Maritek Solutions" className="footer-logo-img" />
          </Link>
          <p className="footer-tagline">Ultimate Solutions for Comprehensive Marine Services</p>
          <p className="footer-desc">
            UAE-registered company that serves marine and oilfield clients across the UAE and Middle East region.
          </p>
          <SocialIcons />
        </div>
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <nav className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/#industries">Industries</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div className="footer-col">
          <h4 className="footer-col-title">Location Info</h4>
          <div className="footer-location">
            <a href={`mailto:${sharedContact.email}`} className="footer-location-email">
              <span className="footer-location-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
              {sharedContact.email}
            </a>

            <div className="footer-branches">
              {branches.map(({ id, name, location, phone, phoneHref }) => (
                <div key={id} className="footer-branch">
                  <strong className="footer-branch-name">{name}</strong>
                  <span className="footer-branch-location">{location}</span>
                  <a href={phoneHref} className="footer-branch-phone">
                    <span className="footer-location-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </span>
                    {phone}
                  </a>
                </div>
              ))}
            </div>

            <p className="footer-hours">
              <span className="footer-location-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </span>
              <span>
                <strong>Hours</strong>
                <span className="footer-hours-detail">Mon–Sat: {sharedContact.hours.time}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {year} Maritek Solutions. All rights reserved. | www.maritekuae.com
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="footer-legal-sep">|</span>
            <Link to="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
