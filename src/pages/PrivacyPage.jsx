import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import PageMeta from '../components/PageMeta'
import { pageMeta } from '../lib/siteMeta'
import '../pages/pages.css'

export default function PrivacyPage() {
  return (
    <>
      <PageMeta {...pageMeta.privacy} path="/privacy" />
      <PageBanner title="Privacy Policy" subtitle="How we handle your information." />
      <section className="page-content">
        <div className="container legal-content">
          <p className="legal-updated">Last updated: June 2026</p>
          <h2>Overview</h2>
          <p>
            Maritek Solutions (&quot;Maritek&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy.
            This policy explains how we collect and use information when you visit our website or
            submit an inquiry.
          </p>
          <h2>Information we collect</h2>
          <p>When you use our contact form, we may collect:</p>
          <ul>
            <li>Name and company name</li>
            <li>Email address and phone number</li>
            <li>Inquiry type, part numbers, and message content</li>
          </ul>
          <h2>How we use your information</h2>
          <p>
            We use inquiry information solely to respond to your request, prepare quotations,
            and coordinate procurement or delivery. We do not sell your personal data to third parties.
          </p>
          <h2>Data retention</h2>
          <p>
            Inquiry records are retained as long as necessary for business correspondence,
            legal compliance, and customer service purposes.
          </p>
          <h2>Contact</h2>
          <p>
            For privacy-related questions, contact us at{' '}
            <a href="mailto:admin@maritekuae.com">admin@maritekuae.com</a> or{' '}
            <Link to="/contact">via our contact page</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
