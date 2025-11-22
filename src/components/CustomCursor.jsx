import React, { useEffect, useRef } from 'react'

// A soft circular cursor with a canvas ripple trail
export default function CustomCursor() {
  const cursorRef = useRef(null)
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const ripplesRef = useRef([])
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

  useEffect(() => {
    const cursor = cursorRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setSize()

    const onMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      // cursor follows with slight lag
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      // create a gentle ripple
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        r: 0,
        alpha: 0.35,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // Draw fading ripples
      ripplesRef.current.forEach((p) => {
        ctx.beginPath()
        const grad = ctx.createRadialGradient(p.x, p.y, p.r * 0.2, p.x, p.y, p.r)
        grad.addColorStop(0, `rgba(120, 200, 255, ${p.alpha})`)
        grad.addColorStop(1, 'rgba(120, 200, 255, 0)')
        ctx.fillStyle = grad
        ctx.arc(p.x, p.y, Math.max(1, p.r), 0, Math.PI * 2)
        ctx.fill()
        p.r += 0.8
        p.alpha *= 0.975
      })
      // Remove finished ripples
      ripplesRef.current = ripplesRef.current.filter((p) => p.alpha > 0.02)
      rafRef.current = requestAnimationFrame(draw)
    }

    const onResize = () => setSize()

    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', onResize)
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    // Magnetic hover effect for elements with .magnetic
    const elements = Array.from(document.querySelectorAll('.magnetic'))
    const strength = 0.25

    const handleMove = (e) => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const relX = e.clientX - (rect.left + rect.width / 2)
        const relY = e.clientY - (rect.top + rect.height / 2)
        const dx = relX * strength
        const dy = relY * strength
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`
      })
    }
    const handleLeave = () => {
      elements.forEach((el) => (el.style.transform = 'translate3d(0,0,0)'))
    }

    elements.forEach((el) => {
      el.addEventListener('mousemove', handleMove)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mousemove', handleMove)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-30"
        aria-hidden="true"
      />
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ width: 22, height: 22, boxShadow: '0 0 0 2px rgba(180,240,255,0.45), inset 0 0 10px rgba(120,200,255,0.4)', backdropFilter: 'blur(6px)', background: 'rgba(180, 220, 255, 0.08)' }}
        aria-hidden="true"
      />
    </>
  )
}
