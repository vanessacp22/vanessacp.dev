import { useEffect, useRef, useState } from "react"

type FormState = { name: string; email: string; message: string }
type Status = "idle" | "sending" | "sent" | "error"

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "rgba(255, 255, 255, 0.04)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
  padding: "0.75rem 1rem",
  color: "#ede9e9",
  fontFamily: "Titillium Web, sans-serif",
  fontSize: "0.95rem",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s, box-shadow 0.2s",
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<Status>("idle")
  const [focused, setFocused] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("https://formspree.io/f/mrejzowb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Failed")
      setStatus("sent")
      setForm({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  function borderStyle(field: string): React.CSSProperties {
    return {
      ...inputBase,
      borderColor:
        focused === field
          ? "rgba(13, 77, 227, 0.7)"
          : "rgba(255, 255, 255, 0.1)",
      boxShadow:
        focused === field ? "0 0 10px rgba(13, 77, 227, 0.25)" : "none",
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      style={{
        background: "#0a0a0a",
        color: "#ede9e9",
        padding: "6rem 2.5rem",
        display: "flex",
        justifyContent: "center",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div style={{ maxWidth: "560px", width: "100%" }}>

        <h2
          style={{
            fontFamily: "Bebas Neue, cursive",
            fontSize: "3rem",
            margin: "0 0 0.5rem 0",
            textShadow: "0 0 10px #0d4de3",
            letterSpacing: "0.04em",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          Get In Touch
        </h2>

        <p
          style={{
            fontFamily: "Titillium Web, sans-serif",
            fontSize: "0.95rem",
            color: "#a09c9c",
            lineHeight: "1.7",
            margin: "0 0 2.5rem 0",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}
        >
          Have a project in mind or just want to connect? Send me a message and
          I'll get back to you.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label
                htmlFor="name"
                style={{
                  fontFamily: "Titillium Web, sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#7a77ff",
                }}
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                style={borderStyle("name")}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label
                htmlFor="email"
                style={{
                  fontFamily: "Titillium Web, sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#7a77ff",
                }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                style={borderStyle("email")}
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label
              htmlFor="message"
              style={{
                fontFamily: "Titillium Web, sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#7a77ff",
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="What's on your mind?"
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              style={{ ...borderStyle("message"), resize: "vertical" }}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            style={{
              fontFamily: "Titillium Web, sans-serif",
              fontSize: "0.9rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.75rem 2rem",
              borderRadius: "999px",
              border: "1px solid #fa0fcf",
              backgroundColor:
                status === "sent"
                  ? "rgba(97, 209, 99, 0.15)"
                  : "rgba(250, 15, 207, 0.1)",
              borderColor:
                status === "sent" ? "#61d163" : "#fa0fcf",
              color: "#ede9e9",
              cursor: status === "sending" || status === "sent" ? "default" : "pointer",
              transition: "background 0.2s, box-shadow 0.2s, border-color 0.3s",
              alignSelf: "flex-start",
            }}
            onMouseEnter={(e) => {
              if (status === "idle")
                e.currentTarget.style.boxShadow = "0 0 16px #fa0fcf"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Message Sent ✓"
              : "Send Message"}
          </button>

          {status === "error" && (
            <p
              style={{
                fontFamily: "Titillium Web, sans-serif",
                fontSize: "0.85rem",
                color: "#ff6b6b",
                margin: 0,
              }}
            >
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
