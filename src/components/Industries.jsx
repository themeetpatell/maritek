import './Industries.css'

const industries = [
  {
    title: 'Marine and Shipping',
    desc: 'Vessels, tankers, cargo ships, tugboats, and port operations across the UAE and Middle East region.',
    icon: 'ship',
  },
  {
    title: 'Oil and Gas',
    desc: 'Offshore rigs, onshore refineries, processing plants, and pipeline systems.',
    icon: 'oil',
  },
  {
    title: 'Offshore and Industrial',
    desc: 'FPSO units, offshore platforms, industrial facilities, and manufacturing plants.',
    icon: 'platform',
  },
]

const iconMap = {
  ship: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-9-4 4-6-2 2 6 9 4a11.6 11.6 0 0 1-6 1.62z"/></svg>
  ),
  oil: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg>
  ),
  platform: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="14" width="16" height="6"/><path d="M8 14V8h8v6"/><line x1="12" y1="8" x2="12" y2="4"/><line x1="8" y1="4" x2="16" y2="4"/></svg>
  ),
}

export default function Industries() {
  return (
    <section id="industries" className="industries">
      <div className="container">
        <div className="section-block section-block--full">
        <div className="section-header">
          <span className="section-tag">Who We Serve</span>
          <h2 className="section-title">Industries We Serve</h2>
        </div>
        <div className="industries-grid">
          {industries.map(({ title, desc, icon }) => (
            <article key={title} className="industry-card">
              <div className="industry-icon">{iconMap[icon]}</div>
              <h3 className="industry-title">{title}</h3>
              <p className="industry-desc">{desc}</p>
            </article>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
