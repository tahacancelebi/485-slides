import React from 'react';

export default function CyclicDependencySlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  const dotsStyle = {
    backgroundImage: `radial-gradient(rgba(244,239,226,0.07) 1.2px, transparent 1.2px)`,
    backgroundSize: '28px 28px',
  };

  return (
    <div className="w-screen h-screen bg-[#2E1610] relative overflow-hidden font-sans text-[#F4EFE2]">
      {/* Ghost watermark 0 — bottom left */}
      <div className="absolute -bottom-[22vh] -left-[2vw] text-[90vh] font-black leading-none tracking-tighter text-[#F4EFE2]/[0.025] z-0 select-none">
        0
      </div>

      {/* === TOP BAR === */}
      <div className="absolute top-[5vh] left-[4vw] font-serif italic text-[#E8B83D] text-[3vh] tracking-wide z-20">
        Architectural Smell
      </div>
      <div className="absolute top-[5.5vh] left-[30vw] text-[#E65C41] font-medium text-[1.8vh] tracking-wide z-20">
        BBM485 · T1
      </div>
      <div className="absolute top-[5vh] right-[4vw] text-[#E8B83D] font-bold text-[2.2vh] tracking-widest z-20">
        /(14-T1*)
      </div>

      {/* === MAIN HEADING — Upper left === */}
      <div className="absolute top-[14vh] left-[4vw] z-20 w-[44vw]">
        <h1 className="text-[10.5vh] font-black leading-[0.8] tracking-tighter">
          Cyclic
          <br />
          Dependency
          <br />
          <span className="text-[#E8B83D]">Red Flag.</span>
        </h1>
        <p className="text-[1.5vh] font-bold text-[#F4EFE2]/50 tracking-[0.28em] uppercase mt-[2.5vh]">
          editor ⇄ ui.layout · Package Cycle
        </p>
      </div>

      {/* === SVG CYCLE DIAGRAM — right side, flat matte === */}
      <div className="absolute top-[15vh] right-[2vw] z-20 w-[50vw] h-[56vh]">
        <svg
          viewBox="0 0 560 460"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="arrowForward"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 12 6 L 0 12 z" fill="#E65C41" />
            </marker>
            <marker
              id="arrowReverse"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 12 6 L 0 12 z" fill="#5C8A5C" />
            </marker>
          </defs>

          {/* Dashed orbit — editorial guideline behind both nodes */}
          <ellipse
            cx="280"
            cy="230"
            rx="220"
            ry="150"
            fill="none"
            stroke="#F4EFE2"
            strokeOpacity="0.08"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
          <ellipse
            cx="280"
            cy="230"
            rx="235"
            ry="165"
            fill="none"
            stroke="#F4EFE2"
            strokeOpacity="0.04"
            strokeWidth="1"
          />

          {/* LEFT NODE — editor (cream) */}
          <circle cx="150" cy="230" r="100" fill="#F4EFE2" />
          <circle cx="150" cy="230" r="100" fill="none" stroke="#2E1610" strokeWidth="3" strokeOpacity="0.25" />
          <text
            x="150"
            y="215"
            textAnchor="middle"
            fill="#2E1610"
            fontSize="13"
            fontWeight="900"
            letterSpacing="3"
          >
            PACKAGE
          </text>
          <text
            x="150"
            y="252"
            textAnchor="middle"
            fill="#2E1610"
            fontSize="30"
            fontWeight="900"
          >
            editor
          </text>

          {/* RIGHT NODE — ui.layout (gold) */}
          <circle cx="410" cy="230" r="100" fill="#C49A2D" />
          <circle cx="410" cy="230" r="100" fill="none" stroke="#2E1610" strokeWidth="3" strokeOpacity="0.3" />
          <text
            x="410"
            y="215"
            textAnchor="middle"
            fill="#2E1610"
            fontSize="13"
            fontWeight="900"
            letterSpacing="3"
          >
            PACKAGE
          </text>
          <text
            x="410"
            y="252"
            textAnchor="middle"
            fill="#2E1610"
            fontSize="26"
            fontWeight="900"
          >
            ui.layout
          </text>

          {/* FORWARD ARROW — editor → ui.layout (top curve) */}
          <path
            d="M 236 170 Q 280 60 324 170"
            stroke="#E65C41"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            markerEnd="url(#arrowForward)"
          />
          {/* Forward label rect */}
          <rect x="248" y="42" width="64" height="30" fill="#E65C41" />
          <text
            x="280"
            y="63"
            textAnchor="middle"
            fill="#F4EFE2"
            fontSize="18"
            fontWeight="900"
          >
            105
          </text>
          <text
            x="280"
            y="92"
            textAnchor="middle"
            fill="#E65C41"
            fontSize="10"
            fontWeight="700"
            letterSpacing="2"
          >
            FORWARD DEPS
          </text>

          {/* REVERSE ARROW — ui.layout → editor (bottom curve) */}
          <path
            d="M 324 290 Q 280 400 236 290"
            stroke="#5C8A5C"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            markerEnd="url(#arrowReverse)"
          />
          {/* Reverse label rect */}
          <rect x="256" y="398" width="48" height="30" fill="#5C8A5C" />
          <text
            x="280"
            y="419"
            textAnchor="middle"
            fill="#F4EFE2"
            fontSize="18"
            fontWeight="900"
          >
            12
          </text>
          <text
            x="280"
            y="448"
            textAnchor="middle"
            fill="#5C8A5C"
            fontSize="10"
            fontWeight="700"
            letterSpacing="2"
          >
            REVERSE CALLS · BREAK THE LAYER
          </text>
        </svg>
      </div>

      {/* === ZERO BUILDS CALLOUT === */}
      <div className="absolute bottom-[22vh] left-[4vw] z-20 flex items-center gap-[2vh]">
        <span className="text-[#E65C41] text-[13vh] font-black leading-none tracking-tighter">
          0
        </span>
        <div className="border-l-[3px] border-[#E65C41]/60 pl-[1.8vh] py-[0.5vh]">
          <span className="text-[#F4EFE2] text-[2vh] font-black tracking-tight block">
            Independent Builds
          </span>
          <span className="text-[#F4EFE2]/55 text-[1.35vh] font-medium tracking-wide">
            Neither package can compile or ship alone
          </span>
        </div>
      </div>

      {/* === BREAK WITH DIP CHIP — bottom right, matte === */}
      <div className="absolute bottom-[16vh] right-[4vw] z-30">
        <div className="bg-[#F4EFE2] px-[3vh] py-[2vh] shadow-xl relative overflow-hidden border-l-[4px] border-[#E65C41]">
          <div
            className="absolute inset-0 opacity-[0.08] mix-blend-multiply pointer-events-none"
            style={noiseStyle}
          />
          <div className="relative z-10 flex items-center gap-[1.5vh]">
            <svg
              className="w-[3vh] h-[3vh] text-[#2E1610]"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <div>
              <span className="text-[#2E1610] text-[2.2vh] font-black tracking-tight block leading-none">
                Break With DIP
              </span>
              <span className="text-[#2E1610]/70 text-[1.25vh] font-bold tracking-[0.15em] uppercase mt-[0.5vh] block">
                Dependency Inversion Restores The Layer
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description bottom-left */}
      <div className="absolute bottom-[5vh] left-[4vw] flex items-start gap-[1.5vw] z-20 w-[44vw]">
        <div className="w-[3vw] h-[3px] bg-[#E8B83D] mt-[1vh] flex-shrink-0" />
        <p className="text-[1.6vh] leading-[1.6] text-[#F4EFE2]/75 font-medium tracking-wide">
          editor And ui.layout Form A Tight
          <br />
          Cycle — Neither Package Can
          <br />
          Compile Or Ship Independently.
        </p>
      </div>

      {/* Logo circles — bottom right */}
      <div className="absolute bottom-[5vh] right-[4vw] flex items-center z-20">
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#F4EFE2] flex items-center justify-center font-black text-[3.2vh] text-[#2E1610] shadow-lg z-10">
          C
        </div>
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#C49A2D] flex items-center justify-center font-black text-[3.2vh] text-[#2E1610] shadow-lg -ml-[1.8vh] z-0">
          D
        </div>
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 z-40 pointer-events-none" style={dotsStyle} />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.18] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}
