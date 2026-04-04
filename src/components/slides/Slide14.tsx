"use client";

import SlideShell from "../shared/SlideShell";

export default function Slide14() {
  return (
    <SlideShell
      bgColor="#e63946"
      texture="none"
      slideNumber={14}
      slideNumberColor="#f5f0e8"
    >
      <div className="w-full h-full relative">
        {/* LEFT — Vermillion side */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "55%",
            height: "100%",
            zIndex: 2,
            padding: "40px 48px",
          }}
        >
          <div style={{ position: "relative", height: "100%" }}>
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontSize: "22px",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Architectural Smell
            </span>

            <h1
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "clamp(48px, 6.5vw, 100px)",
                lineHeight: 0.9,
                letterSpacing: "-3px",
                color: "#f5f0e8",
                marginTop: "28px",
              }}
            >
              Cyclic<br />
              <span style={{ color: "#1d3557" }}>Dependency</span>
            </h1>

            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "15px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.5,
                marginTop: "20px",
                maxWidth: "340px",
              }}
            >
              editor &#8596; ui.layout — Prevents<br />
              independent compilation and testing.<br />
              A fundamental layering violation.
            </p>

            {/* Bottom brand */}
            <div
              style={{
                position: "absolute",
                bottom: "36px",
                left: 0,
                display: "flex",
                gap: "6px",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  backgroundColor: "#1d3557",
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
                  backgroundColor: "rgba(255,255,255,0.2)",
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

        {/* RIGHT — Navy side */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "45%",
            height: "100%",
            backgroundColor: "#1d3557",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            padding: "40px",
          }}
        >
          {/* Top card */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "28px 32px",
              width: "100%",
              maxWidth: "300px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "64px",
                color: "#f5f0e8",
                lineHeight: 1,
              }}
            >
              105
            </span>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.45)",
                marginTop: "6px",
              }}
            >
              editor &#8594; layout
            </p>
          </div>

          {/* Bidirectional arrow */}
          <div
            style={{
              fontSize: "36px",
              color: "#a8dadc",
              lineHeight: 1,
            }}
          >
            &#8645;
          </div>

          {/* Bottom card */}
          <div
            style={{
              backgroundColor: "rgba(168,218,220,0.12)",
              borderRadius: "16px",
              padding: "28px 32px",
              width: "100%",
              maxWidth: "300px",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "64px",
                color: "#a8dadc",
                lineHeight: 1,
              }}
            >
              12
            </span>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.4)",
                marginTop: "6px",
              }}
            >
              layout &#8594; editor
            </p>
          </div>

          {/* Bottom text */}
          <p
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "12px",
              color: "rgba(255,255,255,0.2)",
              textAlign: "center",
              marginTop: "12px",
            }}
          >
            Bidirectional dependency creates<br />
            a compilation and testing barrier.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
