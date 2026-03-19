import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const posRef = useRef({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [enabled, setEnabled] = useState(true)
  const ringPos = useRef({ x: 0, y: 0 })
  const [ringState, setRingState] = useState({ x: 0, y: 0 })
  const rafRef = useRef()

  useEffect(() => {
    const media = window.matchMedia("(any-pointer: coarse)")
    const applyEnabled = () => setEnabled(!media.matches)
    applyEnabled()
    media.addEventListener("change", applyEnabled)

    if (media.matches) {
      return () => media.removeEventListener("change", applyEnabled)
    }

    const move = (e) => {
      const next = { x: e.clientX, y: e.clientY }
      posRef.current = next
      setPos(next)
    }
    window.addEventListener("mousemove", move)

    const animate = () => {
      ringPos.current.x += (posRef.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (posRef.current.y - ringPos.current.y) * 0.12
      setRingState({ x: ringPos.current.x, y: ringPos.current.y })
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)
    const hoverElements = document.querySelectorAll("a, button, .hoverable")
    hoverElements.forEach(el => {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    })

    return () => {
      window.removeEventListener("mousemove", move)
      cancelAnimationFrame(rafRef.current)
      hoverElements.forEach(el => {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      })
      media.removeEventListener("change", applyEnabled)
    }
  }, [])

  if (!enabled) {
    return null
  }

  return (
    <>
      <motion.div
        style={{
          position: "fixed", top: pos.y - 6, left: pos.x - 6,
          width: 12, height: 12,
          background: "var(--accent)",
          borderRadius: "50%",
          pointerEvents: "none", zIndex: 9999,
          mixBlendMode: "screen",
          scale: hovered ? 2.5 : 1,
          transition: "scale 0.15s ease",
        }}
      />
      <div style={{
        position: "fixed",
        top: ringState.y - 18,
        left: ringState.x - 18,
        width: 36, height: 36,
        border: `1px solid ${hovered ? "rgba(124,92,252,0.7)" : "rgba(124,92,252,0.35)"}`,
        borderRadius: "50%",
        pointerEvents: "none", zIndex: 9998,
        transform: hovered ? "scale(1.5)" : "scale(1)",
        transition: "border-color 0.2s, transform 0.2s",
      }} />
    </>
  )
}
