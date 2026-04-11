import React from 'react';

export default function OverallEvaluationSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  return (
    <div className="w-screen h-screen bg-[#C49A2D] relative overflow-hidden font-sans text-[#F4EFE2]">
      {/* === ORGANIC WAVE — dark curved section at bottom === */}
      <div className="absolute -bottom-[15vh] left-[-8vw] right-[-8vw] h-[52vh] bg-[#2D1A0A] rounded-t-[50%] z-[5] shadow-[0_-20px_60px_rgba(0,0,0,0.15)]">
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
      <div className="absolute top-[5vh] left-[4vw] font-serif italic text-[#2D1A0A] text-[3vh] tracking-wide z-20">
        Overall Evaluation
      </div>
      <div className="absolute top-[5.5vh] left-[30vw] text-[#2D1A0A]/60 font-medium text-[1.8vh] tracking-wide z-20">
        BBM485 · T1
      </div>
      <div className="absolute top-[5vh] right-[4vw] text-[#2D1A0A] font-bold text-[2.2vh] tracking-widest z-20">
        /(15-T1*)
      </div>

      {/* === MAIN HEADING — on gold zone === */}
      <div className="absolute top-[14vh] left-[4vw] z-20">
        <h1 className="text-[11vh] font-black leading-[0.78] tracking-tighter text-[#2D1A0A]">
          Mature But
          <br />
          <span className="text-[#F4EFE2]">Heavily Indebted.</span>
        </h1>
      </div>

      {/* Decorative + */}
      <div className="absolute top-[14vh] right-[14vw] text-[#2D1A0A] text-[8vh] font-black z-20 leading-none">
        +
      </div>

      {/* Description on gold area */}
      <div className="absolute top-[38vh] left-[4vw] w-[36vw] z-20">
        <p className="text-[1.7vh] leading-[1.6] text-[#2D1A0A]/70 font-medium tracking-wide">
          KNIME Workbench Is A Functional, Mature Application
          <br />
          Yet It Carries A Heavy Burden Of Technical Debt
          <br />
          Concentrated In Specific Architectural Hotspots.
        </p>
      </div>

      {/* === FINDING PILLS — floating on the wave curve === */}
      <div className="absolute bottom-[30vh] left-[4vw] flex flex-wrap gap-[1.5vh] z-20 w-[55vw]">
        {[
          'God Class Pattern',
          'Low Cohesion (LCOM)',
          'Cyclic Dependency',
          'Healthy Inheritance',
          'Testability Risk',
          'High Technical Debt',
        ].map((finding) => (
          <div
            key={finding}
            className="bg-[#F4EFE2] rounded-full px-[3vh] py-[1.4vh] text-[1.6vh] font-bold tracking-tight text-[#2D1A0A] shadow-lg"
          >
            {finding}
          </div>
        ))}
      </div>

      {/* Stat on dark wave zone */}
      <div className="absolute bottom-[10vh] left-[4vw] z-20">
        <span className="text-[7vh] font-black leading-none tracking-tighter text-[#C49A2D]">
          4
        </span>
        <span className="text-[2vh] font-bold text-[#F4EFE2]/75 ml-[1.5vw]">
          Core Findings Identified
        </span>
      </div>

      {/* Floating cream card on the right */}
      <div className="absolute top-[32vh] right-[5vw] bg-[#F4EFE2] rounded-[2.5vh] px-[3vh] py-[2.5vh] shadow-2xl z-20 w-[22vw]">
        <div className="absolute inset-0 rounded-[2.5vh] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply" style={noiseStyle} />
        </div>
        <svg
          className="absolute top-[2vh] right-[2vh] w-[3vh] h-[3vh] text-[#C49A2D]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
        <div className="relative z-10">
          <span className="text-[#C49A2D] text-[4.5vh] font-black leading-none tracking-tighter">
            64%
          </span>
          <p className="text-[#1A1A2E] text-[1.5vh] font-bold leading-[1.25] mt-[1vh] tracking-tight">
            Of Classes Violate
            <br />
            LCOM — Poor Encapsulation
            <br />
            At A System-Wide Scale
          </p>
        </div>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[5vh] right-[4vw] flex items-center z-20">
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#C49A2D] flex items-center justify-center font-black text-[3.2vh] text-[#2D1A0A] shadow-lg z-10">
          O
        </div>
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#F4EFE2] flex items-center justify-center font-black text-[3.2vh] text-[#2D1A0A] shadow-lg -ml-[1.8vh] z-0">
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
