import { useEffect, useRef, useState } from "react"

const experience = [
  {
    role: "Network Engineer Registered Pre-Apprentice",
    company: "Proactive Network Consulting",
    period: "Dec 2025 – March 2026",
    bullets: [
      "Completed a Network Engineer Registered Pre-Apprenticeship focused on core networking fundamentals and real-world infrastructure skills. Gained hands-on experience with TCP/IP, subnetting, routing and switching, network security basics, and troubleshooting connectivity issues across simulated and live environments. Developed a strong foundation in configuring network devices and supporting reliable, secure systems.",
      "Configured and troubleshot network devices including routers, switches, and firewalls in both simulated and live environments, applying best practices for performance and security.",
      "Cisco, TCP/IP, AWS, Huntress, Azure, Wireshark, GNS3, Packet Tracer",
    ],
  },
  {
    role: "Student Consultant: negotiating Investments in start up companies",
    company: "The Build Fellowship",
    period: "Feb 2026 – April 2026",
    bullets: [
      "PyCanvas",
      "Served as a Student Consultant focused on evaluating and negotiating investments in early-stage startups. Conducted market and financial analysis, assessed risk and growth potential, and completed a mock negotiation with founders to practice deal structuring, valuation, and stakeholder alignment.",
      "Financial analysis, market research, deal structuring, valuation techniques",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "City College of San Francisco - Computer Science Department",
    period: "Jan 2026 – May 2026",
    bullets: [
      "PyCanvas",
      "Building scalable web application for a compressed 2D graphics engine",
      "React, Node.js, Python, WebAssembly",
    ],
  },
  {
    role: "HIIT Pilates Instructor",
    company: "BODYROK",
    period: "Jan 2026 – Present",
    bullets: [
      "Lead high-intensity Pilates classes focused on precision and performance",
      "Coach athletes and beginners through form, progression, and real-time adjustments",
    ],
  },
  {
    role: "IT/ IOT/ Web Dev Registered Pre-Apprentice",
    company: "<DEV/MISSION>",
    period: "Sept 2025 – Dec 2025",
    bullets: [
      "Completed a Registered Pre-Apprenticeship spanning IT, IoT, and Web Development, with hands-on experience across both hardware and software systems. Built a strong foundation in networking, device integration, and full-stack web fundamentals, while developing practical skills in troubleshooting, system configuration, and creating connected, user-facing applications.",
      "160+ hours of training in IT fundamentals, IoT concepts, and web development",
      "C++, JavaScript, HTML/CSS, Arduino, Linux",
    ],
  },
]

const education = [
  {
    degree: "Degree / Certification",
    school: "School or Institution",
    period: "Year – Year",
    detail: "Relevant coursework, honors, or focus area.",
  },
  {
    degree: "Degree / Certification",
    school: "School or Institution",
    period: "Year",
    detail: "Relevant coursework, honors, or focus area.",
  },
]

const labelStyle: React.CSSProperties = {
  fontFamily: "Titillium Web, sans-serif",
  fontSize: "0.75rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#fa0fcf",
  textShadow: "0 0 6px #fa0fcf",
  marginBottom: "1.5rem",
}

function TimelineDot() {
  return (
    <div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        background: "#0d4de3",
        boxShadow: "0 0 8px #0d4de3",
        flexShrink: 0,
        marginTop: "6px",
      }}
    />
  )
}

function ExperienceEntry({
  entry,
  visible,
  index,
}: {
  entry: (typeof experience)[0]
  visible: boolean
  index: number
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${0.1 + index * 0.12}s, transform 0.6s ease ${0.1 + index * 0.12}s`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <TimelineDot />
        <div
          style={{
            width: "1px",
            flexGrow: 1,
            background: "rgba(13, 77, 227, 0.25)",
          }}
        />
      </div>

      <div style={{ paddingBottom: "2rem" }}>
        <p
          style={{
            fontFamily: "Titillium Web, sans-serif",
            fontSize: "0.75rem",
            color: "#61d163",
            margin: "0 0 0.25rem 0",
            letterSpacing: "0.06em",
          }}
        >
          {entry.period}
        </p>
        <h4
          style={{
            fontFamily: "Bebas Neue, cursive",
            fontSize: "1.25rem",
            color: "#ede9e9",
            margin: "0 0 0.15rem 0",
            letterSpacing: "0.04em",
          }}
        >
          {entry.role}
        </h4>
        <p
          style={{
            fontFamily: "Titillium Web, sans-serif",
            fontSize: "0.85rem",
            color: "#7a77ff",
            margin: "0 0 0.75rem 0",
          }}
        >
          {entry.company}
        </p>
        <ul
          style={{
            margin: 0,
            paddingLeft: "1.1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.35rem",
          }}
        >
          {entry.bullets.map((b, i) => (
            <li
              key={i}
              style={{
                fontFamily: "Titillium Web, sans-serif",
                fontSize: "0.88rem",
                color: "#a09c9c",
                lineHeight: "1.6",
              }}
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function EducationEntry({
  entry,
  visible,
  index,
}: {
  entry: (typeof education)[0]
  visible: boolean
  index: number
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${0.3 + index * 0.12}s, transform 0.6s ease ${0.3 + index * 0.12}s`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <TimelineDot />
        <div
          style={{
            width: "1px",
            flexGrow: 1,
            background: "rgba(13, 77, 227, 0.25)",
          }}
        />
      </div>

      <div style={{ paddingBottom: "2rem" }}>
        <p
          style={{
            fontFamily: "Titillium Web, sans-serif",
            fontSize: "0.75rem",
            color: "#61d163",
            margin: "0 0 0.25rem 0",
            letterSpacing: "0.06em",
          }}
        >
          {entry.period}
        </p>
        <h4
          style={{
            fontFamily: "Bebas Neue, cursive",
            fontSize: "1.25rem",
            color: "#ede9e9",
            margin: "0 0 0.15rem 0",
            letterSpacing: "0.04em",
          }}
        >
          {entry.degree}
        </h4>
        <p
          style={{
            fontFamily: "Titillium Web, sans-serif",
            fontSize: "0.85rem",
            color: "#7a77ff",
            margin: "0 0 0.5rem 0",
          }}
        >
          {entry.school}
        </p>
        <p
          style={{
            fontFamily: "Titillium Web, sans-serif",
            fontSize: "0.88rem",
            color: "#a09c9c",
            lineHeight: "1.6",
            margin: 0,
          }}
        >
          {entry.detail}
        </p>
      </div>
    </div>
  )
}

export default function Resume() {
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
      id="resume"
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
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "3rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <h2
            style={{
              fontFamily: "Bebas Neue, cursive",
              fontSize: "3rem",
              margin: 0,
              textShadow: "0 0 10px #0d4de3",
              letterSpacing: "0.04em",
            }}
          >
            Resume
          </h2>
          <a
            href="#"
            style={{
              fontFamily: "Titillium Web, sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              padding: "0.45rem 1.2rem",
              border: "1px solid #0d4de3",
              borderRadius: "999px",
              color: "#ede9e9",
              textDecoration: "none",
              backgroundColor: "rgba(13, 77, 227, 0.08)",
              transition: "background 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(13, 77, 227, 0.25)"
              e.currentTarget.style.boxShadow = "0 0 12px #0d4de3"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(13, 77, 227, 0.08)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            Download PDF
          </a>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
          }}
        >
          <div>
            <p style={labelStyle}>Experience</p>
            {experience.map((entry, i) => (
              <ExperienceEntry
                key={i}
                entry={entry}
                visible={visible}
                index={i}
              />
            ))}
          </div>

          <div>
            <p style={labelStyle}>Education</p>
            {education.map((entry, i) => (
              <EducationEntry
                key={i}
                entry={entry}
                visible={visible}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
