import Cursor from "./components/Cursor"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import FeaturedProject from "./components/FeaturedProject"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Recognition from "./components/Recognition"
import Contact from "./components/Contact"
import { data } from "./data/portfolio"

const Divider = () => (
  <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />
)

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <FeaturedProject />
      <Divider />
      <Projects />
      <Divider />
      <Education />
      <Divider />
      <Recognition />
      <Divider />
      <Contact />
      <footer style={{
        borderTop: "1px solid var(--border)",
        padding: "clamp(1.2rem, 4vw, 2rem) var(--section-x)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap",
        gap: "0.6rem 1.2rem",
        color: "var(--muted)", fontSize: "0.75rem",
      }}>
        <span>© 2025 {data.name}</span>
        <span>{data.email} · {data.phone}</span>
      </footer>
    </>
  )
}
