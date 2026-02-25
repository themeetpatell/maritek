import './Categories.css'

const categories = [
  {
    title: 'Cabin Store',
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&q=80',
    ],
    items: ['Bathroom Equipment', 'Brush Ware', 'Catering Equipment', 'Cleaning Materials'],
  },
  {
    title: 'Deck Store',
    images: [
      'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&q=80',
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&q=80',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80',
    ],
    items: ['Nautical Equipment', 'Safety Equipment', 'Ropes & Hawsers', 'Cargo Equipment'],
  },
  {
    title: 'Engine Store',
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&q=80',
      'https://images.unsplash.com/photo-1581092160583-9d332a8a238d?w=400&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    ],
    items: ['Power Tools', 'Hand Tools', 'Lubricants', 'Spare Parts'],
  },
  {
    title: 'Marine Paints',
    images: [
      'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&q=80',
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&q=80',
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&q=80',
      'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=80',
    ],
    items: ['Anti-fouling Paints', 'Deck Coatings', 'Primers', 'Thinners'],
  },
]

export default function Categories() {
  return (
    <section id="categories" className="categories">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Product Range</span>
          <h2 className="section-title">Browse Our Categories</h2>
          <p className="section-desc">
            Explore our comprehensive range of marine equipment and supplies for all vessel types.
          </p>
        </div>
        <div className="categories-grid">
          {categories.map(({ title, images, items }) => (
            <article key={title} className="category-card">
              <header className="category-header">
                <h3 className="category-title">{title}</h3>
              </header>
              <div className="category-images">
                {images.map((src, i) => (
                  <div key={i} className="category-img-wrap">
                    <img src={src} alt="" className="category-img" />
                  </div>
                ))}
              </div>
              <div className="category-divider" />
              <div className="category-body">
                <ul className="category-list">
                  {items.map((item) => (
                    <li key={item}>
                      <span className="category-bullet" aria-hidden="true" />
                      <span className="category-item-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
