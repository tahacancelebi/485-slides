"use client";

import SlideShell from "../shared/SlideShell";

export default function Slide17() {
  return (
    <SlideShell
      bgColor="#2d3436"
      texture="dots"
      slideNumber={17}
      slideNumberColor="#fdcb6e"
    >
      <div className="w-full h-full relative flex flex-col items-center justify-center" style={{ padding: "40px 48px" }}>
        {/* Course label top */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "48px",
            zIndex: 5,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "20px",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            BBM485 Software Architectures — 2025-2026 Spring
          </span>
        </div>

        {/* Giant centered headline */}
        <h1
          style={{
            fontFamily: "var(--font-clash)",
            fontWeight: 700,
            fontSize: "clamp(72px, 10vw, 160px)",
            lineHeight: 0.9,
            letterSpacing: "-4px",
            color: "#f5f0e8",
            textAlign: "center",
            zIndex: 5,
            position: "relative",
          }}
        >
          Questions<span style={{ color: "#fdcb6e" }}>?</span>
        </h1>

        {/* Team cards */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "48px",
            zIndex: 5,
            position: "relative",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Mert */}
          <div
            style={{
              backgroundColor: "#fdcb6e",
              borderRadius: "16px",
              padding: "22px 26px",
              width: "clamp(200px, 18vw, 260px)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "20px",
                color: "#2d3436",
                lineHeight: 1.2,
              }}
            >
              Mert Erg&uuml;n
            </p>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "12px",
                fontWeight: 600,
                color: "rgba(0,0,0,0.45)",
                marginTop: "6px",
                lineHeight: 1.4,
              }}
            >
              OSS selection, Tool setup,<br />
              Q1, Q2, Graph generation
            </p>
          </div>

          {/* Tahacan */}
          <div
            style={{
              backgroundColor: "#00b894",
              borderRadius: "16px",
              padding: "22px 26px",
              width: "clamp(200px, 18vw, 260px)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "20px",
                color: "#f5f0e8",
                lineHeight: 1.2,
              }}
            >
              Tahacan &Ccedil;elebi
            </p>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "12px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.55)",
                marginTop: "6px",
                lineHeight: 1.4,
              }}
            >
              GQM tree design, Q3 analysis,<br />
              Outlier identification
            </p>
          </div>

          {/* Serhat */}
          <div
            style={{
              backgroundColor: "#e17055",
              borderRadius: "16px",
              padding: "22px 26px",
              width: "clamp(200px, 18vw, 260px)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "20px",
                color: "#f5f0e8",
                lineHeight: 1.2,
              }}
            >
              Serhat Akbulut
            </p>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "12px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.55)",
                marginTop: "6px",
                lineHeight: 1.4,
              }}
            >
              Q4 analysis, Package aggregation,<br />
              Overall evaluation
            </p>
          </div>
        </div>

        {/* References */}
        <p
          style={{
            position: "absolute",
            bottom: "36px",
            left: "48px",
            right: "48px",
            fontFamily: "var(--font-general)",
            fontSize: "11px",
            color: "rgba(255,255,255,0.2)",
            textAlign: "center",
            zIndex: 5,
          }}
        >
          References: Chidamber &amp; Kemerer (1994), Basili (1994), KNIME GitHub
        </p>
      </div>
    </SlideShell>
  );
}
