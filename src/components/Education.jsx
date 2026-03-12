import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Reveal from "./Reveal"
import { data } from "../data/portfolio"

const edu = data.education
const MIN_GPA = 7.5
const MAX_GPA = 10.0
const RANGE = MAX_GPA - MIN_GPA

function pct(gpa) {
  return ((gpa - MIN_GPA) / RANGE) * 100
}

const COLORS = ["#7c5cfc", "#9575ff", "#7c5cfc", "#fc5c7d", "#5cf8c8"]

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const maxGpa = Math.max(...edu.semesters.map(s => s.gpa))
  const minGpa = Math.min(...edu.semesters.map(s => s.gpa))

  return (
    <section id="education" style={{ padding: "7rem 4rem", maxWidth: 1200, margin: "0 auto" }}>
      <Reveal><p style={sectionLabel}>// Education</p></Reveal>
      <Reveal delay={0.1}><h2 style={sectionTitle}>Academic<br />Journey.</h2></Reveal>

      {/* Degree card */}
      <Reveal delay={0.2}>
        <div style={{
          background: "var(--card)", border: "1px solid var(--border)",
          borderRadius: 12, padding: "2rem 2.5rem",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginBottom: "3rem", flexWrap: "wrap", gap: "1.5rem",
        }}>
          <div>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              {edu.university} · {edu.location}
            </div>
            <div style={{ fontFamily: "Syne, sans-serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.3rem" }}>
              {edu.degree}
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Expected {edu.expected}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{
              fontFamily: "Syne, sans-serif", fontSize: "3rem", fontWeight: 800,
              background: "linear-gradient(135deg, var(--accent), var(--accent2))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}>{edu.cgpa}</div>
            <div style={{ fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.05em" }}>Cumulative GPA / 10.0</div>
          </div>
        </div>
      </Reveal>

      {/* GPA Chart */}
      <Reveal delay={0.3}>
        <div ref={ref} style={{
          background: "var(--card)", border: "1px solid var(--border)",
          borderRadius: 12, padding: "2.5rem",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "var(--accent)", textTransform: "uppercase" }}>
              Semester-wise GPA
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <span style={{ fontSize: "0.68rem", color: "var(--green)" }}>▲ Peak: {maxGpa}</span>
              <span style={{ fontSize: "0.68rem", color: "var(--accent2)" }}>▼ Low: {minGpa}</span>
            </div>
          </div>

          {/* Bar chart */}
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-end", height: 200, marginBottom: "1rem" }}>
            {edu.semesters.map((s, i) => {
              const height = pct(s.gpa)
              const isPeak = s.gpa === maxGpa
              const isLow = s.gpa === minGpa

              return (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", height: "100%", justifyContent: "flex-end" }}>
                  {/* GPA label */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    style={{
                      fontSize: "0.75rem", fontWeight: 700,
                      color: isPeak ? "var(--accent2)" : isLow ? "var(--accent2)" : "var(--text)",
                      fontFamily: "Syne, sans-serif",
                    }}
                  >{s.gpa}</motion.span>

                  {/* Bar */}
                  <div style={{ width: "100%", position: "relative", height: "160px", display: "flex", alignItems: "flex-end" }}>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${height}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: "easeOut" }}
                      style={{
                        width: "100%",
                        background: isPeak
                          ? "linear-gradient(180deg, var(--accent2), rgba(252,92,125,0.4))"
                          : isLow
                          ? "linear-gradient(180deg, rgba(124,92,252,0.5), rgba(124,92,252,0.15))"
                          : `linear-gradient(180deg, ${COLORS[i]}, rgba(124,92,252,0.2))`,
                        borderRadius: "4px 4px 0 0",
                        border: isPeak ? "1px solid rgba(252,92,125,0.4)" : "1px solid rgba(124,92,252,0.2)",
                        position: "relative",
                      }}
                    >
                      {isPeak && (
                        <div style={{
                          position: "absolute", top: -8, left: "50%", transform: "translateX(-50%)",
                          fontSize: "0.6rem", color: "var(--accent2)",
                        }}>★</div>
                      )}
                    </motion.div>
                  </div>

                  <span style={{ fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.05em" }}>{s.sem}</span>
                </div>
              )
            })}
          </div>

          {/* Y-axis labels */}
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem", display: "flex", justifyContent: "space-between" }}>
            {[7.5, 8.0, 8.5, 9.0, 9.5, 10.0].map(v => (
              <span key={v} style={{ fontSize: "0.62rem", color: "var(--muted)" }}>{v}</span>
            ))}
          </div>

          {/* Trend note */}
          <div style={{ marginTop: "1.5rem", padding: "1rem 1.2rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 6, fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.6 }}>
            <span style={{ color: "var(--accent)" }}>// note: </span>
            Peaked at <strong style={{ color: "var(--text)" }}>9.50</strong> in Sem 4. Cumulative GPA holds strong at <strong style={{ color: "var(--text)" }}>8.97</strong> across 5 semesters.
          </div>
        </div>
      </Reveal>
    </section>
  )
}

const sectionLabel = { fontSize: "0.7rem", letterSpacing: "0.25em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "1rem" }
const sectionTitle = { fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "2.5rem", lineHeight: 1.1 }
