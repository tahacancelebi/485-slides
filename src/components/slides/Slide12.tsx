"use client";

import SlideShell from "../shared/SlideShell";

export default function Slide12() {
  return (
    <SlideShell
      bgColor="#e8dcc8"
      texture="none"
      slideNumber={12}
      slideNumberColor="#2d4a3e"
    >
      <div className="w-full h-full relative" style={{ padding: "40px 48px" }}>
        {/* LEFT — Linen side */}
        <div style={{ maxWidth: "50%", position: "relative", zIndex: 5 }}>
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "22px",
              color: "rgba(0,0,0,0.35)",
            }}
          >
            Q4 — Inheritance
          </span>

          <h1
            style={{
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "clamp(52px, 7vw, 110px)",
              lineHeight: 0.9,
              letterSpacing: "-3px",
              color: "#2d4a3e",
              marginTop: "24px",
            }}
          >
            A Healthy<br />
            Flat Tree
          </h1>

          <p
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "16px",
              fontWeight: 600,
              color: "rgba(0,0,0,0.4)",
              lineHeight: 1.5,
              marginTop: "24px",
              maxWidth: "340px",
            }}
          >
            Not all news is bad. DIT averages 2.22.<br />
            Only 1 class exceeds depth of 5.<br />
            The inheritance tree is shallow and clean.
          </p>

          {/* Positive asterisk */}
          <div style={{ fontSize: "42px", color: "#2d4a3e", marginTop: "20px", opacity: 0.3 }}>
            &#10038;
          </div>
        </div>

        {/* RIGHT — Cards */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "48px",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            width: "clamp(240px, 26vw, 360px)",
            zIndex: 5,
          }}
        >
          {/* Forest card — DIT */}
          <div
            style={{
              backgroundColor: "#2d4a3e",
              borderRadius: "16px",
              padding: "28px 28px 24px",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", top: "16px", right: "20px", fontSize: "20px", color: "rgba(255,255,255,0.15)" }}>
              &#8599;
            </div>
            <span
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "72px",
                color: "#f5f0e8",
                lineHeight: 1,
              }}
            >
              2.22
            </span>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
                marginTop: "8px",
              }}
            >
              Mean DIT — Healthy
            </p>
          </div>

          {/* Terra card — NOC */}
          <div
            style={{
              backgroundColor: "#c8553d",
              borderRadius: "16px",
              padding: "28px 28px 24px",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", top: "16px", right: "20px", fontSize: "20px", color: "rgba(255,255,255,0.2)" }}>
              &#8599;
            </div>
            <span
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "56px",
                color: "#f5f0e8",
                lineHeight: 1,
              }}
            >
              NOC: 50
            </span>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.6)",
                marginTop: "8px",
              }}
            >
              AbstractNodeAction
            </p>
          </div>

          {/* Light info card */}
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.06)",
              borderRadius: "14px",
              padding: "18px 22px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "13px",
                fontWeight: 600,
                color: "rgba(0,0,0,0.45)",
                lineHeight: 1.4,
              }}
            >
              Shallow hierarchies reduce fragile<br />
              base class problems and improve<br />
              code comprehension.
            </p>
          </div>
        </div>

        {/* Brand circles */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "48px",
            display: "flex",
            gap: "6px",
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              backgroundColor: "#2d4a3e",
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
              backgroundColor: "#c8553d",
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
    </SlideShell>
  );
}
