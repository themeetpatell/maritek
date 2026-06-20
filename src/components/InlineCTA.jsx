import { Link } from 'react-router-dom'
import { whatsappUrl } from '../lib/whatsapp'
import ChevronRight from './ChevronRight'
import './InlineCTA.css'

export default function InlineCTA({
  title = 'Ready to send a requirement?',
  description = 'Tell us what you need — we respond to every inquiry immediately.',
  buttonLabel = 'Send an inquiry',
  to = '/contact',
  whatsappMessage,
  variant = 'light',
}) {
  const buttonContent = (
    <>
      {buttonLabel}
      <ChevronRight size={18} />
    </>
  )

  return (
    <div className={`inline-cta inline-cta--${variant}`}>
      <div className="inline-cta-text">
        <p className="inline-cta-title">{title}</p>
        <p className="inline-cta-desc">{description}</p>
      </div>
      {whatsappMessage ? (
        <a
          href={whatsappUrl(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-cta-btn"
        >
          {buttonContent}
        </a>
      ) : (
        <Link to={to} className="inline-cta-btn">
          {buttonContent}
        </Link>
      )}
    </div>
  )
}
