"use client";

import SlideShell from "../shared/SlideShell";

export default function Slide02() {
  return (
    <SlideShell
      bgColor="#1a1a1a"
      texture="none"
      slideNumber={2}
      slideNumberColor="#e85d3a"
    >
      <div className="w-full h-full flex">
        {/* LEFT — Coral Side */}
        <div
          className="relative"
          style={{
            width: "52%",
            height: "100%",
            backgroundColor: "#e85d3a",
            padding: "40px 44px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top label */}
          <span
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(0,0,0,0.35)",
            }}
          >
            BBM485 Software Architectures
          </span>

          {/* Section label */}
          <div style={{ marginTop: "24px" }}>
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontSize: "32px",
                color: "#1a1a1a",
                lineHeight: 1.15,
              }}
            >
              Product<br />Overview
            </p>
          </div>

          {/* Quote mark */}
          <div
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "64px",
              color: "rgba(0,0,0,0.15)",
              lineHeight: 0.5,
              marginTop: "32px",
              marginLeft: "200px",
            }}
          >
            &ldquo;
          </div>

          {/* Quote text */}
          <p
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "16px",
              fontWeight: 600,
              color: "rgba(0,0,0,0.65)",
              lineHeight: 1.4,
              marginTop: "12px",
              marginLeft: "200px",
              maxWidth: "220px",
            }}
          >
            Graphical front-end<br />
            (Eclipse RCP) for data<br />
            analysis workflows.
          </p>

          {/* Giant headline */}
          <div style={{ marginTop: "auto" }}>
            <h1
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "clamp(48px, 6.5vw, 96px)",
                lineHeight: 0.9,
                letterSpacing: "-3px",
                color: "#1a1a1a",
              }}
            >
              KNIME<br />
              Workbench<br />
              <span style={{ color: "#f5c842" }}>Is an Open</span><br />
              <span style={{ color: "#f5c842" }}>Source Tool.</span>
            </h1>
          </div>

          {/* Bottom text + em dash */}
          <div style={{ marginTop: "28px", display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "32px", height: "3px", backgroundColor: "#1a1a1a" }} />
            <span
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "12px",
                color: "rgba(0,0,0,0.45)",
                lineHeight: 1.4,
              }}
            >
              Java-Based Eclipse RCP<br />
              Platform for Data Analytics
            </span>
          </div>
        </div>

        {/* RIGHT — Navy Side */}
        <div
          className="relative texture-dots"
          style={{
            width: "48%",
            height: "100%",
            backgroundColor: "#2b2d8e",
            padding: "40px 36px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Brand circles + slide number area */}
          <div className="slide-content" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ display: "flex", gap: "6px" }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#e85d3a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "#f5f0e8",
                }}
              >
                M
              </div>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#c8a832",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "#1a1a1a",
                }}
              >
                T
              </div>
            </div>
          </div>

          {/* Big stat circle */}
          <div
            className="slide-content"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Percentage circle decoration */}
            <div
              style={{
                position: "absolute",
                top: "10%",
                right: "8%",
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                backgroundColor: "#e85d3a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#f5f0e8",
                }}
              >
                %
              </span>
            </div>

            {/* Main dark circle with stat */}
            <div
              style={{
                width: "clamp(200px, 22vw, 340px)",
                aspectRatio: "1",
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,0.25)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "clamp(60px, 8vw, 120px)",
                  color: "#f5f0e8",
                  lineHeight: 0.85,
                  letterSpacing: "-3px",
                }}
              >
                672
              </span>
              <p
                style={{
                  fontFamily: "var(--font-general)",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  textAlign: "center",
                  marginTop: "8px",
                  lineHeight: 1.3,
                }}
              >
                Classes Analyzed<br />
                In the KNIME Codebase.
              </p>
            </div>
          </div>

          {/* Bottom banner */}
          <div
            className="slide-content"
            style={{
              backgroundColor: "#f5c842",
              borderRadius: "12px",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "28px",
                color: "#2b2d8e",
                letterSpacing: "-1px",
              }}
            >
              97.66 KLOC
            </span>
            <span
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "13px",
                fontWeight: 600,
                color: "rgba(0,0,0,0.6)",
              }}
            >
              of Java source code
            </span>
          </div>

          {/* Bottom stat text */}
          <div className="slide-content" style={{ marginTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "clamp(32px, 4vw, 56px)",
                  color: "#f5c842",
                  lineHeight: 0.9,
                  letterSpacing: "-2px",
                }}
              >
                GNU GPL
              </span>
              <span
                style={{
                  fontFamily: "var(--font-general)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.4)",
                  display: "block",
                  marginTop: "4px",
                }}
              >
                Open Source License
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "22px",
                color: "#f5c842",
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
