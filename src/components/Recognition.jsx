import Reveal from "./Reveal"
import { data } from "../data/portfolio"

export default function Recognition() {
  return (
    <section id="recognition" className="site-section">
      <Reveal><p style={sectionLabel}>// Recognition</p></Reveal>
      <Reveal delay={0.1}><h2 style={sectionTitle}>Achievements &<br />Certifications.</h2></Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.2rem", marginBottom: "3.5rem" }}>
        {data.achievements.map((a, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div
              className="hoverable"
              style={{
                background: "var(--card)", border: "1px solid var(--border)",
                borderRadius: 8, padding: "clamp(1rem, 3vw, 1.5rem) clamp(1rem, 3vw, 2rem)",
                display: "flex", gap: "1.2rem", alignItems: "flex-start",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(124,92,252,0.3)"; e.currentTarget.style.transform = "translateY(-3px)" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "" }}
            >
              <div style={{ fontSize: "1.4rem", flexShrink: 0, marginTop: "0.1rem" }}>{a.icon}</div>
              <div>
                <div style={{ fontFamily: "Syne, sans-serif", fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.3rem" }}>{a.title}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--muted)", lineHeight: 1.5 }}>{a.sub}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p style={{ ...sectionLabel, marginBottom: "1.2rem" }}>// Certifications</p>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
        {data.certifications.map((c, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div
              className="hoverable"
              style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: 6, padding: "1.2rem 1.5rem", transition: "all 0.3s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(124,92,252,0.3)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
            >
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "0.4rem" }}>{c.issuer}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text)", lineHeight: 1.5 }}>{c.name}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

const sectionLabel = { fontSize: "0.7rem", letterSpacing: "0.25em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "1rem" }
const sectionTitle = { fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "2.5rem", lineHeight: 1.1 }
