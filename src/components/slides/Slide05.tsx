"use client";

import SlideShell from "../shared/SlideShell";

export default function Slide05() {
  return (
    <SlideShell
      bgColor="#e85d3a"
      texture="none"
      slideNumber={5}
      slideNumberColor="#f5f0e8"
    >
      <div className="w-full h-full relative" style={{ padding: "40px 48px" }}>
        {/* LEFT SIDE — Coral */}
        <div style={{ position: "absolute", inset: 0, width: "55%", zIndex: 2 }}>
          <div style={{ padding: "40px 48px", height: "100%", position: "relative" }}>
            {/* Section Label */}
            <div className="flex items-baseline gap-4">
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                  fontSize: "22px",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                System Overview
              </span>
            </div>

            {/* Pull Quote */}
            <div
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontSize: "64px",
                color: "rgba(255,255,255,0.2)",
                lineHeight: 1,
                marginTop: "24px",
              }}
            >
              &ldquo;
            </div>

            {/* Body text */}
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "15px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.5,
                marginTop: "8px",
                maxWidth: "300px",
              }}
            >
              Medians are healthy. Max values<br />
              reveal severe outliers hiding<br />
              inside a well-structured codebase.
            </p>

            {/* Giant Headline */}
            <h1
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "clamp(44px, 5.5vw, 82px)",
                lineHeight: 0.92,
                letterSpacing: "-2px",
                color: "#f5f0e8",
                marginTop: "32px",
                maxWidth: "90%",
              }}
            >
              Most Classes<br />
              Are Well-<br />
              Designed.{" "}
              <span style={{ color: "#f5c842" }}>
                A Few Are<br />
                Catastrophic.
              </span>
            </h1>

            {/* Brand circles */}
            <div
              style={{
                position: "absolute",
                bottom: "36px",
                left: "48px",
                display: "flex",
                gap: "6px",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  backgroundColor: "#f5c842",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "13px",
                  color: "#1a1a1a",
                }}
              >
                M
              </div>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  backgroundColor: "#2b2d8e",
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
        </div>

        {/* RIGHT SIDE — Navy */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "45%",
            height: "100%",
            backgroundColor: "#2b2d8e",
            zIndex: 2,
          }}
        >
          <div style={{ padding: "60px 40px", height: "100%", position: "relative" }}>
            {/* Large stat circle */}
            <div
              style={{
                width: "clamp(200px, 22vw, 320px)",
                height: "clamp(200px, 22vw, 320px)",
                borderRadius: "50%",
                backgroundColor: "#1a1d5e",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                marginTop: "20px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "clamp(60px, 8vw, 120px)",
                  color: "#f5f0e8",
                  lineHeight: 1,
                }}
              >
                7,690
              </span>
              <span
                style={{
                  fontFamily: "var(--font-general)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.45)",
                  marginTop: "8px",
                  textAlign: "center",
                }}
              >
                Max LCOM<br />WorkflowEditor
              </span>
            </div>

            {/* Percentage accent */}
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "40px",
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "20px",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              %
            </div>

            {/* Yellow banner */}
            <div
              style={{
                position: "absolute",
                bottom: "80px",
                left: "40px",
                right: "40px",
                backgroundColor: "#f5c842",
                borderRadius: "12px",
                padding: "18px 24px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "22px",
                  color: "#1a1a1a",
                }}
              >
                672 Classes Analyzed
              </span>
            </div>

            {/* Bottom text */}
            <div
              style={{
                position: "absolute",
                bottom: "36px",
                left: "40px",
                fontFamily: "var(--font-general)",
                fontSize: "12px",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              Table 5 — System-Level Summary
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
