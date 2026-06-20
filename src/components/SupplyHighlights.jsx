import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ChevronRight from './ChevronRight'
import InlineCTA from './InlineCTA'
import { categoryIconMap } from '../lib/categoryIcons'
import { productCategories } from '../lib/productCategories'
import { sparePartsInquiryMessage } from '../lib/inquiryMessages'
import './SupplyHighlights.css'

function getVisibleCount() {
  if (typeof window === 'undefined') return 4
  if (window.innerWidth <= 520) return 1
  if (window.innerWidth <= 1024) return 2
  return 4
}

export default function SupplyHighlights() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(getVisibleCount)

  const maxIndex = Math.max(0, productCategories.length - visibleCount)

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[index]
    if (!card) return
    track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
  }, [])

  const goTo = useCallback((index) => {
    const next = Math.max(0, Math.min(index, maxIndex))
    setActiveIndex(next)
    scrollToIndex(next)
  }, [maxIndex, scrollToIndex])

  useEffect(() => {
    const onResize = () => {
      const count = getVisibleCount()
      setVisibleCount(count)
      setActiveIndex((prev) => Math.min(prev, Math.max(0, productCategories.length - count)))
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    scrollToIndex(activeIndex)
  }, [activeIndex, visibleCount, scrollToIndex])

  return (
    <section id="supply-range" className="supply-highlights">
      <div className="container">
        <div className="section-block section-block--full">
        <div className="section-header">
          <span className="section-tag">What We Supply</span>
          <h2 className="section-title">Commonly sourced categories</h2>
          <p className="section-desc">
            Browse our full range of marine, oilfield, and industrial supply categories.
          </p>
        </div>

        <div className="supply-carousel">
          <button
            type="button"
            className="supply-carousel-btn supply-carousel-btn-prev"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous categories"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          <div className="supply-carousel-viewport">
            <div ref={trackRef} className="supply-carousel-track">
              {productCategories.map(({ shortTitle, slug, desc, icon, image }) => (
                <Link key={slug} to={`/products#${slug}`} className="supply-highlight-card">
                  <div className="supply-highlight-image-wrap">
                    <img src={image} alt={shortTitle} className="supply-highlight-image" loading="lazy" />
                    <span className="supply-highlight-icon">{categoryIconMap[icon]}</span>
                  </div>
                  <div className="supply-highlight-body">
                    <h3 className="supply-highlight-title">{shortTitle}</h3>
                    <p className="supply-highlight-desc">{desc}</p>
                    <span className="supply-highlight-link">
                      View range
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="supply-carousel-btn supply-carousel-btn-next"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex >= maxIndex}
            aria-label="Next categories"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <div className="supply-carousel-dots" role="tablist" aria-label="Supply categories">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={activeIndex === i}
              aria-label={`Show category group ${i + 1}`}
              className={`supply-carousel-dot${activeIndex === i ? ' supply-carousel-dot-active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <InlineCTA
          title="Looking for a specific part or category?"
          description="Our catalogue is indicative — we source OEM, equivalents, and obsolete items on request."
          buttonLabel="Request a quote"
          whatsappMessage={sparePartsInquiryMessage()}
          variant="sand"
        />
        </div>
      </div>
    </section>
  )
}
