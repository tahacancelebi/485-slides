import React from 'react';

export default function WMCSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  return (
    <div className="w-screen h-screen bg-[#E87C5A] relative overflow-hidden font-sans text-[#F4EFE2]">
      {/* === CREAM SEMICIRCLE — anchored right edge === */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-[34vh] w-[70vh] h-[70vh] rounded-full bg-[#F4EFE2] shadow-[0_0_80px_rgba(0,0,0,0.12)] z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none"
          style={noiseStyle}
        />

        {/* Content inside the visible left half of semicircle */}
        <div className="absolute inset-0 flex flex-col justify-center pr-[38vh] pl-[6vh]">
          <span className="text-[#E87C5A] text-[1.6vh] font-bold tracking-[0.35em] uppercase">
            Worst Case
          </span>
          <div className="text-[#1A1A2E] text-[7vh] font-black leading-[0.8] tracking-tighter mt-[1.5vh]">
            Workflow
            <br />
            Editor
          </div>
          <div className="flex gap-[3vh] mt-[3vh]">
            <div>
              <span className="text-[#E87C5A] text-[3.5vh] font-black leading-none">
                576
              </span>
              <span className="text-[#1A1A2E]/55 text-[1.4vh] font-bold block mt-[0.3vh]">
                WMC
              </span>
            </div>
            <div>
              <span className="text-[#E87C5A] text-[3.5vh] font-black leading-none">
                12.65%
              </span>
              <span className="text-[#1A1A2E]/55 text-[1.4vh] font-bold block mt-[0.3vh]">
                Violate &gt;40
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* === TOP BAR === */}
      <div className="absolute top-[5vh] left-[4vw] font-serif italic text-[#F4EFE2] text-[3vh] tracking-wide z-20">
        Q3 · Structural Complexity (WMC)
      </div>
      <div className="absolute top-[5.5vh] left-[36vw] text-[#1A1A2E] font-medium text-[1.8vh] tracking-wide z-20">
        BBM485 · T1
      </div>
      <div className="absolute top-[5vh] right-[4vw] text-[#1A1A2E] font-bold text-[2.2vh] tracking-widest z-20">
        /(08-T1*)
      </div>

      {/* === MAIN HEADING === */}
      <div className="absolute top-[18vh] left-[4vw] z-20 w-[52vw]">
        <h1 className="text-[12vh] font-black leading-[0.78] tracking-tighter">
          Impossible
          <br />
          To <span className="text-[#1A1A2E]">Unit Test.</span>
        </h1>
      </div>

      {/* Asterisk */}
      <div className="absolute top-[16vh] left-[48vw] text-[#1A1A2E] text-[8vh] font-black z-20 leading-none">
        *
      </div>

      {/* === DARK FLOATING STAT CARD === */}
      <div className="absolute bottom-[28vh] left-[36vw] bg-[#1A1A2E] rounded-[2.5vh] px-[3vh] py-[2.5vh] shadow-2xl z-30 w-[17vw]">
        <div
          className="absolute inset-0 rounded-[2.5vh] overflow-hidden pointer-events-none"
        >
          <div
            className="absolute inset-0 opacity-[0.25] mix-blend-multiply"
            style={noiseStyle}
          />
        </div>
        <svg
          className="absolute top-[2vh] right-[2vh] w-[3vh] h-[3vh] text-[#F4EFE2]/40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H7M17 7V17"
          />
        </svg>
        <div className="relative z-10">
          <div className="text-[#E87C5A] text-[5vh] font-black leading-none tracking-tighter">
            &gt;40
          </div>
          <p className="text-[#F4EFE2]/80 text-[1.5vh] font-bold leading-[1.2] mt-[1vh]">
            Very-complex
            <br />
            class threshold
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="absolute bottom-[14vh] left-[4vw] flex items-start gap-[1.5vw] z-20 w-[40vw]">
        <div className="w-[3vw] h-[3px] bg-[#F4EFE2] mt-[1vh] flex-shrink-0" />
        <p className="text-[1.6vh] leading-[1.6] text-[#F4EFE2]/85 font-medium tracking-wide">
          A WMC Of 576 Means Hundreds Of If/Else Branches
          <br />
          And Loops — Making Full Path Coverage Practically
          <br />
          Impossible. These Classes Become Bug Hubs.
        </p>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[5vh] left-[4vw] flex items-center z-20">
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#1A1A2E] flex items-center justify-center font-black text-[3.2vh] text-[#F4EFE2] shadow-lg z-10">
          W
        </div>
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#F4EFE2] flex items-center justify-center font-black text-[3.2vh] text-[#E87C5A] shadow-lg -ml-[1.8vh] z-0">
          M
        </div>
      </div>

      {/* === TEXTURES === */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(244,239,219,0.1) 1.5px, transparent 1.5px)`,
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
