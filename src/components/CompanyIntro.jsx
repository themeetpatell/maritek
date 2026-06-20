import { Link } from 'react-router-dom'
import ChevronRight from './ChevronRight'
import './CompanyIntro.css'

export default function CompanyIntro() {
  return (
    <section className="company-intro">
      <div className="container company-intro-inner">
        <span className="section-tag">About Maritek</span>
        <p className="company-intro-text">
          Maritek Solutions FZE LLC is a UAE-registered company that serves marine, oilfield, and
          industrial clients with equipment, spare parts, and technical consultancy. With offices in
          Fujairah and Sharjah, we support marine operators, offshore platforms, oil and gas
          facilities across the region — providing reliable sourcing, fast procurement, and expert
          technical support.
        </p>
        <Link to="/about" className="company-intro-link">
          Learn more about us
          <ChevronRight size={16} />
        </Link>
      </div>
    </section>
  )
}
