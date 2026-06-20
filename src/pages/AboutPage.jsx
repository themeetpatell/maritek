import PageBanner from '../components/PageBanner'
import PageMeta from '../components/PageMeta'
import AnimateIn from '../components/AnimateIn'
import BottomCTA from '../components/BottomCTA'
import BranchLocationCards from '../components/BranchLocationCards'
import { pageMeta } from '../lib/siteMeta'
import '../pages/pages.css'

const strengths = [
  {
    title: 'Decades of Industry Experience',
    desc: 'Our team carries decades of combined experience in the marine, oilfield, and industrial supply sectors. We understand the technical demands of our clients and the urgency behind every request.',
  },
  {
    title: 'Dry Docking and Shipbuilding Support',
    desc: 'We support vessel owners and ship managers through dry docking and newbuild projects, supplying the full range of consumables, spare parts, and equipment needed to meet project timelines.',
  },
  {
    title: 'Plant Shutdown Project Coordination',
    desc: 'We have experience coordinating procurement for plant shutdown and turnaround projects in the oil and gas sector — ensuring all required components arrive on schedule.',
  },
  {
    title: 'Strong Supplier and Logistics Network',
    desc: 'Our established relationships with manufacturers, authorised distributors, and freight partners give us access to quality products and reliable delivery routes across the region.',
  },
  {
    title: 'Regional Market Expertise',
    desc: 'Based in the UAE with a focus on the Middle East, we understand local market dynamics, import regulations, and the logistical challenges our clients face on the ground.',
  },
  {
    title: 'Fast and Dependable Sourcing',
    desc: 'Speed matters in our industry. When clients have urgent requirements, we mobilise our network immediately to source and deliver as quickly as possible.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageMeta {...pageMeta.about} path="/about" />
      <PageBanner
        title="About Maritek Solutions"
        subtitle="A trusted marine and oilfield solutions partner in the UAE and Middle East region."
      />
      <section className="page-content">
        <div className="container">
          <AnimateIn>
            <div className="about-split">
              <div className="about-split-image-wrap">
                <img
                  src="/about-teaser.jpg"
                  alt="Maritime vessel operations at sea"
                  className="about-split-image"
                  loading="lazy"
                />
              </div>
              <div className="page-intro">
                <span className="section-tag">Who We Are</span>
                <h2 className="section-title">Trusted partner for marine and oilfield supply</h2>
                <p className="section-desc">
                  Maritek Solutions is a UAE-registered company that serves marine, oilfield, and
                  industrial clients with equipment, spare parts, and technical consultancy — supporting
                  clients across the UAE and Middle East region.
                </p>
                <p className="section-desc">
                  With branches in Fujairah — one of the UAE&apos;s most strategically located ports — and
                  Sharjah, we are positioned to respond quickly to the needs of ship operators,
                  procurement teams, and project managers across the region.
                </p>
                <p className="section-desc">
                  We operate in the marine, offshore, oil and gas sectors — providing reliable,
                  economical, and efficient solutions that keep our clients&apos; operations running without
                  interruption.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
      <section className="page-content page-content-alt">
        <div className="container">
          <div className="section-block">
            <AnimateIn>
              <div className="page-intro">
                <span className="section-tag">Our Purpose</span>
                <h2 className="section-title">Vision and Mission</h2>
              </div>
            </AnimateIn>
            <div className="vision-mission-grid">
            <AnimateIn delay={0}>
              <article className="vision-mission-card">
                <span className="vm-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </span>
                <h2>Our Vision</h2>
                <p>
                  To become a leading marine and oilfield solutions provider in the Middle East by
                  delivering quality products, reliable services, and long-term customer value.
                </p>
              </article>
            </AnimateIn>
            <AnimateIn delay={80}>
              <article className="vision-mission-card">
                <span className="vm-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
                </span>
                <h2>Our Mission</h2>
                <p>
                  To provide efficient, economical, and dependable marine and oilfield solutions that
                  support our clients&apos; operational success.
                </p>
              </article>
            </AnimateIn>
          </div>
          </div>
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <div className="section-block">
            <AnimateIn>
              <div className="page-intro">
                <span className="section-tag">Why Choose Us</span>
                <h2 className="section-title">Our Strengths</h2>
                <p className="section-desc">
                  What sets Maritek Solutions apart is a combination of deep industry knowledge, a strong
                  regional network, and a genuine commitment to client outcomes.
                </p>
              </div>
            </AnimateIn>
            <div className="strengths-grid">
            {strengths.map(({ title, desc }, i) => (
              <AnimateIn key={title} delay={i * 60}>
                <article className="strength-card">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              </AnimateIn>
            ))}
            </div>
          </div>
        </div>
      </section>
      <section className="page-content page-content-alt">
        <div className="container">
          <div className="section-block">
            <AnimateIn>
              <div className="page-intro">
                <span className="section-tag">Our Locations</span>
                <h2 className="section-title">Fujairah and Sharjah</h2>
                <p className="section-desc">
                  Based in two of the UAE&apos;s most active maritime and industrial centres, we are
                  positioned to support vessel operators, procurement teams, and project managers
                  across the region — with local knowledge, fast inquiry response, and reliable
                  delivery coordination.
                </p>
              </div>
            </AnimateIn>
            <BranchLocationCards />
          </div>
        </div>
      </section>
      <BottomCTA />
    </>
  )
}
