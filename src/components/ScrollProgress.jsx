import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handler = () => {
      const el = document.documentElement
      const scroll = el.scrollTop || document.body.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setWidth(total > 0 ? (scroll / total) * 100 : 0)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return <div className="scroll-progress" style={{ width: `${width}%` }} />
}
