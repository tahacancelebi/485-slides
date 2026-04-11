import React from 'react';

export default function LOCSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  const dotsStyle = {
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)`,
    backgroundSize: '26px 26px',
  };

  return (
    <div className="w-screen h-screen bg-[#1A3C2E] relative overflow-hidden font-sans">
      {/* === DIAGONAL SPLIT — Cream over forest green === */}
      <div
        className="absolute inset-0 bg-[#F4EFE2] z-[5]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 30%)' }}
      />

      {/* === TOP BAR (cream zone) === */}
      <div className="absolute top-[5vh] left-[4vw] font-serif italic text-[#1A3C2E] text-[3vh] tracking-wide z-20">
        Q1 · Code Size (LOC)
      </div>
      <div className="absolute top-[5.5vh] right-[22vw] text-[#D4A843] font-medium text-[1.8vh] tracking-wide z-20">
        BBM485 · T1
      </div>
      <div className="absolute top-[5vh] right-[4vw] text-[#E85D3A] font-bold text-[2.2vh] tracking-widest z-20">
        /(06-T1*)
      </div>

      {/* Decorative + on cream */}
      <div className="absolute top-[12vh] left-[20vw] text-[#E85D3A] text-[7vh] font-black z-20 leading-none">
        +
      </div>

      {/* === HERO STAT — Upper right on cream === */}
      <div className="absolute top-[13vh] right-[6vw] z-20 text-right">
        <div className="text-[#E85D3A] text-[18vh] font-black leading-[0.72] tracking-tighter">
          2,688
        </div>
        <p className="text-[#1A3C2E] text-[2.2vh] font-bold leading-[1.15] mt-[2vh] tracking-tight">
          Lines inside a single
          <br />
          class — WorkflowEditor
          <br />
          dominates the codebase
        </p>
      </div>

      {/* Small arrow accent on cream zone */}
      <div className="absolute top-[52vh] right-[8vw] z-20">
        <svg
          className="w-[5vh] h-[5vh] text-[#1A3C2E]/25"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H7M17 7V17"
          />
        </svg>
      </div>

      {/* === FLOATING GOLD CIRCLE — Straddling diagonal on green side === */}
      <div className="absolute top-[38vh] left-[12vw] w-[16vh] h-[16vh] rounded-full bg-[#D4A843] shadow-2xl z-30 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.35] mix-blend-multiply"
            style={noiseStyle}
          />
        </div>
        <div className="relative z-10 text-center">
          <span className="text-[6vh] font-black leading-none text-[#1A3C2E]">
            52
          </span>
          <span className="text-[1.8vh] font-bold text-[#1A3C2E] block -mt-[0.3vh]">
            median
          </span>
        </div>
      </div>

      {/* === FLOATING CORAL BADGE — On the diagonal line === */}
      <div className="absolute top-[50vh] left-[34vw] bg-[#E85D3A] rounded-[2.5vh] px-[3.5vh] py-[2.5vh] shadow-2xl z-30">
        <div className="absolute inset-0 rounded-[2.5vh] overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.3] mix-blend-multiply"
            style={noiseStyle}
          />
        </div>
        <div className="relative z-10 flex items-center gap-[2vw]">
          <span className="text-[5vh] font-black leading-none tracking-tighter text-[#F4EFE2]">
            52x
          </span>
          <span className="text-[1.4vh] font-bold text-[#F4EFE2]/85 tracking-tight leading-[1.2]">
            Larger than the
            <br />
            typical class in KNIME
          </span>
        </div>
      </div>

      {/* === MAIN HEADING — Lower left on green === */}
      <div className="absolute bottom-[14vh] left-[4vw] z-20">
        <h1 className="text-[12vh] font-black leading-[0.78] tracking-tighter text-[#F4EFE2]">
          One Class,
          <br />
          Endless
          <br />
          <span className="text-[#D4A843]">Merge Conflicts.</span>
        </h1>
      </div>

      {/* Bottom description on green */}
      <div className="absolute bottom-[5vh] left-[4vw] flex items-start gap-[1.5vw] z-20 w-[38vw]">
        <div className="w-[3vw] h-[3px] bg-[#D4A843] mt-[1vh] flex-shrink-0" />
        <p className="text-[1.6vh] leading-[1.65] text-[#F4EFE2]/80 font-medium tracking-wide">
          Nearly 2,700 Lines Of Code In A Single File Mean
          <br />
          Massive Cognitive Load For Every Reader And
          <br />
          Constant Merge Conflicts Between Team Members.
        </p>
      </div>

      {/* Logo circles on green zone — bottom right */}
      <div className="absolute bottom-[5vh] right-[4vw] flex items-center z-20">
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#1A3C2E] border-[3px] border-[#D4A843] flex items-center justify-center font-black text-[3.2vh] text-[#D4A843] shadow-lg z-10">
          L
        </div>
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#E85D3A] flex items-center justify-center font-black text-[3.2vh] text-[#F4EFE2] shadow-lg -ml-[1.8vh] z-0">
          O
        </div>
      </div>

      {/* === TEXTURE LAYERS === */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={dotsStyle}
      />
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.2] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}
