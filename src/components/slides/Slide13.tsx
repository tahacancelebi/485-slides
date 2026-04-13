import React from 'react';

export default function RFCSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  return (
    <div className="w-[100cqw] h-[100cqh] bg-[#2955D4] relative overflow-hidden font-sans text-[#F4EFE2]">
      {/* === CONCENTRIC RINGS — outlined circles === */}
      <div className="absolute top-1/2 left-[58%] -translate-x-1/2 -translate-y-1/2 z-[5]">
        {/* Outer ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75cqh] h-[75cqh] rounded-full border-[2px] border-[#F4EFE2]/10" />
        {/* Middle ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52cqh] h-[52cqh] rounded-full border-[2px] border-[#F4EFE2]/15" />
        {/* Inner ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30cqh] h-[30cqh] rounded-full border-[2px] border-[#F4EFE2]/20" />
      </div>

      {/* === TOP BAR === */}
      <div className="absolute top-[5cqh] left-[4cqw] font-serif italic text-[#F9D74A] text-[3cqh] tracking-wide z-20">
        Q3 · Behavioral Complexity (RFC)
      </div>
      <div className="absolute top-[5.5cqh] left-[38cqw] text-[#F4EFE2]/60 font-medium text-[1.8cqh] tracking-wide z-20">
        BBM485 · G05
      </div>
      <div className="absolute top-[5cqh] right-[4cqw] text-[#F9D74A] font-bold text-[2.2cqh] tracking-widest z-20">
        /(09-D1*)
      </div>

      {/* === MAIN HEADING === */}
      <div className="absolute top-[14cqh] left-[4cqw] z-20">
        <h1 className="text-[11cqh] font-black leading-[0.78] tracking-tighter">
          Behavioral
          <br />
          <span className="text-[#F9D74A]">Reach.</span>
        </h1>
      </div>

      {/* Asterisk */}
      <div className="absolute top-[13cqh] right-[22cqw] text-[#F9D74A] text-[7cqh] font-black z-20 leading-none">
        +
      </div>

      {/* === RFC BADGES === */}

      {/* Badge: RFC peak — on outer ring area */}
      <div className="absolute top-[18cqh] right-[8cqw] bg-[#F4EFE2] rounded-[2.5cqh] px-[3cqh] py-[2.2cqh] shadow-xl z-20">
        <div className="absolute inset-0 rounded-[2.5cqh] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply" style={noiseStyle} />
        </div>
        <div className="relative z-10">
          <span className="text-[#2955D4] text-[2.8cqh] font-black tracking-tight">
            RFC · 531
          </span>
          <span className="text-[#1A1A2E]/55 text-[1.4cqh] font-medium block mt-[0.3cqh]">
            Peak value · WorkflowEditor
          </span>
        </div>
      </div>

      {/* Badge: Correlation — center right */}
      <div className="absolute top-[42cqh] right-[6cqw] bg-[#F9D74A] rounded-[2.5cqh] px-[3cqh] py-[2.2cqh] shadow-xl z-20">
        <div className="absolute inset-0 rounded-[2.5cqh] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply" style={noiseStyle} />
        </div>
        <div className="relative z-10">
          <span className="text-[#1A1A2E] text-[2.8cqh] font-black tracking-tight">
            WMC ≈ RFC
          </span>
          <span className="text-[#1A1A2E]/55 text-[1.4cqh] font-medium block mt-[0.3cqh]">
            Perfect correlation between dims
          </span>
        </div>
      </div>

      {/* Badge: Knows too much — lower area */}
      <div className="absolute bottom-[28cqh] right-[18cqw] bg-[#E65C41] rounded-[2.5cqh] px-[3cqh] py-[2.2cqh] shadow-xl z-20">
        <div className="absolute inset-0 rounded-[2.5cqh] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply" style={noiseStyle} />
        </div>
        <div className="relative z-10">
          <span className="text-[#F4EFE2] text-[2.8cqh] font-black tracking-tight">
            Knows Too Much
          </span>
          <span className="text-[#F4EFE2]/75 text-[1.4cqh] font-medium block mt-[0.3cqh]">
            Methods + external calls
          </span>
        </div>
      </div>

      {/* Badge: Same suspects — left of rings */}
      <div className="absolute top-[52cqh] left-[32cqw] bg-[#1B8A6B] rounded-[2.5cqh] px-[3cqh] py-[2.2cqh] shadow-xl z-20">
        <div className="absolute inset-0 rounded-[2.5cqh] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply" style={noiseStyle} />
        </div>
        <div className="relative z-10">
          <span className="text-[#F4EFE2] text-[2.8cqh] font-black tracking-tight">
            Same Top Classes
          </span>
          <span className="text-[#F4EFE2]/75 text-[1.4cqh] font-medium block mt-[0.3cqh]">
            God Classes Dominate Again
          </span>
        </div>
      </div>

      {/* === BOTTOM LEFT DESCRIPTION === */}
      <div className="absolute bottom-[14cqh] left-[4cqw] flex items-start gap-[1.5cqw] z-20 w-[34cqw]">
        <div className="w-[3cqw] h-[3px] bg-[#F9D74A] mt-[1cqh] flex-shrink-0" />
        <p className="text-[1.6cqh] leading-[1.6] text-[#F4EFE2]/80 font-medium tracking-wide">
          RFC Reveals How Far A Class Reaches — Its
          <br />
          Methods Plus Every External Method It Can
          <br />
          Invoke. The Same Suspects Top Every List.
        </p>
      </div>

      {/* Big count — floating */}
      <div className="absolute bottom-[26cqh] left-[4cqw] z-20">
        <span className="text-[8cqh] font-black leading-none tracking-tighter">
          531<span className="text-[#F9D74A]">↑</span>
        </span>
        <span className="text-[1.8cqh] font-bold text-[#F4EFE2]/70 block mt-[0.5cqh]">
          Maximum RFC Recorded
        </span>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[5cqh] right-[4cqw] flex items-center z-20">
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#F9D74A] flex items-center justify-center font-black text-[3.2cqh] text-[#1A1A2E] shadow-lg z-10">
          R
        </div>
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#E65C41] flex items-center justify-center font-black text-[3.2cqh] text-[#F4EFE2] shadow-lg -ml-[1.8cqh] z-0">
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
