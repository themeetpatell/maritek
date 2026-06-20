import './OperatingAreas.css'

const regions = [
  'United Arab Emirates',
  'Kingdom of Saudi Arabia',
  'Qatar',
  'Kuwait',
  'Bahrain',
  'Oman',
  'Broader Middle East',
]

export default function OperatingAreas() {
  return (
    <section className="operating-areas">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Regions</span>
          <h2 className="section-title">Serving the UAE, GCC, and Middle East Region</h2>
        </div>
        <div className="region-badges">
          {regions.map((region) => (
            <span key={region} className="region-badge">{region}</span>
          ))}
        </div>
        <p className="operating-desc">
          From our UAE base, we support marine operators, oilfield contractors, and industrial
          facilities across the region with fast, dependable procurement.
        </p>
      </div>
    </section>
  )
}
