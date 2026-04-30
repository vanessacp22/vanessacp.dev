import { useEffect, useRef, useState } from "react"

const skills = [
  "TypeScript",
  "React",
  "Python",
  "Node.js",
  "C++",
  "PostgreSQL",
  "Git",
  "Linux",
  "Shell Scripting",
]

const networkingSkills = ["Cisco", "TCP/IP", "AWS", "Huntress"]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="about"
      style={{
        background: "#0a0a0a",
        color: "#ede9e9",
        padding: "6rem 2.5rem",
        display: "flex",
        justifyContent: "center",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div style={{ maxWidth: "860px", width: "100%" }}>
        <h2
          style={{
            fontFamily: "Bebas Neue, cursive",
            fontSize: "3rem",
            margin: "0 0 2rem 0",
            textShadow: "0 0 10px #0d4de3",
            letterSpacing: "0.04em",
          }}
        >
          About Me
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Titillium Web, sans-serif",
                fontSize: "1rem",
                lineHeight: "1.8",
                color: "#c9c5c5",
                margin: "0 0 1.25rem 0",
              }}
            >
              ’m a full-stack developer focused on building systems that are
              fast, reliable, and built to scale. My work sits at the
              intersection of front-end performance and backend infrastructure,
              with a strong foundation in networking and systems design.
            </p>
            <p
              style={{
                fontFamily: "Titillium Web, sans-serif",
                fontSize: "1rem",
                lineHeight: "1.8",
                color: "#c9c5c5",
                margin: 0,
              }}
            >
              Outside of engineering, I teach HIIT Pilates at BODYROK—an
              environment that demands precision, adaptability, and real-time
              decision-making. That same mindset carries into how I build:
              iterate quickly, optimize aggressively, and execute under
              pressure. <br></br>
              <br></br> Whether it’s code or coaching, I’m focused on one
              thing—performance.
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "Titillium Web, sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#fa0fcf",
                  textShadow: "0 0 6px #fa0fcf",
                  margin: "0 0 1rem 0",
                }}
              >
                Tech Stack
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {skills.map((skill, i) => (
                  <span
                    key={`${skill}-${i}`}
                    style={{
                      fontFamily: "Titillium Web, sans-serif",
                      fontSize: "0.82rem",
                      padding: "0.35rem 0.9rem",
                      border: "1px solid rgba(13, 77, 227, 0.5)",
                      borderRadius: "999px",
                      backgroundColor: "rgba(13, 77, 227, 0.08)",
                      color: "#ede9e9",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "Titillium Web, sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#61d163",
                  textShadow: "0 0 6px #61d163",
                  margin: "1.5rem 0 1rem 0",
                }}
              >
                Networking Stack
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {networkingSkills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: "Titillium Web, sans-serif",
                      fontSize: "0.82rem",
                      padding: "0.35rem 0.9rem",
                      border: "1px solid rgba(97, 209, 99, 0.5)",
                      borderRadius: "999px",
                      backgroundColor: "rgba(97, 209, 99, 0.08)",
                      color: "#ede9e9",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
