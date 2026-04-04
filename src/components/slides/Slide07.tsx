"use client";

import SlideShell from "../shared/SlideShell";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

const cboData = [
  { range: "0-5", count: 285 },
  { range: "6-10", count: 168 },
  { range: "11-14", count: 78 },
  { range: "15-25", count: 82 },
  { range: "26-50", count: 40 },
  { range: "51-100", count: 14 },
  { range: "100+", count: 5 },
];

export default function Slide07() {
  return (
    <SlideShell
      bgColor="#f5f0e8"
      texture="none"
      slideNumber={7}
      slideNumberColor="#c8553d"
    >
      <div className="w-full h-full relative" style={{ padding: "40px 48px" }}>
        {/* LEFT — Parchment side with headline */}
        <div style={{ maxWidth: "50%", position: "relative", zIndex: 5 }}>
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "22px",
              color: "rgba(0,0,0,0.35)",
            }}
          >
            Q2 — Coupling
          </span>

          <h1
            style={{
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "clamp(52px, 7vw, 110px)",
              lineHeight: 0.9,
              letterSpacing: "-3px",
              color: "#2c2c2c",
              marginTop: "20px",
            }}
          >
            The<br />
            Butterfly<br />
            <span style={{ color: "#c8553d" }}>Effect</span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "16px",
              fontWeight: 600,
              color: "rgba(0,0,0,0.4)",
              lineHeight: 1.5,
              marginTop: "20px",
              maxWidth: "300px",
            }}
          >
            A tiny change breaks 220 components.<br />
            CBO reveals hidden fragility in<br />
            tightly-coupled architectures.
          </p>
        </div>

        {/* RIGHT — Stacked cards */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "48px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "clamp(260px, 30vw, 400px)",
            zIndex: 5,
          }}
        >
          {/* Charcoal card with giant stat */}
          <div
            style={{
              backgroundColor: "#2c2c2c",
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
                color: "#c8553d",
                lineHeight: 1,
              }}
            >
              220
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
              CBO — WorkflowEditor
            </p>
          </div>

          {/* Rust card */}
          <div
            style={{
              backgroundColor: "#c8553d",
              borderRadius: "16px",
              padding: "24px 28px",
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
                fontSize: "42px",
                color: "#f5f0e8",
                lineHeight: 1,
              }}
            >
              21%
            </span>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.6)",
                marginTop: "4px",
              }}
            >
              violate CBO &gt; 14
            </p>
          </div>

          {/* Chart card */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "20px 16px 12px",
            }}
          >
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={cboData} barCategoryGap="14%">
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(0,0,0,0.06)"
                  vertical={false}
                />
                <XAxis
                  dataKey="range"
                  tick={{
                    fontFamily: "General Sans, sans-serif",
                    fontSize: 10,
                    fill: "rgba(0,0,0,0.4)",
                  }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{
                    fontFamily: "General Sans, sans-serif",
                    fontSize: 10,
                    fill: "rgba(0,0,0,0.3)",
                  }}
                  axisLine={false}
                  tickLine={false}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {cboData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={index < 3 ? "#d4a017" : "#c8553d"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom left accent */}
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
              backgroundColor: "#d4a017",
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

        {/* Bottom right text */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            right: "48px",
            fontFamily: "var(--font-general)",
            fontSize: "12px",
            color: "rgba(0,0,0,0.25)",
            textAlign: "right",
            zIndex: 5,
          }}
        >
          CBO measures the number of classes<br />
          a single class depends on. Higher CBO<br />
          means harder to maintain and test.
        </div>
      </div>
    </SlideShell>
  );
}
