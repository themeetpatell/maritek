import AnimateIn from './AnimateIn'
import { branches, sharedContact } from '../lib/branches'
import './BranchLocationCards.css'

export default function BranchLocationCards({ className = '' }) {
  return (
    <div className={`location-cards-grid ${className}`.trim()}>
      {branches.map((branch, i) => (
        <AnimateIn key={branch.id} delay={i * 60}>
          <article className="location-card">
            <div className="location-card-header">
              <h3>{branch.name}</h3>
              <p>{branch.location}</p>
            </div>
            <div className="location-card-map">
              <iframe
                title={branch.mapTitle}
                src={branch.mapSrc}
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="location-card-links">
              <a href={branch.phoneHref}>{branch.phone}</a>
              <a href={`mailto:${sharedContact.email}`}>{sharedContact.email}</a>
            </div>
          </article>
        </AnimateIn>
      ))}
    </div>
  )
}
