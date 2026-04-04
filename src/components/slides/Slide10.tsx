"use client";

import SlideShell from "../shared/SlideShell";

export default function Slide10() {
  return (
    <SlideShell
      bgColor="#3c1518"
      texture="vignette"
      slideNumber={10}
      slideNumberColor="#d4af37"
    >
      <div className="w-full h-full relative flex items-center justify-center">
        {/* Concentric rings */}
        <div
          style={{
            position: "absolute",
            width: "80vmin",
            height: "80vmin",
            borderRadius: "50%",
            border: "1px solid rgba(212,175,55,0.08)",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "60vmin",
            height: "60vmin",
            borderRadius: "50%",
            border: "1.5px solid rgba(212,175,55,0.12)",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "40vmin",
            height: "40vmin",
            borderRadius: "50%",
            border: "2px solid rgba(212,175,55,0.18)",
            zIndex: 2,
          }}
        />

        {/* Center content */}
        <div style={{ textAlign: "center", zIndex: 5, position: "relative" }}>
          {/* Section label */}
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "20px",
              color: "rgba(245,240,232,0.35)",
            }}
          >
            Deep Dive
          </span>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "clamp(56px, 8vw, 120px)",
              lineHeight: 0.9,
              letterSpacing: "-3px",
              color: "#f5f0e8",
              marginTop: "16px",
            }}
          >
            The &ldquo;<span style={{ color: "#d4af37" }}>God Class</span>&rdquo;<br />
            Pattern
          </h1>

          {/* Class name chips */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              marginTop: "32px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(212,175,55,0.15)",
                border: "1px solid rgba(212,175,55,0.3)",
                borderRadius: "10px",
                padding: "10px 20px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#d4af37",
                }}
              >
                WorkflowEditor
              </span>
            </div>
            <div
              style={{
                backgroundColor: "rgba(245,240,232,0.06)",
                border: "1px solid rgba(245,240,232,0.12)",
                borderRadius: "10px",
                padding: "10px 20px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "rgba(245,240,232,0.6)",
                }}
              >
                NodeContainerEditPart
              </span>
            </div>
            <div
              style={{
                backgroundColor: "rgba(245,240,232,0.06)",
                border: "1px solid rgba(245,240,232,0.12)",
                borderRadius: "10px",
                padding: "10px 20px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "rgba(245,240,232,0.6)",
                }}
              >
                StyledTextEditor
              </span>
            </div>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "28px",
              justifyContent: "center",
              marginTop: "36px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "36px",
                  color: "#d4af37",
                  lineHeight: 1,
                }}
              >
                8
              </span>
              <p
                style={{
                  fontFamily: "var(--font-general)",
                  fontSize: "12px",
                  color: "rgba(245,240,232,0.35)",
                  marginTop: "4px",
                }}
              >
                Depth of<br />Nested Blocks
              </p>
            </div>
            <div
              style={{
                width: "1px",
                backgroundColor: "rgba(245,240,232,0.1)",
                alignSelf: "stretch",
              }}
            />
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "36px",
                  color: "#d4af37",
                  lineHeight: 1,
                }}
              >
                24
              </span>
              <p
                style={{
                  fontFamily: "var(--font-general)",
                  fontSize: "12px",
                  color: "rgba(245,240,232,0.35)",
                  marginTop: "4px",
                }}
              >
                Try-Catch<br />Blocks
              </p>
            </div>
            <div
              style={{
                width: "1px",
                backgroundColor: "rgba(245,240,232,0.1)",
                alignSelf: "stretch",
              }}
            />
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "36px",
                  color: "#d4af37",
                  lineHeight: 1,
                }}
              >
                166
              </span>
              <p
                style={{
                  fontFamily: "var(--font-general)",
                  fontSize: "12px",
                  color: "rgba(245,240,232,0.35)",
                  marginTop: "4px",
                }}
              >
                Fan-in<br />Count
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
