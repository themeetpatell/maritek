import { whatsappUrl } from '../lib/whatsapp'
import './FeaturedProducts.css'

const products = [
  { name: 'Crosby Bow Shackles', category: 'Deck Equipment' },
  { name: 'Marine Safety Helmets', category: 'Safety Gear' },
  { name: 'Anti-fouling Paint', category: 'Marine Paints' },
  { name: 'Mooring Ropes', category: 'Deck Store' },
  { name: 'Engine Lubricants', category: 'Engine Store' },
  { name: 'Life Jackets', category: 'Safety Equipment' },
]

export default function FeaturedProducts() {
  return (
    <section id="products" className="featured-products">
      <div className="container">
        <div className="products-header">
          <div>
            <span className="section-tag">Featured Products</span>
            <h2 className="section-title">Our bestselling marine equipment and supplies</h2>
          </div>
          <a href={whatsappUrl("Hi, I'd like to view all your marine products. Please share your catalog.")} target="_blank" rel="noopener noreferrer" className="btn btn-products">View All Products</a>
        </div>
        <div className="products-grid">
          {products.map(({ name, category }) => (
            <article key={name} className="product-card">
              <span className="product-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-9-4 4-6-2 2 6 9 4a11.6 11.6 0 0 1-6 1.62z"/></svg>
              </span>
              <h4 className="product-name">{name}</h4>
              <span className="product-category">{category}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
