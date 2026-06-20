import { Link } from 'react-router-dom'
import ChevronRight from './ChevronRight'
import './BottomCTA.css'

export default function BottomCTA() {
  return (
    <section className="bottom-cta">
      <div className="container bottom-cta-inner">
        <span className="section-tag section-tag--light">Get In Touch</span>
        <h2 className="bottom-cta-title">Have a requirement? We respond immediately.</h2>
        <p className="bottom-cta-desc">
          Whether it&apos;s a single spare part or a full project supply package — tell us what
          you need and we&apos;ll get back to you promptly.
        </p>
        <Link to="/contact" className="btn btn-bottom-cta">
          Send an Inquiry
          <ChevronRight size={18} />
        </Link>
      </div>
    </section>
  )
}
