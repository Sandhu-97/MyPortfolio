import { motion } from "framer-motion"
import Reveal from "./Reveal"
import { data } from "../data/portfolio"

const links = [
  { label: "✉ Email", href: `mailto:${data.email}` },
  { label: "⌥ GitHub", href: data.github },
  { label: "in LinkedIn", href: data.linkedin },
  { label: "⚡ LeetCode", href: data.leetcode },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "var(--section-y) var(--section-x)", maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
      <Reveal><p style={sectionLabel}>// Contact</p></Reveal>
      <Reveal delay={0.1}>
        <h2 style={{
          fontFamily: "Syne, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "1.2rem", lineHeight: 1.1,
        }}>
          Let's build<br />something together.
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "2rem" }}>
          Open to internship opportunities, collaborations, and interesting engineering problems.
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
          {links.map((l, i) => (
            <a
              key={i} href={l.href} target="_blank" rel="noreferrer"
              className="hoverable"
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                padding: "0.6rem 1rem",
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: 4, fontSize: "0.78rem", color: "var(--muted)",
                textDecoration: "none", transition: "all 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.transform = "" }}
            >{l.label}</a>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.4}>
        <a
          href={`mailto:${data.email}`}
          className="hoverable"
          style={{
            display: "inline-block",
            padding: "0.9rem clamp(1.2rem, 6vw, 2.2rem)", background: "var(--accent)", color: "#fff",
            borderRadius: 4, fontFamily: "DM Mono, monospace",
            fontSize: "0.85rem", letterSpacing: "0.05em", textDecoration: "none",
            transition: "all 0.3s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#9575ff"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(124,92,252,0.4)" }}
          onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "" }}
        >Say Hello ↗</a>
      </Reveal>
    </section>
  )
}

const sectionLabel = { fontSize: "0.7rem", letterSpacing: "0.25em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "1rem" }
