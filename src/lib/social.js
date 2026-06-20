/**
 * Social profile URLs — confirm these with the client before launch.
 * WhatsApp uses the business number from lib/whatsapp.js.
 */
import { whatsappUrl } from './whatsapp'

export const socialLinks = [
  {
    name: 'WhatsApp',
    href: whatsappUrl('Hi, I would like to get in touch with Maritek Solutions.'),
    icon: 'whatsapp',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/maritek-solutions',
    icon: 'linkedin',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/mariteksolutions',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/mariteksolutions',
    icon: 'instagram',
  },
]
