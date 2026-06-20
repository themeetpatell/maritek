import { useState } from 'react'
import { Link } from 'react-router-dom'
import ChevronRight from './ChevronRight'
import { FaqJsonLd } from './PageMeta'
import './FAQ.css'

export const homeFaqs = [
  {
    question: 'Do you handle emergency procurement?',
    answer: 'Yes. We offer fast-response sourcing for urgent operational needs and can deliver critical parts quickly when vessels or plants cannot wait.',
  },
  {
    question: 'Which countries do you serve?',
    answer: 'We serve clients across the UAE and Middle East region.',
  },
  {
    question: 'How do I request a quote?',
    answer: 'Send an inquiry through our contact form or reach us directly by phone or email. We respond to every inquiry immediately.',
  },
]

const faqs = homeFaqs

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="faq">
      <FaqJsonLd faqs={faqs} />
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Common Questions</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Quick answers about procurement, delivery, and how to get a quotation from our team.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map(({ question, answer }, index) => (
            <div key={question} className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq-question-text">{question}</span>
                <span className="faq-chevron" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
              </button>
              <div className="faq-answer-wrap">
                <div className="faq-answer-inner">
                  <div className="faq-answer">
                    <p>{answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-link-wrap">
          <Link to="/faq" className="faq-link">
            View all FAQs
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
