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

const lcomData = [
  { range: "0", count: 160 },
  { range: "1-10", count: 80 },
  { range: "11-50", count: 120 },
  { range: "51-200", count: 145 },
  { range: "201-1K", count: 110 },
  { range: "1K-5K", count: 42 },
  { range: "5K+", count: 15 },
];

export default function Slide11() {
  return (
    <SlideShell
      bgColor="#1d3557"
      texture="none"
      slideNumber={11}
      slideNumberColor="#e63946"
    >
      <div className="w-full h-full relative" style={{ padding: "40px 48px" }}>
        {/* LEFT — Navy side with headline */}
        <div style={{ maxWidth: "48%", position: "relative", zIndex: 5 }}>
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "22px",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            Q4 — Cohesion
          </span>

          <h1
            style={{
              fontFamily: "var(--font-clash)",
              fontWeight: 700,
              fontSize: "clamp(52px, 7vw, 110px)",
              lineHeight: 0.9,
              letterSpacing: "-3px",
              color: "#f5f0e8",
              marginTop: "20px",
            }}
          >
            Lack of<br />
            <span style={{ color: "#e63946" }}>Cohesion</span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "15px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.5,
              marginTop: "20px",
              maxWidth: "300px",
            }}
          >
            Methods share almost no data.<br />
            A &ldquo;Dumping Ground&rdquo; for logic<br />
            with no internal consistency.
          </p>

          {/* Bottom text */}
          <div
            style={{
              position: "absolute",
              bottom: "-200px",
              left: 0,
              fontFamily: "var(--font-general)",
              fontSize: "12px",
              color: "rgba(255,255,255,0.2)",
              lineHeight: 1.5,
            }}
          >
            LCOM measures how well methods<br />
            within a class relate to each other<br />
            through shared instance variables.
          </div>
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
          {/* Vermillion alarm card */}
          <div
            style={{
              backgroundColor: "#e63946",
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
                fontSize: "64px",
                color: "#f5f0e8",
                lineHeight: 1,
              }}
            >
              64.14%
            </span>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.65)",
                marginTop: "6px",
              }}
            >
              violate LCOM &gt; 1
            </p>
          </div>

          {/* Dark stat card */}
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: "16px",
              padding: "24px 28px",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", top: "16px", right: "20px", fontSize: "20px", color: "rgba(255,255,255,0.1)" }}>
              &#8599;
            </div>
            <span
              style={{
                fontFamily: "var(--font-clash)",
                fontWeight: 700,
                fontSize: "48px",
                color: "#a8dadc",
                lineHeight: 1,
              }}
            >
              7,690
            </span>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.4)",
                marginTop: "4px",
              }}
            >
              LCOM — WorkflowEditor
            </p>
          </div>

          {/* Chart card */}
          <div
            style={{
              backgroundColor: "#f1faee",
              borderRadius: "16px",
              padding: "18px 14px 10px",
            }}
          >
            <ResponsiveContainer width="100%" height={170}>
              <BarChart data={lcomData} barCategoryGap="12%">
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
                  {lcomData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={index < 2 ? "#1d3557" : "#e63946"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
