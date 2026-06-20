import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import PageMeta from '../components/PageMeta'
import { pageMeta } from '../lib/siteMeta'
import '../pages/pages.css'

export default function TermsPage() {
  return (
    <>
      <PageMeta {...pageMeta.terms} path="/terms" />
      <PageBanner title="Terms of Use" subtitle="Conditions for using this website." />
      <section className="page-content">
        <div className="container legal-content">
          <p className="legal-updated">Last updated: June 2026</p>
          <h2>Acceptance</h2>
          <p>
            By accessing www.maritekuae.com, you agree to these Terms of Use. If you do not agree,
            please do not use this website.
          </p>
          <h2>Website content</h2>
          <p>
            Information on this site is provided for general business reference. Product availability,
            specifications, and lead times are subject to confirmation at quotation stage.
            We reserve the right to update content without notice.
          </p>
          <h2>Inquiries and quotations</h2>
          <p>
            Submitting an inquiry does not constitute a binding order. All supply is subject to
            written quotation, availability, and agreed commercial terms.
          </p>
          <h2>Intellectual property</h2>
          <p>
            The Maritek Solutions name, logo, and website content are owned by Maritek Solutions
            and may not be reproduced without permission.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            We make reasonable efforts to ensure accurate information but do not warrant that the
            website is error-free or uninterrupted. Maritek is not liable for indirect damages arising
            from use of this website.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms:{' '}
            <a href="mailto:admin@maritekuae.com">admin@maritekuae.com</a> or{' '}
            <Link to="/contact">contact us</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
