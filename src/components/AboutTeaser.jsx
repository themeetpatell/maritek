import { Link } from 'react-router-dom'
import ChevronRight from './ChevronRight'
import './AboutTeaser.css'

const highlights = [
  'Local teams in Fujairah and Sharjah, close to ports and industrial hubs',
  'Spare parts, equipment, and consultancy from one trusted partner',
  'Emergency sourcing with same-day and next-day delivery across the UAE',
]

export default function AboutTeaser() {
  return (
    <section className="about-teaser">
      <div className="container about-teaser-inner">
        <div className="about-teaser-image-wrap">
          <img
            src="/about-teaser.jpg"
            alt="Maritime vessel operations at sea"
            className="about-teaser-image"
            loading="lazy"
          />
          <div className="about-teaser-badge">
            <span className="about-teaser-badge-value">Instant</span>
            <span className="about-teaser-badge-label">Inquiry Response</span>
          </div>
        </div>
        <div className="about-teaser-content">
          <span className="section-tag">Who We Are</span>
          <h2 className="about-teaser-title">Trusted partner for marine and oilfield supply</h2>
          <p className="about-teaser-text">
            Maritek Solutions is a UAE-registered company that serves marine, oilfield, and industrial
            clients with equipment, spare parts, and technical consultancy. We support marine operators,
            offshore platforms, oil and gas facilities across the UAE and Middle East region —
            providing reliable sourcing, fast procurement, and expert technical support.
          </p>
          <ul className="about-teaser-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link to="/about" className="about-teaser-link">
            Learn more about us
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
