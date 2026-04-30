import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Macro-Tracker",
    description:
      "A full-stack web application that allows users to track their daily macronutrient intake, set personalized goals, and visualize their progress through interactive charts and insights.",
    tags: ["React", "TypeScript"],
    href: "#",
  },
  {
    title: "PyCanvas",
    description:
      "A full-stack web application that allows users to create and share interactive Python visualizations in a compressed format.",
    tags: ["Python", "Node.js"],
    href: "#",
  },
  {
    title: "FitinSF",
    description:
      "Short description of what this project does and what problem it solves.",
    tags: ["C++", "Linux"],
    href: "#",
  },
]

function ProjectCard({
  project,
  index,
  visible,
}: {
  project: (typeof projects)[0]
  index: number
  visible: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s, box-shadow 0.3s ease`,
        borderRadius: "16px",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        cursor: "pointer",
        background: hovered
          ? "rgba(255, 255, 255, 0.06)"
          : "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: hovered
          ? "1px solid rgba(255, 255, 255, 0.15)"
          : "1px solid rgba(255, 255, 255, 0.07)",
        boxShadow: hovered
          ? "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 20px rgba(13, 77, 227, 0.12)"
          : "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* top-edge shine line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
          pointerEvents: "none",
        }}
      />

      <h3
        style={{
          fontFamily: "Bebas Neue, cursive",
          fontSize: "1.5rem",
          color: "#ede9e9",
          margin: 0,
          letterSpacing: "0.04em",
          textShadow: hovered ? "0 0 10px #0d4de3" : "none",
          transition: "text-shadow 0.3s ease",
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          fontFamily: "Titillium Web, sans-serif",
          fontSize: "0.9rem",
          lineHeight: "1.7",
          color: "#a09c9c",
          margin: 0,
          flexGrow: 1,
        }}
      >
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "Titillium Web, sans-serif",
              fontSize: "0.75rem",
              padding: "0.25rem 0.75rem",
              borderRadius: "999px",
              border: "1px solid rgba(250, 15, 207, 0.35)",
              backgroundColor: "rgba(250, 15, 207, 0.07)",
              color: "#c9c5c5",
              letterSpacing: "0.05em",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.href}
        style={{
          fontFamily: "Titillium Web, sans-serif",
          fontSize: "0.82rem",
          color: hovered ? "#fa0fcf" : "#7a77ff",
          textDecoration: "none",
          letterSpacing: "0.06em",
          transition: "color 0.3s ease",
          alignSelf: "flex-start",
        }}
      >
        View Project →
      </a>
    </div>
  )
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="projects"
      style={{
        background: "#0a0a0a",
        color: "#ede9e9",
        padding: "6rem 2.5rem",
        display: "flex",
        justifyContent: "center",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div style={{ maxWidth: "860px", width: "100%" }}>
        <h2
          style={{
            fontFamily: "Bebas Neue, cursive",
            fontSize: "3rem",
            margin: "0 0 2.5rem 0",
            textShadow: "0 0 10px #0d4de3",
            letterSpacing: "0.04em",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
