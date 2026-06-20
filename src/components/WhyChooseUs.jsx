import './WhyChooseUs.css'

const pillars = [
  {
    title: 'Reliable and Responsive',
    desc: 'We respond to every inquiry immediately and keep our clients informed at every step of the sourcing process.',
    icon: 'clock',
  },
  {
    title: 'Competitive Pricing',
    desc: 'Our strong supplier network allows us to source quality products at competitive prices without compromising on reliability.',
    icon: 'price',
  },
  {
    title: 'Technical Expertise',
    desc: 'Decades of combined industry experience across the marine, offshore, oil and gas sectors. We understand what our clients actually need.',
    icon: 'expert',
  },
  {
    title: 'Timely Delivery',
    desc: 'We understand operational deadlines. Our logistics network and supplier relationships ensure parts reach you when you need them.',
    icon: 'delivery',
  },
  {
    title: 'Customer-Focused',
    desc: 'Every requirement is handled personally. We do not process orders — we solve problems.',
    icon: 'customer',
  },
  {
    title: 'Comprehensive Coverage',
    desc: 'From a single spare part to a full plant shutdown supply package, we handle the complete scope.',
    icon: 'coverage',
  },
]

const iconMap = {
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
  price: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  ),
  expert: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  ),
  delivery: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
  ),
  customer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  coverage: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
  ),
}

export default function WhyChooseUs() {
  return (
    <section className="why-choose">
      <div className="container why-choose-inner">
        <div className="why-choose-aside">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="why-choose-title">Why Clients Choose Maritek</h2>
          <p className="why-choose-lead">
            Trusted by marine and oilfield operators across the UAE and Middle East region for reliable sourcing,
            competitive pricing, and hands-on support at every step.
          </p>
          <dl className="why-choose-highlights">
            <div>
              <dt>Instant</dt>
              <dd>Inquiry response</dd>
            </div>
            <div>
              <dt>UAE and Middle East region</dt>
              <dd>Regional coverage</dd>
            </div>
          </dl>
        </div>

        <ol className="why-choose-list">
          {pillars.map(({ title, desc, icon }) => (
            <li key={title} className="why-choose-item">
              <span className="why-choose-icon" aria-hidden="true">
                {iconMap[icon]}
              </span>
              <div className="why-choose-item-body">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
