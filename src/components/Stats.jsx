import './Stats.css'

const stats = [
  { value: '500+', label: 'Vessels Served' },
  { value: '25+', label: 'Countries' },
  { value: '15+', label: 'Years Experience' },
  { value: '10K+', label: 'Products' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map(({ value, label }) => (
          <div key={label} className="stat-card">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
