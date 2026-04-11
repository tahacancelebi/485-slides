import React from 'react';

export default function InheritanceSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  return (
    <div className="w-screen h-screen bg-[#3D4F2F] relative overflow-hidden font-sans text-[#F4EFE2]">
      {/* === TOP BAR === */}
      <div className="absolute top-[5vh] left-[4vw] font-serif italic text-[#B8D44E] text-[3vh] tracking-wide z-30">
        Q4 · Inheritance (DIT &amp; NOC)
      </div>
      <div className="absolute top-[5.5vh] left-[36vw] text-[#B8D44E]/60 font-medium text-[1.8vh] tracking-wide z-30">
        BBM485 · T2
      </div>
      <div className="absolute top-[5vh] right-[4vw] text-[#E8B83D] font-bold text-[2.2vh] tracking-widest z-30">
        /(12-D1*)
      </div>

      {/* === MAIN HEADING === */}
      <div className="absolute top-[14vh] left-[4vw] z-30 w-[44vw]">
        <h1 className="text-[10vh] font-black leading-[0.78] tracking-tighter">
          Finally,
          <br />
          <span className="text-[#B8D44E]">Good News.</span>
        </h1>
      </div>

      {/* Decorative + */}
      <div className="absolute top-[14vh] left-[46vw] text-[#E8B83D] text-[7vh] font-black z-30 leading-none">
        +
      </div>

      {/* === STAIRCASE BLOCKS === */}

      {/* Block 1 — Gold — DIT Mean */}
      <div className="absolute bottom-0 left-[6vw] w-[24vw] h-[42vh] bg-[#E8B83D] rounded-t-[3vh] z-10 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none" style={noiseStyle} />
        <div className="relative z-10 p-[3.5vh] flex flex-col justify-between h-full">
          <svg className="w-[3.5vh] h-[3.5vh] self-end text-[#3D4F2F]/40" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
          <div>
            <span className="text-[7vh] font-black leading-none tracking-tighter text-[#3D4F2F]">
              2.22
            </span>
            <p className="text-[#3D4F2F]/70 text-[1.6vh] font-bold leading-[1.2] mt-[1vh]">
              Mean DIT Across
              <br />
              672 Classes — Flat
            </p>
          </div>
        </div>
      </div>

      {/* Block 2 — Coral — Deep DIT count */}
      <div className="absolute bottom-0 left-[33vw] w-[24vw] h-[58vh] bg-[#E65C41] rounded-t-[3vh] z-10 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none" style={noiseStyle} />
        <div className="relative z-10 p-[3.5vh] flex flex-col justify-between h-full">
          <svg className="w-[3.5vh] h-[3.5vh] self-end text-[#F4EFE2]/40" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
          <div>
            <span className="text-[7vh] font-black leading-none tracking-tighter text-[#F4EFE2]">
              Only 1
            </span>
            <p className="text-[#F4EFE2]/75 text-[1.6vh] font-bold leading-[1.2] mt-[1vh]">
              Class Has DIT &gt; 5
              <br />
              Risk Is Localized
            </p>
          </div>
        </div>
      </div>

      {/* Block 3 — Cream — AbstractNodeAction NOC */}
      <div className="absolute bottom-0 left-[60vw] w-[26vw] h-[72vh] bg-[#F4EFE2] rounded-t-[3vh] z-10 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none" style={noiseStyle} />
        <div className="relative z-10 p-[3.5vh] flex flex-col justify-between h-full">
          <svg className="w-[3.5vh] h-[3.5vh] self-end text-[#3D4F2F]/30" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
          <div>
            <span className="text-[7vh] font-black leading-none tracking-tighter text-[#3D4F2F]">
              NOC 50
            </span>
            <p className="text-[#3D4F2F]/60 text-[1.6vh] font-bold leading-[1.2] mt-[1vh]">
              AbstractNodeAction —
              <br />
              Intentional Base Class
            </p>
          </div>
        </div>
      </div>

      {/* Description above blocks */}
      <div className="absolute top-[30vh] left-[4vw] w-[28vw] z-30">
        <p className="text-[1.7vh] leading-[1.6] text-[#F4EFE2]/70 font-medium tracking-wide">
          The Inheritance Structure Of KNIME Workbench Is
          <br />
          Actually Healthy And Flat — Only A Few Base Classes
          <br />
          Have Many Children By Intentional Design.
        </p>
      </div>

      {/* Logo circles */}
      <div className="absolute top-[42vh] left-[4vw] flex items-center z-30">
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#B8D44E] flex items-center justify-center font-black text-[3.2vh] text-[#3D4F2F] shadow-lg z-10">
          D
        </div>
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#E8B83D] flex items-center justify-center font-black text-[3.2vh] text-[#3D4F2F] shadow-lg -ml-[1.8vh] z-0">
          N
        </div>
      </div>

      {/* === TEXTURES === */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(244,239,219,0.07) 1.5px, transparent 1.5px)`,
          backgroundSize: '26px 26px',
        }}
      />
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.2] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}
