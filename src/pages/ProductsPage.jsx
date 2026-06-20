import PageBanner from '../components/PageBanner'
import PageMeta from '../components/PageMeta'
import AnimateIn from '../components/AnimateIn'
import ChevronRight from '../components/ChevronRight'
import { categoryIconMap } from '../lib/categoryIcons'
import { productCategories } from '../lib/productCategories'
import { whatsappUrlForProductCategory, whatsappUrlForSparePartsInquiry } from '../lib/inquiryMessages'
import { pageMeta } from '../lib/siteMeta'
import '../pages/pages.css'

export default function ProductsPage() {
  return (
    <>
      <PageMeta {...pageMeta.products} path="/products" />
      <PageBanner
        title="Our Supply Range"
        subtitle="We supply a broad range of marine, oilfield, and industrial products — sourced from trusted manufacturers and delivered to your location across the UAE and Middle East region."
      />
      <section className="page-content">
        <div className="container">
          <div className="section-block">
            <AnimateIn>
              <div className="page-intro">
                <span className="section-tag">What We Supply</span>
                <h2 className="section-title">Commonly sourced categories</h2>
                <p className="section-desc">
                  Browse our indicative supply range below. If you need something not listed, we source it
                  through our global supplier network — request a quote via WhatsApp or our contact form.
                </p>
              </div>
            </AnimateIn>
            <div className="product-categories-grid">
            {productCategories.map(({ title, slug, icon, image, items }, i) => (
              <AnimateIn key={title} delay={i * 40}>
                <div id={slug} className="product-category-block product-category-anchor">
                  <div className="product-category-image-wrap">
                    <img src={image} alt="" className="product-category-image" loading="lazy" />
                  </div>
                  <div className="product-category-head">
                    <span className="product-category-icon">{categoryIconMap[icon]}</span>
                    <h2>{title}</h2>
                  </div>
                  <ul className="content-list">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href={whatsappUrlForProductCategory(title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-category-rfq"
                  >
                    Request quote
                    <ChevronRight size={16} />
                  </a>
                </div>
              </AnimateIn>
            ))}
            </div>
          </div>
        </div>
      </section>
      <section className="rfq-section">
        <div className="container">
          <AnimateIn>
            <h2>Can&apos;t find what you&apos;re looking for?</h2>
            <p>
              We specialise in sourcing components that are not readily available — including OEM parts,
              obsolete items, and highly specified equipment. Submit your request and we will locate it
              through our global supplier network.
            </p>
            <a
              href={whatsappUrlForSparePartsInquiry()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-page-cta"
            >
              Submit an RFQ
              <ChevronRight size={18} />
            </a>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
