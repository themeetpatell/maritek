import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import PageMeta, { FaqJsonLd } from '../components/PageMeta'
import AnimateIn from '../components/AnimateIn'
import BottomCTA from '../components/BottomCTA'
import { pageMeta } from '../lib/siteMeta'
import '../pages/pages.css'
import '../components/FAQ.css'

const faqs = [
  {
    question: 'What does Maritek Solutions supply?',
    answer: 'We supply a wide range of marine, oilfield, and industrial products — including marine machinery spare parts, deck and engine consumables, pumps, valves, piping materials, electrical and automation components, navigation and communication equipment, safety and firefighting equipment, hydraulic and pneumatic components, and industrial tools. If you need something specific, submit an inquiry and we will source it.',
  },
  {
    question: 'Which countries and regions do you serve?',
    answer: 'We operate from branches in Fujairah and Sharjah, UAE. We primarily serve the UAE and Middle East region.',
  },
  {
    question: 'Do you handle emergency or urgent procurement?',
    answer: 'Yes. Emergency procurement is one of our core services. We have fast-response sourcing capabilities, established supplier relationships, and logistics networks that allow us to source and deliver critical parts quickly — including same-day and next-day options within the UAE for stock items.',
  },
  {
    question: 'How do I request a quotation (RFQ)?',
    answer: 'Use the inquiry form on our Contact page. Include the part number or description, quantity required, and your preferred delivery date or urgency level. You can also email us at admin@maritekuae.com or call Fujairah +971 52 106 4448 or Sharjah +971 52 596 4458. We aim to respond to all inquiries immediately.',
  },
  {
    question: 'Can you source parts that are not listed on your website?',
    answer: 'Yes. We specialise in technical sourcing and vendor coordination. If we do not stock an item, we source it through our global supplier network — including OEM parts, equivalent replacements, and obsolete components.',
  },
  {
    question: 'Do you support dry docking and shipbuilding projects?',
    answer: 'Yes. We provide dedicated supply support for dry docking, annual surveys, and newbuild projects — including bulk spare parts supply, equipment procurement, and project coordination across multiple vendors and delivery timelines.',
  },
  {
    question: 'Do you support plant shutdown projects?',
    answer: 'Yes. We have experience coordinating procurement for plant shutdown and turnaround projects in the oil and gas and petrochemical sectors. We manage material lists, multi-vendor sourcing, and schedule-driven delivery to ensure your shutdown proceeds without supply delays.',
  },
  {
    question: 'What are your office locations and working hours?',
    answer: 'We have branches in Fujairah and Sharjah, UAE. Both branches operate Monday to Saturday from 8:00 AM to 6:00 PM. We are closed on Sundays. Fujairah: +971 52 106 4448. Sharjah: +971 52 596 4458. For urgent matters, you can reach us by phone or email outside of working hours.',
  },
  {
    question: 'Do you offer technical consultancy services?',
    answer: 'Yes. Our marine consultancy and technical support service includes advisory for vessel and plant operations, equipment specification support, vendor selection guidance, and procurement strategy for ongoing maintenance programmes. We act as a knowledgeable partner, not just a supplier.',
  },
  {
    question: 'What is your typical lead time for delivery?',
    answer: 'Lead time depends on the product and its source. UAE-stocked items can often be delivered within one to two business days. Items sourced from international suppliers will have longer lead times, which we confirm in the quotation. For emergency requirements, we prioritise speed above all else.',
  },
  {
    question: 'Are you a manufacturer or a supplier?',
    answer: 'We are a supplier and procurement specialist — not a manufacturer. We source products from established manufacturers, authorised distributors, and trusted trading partners. This means we are not limited to a single product line and can find the right item from the right source for each requirement.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply contact us using the inquiry form on this website, email us at admin@maritekuae.com, or call Fujairah +971 52 106 4448 or Sharjah +971 52 596 4458. Tell us what you need — even if it\'s just a general requirement — and we\'ll guide you from there.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
      <PageMeta {...pageMeta.faq} path="/faq" />
      <FaqJsonLd faqs={faqs} />
      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Answers to the questions our clients ask most. If you don't find what you're looking for, contact us directly."
      />
      <section className="page-content page-content-alt">
        <div className="container">
          <div className="faq-list faq-list-page">
            {faqs.map(({ question, answer }, index) => (
              <AnimateIn key={question} delay={index * 35}>
                <div className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}>
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
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
      <BottomCTA />
    </>
  )
}
