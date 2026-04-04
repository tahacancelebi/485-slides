"use client";

import SlideShell from "../shared/SlideShell";

export default function Slide04() {
  return (
    <SlideShell
      bgColor="#0d1321"
      texture="dots"
      slideNumber={4}
      slideNumberColor="#e85d3a"
    >
      <div className="w-full h-full relative" style={{ padding: "40px 48px" }}>
        {/* Top Bar */}
        <div className="flex items-baseline gap-6" style={{ position: "relative", zIndex: 5 }}>
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "22px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Methodology
          </span>
          <span
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "14px",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            /(04-017)
          </span>
        </div>

        {/* LEFT SIDE — Asterisk + description + giant headline */}
        <div style={{ position: "absolute", left: "48px", top: "100px", maxWidth: "50%", zIndex: 5 }}>
          {/* Asterisk */}
          <div style={{ fontSize: "42px", color: "#c8a832", lineHeight: 1 }}>
            &#10038;
          </div>

          {/* Description text */}
          <p
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "15px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.4,
              marginTop: "20px",
              marginLeft: "100px",
              maxWidth: "240px",
            }}
          >
            Evaluate maintainability,<br />
            testability, and modifiability<br />
            from an architect&apos;s viewpoint.
          </p>
        </div>

        {/* GIANT HEADLINE — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "48px",
            maxWidth: "52%",
            zIndex: 5,
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "clamp(52px, 7.5vw, 115px)",
              lineHeight: 0.9,
              letterSpacing: "-3px",
              color: "#f5f0e8",
            }}
          >
            Goal<br />
            Question<br />
            <span style={{ color: "#c5e84d" }}>Metric</span>
          </h1>
        </div>

        {/* Brand circles bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "48px",
            display: "flex",
            gap: "6px",
            zIndex: 6,
          }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              backgroundColor: "#c5e84d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "13px",
              color: "#0d1321",
            }}
          >
            M
          </div>
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              backgroundColor: "#3aa68e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "13px",
              color: "#f5f0e8",
            }}
          >
            E
          </div>
        </div>

        {/* Bottom left text */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "140px",
            fontFamily: "var(--font-general)",
            fontSize: "12px",
            color: "rgba(255,255,255,0.3)",
            lineHeight: 1.5,
            maxWidth: "260px",
            zIndex: 6,
          }}
        >
          The GQM Approach structures our<br />
          analysis into Goal, Questions, and<br />
          Metrics for systematic evaluation.
        </div>

        {/* RIGHT — Stacked Metric Cards */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "48px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "clamp(260px, 28vw, 380px)",
            zIndex: 5,
          }}
        >
          {/* Q1 Card — Lime */}
          <div
            style={{
              backgroundColor: "#c5e84d",
              borderRadius: "16px",
              padding: "24px 28px",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", top: "16px", right: "20px", fontSize: "20px", color: "rgba(0,0,0,0.25)" }}>
              &#8599;
            </div>
            <p
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "20px",
                color: "#0d1321",
                lineHeight: 1.2,
              }}
            >
              Q1 — Size
            </p>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(0,0,0,0.55)",
                marginTop: "4px",
                lineHeight: 1.3,
              }}
            >
              LOC (Lines of Code)<br />
              How big are the classes?
            </p>
          </div>

          {/* Q2 Card — Jade */}
          <div
            style={{
              backgroundColor: "#3aa68e",
              borderRadius: "16px",
              padding: "24px 28px",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", top: "16px", right: "20px", fontSize: "20px", color: "rgba(0,0,0,0.2)" }}>
              &#8599;
            </div>
            <p
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "20px",
                color: "#f5f0e8",
                lineHeight: 1.2,
              }}
            >
              Q2 — Coupling
            </p>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.6)",
                marginTop: "4px",
                lineHeight: 1.3,
              }}
            >
              CBO (Coupling Between Objects)<br />
              How interconnected are they?
            </p>
          </div>

          {/* Q3 Card — Royal */}
          <div
            style={{
              backgroundColor: "#4466cc",
              borderRadius: "16px",
              padding: "24px 28px",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", top: "16px", right: "20px", fontSize: "20px", color: "rgba(255,255,255,0.2)" }}>
              &#8599;
            </div>
            <p
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "20px",
                color: "#f5f0e8",
                lineHeight: 1.2,
              }}
            >
              Q3 — Complexity
            </p>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.55)",
                marginTop: "4px",
                lineHeight: 1.3,
              }}
            >
              WMC & RFC<br />
              How complex is the logic?
            </p>
          </div>

          {/* Q4 Card — Lime dimmed */}
          <div
            style={{
              backgroundColor: "#c5e84d",
              borderRadius: "16px",
              padding: "24px 28px",
              position: "relative",
              opacity: 0.75,
            }}
          >
            <div style={{ position: "absolute", top: "16px", right: "20px", fontSize: "20px", color: "rgba(0,0,0,0.2)" }}>
              &#8599;
            </div>
            <p
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "20px",
                color: "#0d1321",
                lineHeight: 1.2,
              }}
            >
              Q4 — Structure & Cohesion
            </p>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(0,0,0,0.5)",
                marginTop: "4px",
                lineHeight: 1.3,
              }}
            >
              LCOM, DIT, NOC<br />
              How well-organized is the code?
            </p>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
