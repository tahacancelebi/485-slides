import React from 'react';

export default function CyclicDependencySlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  return (
    <div className="w-screen h-screen bg-[#E8A87C] relative overflow-hidden font-sans">
      {/* === ANGULAR DARK SECTION — diagonal clip-path from right === */}
      <div
        className="absolute inset-0 bg-[#1A1A2E] z-[5]"
        style={{ clipPath: 'polygon(48% 0, 100% 0, 100% 100%, 18% 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none"
          style={noiseStyle}
        />
      </div>

      {/* === TOP BAR === */}
      <div className="absolute top-[5vh] left-[4vw] font-serif italic text-[#1A1A2E] text-[3vh] tracking-wide z-20">
        Architectural Smell
      </div>
      <div className="absolute top-[5.5vh] left-[30vw] text-[#1A1A2E]/50 font-medium text-[1.8vh] tracking-wide z-20">
        BBM485 · T1
      </div>
      <div className="absolute top-[5vh] right-[4vw] text-[#E8A87C] font-bold text-[2.2vh] tracking-widest z-20">
        /(14-T1*)
      </div>

      {/* === LEFT CONTENT — on peach zone === */}
      <div className="absolute top-[18vh] left-[4vw] z-20 w-[38vw]">
        <h1 className="text-[11vh] font-black leading-[0.78] tracking-tighter text-[#1A1A2E]">
          Cyclic
          <br />
          Dependency
          <br />
          <span className="text-[#F4EFE2]">Red Flag.</span>
        </h1>
      </div>

      {/* Description on peach zone */}
      <div className="absolute bottom-[22vh] left-[4vw] flex items-start gap-[1.5vw] z-20 w-[30vw]">
        <div className="w-[3vw] h-[3px] bg-[#1A1A2E] mt-[1vh] flex-shrink-0" />
        <p className="text-[1.7vh] leading-[1.6] text-[#1A1A2E]/70 font-medium tracking-wide">
          editor And ui.layout Form A Tight
          <br />
          Cycle — Neither Package Can
          <br />
          Compile Or Ship Independently.
        </p>
      </div>

      {/* === RIGHT CONTENT — on dark zone === */}

      {/* Three step cards stacked vertically */}
      <div className="absolute top-[16vh] right-[5vw] flex flex-col gap-[2vh] z-20 w-[32vw]">
        <div className="bg-[#F4EFE2] rounded-[2.5vh] px-[3vh] py-[2.5vh] shadow-lg">
          <div className="flex items-center gap-[2vh]">
            <span className="text-[#E8A87C] text-[4vh] font-black leading-none">105</span>
            <div>
              <span className="text-[#1A1A2E] text-[2.2vh] font-black tracking-tight">editor → ui.layout</span>
              <span className="text-[#1A1A2E]/55 text-[1.4vh] font-medium block mt-[0.3vh]">
                Forward dependencies
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#E8A87C] rounded-[2.5vh] px-[3vh] py-[2.5vh] shadow-lg">
          <div className="flex items-center gap-[2vh]">
            <span className="text-[#1A1A2E] text-[4vh] font-black leading-none">12</span>
            <div>
              <span className="text-[#1A1A2E] text-[2.2vh] font-black tracking-tight">ui.layout → editor</span>
              <span className="text-[#1A1A2E]/55 text-[1.4vh] font-medium block mt-[0.3vh]">
                Reverse calls that break the layer
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#F4EFE2]/10 border border-[#F4EFE2]/20 rounded-[2.5vh] px-[3vh] py-[2.5vh] shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-[2vh]">
            <span className="text-[#E8A87C] text-[4vh] font-black leading-none">0</span>
            <div>
              <span className="text-[#F4EFE2] text-[2.2vh] font-black tracking-tight">Independent Builds</span>
              <span className="text-[#F4EFE2]/55 text-[1.4vh] font-medium block mt-[0.3vh]">
                Blocks team-level deployment
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Large decorative asterisk on dark side */}
      <div className="absolute bottom-[22vh] right-[8vw] text-[#E8A87C] text-[10vh] font-black z-20 leading-none">
        ⟲
      </div>

      {/* Contact at bottom dark side */}
      <div className="absolute bottom-[8vh] right-[5vw] z-20 text-right">
        <p className="text-[2.2vh] font-bold leading-[1.2] tracking-tight text-[#F4EFE2]">
          <span className="text-[#E8A87C]">Break With DIP</span>
        </p>
        <span className="text-[#F4EFE2]/50 text-[1.5vh] font-medium mt-[0.5vh] block tracking-wide">
          Dependency Inversion restores the layer boundary
        </span>
      </div>

      {/* Logo circles — bottom left on peach */}
      <div className="absolute bottom-[5vh] left-[4vw] flex items-center z-20">
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#1A1A2E] flex items-center justify-center font-black text-[3.2vh] text-[#E8A87C] shadow-lg z-10">
          C
        </div>
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#F4EFE2] flex items-center justify-center font-black text-[3.2vh] text-[#1A1A2E] shadow-lg -ml-[1.8vh] z-0">
          D
        </div>
      </div>

      {/* === TEXTURES === */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(26,26,46,0.06) 1.5px, transparent 1.5px)`,
          backgroundSize: '26px 26px',
        }}
      />
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.15] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}
