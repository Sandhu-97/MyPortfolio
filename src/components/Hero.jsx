import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { data } from "../data/portfolio"

export default function Hero() {
  const [displayed, setDisplayed] = useState("")
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const current = data.roles[roleIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setRoleIdx(r => (r + 1) % data.roles.length)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? 50 : 90)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, roleIdx])

  const containerVars = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  }
  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  }

  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", paddingTop: "8rem",
      paddingLeft: "8rem", paddingRight: "8rem",
      position: "relative", maxWidth: "100%", overflow: "hidden",
    }}>
      {/* Grid bg */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(124,92,252,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,252,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px", pointerEvents: "none",
        maskImage: "radial-gradient(ellipse at 70% 50%, black 30%, transparent 70%)",
      }} />
      {/* Orb */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", right: "10%", top: "50%", transform: "translateY(-50%)",
          width: 420, height: 420,
          background: "radial-gradient(circle, rgba(124,92,252,0.2) 0%, rgba(252,92,125,0.08) 50%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }}
      />

      <motion.div variants={containerVars} initial="hidden" animate="show" style={{ position: "relative", zIndex: 1 }}>
        <motion.p variants={itemVars} style={{
          fontSize: "0.75rem", letterSpacing: "0.2em", color: "var(--accent)",
          textTransform: "uppercase", marginBottom: "1.5rem",
        }}>
          // B.Tech CSE · LPU · GPA 8.97 · Open to Internships
        </motion.p>

        <motion.h1 variants={itemVars} style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
          fontWeight: 800, lineHeight: 0.95,
          letterSpacing: "-0.04em", marginBottom: "2rem",
        }}>
          {data.name}<br />
          <span style={{
            background: "linear-gradient(135deg, var(--accent), var(--accent2))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            {displayed}
            <span style={{ color: "var(--accent)", WebkitTextFillColor: "var(--accent)", animation: "blink 1s step-end infinite" }}>|</span>
          </span>
        </motion.h1>

        <motion.p variants={itemVars} style={{
          fontSize: "1rem", color: "var(--muted)", maxWidth: 520,
          lineHeight: 1.8, marginBottom: "1.5rem",
        }}>
          Building production-grade systems — from ML-powered APIs to mobile apps serving real farmers.
          Runner-up at LPU's Neural Nexus AI Hackathon out of 250+ participants.
        </motion.p>

        <motion.div variants={itemVars} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {data.badges.map((b, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: "0.4rem",
              padding: "0.35rem 0.9rem",
              background: "rgba(124,92,252,0.08)", border: "1px solid rgba(124,92,252,0.2)",
              borderRadius: 3, fontSize: "0.72rem", letterSpacing: "0.06em", color: "var(--accent)",
            }}>
              {b.icon} <span style={{ color: "var(--muted)" }}>{b.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVars} style={{ display: "flex", gap: "1rem" }}>
          <a href="#projects" style={btnPrimary}>View Projects</a>
          <a href={`mailto:${data.email}`} style={btnOutline}>Get In Touch</a>
        </motion.div>
      </motion.div>

      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </section>
  )
}

const btnPrimary = {
  padding: "0.9rem 2.2rem", background: "var(--accent)", color: "#fff",
  border: "none", borderRadius: 4,
  fontFamily: "DM Mono, monospace", fontSize: "0.85rem", letterSpacing: "0.05em",
  textDecoration: "none", transition: "all 0.3s ease", display: "inline-block",
}
const btnOutline = {
  padding: "0.9rem 2.2rem", background: "transparent", color: "var(--text)",
  border: "1px solid var(--border)", borderRadius: 4,
  fontFamily: "DM Mono, monospace", fontSize: "0.85rem", letterSpacing: "0.05em",
  textDecoration: "none", transition: "all 0.3s ease", display: "inline-block",
}
