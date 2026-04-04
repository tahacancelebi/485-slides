"use client";

import SlideShell from "../shared/SlideShell";

export default function Slide09() {
  return (
    <SlideShell
      bgColor="#6b2fa0"
      texture="none"
      slideNumber={9}
      slideNumberColor="#c8a832"
    >
      <div className="w-full h-full relative">
        {/* TOP LEFT — Purple area */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "48px",
            maxWidth: "55%",
            zIndex: 5,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "22px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Q3 — Behavioral Complexity
          </span>

          <h1
            style={{
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "clamp(48px, 6.5vw, 100px)",
              lineHeight: 0.9,
              letterSpacing: "-3px",
              color: "#f5f0e8",
              marginTop: "24px",
            }}
          >
            Response<br />
            for a Class
          </h1>

          <p
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "15px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.5,
              marginTop: "16px",
              maxWidth: "320px",
            }}
          >
            RFC measures behavioral reach —<br />
            how many methods can potentially<br />
            be invoked in response to a message.
          </p>

          {/* Asterisk */}
          <div style={{ fontSize: "42px", color: "#c8a832", marginTop: "24px" }}>
            &#10038;
          </div>
        </div>

        {/* BOTTOM RIGHT — Mint bleed corner */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "52%",
            height: "55%",
            backgroundColor: "#66e6c4",
            borderRadius: "40px 0 0 0",
            zIndex: 3,
          }}
        >
          <div style={{ padding: "36px 40px", position: "relative", height: "100%" }}>
            {/* Badge */}
            <div
              style={{
                backgroundColor: "rgba(0,0,0,0.12)",
                borderRadius: "10px",
                padding: "8px 16px",
                display: "inline-block",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-general)",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#1a1a1a",
                }}
              >
                2.68% exceed RFC &gt; 100
              </span>
            </div>

            {/* Giant stat */}
            <div style={{ marginTop: "12px" }}>
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "clamp(80px, 12vw, 150px)",
                  color: "#1a1a1a",
                  lineHeight: 0.85,
                  letterSpacing: "-4px",
                }}
              >
                531
              </span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "18px",
                color: "rgba(0,0,0,0.6)",
                marginTop: "6px",
              }}
            >
              RFC — WorkflowEditor
            </p>

            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "13px",
                fontWeight: 500,
                color: "rgba(0,0,0,0.4)",
                marginTop: "10px",
                lineHeight: 1.4,
                maxWidth: "320px",
              }}
            >
              WMC and RFC perfectly correlated —<br />
              confirming God Classes are complex<br />
              in every dimension.
            </p>

            {/* Arrow */}
            <div
              style={{
                position: "absolute",
                top: "24px",
                right: "32px",
                fontSize: "32px",
                color: "rgba(0,0,0,0.15)",
              }}
            >
              &#8599;
            </div>
          </div>
        </div>

        {/* Brand circles bottom left */}
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
              backgroundColor: "#66e6c4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "13px",
              color: "#1a1a1a",
            }}
          >
            E
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
