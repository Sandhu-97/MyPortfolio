import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const ringPos = useRef({ x: 0, y: 0 })
  const [ringState, setRingState] = useState({ x: 0, y: 0 })
  const rafRef = useRef()

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", move)

    const animate = () => {
      ringPos.current.x += (pos.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.y - ringPos.current.y) * 0.12
      setRingState({ x: ringPos.current.x, y: ringPos.current.y })
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)
    document.querySelectorAll("a, button, .hoverable").forEach(el => {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    })

    return () => {
      window.removeEventListener("mousemove", move)
      cancelAnimationFrame(rafRef.current)
    }
  }, [pos.x, pos.y])

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
