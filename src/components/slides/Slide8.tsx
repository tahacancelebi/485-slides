import React from 'react';

export default function GodClassSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  const dotsStyle = {
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px)`,
    backgroundSize: '24px 24px',
  };

  return (
    <div className="w-screen h-screen bg-[#0D0A13] relative overflow-hidden font-sans text-[#F4EFE2]">
      {/* Subtle violet radial glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_55%_48%,_rgba(124,58,237,0.1)_0%,_transparent_65%)]" />

      {/* === THE DIAMOND — Massive rotated square === */}
      <div className="absolute top-[46%] left-[54%] -translate-x-1/2 -translate-y-1/2 w-[52vh] h-[52vh] bg-[#7C3AED] rotate-45 rounded-[4vh] shadow-[0_0_120px_rgba(124,58,237,0.25)] z-10 overflow-hidden">
        {/* Diamond noise */}
        <div
          className="absolute inset-0 opacity-[0.3] mix-blend-multiply pointer-events-none"
          style={noiseStyle}
        />

        {/* Counter-rotated text inside diamond */}
        <div className="absolute inset-0 flex items-center justify-center -rotate-45 z-10">
          <h2 className="text-[10vh] font-black leading-[0.78] tracking-tighter text-center">
            GOD
            <br />
            CLASS
          </h2>
        </div>
      </div>

      {/* Hot pink accent circle — upper right of diamond */}
      <div className="absolute top-[10vh] right-[18vw] w-[16vh] h-[16vh] rounded-full bg-[#EC4899] shadow-2xl z-20 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.35] mix-blend-multiply"
            style={noiseStyle}
          />
        </div>
        <div className="relative z-10 text-center">
          <span className="text-[5vh] font-black leading-none text-[#F4EFE2] block">
            166
          </span>
          <span className="text-[1.3vh] font-bold text-[#F4EFE2]/90 tracking-wide">
            Fan-in
          </span>
        </div>
      </div>

      {/* Amber badge — lower left of diamond */}
      <div className="absolute bottom-[18vh] left-[22vw] w-[12vh] h-[12vh] rounded-full bg-[#F59E0B] shadow-xl z-20 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.4] mix-blend-multiply"
            style={noiseStyle}
          />
        </div>
        <div className="relative z-10 text-center">
          <span className="text-[4vh] font-black text-[#0D0A13] leading-none block">
            24
          </span>
          <span className="text-[1.1vh] font-bold text-[#0D0A13]/80 tracking-wide">
            try-catch
          </span>
        </div>
      </div>

      {/* === TOP BAR === */}
      <div className="absolute top-[5vh] left-[4vw] font-serif italic text-[#EC4899] text-[3vh] tracking-wide z-20">
        Deep Dive · Anti-Pattern
      </div>
      <div className="absolute top-[5.5vh] left-[26vw] text-[#F59E0B] font-medium text-[1.8vh] tracking-wide z-20">
        BBM485 · T1
      </div>
      <div className="absolute top-[5vh] right-[4vw] text-[#7C3AED] font-bold text-[2.2vh] tracking-widest z-20">
        /(10-T1*)
      </div>

      {/* Left side prompt */}
      <div className="absolute top-[20vh] left-[4vw] z-20 w-[24vw]">
        <p className="text-[2.8vh] font-bold leading-[1.1] tracking-tight">
          Three usual
          <br />
          suspects dominate
          <br />
          <span className="text-[#EC4899]">every metric.</span>
        </p>
      </div>

      {/* Right side suspects list */}
      <div className="absolute bottom-[24vh] right-[4vw] z-20 text-right w-[26vw]">
        <p className="text-[2.4vh] font-bold leading-[1.25] tracking-tight">
          <span className="text-[#F59E0B]">WorkflowEditor</span>
          <br />
          NodeContainerEditPart
          <br />
          StyledTextEditor
        </p>
        <span className="text-[#F4EFE2]/65 text-[1.6vh] font-medium mt-[1.5vh] block tracking-wide">
          Top LOC · CBO · WMC · RFC
        </span>
      </div>

      {/* Bottom left description */}
      <div className="absolute bottom-[8vh] left-[4vw] flex items-start gap-[1.5vw] z-20 w-[36vw]">
        <div className="w-[3vw] h-[3px] bg-[#F59E0B] mt-[1vh] flex-shrink-0" />
        <p className="text-[1.6vh] leading-[1.65] text-[#F4EFE2]/75 font-medium tracking-wide">
          WorkflowEditor Has A Fan-In Of 166, Depth-Of-8
          <br />
          Nested Blocks And 24 Try-Catch Blocks — A Central
          <br />
          Pillar That Desperately Needs Decomposition.
        </p>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[5vh] right-[4vw] flex items-center z-20">
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#7C3AED] flex items-center justify-center font-black text-[3.2vh] text-[#F4EFE2] shadow-lg z-10">
          G
        </div>
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#EC4899] flex items-center justify-center font-black text-[3.2vh] text-[#F4EFE2] shadow-lg -ml-[1.8vh] z-0">
          C
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
