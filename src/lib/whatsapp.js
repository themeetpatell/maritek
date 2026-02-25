const WHATSAPP_NUMBER = '971525964458'

export function whatsappUrl(text = '') {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  if (!text) return base
  return `${base}?text=${encodeURIComponent(text)}`
}
