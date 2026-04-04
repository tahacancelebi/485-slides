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
      <div className="w-full h-full relative" style={{ padding: "2.5vh 3.5vw 2.5vh 3.5vw" }}>
        {/* ===== TOP BAR ===== */}
        <div className="flex items-baseline gap-6">
          <span
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "clamp(11px, 1.1vw, 16px)",
              fontWeight: 500,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.3px",
            }}
          >
            BBM485 Software Architectures
          </span>
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "clamp(16px, 1.7vw, 24px)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            T1 Report
          </span>
        </div>

        {/* ===== GIANT HEADLINE ===== */}
        <h1
          style={{
            fontFamily: "var(--font-clash)",
            fontWeight: 700,
            fontSize: "clamp(40px, 5.8vw, 100px)",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "#f5f0e8",
            marginTop: "1vh",
            maxWidth: "68%",
          }}
        >
          Concrete<br />
          Architecture<br />
          Evaluation:<br />
          <span style={{ color: "#f0a0b0" }}>KNIME<br />Workbench.</span>
        </h1>

        {/* ===== GOLD ASTERISK ===== */}
        <div
          style={{
            position: "absolute",
            top: "7vh",
            right: "14vw",
            fontSize: "clamp(32px, 3.5vw, 56px)",
            color: "#c8a832",
            lineHeight: 1,
            zIndex: 5,
          }}
        >
          &#10038;
        </div>

        {/* ===== RIGHT SIDE BODY TEXT ===== */}
        <div
          style={{
            position: "absolute",
            top: "12vh",
            right: "3.5vw",
            maxWidth: "18vw",
            fontFamily: "var(--font-general)",
            fontSize: "clamp(11px, 1.1vw, 16px)",
            fontWeight: 500,
            lineHeight: 1.45,
            color: "rgba(255,255,255,0.5)",
            textAlign: "left",
            zIndex: 5,
          }}
        >
          Analysis of Maintainability<br />
          via C&K and LOC Metrics<br />
          (T1 Report)
        </div>

        {/* ===== BOTTOM CARDS — ROW 1: Teal stat + Cream card ===== */}
        <div
          style={{
            position: "absolute",
            bottom: "8vh",
            left: "3.5vw",
            right: "3.5vw",
            display: "flex",
            gap: "1vw",
            zIndex: 5,
          }}
        >
          {/* Large teal stat card */}
          <div
            style={{
              flex: "1 1 60%",
              backgroundColor: "rgba(245,240,232,0.1)",
              borderRadius: "clamp(10px, 1.2vw, 18px)",
              padding: "2vh 2.5vw",
              display: "flex",
              alignItems: "center",
              gap: "2vw",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.3vw" }}>
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "clamp(36px, 4.5vw, 72px)",
                  color: "#f5f0e8",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                97.66
              </span>
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "clamp(22px, 2.8vw, 44px)",
                  color: "#f5f0e8",
                  lineHeight: 1,
                }}
              >
                KLOC
              </span>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 600,
                  fontSize: "clamp(12px, 1.15vw, 16px)",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.35,
                }}
              >
                Total codebase<br />
                analyzed across<br />
                672 classes
              </p>
              <p
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "clamp(11px, 1vw, 15px)",
                  color: "#c8a832",
                  marginTop: "0.3vh",
                }}
              >
                Java (Eclipse RCP)
              </p>
            </div>
          </div>

          {/* Cream info card */}
          <div
            style={{
              flex: "0 0 clamp(160px, 18vw, 260px)",
              backgroundColor: "#f5f0e8",
              borderRadius: "clamp(10px, 1.2vw, 18px)",
              padding: "1.8vh 1.5vw",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "1.2vh",
                right: "1vw",
                fontSize: "clamp(18px, 1.8vw, 28px)",
                color: "#e85d3a",
              }}
            >
              &#8599;
            </div>
            <p
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "clamp(13px, 1.3vw, 20px)",
                lineHeight: 1.3,
                color: "#1a535c",
                marginTop: "2vh",
              }}
            >
              C&K Metrics<br />
              Evaluation of<br />
              Maintainability<br />
              & Technical Debt.
            </p>
          </div>
        </div>

        {/* ===== BOTTOM ROW 2: Pink card + italic text + circles ===== */}
        {/* Pink stat badge */}
        <div
          style={{
            position: "absolute",
            bottom: "2vh",
            left: "3.5vw",
            backgroundColor: "#f0a0b0",
            borderRadius: "clamp(10px, 1.2vw, 18px)",
            padding: "1.2vh 2vw",
            display: "flex",
            alignItems: "center",
            gap: "1.2vw",
            zIndex: 5,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "clamp(26px, 3vw, 44px)",
              color: "#f5f0e8",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            672
          </span>
          <span
            style={{
              fontFamily: "var(--font-general)",
              fontWeight: 600,
              fontSize: "clamp(11px, 1.05vw, 15px)",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.3,
            }}
          >
            Classes analyzed<br />
            for architecture quality.
          </span>
        </div>

        {/* Bottom italic text */}
        <div
          style={{
            position: "absolute",
            bottom: "2vh",
            left: "36vw",
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "clamp(10px, 0.95vw, 14px)",
            color: "rgba(255,255,255,0.35)",
            lineHeight: 1.55,
            maxWidth: "24vw",
            zIndex: 5,
          }}
        >
          Evaluating the concrete architecture of<br />
          KNIME Workbench through static analysis,<br />
          identifying structural weaknesses<br />
          and technical debt hotspots.
        </div>

        {/* ===== TEAM CIRCLES ===== */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5vh",
            right: "3.5vw",
            display: "flex",
            gap: "0.4vw",
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: "clamp(28px, 2.8vw, 42px)",
              height: "clamp(28px, 2.8vw, 42px)",
              borderRadius: "50%",
              backgroundColor: "#f0a0b0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "clamp(11px, 1.1vw, 16px)",
              color: "#f5f0e8",
            }}
          >
            M
          </div>
          <div
            style={{
              width: "clamp(28px, 2.8vw, 42px)",
              height: "clamp(28px, 2.8vw, 42px)",
              borderRadius: "50%",
              backgroundColor: "#1a535c",
              border: "2px solid rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "clamp(11px, 1.1vw, 16px)",
              color: "#f5f0e8",
            }}
          >
            T
          </div>
          <div
            style={{
              width: "clamp(28px, 2.8vw, 42px)",
              height: "clamp(28px, 2.8vw, 42px)",
              borderRadius: "50%",
              backgroundColor: "#c8a832",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "clamp(11px, 1.1vw, 16px)",
              color: "#1a535c",
            }}
          >
            S
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
