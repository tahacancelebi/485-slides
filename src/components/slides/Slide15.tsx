"use client";

import SlideShell from "../shared/SlideShell";

export default function Slide15() {
  return (
    <SlideShell
      bgColor="#264653"
      texture="dots"
      slideNumber={15}
      slideNumberColor="#e9c46a"
    >
      <div className="w-full h-full relative" style={{ padding: "40px 48px" }}>
        {/* Section label */}
        <div style={{ position: "relative", zIndex: 5 }}>
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "22px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Summary
          </span>
        </div>

        {/* Giant headline */}
        <h1
          style={{
            fontFamily: "var(--font-clash)",
            fontWeight: 700,
            fontSize: "clamp(44px, 6vw, 90px)",
            lineHeight: 0.92,
            letterSpacing: "-3px",
            color: "#f5f0e8",
            marginTop: "28px",
            maxWidth: "85%",
            position: "relative",
            zIndex: 5,
          }}
        >
          Functional Software.<br />
          <span style={{ color: "#e9c46a" }}>Heavy</span> Technical<br />
          Debt.
        </h1>

        {/* Bullet points */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "48px",
            right: "48px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            zIndex: 5,
          }}
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#e9c46a",
                flexShrink: 0,
                marginTop: "4px",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "16px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.4,
              }}
            >
              <span style={{ color: "#e9c46a", fontWeight: 700 }}>God Class pattern</span> — centralized responsibilities harm testability and maintainability
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#e9c46a",
                flexShrink: 0,
                marginTop: "4px",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "16px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.4,
              }}
            >
              <span style={{ color: "#e9c46a", fontWeight: 700 }}>Low cohesion</span> — 64% LCOM violations indicate poor encapsulation across the codebase
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#e9c46a",
                flexShrink: 0,
                marginTop: "4px",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "16px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.4,
              }}
            >
              <span style={{ color: "#e9c46a", fontWeight: 700 }}>Cyclic dependency</span> — breaks layered architecture at module level between editor and layout
            </p>
          </div>
        </div>

        {/* Brand circles */}
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
              backgroundColor: "#e9c46a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "13px",
              color: "#264653",
            }}
          >
            M
          </div>
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              backgroundColor: "#2a9d8f",
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
      </div>
    </SlideShell>
  );
}
