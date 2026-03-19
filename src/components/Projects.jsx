import { useState } from "react"
import Reveal from "./Reveal"
import { data } from "../data/portfolio"

export default function Projects() {
  return (
    <section id="projects" className="site-section">
      <Reveal><p style={sectionLabel}>// Other Projects</p></Reveal>
      <Reveal delay={0.1}><h2 style={sectionTitle}>More things<br />I've shipped.</h2></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
        {data.projects.map((p, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project: p }) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="hoverable"
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect()
        setMousePos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 })
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--card)", border: `1px solid ${hovered ? "rgba(124,92,252,0.25)" : "var(--border)"}`,
        borderRadius: 10, padding: "clamp(1.1rem, 3vw, 2rem)",
        transform: hovered ? "translateY(-6px)" : "none",
        transition: "all 0.4s ease",
        display: "flex", flexDirection: "column",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Spotlight */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(124,92,252,0.08), transparent 60%)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.4s",
      }} />

      <span style={{
        display: "inline-block", fontSize: "0.65rem", letterSpacing: "0.15em",
        textTransform: "uppercase", color: "var(--accent)",
        background: "rgba(124,92,252,0.1)", padding: "0.25rem 0.7rem",
        borderRadius: 2, marginBottom: "1.2rem", alignSelf: "flex-start",
      }}>{p.tag}</span>

      <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.8rem", letterSpacing: "-0.02em" }}>{p.title}</h3>
      <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1.2rem", flex: 1 }}>{p.description}</p>

      <div style={{
        display: "inline-flex", alignItems: "center", gap: "0.5rem",
        fontSize: "0.72rem", color: "var(--green)",
        background: "rgba(74,222,128,0.07)", border: "1px solid rgba(74,222,128,0.15)",
        padding: "0.4rem 0.8rem", borderRadius: 3, marginBottom: "1.2rem", alignSelf: "flex-start",
      }}>{p.highlight}</div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1.2rem", borderTop: "1px solid var(--border)", marginTop: "auto" }}>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {p.stack.map(s => (
            <span key={s} style={{ fontSize: "0.65rem", padding: "0.2rem 0.6rem", background: "var(--surface)", borderRadius: 3, color: "var(--muted)" }}>{s}</span>
          ))}
        </div>
        <a href={p.github} target="_blank" rel="noreferrer"
          style={{ color: "var(--muted)", fontSize: "0.75rem", textDecoration: "none", letterSpacing: "0.05em", whiteSpace: "nowrap", marginLeft: "1rem" }}
          onMouseEnter={e => e.target.style.color = "var(--accent)"}
          onMouseLeave={e => e.target.style.color = "var(--muted)"}
        >GitHub ↗</a>
      </div>
    </div>
  )
}

const sectionLabel = { fontSize: "0.7rem", letterSpacing: "0.25em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "1rem" }
const sectionTitle = { fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "2.5rem", lineHeight: 1.1 }
