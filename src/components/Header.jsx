import { useState } from 'react'
import { whatsappUrl } from '../lib/whatsapp'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#categories', label: 'Products' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="header">
      <div className="header-inner container">
        <a href="#" className="logo">
          <img src="/Maritek Logo.png" alt="Maritek Solutions" className="logo-img" />
        </a>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              </li>
            ))}
            <li className="nav-cta-wrap">
              <a href={whatsappUrl("Hi, I would like to send an inquiry to Maritek Solutions.")} target="_blank" rel="noopener noreferrer" className="btn btn-nav btn-nav-mobile" onClick={() => setMenuOpen(false)}>Send Inquiry</a>
            </li>
          </ul>
        </nav>
        <a href={whatsappUrl("Hi, I would like to send an inquiry to Maritek Solutions.")} target="_blank" rel="noopener noreferrer" className="btn btn-nav btn-nav-desk">Send Inquiry</a>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
