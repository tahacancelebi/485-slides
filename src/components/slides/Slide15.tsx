import React from 'react';

export default function OverallEvaluationSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  return (
    <div className="w-[100cqw] h-[100cqh] bg-[#C49A2D] relative overflow-hidden font-sans text-[#F4EFE2]">
      {/* === ORGANIC WAVE — dark curved section at bottom === */}
      <div className="absolute -bottom-[15cqh] left-[-8cqw] right-[-8cqw] h-[52cqh] bg-[#2D1A0A] rounded-t-[50%] z-[5] shadow-[0_-20px_60px_rgba(0,0,0,0.15)]">
        <div
          className="absolute inset-0 rounded-t-[50%] overflow-hidden pointer-events-none"
        >
          <div
            className="absolute inset-0 opacity-[0.3] mix-blend-multiply"
            style={noiseStyle}
          />
        </div>
      </div>

      {/* === TOP BAR === */}
      <div className="absolute top-[5cqh] left-[4cqw] font-serif italic text-[#2D1A0A] text-[3cqh] tracking-wide z-20">
        Overall Evaluation
      </div>
      <div className="absolute top-[5.5cqh] left-[30cqw] text-[#2D1A0A]/60 font-medium text-[1.8cqh] tracking-wide z-20">
        BBM485 · G05
      </div>
      <div className="absolute top-[5cqh] right-[4cqw] text-[#2D1A0A] font-bold text-[2.2cqh] tracking-widest z-20">
        /(15-D1*)
      </div>

      {/* === MAIN HEADING — on gold zone === */}
      <div className="absolute top-[14cqh] left-[4cqw] z-20">
        <h1 className="text-[11cqh] font-black leading-[0.78] tracking-tighter text-[#2D1A0A]">
          Mature But
          <br />
          <span className="text-[#F4EFE2]">Heavily Indebted.</span>
        </h1>
      </div>

      {/* Decorative + */}
      <div className="absolute top-[14cqh] right-[14cqw] text-[#2D1A0A] text-[8cqh] font-black z-20 leading-none">
        +
      </div>

      {/* Description on gold area */}
      <div className="absolute top-[38cqh] left-[4cqw] w-[36cqw] z-20">
        <p className="text-[1.7cqh] leading-[1.6] text-[#2D1A0A]/70 font-medium tracking-wide">
          KNIME Workbench Is A Functional, Mature Application
          <br />
          Yet It Carries A Heavy Burden Of Technical Debt
          <br />
          Concentrated In Specific Architectural Hotspots.
        </p>
      </div>

      {/* === FINDING PILLS — floating on the wave curve === */}
      <div className="absolute top-[50cqh] left-[4cqw] flex flex-wrap gap-[1.5cqh] z-20 w-[55cqw]">
        {[
          'God Class Pattern',
          'Low Cohesion (LCOM)',
          'Cyclic Dependency',
          'Healthy Inheritance',
          'Testability Risk',
        ].map((finding) => (
          <div
            key={finding}
            className="bg-[#F4EFE2] rounded-full px-[3cqh] py-[1.4cqh] text-[1.6cqh] font-bold tracking-tight text-[#2D1A0A] shadow-lg"
          >
            {finding}
          </div>
        ))}
      </div>

      {/* Stat on dark wave zone */}
      <div className="absolute bottom-[10cqh] left-[4cqw] z-20">
        <span className="text-[7cqh] font-black leading-none tracking-tighter text-[#C49A2D]">
          4
        </span>
        <span className="text-[2cqh] font-bold text-[#F4EFE2]/75 ml-[1.5cqw]">
          Core Findings Identified
        </span>
      </div>

      {/* Floating cream card on the right */}
      <div className="absolute top-[32cqh] right-[5cqw] bg-[#F4EFE2] rounded-[2.5cqh] px-[3cqh] py-[2.5cqh] shadow-2xl z-20 w-[22cqw]">
        <div className="absolute inset-0 rounded-[2.5cqh] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply" style={noiseStyle} />
        </div>
        <svg
          className="absolute top-[2cqh] right-[2cqh] w-[3cqh] h-[3cqh] text-[#C49A2D]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
        <div className="relative z-10">
          <span className="text-[#C49A2D] text-[4.5cqh] font-black leading-none tracking-tighter">
            64%
          </span>
          <p className="text-[#1A1A2E] text-[1.5cqh] font-bold leading-[1.25] mt-[1cqh] tracking-tight">
            Of Classes Violate
            <br />
            LCOM — Poor Encapsulation
            <br />
            At A System-Wide Scale
          </p>
        </div>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[5cqh] right-[4cqw] flex items-center z-20">
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#C49A2D] flex items-center justify-center font-black text-[3.2cqh] text-[#2D1A0A] shadow-lg z-10">
          O
        </div>
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#F4EFE2] flex items-center justify-center font-black text-[3.2cqh] text-[#2D1A0A] shadow-lg -ml-[1.8cqh] z-0">
          E
        </div>
      </div>

      {/* === TEXTURES === */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(45,26,10,0.08) 1.5px, transparent 1.5px)`,
          backgroundSize: '26px 26px',
        }}
      />
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.18] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}
