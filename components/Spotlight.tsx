'use client'

import { useEffect, useState } from 'react'

export default function Spotlight() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-2 transition duration-300"
      style={{
        background: `
          radial-gradient(
            200px at ${position.x}px ${position.y}px,
            rgba(6, 182, 212, 0.12),
            transparent 80%
          )
        `
      }}
    />
  )
}
