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

const locData = [
  { range: "0-50", count: 310 },
  { range: "51-100", count: 135 },
  { range: "101-200", count: 105 },
  { range: "201-400", count: 68 },
  { range: "401-800", count: 35 },
  { range: "801-1500", count: 14 },
  { range: "1500+", count: 5 },
];

export default function Slide06() {
  return (
    <SlideShell
      bgColor="#1a535c"
      texture="dots"
      slideNumber={6}
      slideNumberColor="#f0a0b0"
    >
      <div className="w-full h-full relative" style={{ padding: "40px 48px" }}>
        {/* Top Section */}
        <div style={{ position: "relative", zIndex: 5 }}>
          <div className="flex items-baseline gap-6">
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontSize: "22px",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Q1 — Code Size
            </span>
          </div>

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
            Where Is the<br />
            Code <span style={{ color: "#f0a0b0" }}>Hiding?</span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-general)",
              fontSize: "14px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.4)",
              marginTop: "8px",
            }}
          >
            LOC Distribution across 672 classes
          </p>
        </div>

        {/* Bottom Area — Chart left, Stats right */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "48px",
            right: "48px",
            display: "flex",
            gap: "20px",
            zIndex: 5,
          }}
        >
          {/* Chart Card */}
          <div
            style={{
              flex: "1 1 60%",
              backgroundColor: "#f5f0e8",
              borderRadius: "16px",
              padding: "24px 20px 16px",
              minHeight: "280px",
            }}
          >
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={locData} barCategoryGap="18%">
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(0,0,0,0.08)"
                  vertical={false}
                />
                <XAxis
                  dataKey="range"
                  tick={{
                    fontFamily: "General Sans, sans-serif",
                    fontSize: 11,
                    fill: "rgba(0,0,0,0.45)",
                  }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{
                    fontFamily: "General Sans, sans-serif",
                    fontSize: 11,
                    fill: "rgba(0,0,0,0.35)",
                  }}
                  axisLine={false}
                  tickLine={false}
                />
                <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                  {locData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={index < 2 ? "#1a535c" : index < 5 ? "#2a7a85" : "#f0a0b0"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Stat Cards */}
          <div
            style={{
              flex: "0 0 clamp(180px, 18vw, 260px)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                backgroundColor: "#f5f0e8",
                borderRadius: "14px",
                padding: "20px 22px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "48px",
                  color: "#f0a0b0",
                  lineHeight: 1,
                }}
              >
                52
              </span>
              <p
                style={{
                  fontFamily: "var(--font-general)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "rgba(0,0,0,0.45)",
                  marginTop: "4px",
                }}
              >
                Median LOC
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#f5f0e8",
                borderRadius: "14px",
                padding: "20px 22px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "42px",
                  color: "#f0a0b0",
                  lineHeight: 1,
                }}
              >
                2,688
              </span>
              <p
                style={{
                  fontFamily: "var(--font-general)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "rgba(0,0,0,0.45)",
                  marginTop: "4px",
                }}
              >
                WorkflowEditor
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#f0a0b0",
                borderRadius: "14px",
                padding: "14px 18px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-clash)",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#1a535c",
                }}
              >
                75% of classes &lt; 111 LOC
              </span>
            </div>
          </div>
        </div>

        {/* Asterisk decorative */}
        <div
          style={{
            position: "absolute",
            top: "36px",
            right: "100px",
            fontSize: "42px",
            color: "#c8a832",
            zIndex: 5,
          }}
        >
          &#10038;
        </div>
      </div>
    </SlideShell>
  );
}
