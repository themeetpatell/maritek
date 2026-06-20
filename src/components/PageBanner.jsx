import './PageBanner.css'

export default function PageBanner({ title, subtitle }) {
  return (
    <section className="page-banner">
      <div className="page-banner-bg" aria-hidden="true" />
      <div className="container page-banner-inner">
        <span className="page-banner-label">Maritek Solutions</span>
        <h1 className="page-banner-title">{title}</h1>
        {subtitle && <p className="page-banner-subtitle">{subtitle}</p>}
        <div className="page-banner-line" aria-hidden="true" />
      </div>
    </section>
  )
}
