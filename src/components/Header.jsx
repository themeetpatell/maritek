import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { sharedContact } from '../lib/branches'
import { whatsappUrlForGeneralService } from '../lib/inquiryMessages'
import './Header.css'

function HeaderCTA({ className, onNavigate }) {
  return (
    <div className={`header-cta ${className || ''}`}>
      <Link to="/contact" className="btn btn-nav btn-nav-email" onClick={onNavigate}>
        Email Inquiry
      </Link>
      <a
        href={whatsappUrlForGeneralService()}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-nav btn-nav-whatsapp"
        onClick={onNavigate}
      >
        WhatsApp
      </a>
    </div>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/products', label: 'Products' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/Maritek Logo.png" alt="Maritek Solutions" className="logo-img" />
        </Link>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <div className="nav-mobile-contact">
            <a href={sharedContact.phoneHref}>{sharedContact.phone}</a>
            <span>{sharedContact.hours.days}, {sharedContact.hours.time}</span>
          </div>
          <ul className="nav-list">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-active' : ''}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="nav-cta-wrap">
              <HeaderCTA className="header-cta-mobile" onNavigate={closeMenu} />
            </li>
          </ul>
        </nav>
        <HeaderCTA className="header-cta-desk" onNavigate={closeMenu} />
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
