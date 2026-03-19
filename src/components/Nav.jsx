import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const links = ["About", "Projects", "Education", "Recognition", "Contact"]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false)
      }
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="nav-shell"
    >
      <div style={{
        fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1.2rem",
        letterSpacing: "-0.02em",
        background: "linear-gradient(135deg, var(--accent), var(--accent2))",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
      }}>DS.dev</div>

      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        {open ? "✕" : "☰"}
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              style={{
                color: "var(--muted)", textDecoration: "none",
                fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase",
                transition: "color 0.3s",
              }}
              onClick={() => setOpen(false)}
              onMouseEnter={e => e.target.style.color = "var(--text)"}
              onMouseLeave={e => e.target.style.color = "var(--muted)"}
            >{l}</a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
