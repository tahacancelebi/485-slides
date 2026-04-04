"use client";

import SlideShell from "../shared/SlideShell";

export default function Slide03() {
  return (
    <SlideShell
      bgColor="#6b2fa0"
      texture="dots"
      slideNumber={3}
      slideNumberColor="#d4275e"
    >
      <div className="w-full h-full relative overflow-hidden" style={{ padding: "40px 48px" }}>
        {/* Top Left — Section label */}
        <div className="slide-content" style={{ position: "relative", zIndex: 10 }}>
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "22px",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            About Our Tools
          </span>
          <span
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "14px",
              color: "rgba(255,255,255,0.35)",
              marginLeft: "40px",
            }}
          >
            BBM485 Software Architectures
          </span>
        </div>

        {/* Top right — description text */}
        <div
          className="slide-content"
          style={{
            position: "absolute",
            top: "44px",
            right: "120px",
            maxWidth: "260px",
            fontFamily: "var(--font-general)",
            fontSize: "12px",
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.4)",
            textAlign: "right",
            zIndex: 10,
          }}
        >
          Three core tools power our analysis.<br />
          From metric extraction to statistical<br />
          processing to code smell detection,<br />
          each tool serves a critical role.
        </div>

        {/* MAIN CIRCLE — SciTools Understand (Marigold, largest) */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "55%",
            maxWidth: "620px",
            aspectRatio: "1",
            borderRadius: "50%",
            backgroundColor: "#d4a017",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "16px",
              fontWeight: 600,
              color: "#d4275e",
              letterSpacing: "1px",
            }}
          >
            TM
          </span>
          <h2
            style={{
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "clamp(40px, 5vw, 72px)",
              color: "#1a1a1a",
              lineHeight: 0.95,
              textAlign: "center",
              letterSpacing: "-2px",
              marginTop: "4px",
            }}
          >
            SciTools<br />Understand
          </h2>
          <p
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "15px",
              color: "rgba(0,0,0,0.5)",
              textAlign: "center",
              marginTop: "12px",
              lineHeight: 1.3,
            }}
          >
            Metric Extraction &<br />Dependency Graphs
          </p>
        </div>

        {/* SECOND CIRCLE — Python (Magenta, overlapping right) */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            right: "8%",
            width: "38%",
            maxWidth: "440px",
            aspectRatio: "1",
            borderRadius: "50%",
            backgroundColor: "#d4275e",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 4,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "clamp(32px, 4vw, 58px)",
              color: "#f5f0e8",
              lineHeight: 1,
              textAlign: "center",
              letterSpacing: "-1px",
            }}
          >
            Python
          </h2>
          <p
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "14px",
              color: "rgba(255,255,255,0.6)",
              textAlign: "center",
              marginTop: "10px",
              lineHeight: 1.3,
            }}
          >
            Pandas, Matplotlib, SciPy<br />
            Statistical analysis &<br />
            visualization
          </p>
        </div>

        {/* Arrow decorative */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            fontSize: "36px",
            color: "rgba(255,255,255,0.25)",
            zIndex: 5,
          }}
        >
          &#8599;
        </div>

        {/* THIRD CIRCLE — SonarQube (Dark Indigo, smaller, bottom-center) */}
        <div
          style={{
            position: "absolute",
            bottom: "8%",
            left: "35%",
            width: "24%",
            maxWidth: "280px",
            aspectRatio: "1",
            borderRadius: "50%",
            backgroundColor: "#2d1b69",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 5,
          }}
        >
          <span style={{ fontSize: "32px", color: "#c8a832" }}>&#10038;</span>
          <h2
            style={{
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "clamp(20px, 2.2vw, 34px)",
              color: "#f5f0e8",
              lineHeight: 1,
              textAlign: "center",
              marginTop: "8px",
            }}
          >
            SonarQube
          </h2>
          <p
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "13px",
              color: "rgba(255,255,255,0.45)",
              textAlign: "center",
              marginTop: "6px",
            }}
          >
            Code Smells
          </p>
        </div>

        {/* Bottom Left — Brand circles */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "48px",
            display: "flex",
            gap: "6px",
            zIndex: 10,
          }}
        >
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
              backgroundColor: "#d4275e",
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

        {/* Bottom right text */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            right: "48px",
            fontFamily: "var(--font-general)",
            fontSize: "12px",
            color: "rgba(255,255,255,0.3)",
            lineHeight: 1.5,
            textAlign: "right",
            zIndex: 10,
          }}
        >
          We used Python to process raw data<br />
          into visual distributions, allowing us<br />
          to spot architectural outliers easily.
        </div>
      </div>
    </SlideShell>
  );
}
