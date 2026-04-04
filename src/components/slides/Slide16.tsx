"use client";

import SlideShell from "../shared/SlideShell";

export default function Slide16() {
  return (
    <SlideShell
      bgColor="#0d1321"
      texture="none"
      slideNumber={16}
      slideNumberColor="#c5e84d"
    >
      <div className="w-full h-full relative" style={{ padding: "40px 48px" }}>
        {/* LEFT SIDE */}
        <div style={{ position: "absolute", left: "48px", top: "40px", maxWidth: "48%", zIndex: 5 }}>
          <div className="flex items-baseline gap-6">
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontSize: "22px",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Recommendations
            </span>
          </div>

          {/* Asterisk */}
          <div style={{ fontSize: "42px", color: "#c5e84d", lineHeight: 1, marginTop: "20px" }}>
            &#10038;
          </div>

          <p
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "15px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.5,
              marginTop: "16px",
              marginLeft: "100px",
              maxWidth: "240px",
            }}
          >
            How to reduce technical debt<br />
            and improve the architecture<br />
            for long-term maintainability.
          </p>
        </div>

        {/* Giant headline bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "48px",
            maxWidth: "48%",
            zIndex: 5,
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "clamp(40px, 5.5vw, 82px)",
              lineHeight: 0.9,
              letterSpacing: "-2px",
              color: "#f5f0e8",
            }}
          >
            Three Steps<br />
            to a <span style={{ color: "#c5e84d" }}>Cleaner<br />Architecture</span>
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

        {/* RIGHT — 3 Stacked Cards */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "48px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            width: "clamp(260px, 28vw, 380px)",
            zIndex: 5,
          }}
        >
          {/* Card 1 — Lime */}
          <div
            style={{
              backgroundColor: "#c5e84d",
              borderRadius: "16px",
              padding: "26px 28px",
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
                fontSize: "22px",
                color: "#0d1321",
                lineHeight: 1.2,
              }}
            >
              Decompose God Classes
            </p>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(0,0,0,0.5)",
                marginTop: "6px",
                lineHeight: 1.3,
              }}
            >
              Break down WorkflowEditor &#8594;<br />
              solve LOC, WMC, LCOM at once
            </p>
          </div>

          {/* Card 2 — Jade */}
          <div
            style={{
              backgroundColor: "#3aa68e",
              borderRadius: "16px",
              padding: "26px 28px",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", top: "16px", right: "20px", fontSize: "20px", color: "rgba(0,0,0,0.15)" }}>
              &#8599;
            </div>
            <p
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "22px",
                color: "#f5f0e8",
                lineHeight: 1.2,
              }}
            >
              Interface Segregation
            </p>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.55)",
                marginTop: "6px",
                lineHeight: 1.3,
              }}
            >
              Use interfaces to reduce CBO<br />
              coupling between modules
            </p>
          </div>

          {/* Card 3 — Royal */}
          <div
            style={{
              backgroundColor: "#4466cc",
              borderRadius: "16px",
              padding: "26px 28px",
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
                fontSize: "22px",
                color: "#f5f0e8",
                lineHeight: 1.2,
              }}
            >
              Dependency Inversion
            </p>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
                marginTop: "6px",
                lineHeight: 1.3,
              }}
            >
              Apply DIP to break the<br />
              editor &#8596; layout cycle
            </p>
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
            color: "rgba(255,255,255,0.25)",
            lineHeight: 1.5,
            maxWidth: "280px",
            zIndex: 6,
          }}
        >
          These three recommendations address<br />
          the root causes identified across<br />
          all four research questions.
        </div>
      </div>
    </SlideShell>
  );
}
