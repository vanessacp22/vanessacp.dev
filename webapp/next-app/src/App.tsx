import Particles from "./components/ui/particles"
import About from "./components/About"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact"

const navLinks = ["About", "Projects", "Portfolio", "Contact"]

export function App() {
  return (
    <div style={{ width: "100%", background: "#0a0a0a" }}>
      <div style={{ position: "relative", height: "100svh" }}>
      <nav
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 2.5rem",
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(10, 10, 10, 0.45)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <span
          style={{
            color: "#ede9e9",
            fontFamily: "Bebas Neue, cursive",
            fontSize: "1.4rem",
            letterSpacing: "0.05em",
            textShadow: "0 0 8px #0d4de3",
          }}
        >
          VP
        </span>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "2rem",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                style={{
                  color: "#ede9e9",
                  textDecoration: "none",
                  fontFamily: "Titillium Web, sans-serif",
                  fontSize: "0.95rem",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s, text-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  ;(e.target as HTMLAnchorElement).style.color = "#fa0fcf"
                  ;(e.target as HTMLAnchorElement).style.textShadow =
                    "0 0 8px #fa0fcf"
                }}
                onMouseLeave={(e) => {
                  ;(e.target as HTMLAnchorElement).style.color = "#ede9e9"
                  ;(e.target as HTMLAnchorElement).style.textShadow = "none"
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          pointerEvents: "none",
          gap: "1.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
          <h1
            style={{
              color: "#ede9e9",
              margin: 0,
              fontSize: "5rem",
              textShadow: "0 0 10px #0d4de3",
              fontFamily: "Bebas Neue, cursive",
            }}
          >
            Vanessa Perez
          </h1>
          <h2
            style={{
              color: "#ede9e9",
              margin: 0,
              fontSize: "1.5rem",
              textShadow: "0 0 10px #fa0fcf",
              marginTop: "5px",
              fontFamily: "Titillium Web, sans-serif",
            }}
          >
            Software Developer
          </h2>
        </div>

        <div
          style={{
            marginLeft: "-2rem",
            display: "flex",
            gap: "1rem",
            pointerEvents: "auto",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { label: "YouTube", href: "https://www.youtube.com/@nessythefinessyyy", glow: "#eb0fb7" },
            { label: "Instagram", href: "https://www.instagram.com/nessythefinessy/", glow: "#eb0fb7" },
            { label: "MindBody", href: "https://www.mindbodyonline.com/explore/fitness/instructors/vanessa-p-d05fb5eb", glow: "#eb0fb7" },
          ].map(({ label, href, glow }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#ede9e9",
                textDecoration: "none",
                fontFamily: "Titillium Web, sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                padding: "0.45rem 1.1rem",
                border: `1px solid ${glow}`,
                borderRadius: "999px",
                transition: "background 0.2s, box-shadow 0.2s",
                backgroundColor: "rgba(235, 15, 183, 0.08)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.backgroundColor = "rgba(235, 15, 183, 0.25)"
                el.style.boxShadow = `0 0 12px ${glow}`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.backgroundColor = "rgba(235, 15, 183, 0.08)"
                el.style.boxShadow = "none"
              }}
            >
              {label}
            </a>
          ))}

          <a
            href="https://www.linkedin.com/in/vanessa-perez-754375227/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#ede9e9",
              textDecoration: "none",
              fontFamily: "Titillium Web, sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              padding: "0.45rem 1.1rem",
              border: "1px solid #0d4de3",
              borderRadius: "999px",
              transition: "background 0.2s, box-shadow 0.2s",
              backgroundColor: "rgba(13, 77, 227, 0.08)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.backgroundColor = "rgba(13, 77, 227, 0.25)"
              el.style.boxShadow = "0 0 12px #0d4de3"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.backgroundColor = "rgba(13, 77, 227, 0.08)"
              el.style.boxShadow = "none"
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>
      <Particles
        particleColors={["#eb0fb7", "#05340f", "#61d163"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      </div>
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
