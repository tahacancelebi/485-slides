"use client";

import SlideShell from "../shared/SlideShell";

export default function Slide01() {
  return (
    <SlideShell
      bgColor="#1a535c"
      texture="dots"
      slideNumber={1}
      slideNumberColor="#e85d3a"
    >
      <div className="w-full h-full flex flex-col" style={{ padding: "40px 52px 36px 52px" }}>
        {/* Top Bar */}
        <div className="flex items-baseline gap-6" style={{ marginBottom: "8px" }}>
          <span
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.3px",
            }}
          >
            BBM485 Software Architectures
          </span>
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "20px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            T1 Report
          </span>
        </div>

        {/* Giant Headline */}
        <div style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "-20px" }}>
          <h1
            style={{
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "clamp(60px, 8.5vw, 130px)",
              lineHeight: 0.92,
              letterSpacing: "-3px",
              color: "#f5f0e8",
            }}
          >
            Concrete<br />
            Architecture<br />
            Evaluation:<br />
            <span style={{ color: "#f0a0b0" }}>KNIME</span><br />
            <span style={{ color: "#f0a0b0" }}>Workbench.</span>
          </h1>

          {/* Asterisk */}
          <div
            className="absolute"
            style={{
              top: "80px",
              right: "100px",
              fontSize: "52px",
              color: "#c8a832",
              lineHeight: 1,
            }}
          >
            &#10038;
          </div>

          {/* Right side description */}
          <div
            className="absolute"
            style={{
              top: "160px",
              right: "40px",
              maxWidth: "220px",
              fontFamily: "var(--font-general)",
              fontSize: "13px",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.5)",
              textAlign: "right",
            }}
          >
            Analysis of Maintainability<br />
            via C&K and LOC Metrics<br />
            (T1 Report)
          </div>
        </div>

        {/* Bottom Section — Stat Cards */}
        <div className="flex gap-3 items-end" style={{ marginTop: "auto" }}>
          {/* Big stat card */}
          <div
            style={{
              backgroundColor: "rgba(245,240,232,0.12)",
              borderRadius: "14px",
              padding: "24px 36px",
              display: "flex",
              alignItems: "baseline",
              gap: "20px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "62px",
                color: "#f0a0b0",
                lineHeight: 1,
                letterSpacing: "-2px",
              }}
            >
              97.66
            </span>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 600,
                  fontSize: "28px",
                  color: "#f0a0b0",
                  lineHeight: 1,
                }}
              >
                KLOC
              </span>
              <div
                style={{
                  fontFamily: "var(--font-general)",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.6)",
                  marginTop: "4px",
                }}
              >
                across 672 classes
              </div>
              <div
                style={{
                  fontFamily: "var(--font-general)",
                  fontSize: "12px",
                  color: "#c8a832",
                  marginTop: "2px",
                }}
              >
                Java (Eclipse RCP)
              </div>
            </div>
          </div>

          {/* Small cream card */}
          <div
            style={{
              backgroundColor: "#f5f0e8",
              borderRadius: "14px",
              padding: "20px 24px",
              maxWidth: "240px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "8px" }}>
              <span style={{ fontSize: "22px", color: "#e85d3a" }}>&#8599;</span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: 1.25,
                color: "#1a535c",
              }}
            >
              C&K Metrics<br />
              Evaluation of<br />
              Maintainability<br />
              & Technical Debt.
            </p>
          </div>

          {/* Bottom pink card */}
          <div
            className="absolute"
            style={{
              bottom: "36px",
              left: "52px",
              backgroundColor: "#f0a0b0",
              borderRadius: "14px",
              padding: "16px 28px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "36px",
                color: "#f5f0e8",
                letterSpacing: "-1px",
              }}
            >
              672
            </span>
            <span
              style={{
                fontFamily: "var(--font-general)",
                fontWeight: 600,
                fontSize: "14px",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.3,
              }}
            >
              Classes analyzed<br />
              for architecture quality.
            </span>
          </div>

          {/* Bottom right text */}
          <div
            className="absolute"
            style={{
              bottom: "36px",
              right: "200px",
              fontFamily: "var(--font-general)",
              fontSize: "12px",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.5,
              maxWidth: "280px",
            }}
          >
            Evaluating the concrete architecture of<br />
            KNIME Workbench through static analysis,<br />
            identifying structural weaknesses<br />
            and technical debt hotspots.
          </div>

          {/* Team initials */}
          <div
            className="absolute"
            style={{
              bottom: "36px",
              right: "52px",
              display: "flex",
              gap: "6px",
            }}
          >
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                backgroundColor: "#1a535c",
                border: "2px solid rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "13px",
                color: "#f5f0e8",
              }}
            >
              M
            </div>
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                backgroundColor: "#f0a0b0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "13px",
                color: "#f5f0e8",
              }}
            >
              T
            </div>
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                backgroundColor: "#c8a832",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "13px",
                color: "#1a535c",
              }}
            >
              S
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
