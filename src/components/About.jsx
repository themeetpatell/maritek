import './About.css'

const highlights = [
  'Premium quality marine equipment',
  '24/7 global customer support',
  'Fast and reliable delivery',
  'Competitive pricing',
  'Certified and compliant products',
  'Experienced maritime professionals',
]

function CheckIcon() {
  return (
    <span className="check-icon" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <span className="section-tag">Who We Are</span>
        <div className="about-grid">
          <div className="about-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
              alt="Maritime vessel at sea"
              className="about-image"
            />
            <div className="about-overlay">
              <span className="about-overlay-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg>
              </span>
              <span className="about-overlay-value">15+ Years</span>
              <span className="about-overlay-label">Industry Excellence</span>
            </div>
          </div>
          <div className="about-content">
            <h2 className="about-heading">Leading Marine Equipment Supplier in UAE</h2>
            <p className="about-text">
              Maritek Solutions FZE LLC is a premier marine equipment supplier based in Sharjah, UAE.
              We specialize in providing comprehensive maritime solutions to vessels of all types,
              serving clients across the Middle East, Asia, Europe, and Africa.
            </p>
            <p className="about-text">
              Our commitment to quality, reliability, and customer satisfaction has made us a trusted
              partner for shipping companies, vessel operators, and maritime businesses worldwide.
              From safety equipment to engine stores, we offer everything your vessel needs.
            </p>
            <ul className="about-list">
              {highlights.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="about-achievements">
          <div className="achievement-card">
            <span className="achievement-icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </span>
            <span className="achievement-value">500+</span>
            <span className="achievement-label">Happy Clients</span>
          </div>
          <div className="achievement-card">
            <span className="achievement-icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </span>
            <span className="achievement-label">ISO Certified</span>
            <span className="achievement-sublabel">Quality Assured</span>
          </div>
        </div>
      </div>
    </section>
  )
}
