import { motion } from "framer-motion"
import Reveal from "./Reveal"
import { data } from "../data/portfolio"

const fp = data.featuredProject

export default function FeaturedProject() {
  return (
    <section className="site-section">
      <Reveal><p style={sectionLabel}>// Featured Project</p></Reveal>
      <Reveal delay={0.1}>
        <h2 style={sectionTitle}>The one that<br />went live.</h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          overflow: "hidden",
          position: "relative",
        }}>
          {/* Top accent bar */}
          <div style={{
            height: 3,
            background: "linear-gradient(90deg, var(--accent), var(--accent2), var(--accent3))",
          }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 0 }}>
            {/* Left — info */}
            <div style={{ padding: "clamp(1.25rem, 4vw, 3.5rem)", borderRight: "1px solid var(--border)" }}>
              <span style={{
                display: "inline-block", fontSize: "0.65rem", letterSpacing: "0.15em",
                textTransform: "uppercase", color: "var(--accent)",
                background: "rgba(124,92,252,0.1)", padding: "0.3rem 0.8rem",
                borderRadius: 2, marginBottom: "1.5rem",
              }}>{fp.tag}</span>

              <h3 style={{
                fontFamily: "Syne, sans-serif", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800,
                letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.2rem",
              }}>{fp.title}</h3>

              <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.85, marginBottom: "2rem" }}>
                {fp.description}
              </p>

              {/* Impact metrics */}
              <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
                {fp.impact.map((imp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{
                      textAlign: "center",
                      padding: "1rem 1.2rem",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 8, minWidth: 90,
                    }}
                  >
                    <div style={{
                      fontFamily: "Syne, sans-serif", fontSize: "1.8rem", fontWeight: 800,
                      background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                      lineHeight: 1, marginBottom: "0.3rem",
                    }}>{imp.metric}</div>
                    <div style={{ fontSize: "0.65rem", color: "var(--muted)", lineHeight: 1.4 }}>{imp.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Stack */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                {fp.stack.map(s => (
                  <span key={s} style={{
                    fontSize: "0.72rem", padding: "0.3rem 0.8rem",
                    background: "var(--surface)", border: "1px solid var(--border)",
                    borderRadius: 3, color: "var(--muted)",
                  }}>{s}</span>
                ))}
              </div>

              <a href={fp.github} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.8rem 1.8rem",
                background: "var(--accent)", color: "#fff",
                borderRadius: 4, fontFamily: "DM Mono, monospace",
                fontSize: "0.82rem", letterSpacing: "0.05em", textDecoration: "none",
              }}>View on GitHub ↗</a>
            </div>

            {/* Right — features visual */}
            <div style={{ padding: "clamp(1.25rem, 4vw, 3.5rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.18em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                Key Features
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {fp.features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    style={{
                      display: "flex", alignItems: "center", gap: "1rem",
                      padding: "1rem 1.2rem",
                      background: "var(--surface)", border: "1px solid var(--border)",
                      borderRadius: 6,
                    }}
                  >
                    <span style={{
                      width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                      background: "rgba(124,92,252,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.65rem", color: "var(--accent)", fontWeight: 700,
                    }}>{i + 1}</span>
                    <span style={{ fontSize: "0.82rem", color: "var(--text)" }}>{f}</span>
                  </motion.div>
                ))}
              </div>

              {/* Live users badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  marginTop: "2rem", padding: "1rem 1.5rem",
                  background: "rgba(74,222,128,0.07)", border: "1px solid rgba(74,222,128,0.2)",
                  borderRadius: 8, display: "flex", alignItems: "center", gap: "0.8rem",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>🌾</span>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "var(--green)", fontWeight: 500 }}>Live in Production</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--muted)" }}>70+ farmers & staff using it daily in Punjab</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

const sectionLabel = { fontSize: "0.7rem", letterSpacing: "0.25em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "1rem" }
const sectionTitle = { fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "2.5rem", lineHeight: 1.1 }
