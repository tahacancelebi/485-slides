import React from 'react';

export default function RFCSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  return (
    <div className="w-screen h-screen bg-[#2955D4] relative overflow-hidden font-sans text-[#F4EFE2]">
      {/* === CONCENTRIC RINGS — outlined circles === */}
      <div className="absolute top-1/2 left-[58%] -translate-x-1/2 -translate-y-1/2 z-[5]">
        {/* Outer ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vh] h-[75vh] rounded-full border-[2px] border-[#F4EFE2]/10" />
        {/* Middle ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52vh] h-[52vh] rounded-full border-[2px] border-[#F4EFE2]/15" />
        {/* Inner ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vh] h-[30vh] rounded-full border-[2px] border-[#F4EFE2]/20" />
      </div>

      {/* === TOP BAR === */}
      <div className="absolute top-[5vh] left-[4vw] font-serif italic text-[#F9D74A] text-[3vh] tracking-wide z-20">
        Q3 · Behavioral Complexity (RFC)
      </div>
      <div className="absolute top-[5.5vh] left-[38vw] text-[#F4EFE2]/60 font-medium text-[1.8vh] tracking-wide z-20">
        BBM485 · T1
      </div>
      <div className="absolute top-[5vh] right-[4vw] text-[#F9D74A] font-bold text-[2.2vh] tracking-widest z-20">
        /(09-T1*)
      </div>

      {/* === MAIN HEADING === */}
      <div className="absolute top-[14vh] left-[4vw] z-20">
        <h1 className="text-[11vh] font-black leading-[0.78] tracking-tighter">
          Behavioral
          <br />
          <span className="text-[#F9D74A]">Reach.</span>
        </h1>
      </div>

      {/* Asterisk */}
      <div className="absolute top-[13vh] right-[22vw] text-[#F9D74A] text-[7vh] font-black z-20 leading-none">
        +
      </div>

      {/* === RFC BADGES === */}

      {/* Badge: RFC peak — on outer ring area */}
      <div className="absolute top-[18vh] right-[8vw] bg-[#F4EFE2] rounded-[2.5vh] px-[3vh] py-[2.2vh] shadow-xl z-20">
        <div className="absolute inset-0 rounded-[2.5vh] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply" style={noiseStyle} />
        </div>
        <div className="relative z-10">
          <span className="text-[#2955D4] text-[2.8vh] font-black tracking-tight">
            RFC · 531
          </span>
          <span className="text-[#1A1A2E]/55 text-[1.4vh] font-medium block mt-[0.3vh]">
            Peak value · WorkflowEditor
          </span>
        </div>
      </div>

      {/* Badge: Correlation — center right */}
      <div className="absolute top-[42vh] right-[6vw] bg-[#F9D74A] rounded-[2.5vh] px-[3vh] py-[2.2vh] shadow-xl z-20">
        <div className="absolute inset-0 rounded-[2.5vh] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply" style={noiseStyle} />
        </div>
        <div className="relative z-10">
          <span className="text-[#1A1A2E] text-[2.8vh] font-black tracking-tight">
            WMC ≈ RFC
          </span>
          <span className="text-[#1A1A2E]/55 text-[1.4vh] font-medium block mt-[0.3vh]">
            Perfect correlation between dims
          </span>
        </div>
      </div>

      {/* Badge: Knows too much — lower area */}
      <div className="absolute bottom-[28vh] right-[18vw] bg-[#E65C41] rounded-[2.5vh] px-[3vh] py-[2.2vh] shadow-xl z-20">
        <div className="absolute inset-0 rounded-[2.5vh] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply" style={noiseStyle} />
        </div>
        <div className="relative z-10">
          <span className="text-[#F4EFE2] text-[2.8vh] font-black tracking-tight">
            Knows Too Much
          </span>
          <span className="text-[#F4EFE2]/75 text-[1.4vh] font-medium block mt-[0.3vh]">
            Methods + external calls
          </span>
        </div>
      </div>

      {/* Badge: Same suspects — left of rings */}
      <div className="absolute top-[52vh] left-[32vw] bg-[#1B8A6B] rounded-[2.5vh] px-[3vh] py-[2.2vh] shadow-xl z-20">
        <div className="absolute inset-0 rounded-[2.5vh] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply" style={noiseStyle} />
        </div>
        <div className="relative z-10">
          <span className="text-[#F4EFE2] text-[2.8vh] font-black tracking-tight">
            Same Top Classes
          </span>
          <span className="text-[#F4EFE2]/75 text-[1.4vh] font-medium block mt-[0.3vh]">
            God Classes Dominate Again
          </span>
        </div>
      </div>

      {/* === BOTTOM LEFT DESCRIPTION === */}
      <div className="absolute bottom-[14vh] left-[4vw] flex items-start gap-[1.5vw] z-20 w-[34vw]">
        <div className="w-[3vw] h-[3px] bg-[#F9D74A] mt-[1vh] flex-shrink-0" />
        <p className="text-[1.6vh] leading-[1.6] text-[#F4EFE2]/80 font-medium tracking-wide">
          RFC Reveals How Far A Class Reaches — Its
          <br />
          Methods Plus Every External Method It Can
          <br />
          Invoke. The Same Suspects Top Every List.
        </p>
      </div>

      {/* Big count — floating */}
      <div className="absolute bottom-[26vh] left-[4vw] z-20">
        <span className="text-[8vh] font-black leading-none tracking-tighter">
          531<span className="text-[#F9D74A]">↑</span>
        </span>
        <span className="text-[1.8vh] font-bold text-[#F4EFE2]/70 block mt-[0.5vh]">
          Maximum RFC Recorded
        </span>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[5vh] right-[4vw] flex items-center z-20">
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#F9D74A] flex items-center justify-center font-black text-[3.2vh] text-[#1A1A2E] shadow-lg z-10">
          R
        </div>
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#E65C41] flex items-center justify-center font-black text-[3.2vh] text-[#F4EFE2] shadow-lg -ml-[1.8vh] z-0">
          F
        </div>
      </div>

      {/* === TEXTURES === */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(244,239,219,0.08) 1.5px, transparent 1.5px)`,
          backgroundSize: '26px 26px',
        }}
      />
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.22] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}
