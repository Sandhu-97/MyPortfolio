import Reveal from "./Reveal"
import { data } from "../data/portfolio"

export default function About() {
  return (
    <section id="about" className="site-section">
      <div className="split-2" style={{ alignItems: "start" }}>
        <div>
          <Reveal><p style={sectionLabel}>// About Me</p></Reveal>
          <Reveal delay={0.1}>
            <h2 style={sectionTitle}>Engineer.<br />Builder.<br />Problem Solver.</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={bodyText}>
              B.Tech CSE student at Lovely Professional University (Expected May 2027) with a 8.97 GPA. I build things that actually ship — ML APIs, Flutter mobile apps used by real agricultural businesses, and Discord automation bots managing $10K+ prize pools.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p style={bodyText}>
              Currently sharpening DSA skills with 380+ problems solved on LeetCode, targeting top software engineering internships.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
              {data.skills.map((group, i) => (
                <div key={i}>
                  <p style={{ fontSize: "0.65rem", letterSpacing: "0.18em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "0.8rem" }}>
                    {group.group}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {group.items.map(s => (
                      <span key={s} className="hoverable" style={skillTag}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem" }}>
          {data.stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <StatCard number={s.number} label={s.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ number, label }) {
  return (
    <div
      className="hoverable"
      style={{
        background: "var(--card)", border: "1px solid var(--border)",
        padding: "clamp(1.25rem, 3vw, 2rem)", borderRadius: 8,
        transition: "transform 0.3s, border-color 0.3s",
        position: "relative", overflow: "hidden",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(124,92,252,0.3)"; e.currentTarget.querySelector(".bar").style.transform = "scaleX(1)" }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = ""; e.currentTarget.querySelector(".bar").style.transform = "scaleX(0)" }}
    >
      <div className="bar" style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(90deg, var(--accent), var(--accent2))",
        transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.3s",
      }} />
      <div style={{
        fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 8vw, 2.8rem)", fontWeight: 800,
        background: "linear-gradient(135deg, var(--accent), var(--accent2))",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        lineHeight: 1, marginBottom: "0.5rem",
      }}>{number}</div>
      <div style={{ fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.05em" }}>{label}</div>
    </div>
  )
}

const sectionLabel = { fontSize: "0.7rem", letterSpacing: "0.25em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "1rem" }
const sectionTitle = { fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "2rem", lineHeight: 1.1 }
const bodyText = { color: "var(--muted)", lineHeight: 1.9, fontSize: "0.9rem", marginBottom: "1.2rem" }
const skillTag = { padding: "0.35rem 0.8rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 2, fontSize: "0.72rem", letterSpacing: "0.04em", color: "var(--text)", display: "inline-block" }
