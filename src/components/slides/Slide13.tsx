"use client";

import SlideShell from "../shared/SlideShell";

export default function Slide13() {
  return (
    <SlideShell
      bgColor="#0b0c10"
      texture="crosshatch"
      slideNumber={13}
      slideNumberColor="#66fcf1"
    >
      <div className="w-full h-full relative" style={{ padding: "40px 48px" }}>
        {/* Top section */}
        <div style={{ position: "relative", zIndex: 5 }}>
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "22px",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Architecture
          </span>

          <h1
            style={{
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "clamp(48px, 6vw, 90px)",
              lineHeight: 0.92,
              letterSpacing: "-3px",
              color: "#f5f0e8",
              marginTop: "12px",
            }}
          >
            Concrete<br />
            <span style={{ color: "#66fcf1" }}>Architecture</span>
          </h1>
        </div>

        {/* Image placeholder — centered */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -42%)",
            width: "clamp(400px, 55vw, 780px)",
            height: "clamp(280px, 38vh, 440px)",
            backgroundColor: "rgba(102,252,241,0.04)",
            border: "2px solid rgba(102,252,241,0.2)",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 4,
          }}
        >
          {/* Placeholder for the SciTools dependency graph image */}
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "48px", color: "rgba(102,252,241,0.3)" }}>
              &#10038;
            </div>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "14px",
                color: "rgba(255,255,255,0.25)",
                marginTop: "12px",
              }}
            >
              SciTools Understand —<br />
              Dependency Graph
            </p>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "11px",
                color: "rgba(255,255,255,0.15)",
                marginTop: "8px",
              }}
            >
              Place image at /public/images/dependency-graph.png
            </p>
          </div>
        </div>

        {/* Bottom annotation chips */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "48px",
            right: "48px",
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            zIndex: 5,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(102,252,241,0.1)",
              border: "1px solid rgba(102,252,241,0.25)",
              borderRadius: "10px",
              padding: "10px 20px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 600,
                fontSize: "14px",
                color: "#66fcf1",
              }}
            >
              core: utility base
            </span>
          </div>
          <div
            style={{
              backgroundColor: "rgba(69,162,158,0.1)",
              border: "1px solid rgba(69,162,158,0.25)",
              borderRadius: "10px",
              padding: "10px 20px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 600,
                fontSize: "14px",
                color: "#45a29e",
              }}
            >
              editor: central hub
            </span>
          </div>
          <div
            style={{
              backgroundColor: "rgba(197,198,199,0.08)",
              border: "1px solid rgba(197,198,199,0.2)",
              borderRadius: "10px",
              padding: "10px 20px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 600,
                fontSize: "14px",
                color: "#c5c6c7",
              }}
            >
              test: isolated
            </span>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
