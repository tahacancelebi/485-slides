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

const wmcData = [
  { range: "0-10", count: 270 },
  { range: "11-20", count: 145 },
  { range: "21-40", count: 110 },
  { range: "41-80", count: 62 },
  { range: "81-150", count: 18 },
  { range: "150+", count: 7 },
];

export default function Slide08() {
  return (
    <SlideShell
      bgColor="#1b1b2f"
      texture="none"
      slideNumber={8}
      slideNumberColor="#d4a017"
    >
      <div className="w-full h-full relative">
        {/* LEFT — Gold card half */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            backgroundColor: "#d4a017",
            zIndex: 2,
          }}
        >
          <div style={{ padding: "40px 40px", height: "100%", position: "relative" }}>
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontSize: "22px",
                color: "rgba(0,0,0,0.4)",
              }}
            >
              Q3 — Structural Complexity
            </span>

            {/* Giant stat */}
            <div style={{ marginTop: "24px" }}>
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "clamp(100px, 14vw, 180px)",
                  color: "#1b1b2f",
                  lineHeight: 0.85,
                  letterSpacing: "-5px",
                }}
              >
                576
              </span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "16px",
                fontWeight: 600,
                color: "rgba(0,0,0,0.5)",
                marginTop: "8px",
                lineHeight: 1.4,
              }}
            >
              Weighted Methods per Class
            </p>
            <p
              style={{
                fontFamily: "var(--font-general)",
                fontSize: "14px",
                fontWeight: 500,
                color: "rgba(0,0,0,0.35)",
                marginTop: "4px",
              }}
            >
              WorkflowEditor — by far the most<br />
              complex class in the codebase
            </p>

            {/* WMC Chart card */}
            <div
              style={{
                position: "absolute",
                bottom: "36px",
                left: "40px",
                right: "40px",
                backgroundColor: "#f5f0e8",
                borderRadius: "14px",
                padding: "16px 14px 10px",
              }}
            >
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={wmcData} barCategoryGap="16%">
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
                    {wmcData.map((_, index) => (
                      <Cell
                        key={index}
                        fill={index < 3 ? "#d4a017" : "#e23e57"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* RIGHT — Dark/Ink side */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            zIndex: 2,
            padding: "40px 48px",
          }}
        >
          <div style={{ height: "100%", position: "relative" }}>
            {/* Giant percentage */}
            <div style={{ marginTop: "80px" }}>
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "clamp(70px, 10vw, 140px)",
                  color: "#e23e57",
                  lineHeight: 0.9,
                  letterSpacing: "-3px",
                }}
              >
                12.65%
              </span>
              <p
                style={{
                  fontFamily: "var(--font-general)",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.45)",
                  marginTop: "12px",
                  lineHeight: 1.4,
                }}
              >
                of classes violate WMC &gt; 40
              </p>
            </div>

            {/* Cherry badge */}
            <div
              style={{
                backgroundColor: "#e23e57",
                borderRadius: "12px",
                padding: "16px 24px",
                display: "inline-block",
                marginTop: "28px",
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
                Practically Untestable
              </span>
            </div>

            {/* Asterisk */}
            <div
              style={{
                position: "absolute",
                bottom: "100px",
                right: "0",
                fontSize: "48px",
                color: "#d4a017",
              }}
            >
              &#10038;
            </div>

            {/* Arrow */}
            <div
              style={{
                position: "absolute",
                bottom: "40px",
                right: "0",
                fontSize: "36px",
                color: "rgba(255,255,255,0.15)",
              }}
            >
              &#8599;
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
