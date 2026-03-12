import { motion } from "framer-motion"

const links = ["About", "Projects", "Education", "Recognition", "Contact"]

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1.2rem 4rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "rgba(10,10,15,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{
        fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1.2rem",
        letterSpacing: "-0.02em",
        background: "linear-gradient(135deg, var(--accent), var(--accent2))",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
      }}>DS.dev</div>
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              style={{
                color: "var(--muted)", textDecoration: "none",
                fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase",
                transition: "color 0.3s",
              }}
              onMouseEnter={e => e.target.style.color = "var(--text)"}
              onMouseLeave={e => e.target.style.color = "var(--muted)"}
            >{l}</a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
