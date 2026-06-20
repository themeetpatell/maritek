import { useEffect, useRef, useState } from 'react'
import './AnimateIn.css'

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`animate-in ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--animate-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
