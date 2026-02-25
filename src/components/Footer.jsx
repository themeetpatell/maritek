import { whatsappUrl } from '../lib/whatsapp'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#" className="footer-logo">Maritek Solutions</a>
          <p className="footer-tagline">Your Trusted Partner for Marine Solutions</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#categories">Categories</a>
          <a href="#products">Products</a>
          <a href={whatsappUrl("Hi, I'd like to get in touch with Maritek Solutions.")} target="_blank" rel="noopener noreferrer">Contact</a>
        </div>
        <p className="footer-copy">© {year} Maritek Solutions FZE LLC. All rights reserved.</p>
      </div>
    </footer>
  )
}
