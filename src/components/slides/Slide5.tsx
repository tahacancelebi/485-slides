import React from 'react';

export default function CBOSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  const dotsStyle = {
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)`,
    backgroundSize: '26px 26px',
  };

  return (
    <div className="w-screen h-screen bg-[#1C1814] relative overflow-hidden font-sans text-[#F4EFE2]">
      {/* Subtle darker bottom zone for depth */}
      <div
        className="absolute bottom-0 left-0 w-full h-[30%] bg-[#14110E]"
        style={dotsStyle}
      />

      {/* === THE ARCH — Signature geometric doorway === */}
      <div className="absolute right-[8vw] top-[8vh] bottom-0 w-[36vw] bg-[#C0522C] rounded-t-full overflow-hidden shadow-[0_0_100px_rgba(192,82,44,0.2)] z-10">
        {/* Arch inner noise */}
        <div
          className="absolute inset-0 opacity-[0.35] mix-blend-multiply pointer-events-none"
          style={noiseStyle}
        />
        {/* Arch inner dot pattern (subtle) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(244,239,219,0.06) 1.5px, transparent 1.5px)`,
            backgroundSize: '22px 22px',
          }}
        />

        {/* Content inside the arch */}
        <div className="relative z-10 h-full flex flex-col items-center pt-[24vh] px-[4vw]">
          <span className="text-[#F4EFE2]/75 text-[1.7vh] font-bold tracking-[0.4em] uppercase">
            High Coupling
          </span>
          <h2 className="text-[13vh] font-black leading-[0.72] tracking-tighter text-center mt-[1.5vh]">
            21%
          </h2>
          <div className="w-[4vh] h-[3px] bg-[#DAA520] mt-[3.5vh] mb-[3.5vh]" />
          <p className="text-[2.4vh] font-bold leading-[1.2] text-center text-[#F4EFE2]/90 tracking-tight">
            Of Classes Exceed
            <br />
            The CBO &gt; 14
            <br />
            Safe Threshold
            <br />
            Across The Codebase.
          </p>
        </div>
      </div>

      {/* Golden accent circle — overlapping arch top area */}
      <div className="absolute right-[10vw] top-[3vh] w-[14vh] h-[14vh] rounded-full bg-[#DAA520] shadow-2xl z-20 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.4] mix-blend-multiply"
            style={noiseStyle}
          />
        </div>
        <span className="text-[6.5vh] font-black text-[#1C1814] relative z-10 leading-none">
          !
        </span>
      </div>

      {/* === TOP BAR — Labels and branding === */}
      <div className="absolute top-[5vh] left-[4vw] font-serif italic text-[#DAA520] text-[3vh] tracking-wide z-20">
        Q2 · Coupling (CBO)
      </div>
      <div className="absolute top-[5.5vh] left-[28vw] text-[#DAA520] font-medium text-[1.8vh] tracking-wide z-20">
        BBM485 · T1
      </div>
      <div className="absolute top-[5vh] right-[4vw] text-[#C0522C] font-bold text-[2.2vh] tracking-widest z-20">
        /(07-T1*)
      </div>

      {/* === MAIN HEADLINE — Left side massive text === */}
      <div className="absolute top-[18vh] left-[3.5vw] z-20">
        <h1 className="text-[13vh] font-black leading-[0.78] tracking-tighter">
          Coupling
          <br />
          Creates A
          <br />
          <span className="text-[#C0522C]">Butterfly</span>
          <br />
          <span className="text-[#C0522C]">Effect.</span>
        </h1>
      </div>

      {/* Large decorative asterisk */}
      <div className="absolute top-[15vh] left-[46vw] text-[#DAA520] text-[9vh] font-black z-20 leading-none">
        *
      </div>

      {/* Description paragraph with horizontal line accent */}
      <div className="absolute bottom-[18vh] left-[4vw] flex items-start gap-[1.5vw] z-20 w-[38vw]">
        <div className="w-[3vw] h-[3px] bg-[#DAA520] mt-[1vh] flex-shrink-0" />
        <p className="text-[1.6vh] leading-[1.65] text-[#F4EFE2]/85 font-medium tracking-wide">
          A Single Change Inside WorkflowEditor Can Ripple
          <br />
          Across 220 Other Classes — Making The Codebase
          <br />
          Incredibly Fragile, Slowing New Feature Work And
          <br />
          Amplifying The Cost Of Every Tiny Refactor.
        </p>
      </div>

      {/* Floating cream stat card — bridging left content and arch */}
      <div className="absolute left-[43vw] bottom-[26vh] bg-[#F4EFE2] rounded-[2.5vh] px-[3vh] py-[2.8vh] shadow-2xl z-30 w-[17vw]">
        <div className="absolute inset-0 rounded-[2.5vh] overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
            style={noiseStyle}
          />
        </div>
        <svg
          className="absolute top-[2vh] right-[2vh] w-[3vh] h-[3vh] text-[#C0522C]"
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
          <div className="text-[#C0522C] text-[5vh] font-black leading-none tracking-tighter">
            220
          </div>
          <p className="text-[#1C1814] text-[1.3vh] font-bold leading-[1.2] mt-[1vh] tracking-tight">
            CBO Value Inside
            <br />
            WorkflowEditor — The
            <br />
            Critical Outlier Class
          </p>
        </div>
      </div>

      {/* Service category pills */}
      <div className="absolute bottom-[5vh] left-[4vw] flex gap-[1.2vh] z-20">
        <div className="bg-[#C0522C] rounded-full px-[2.5vh] py-[1.2vh] text-[1.4vh] font-bold tracking-tight shadow-lg">
          Fragility
        </div>
        <div className="bg-[#DAA520] rounded-full px-[2.5vh] py-[1.2vh] text-[1.4vh] font-bold tracking-tight text-[#1C1814] shadow-lg">
          Ripple Risk
        </div>
        <div className="bg-[#5C8A5C] rounded-full px-[2.5vh] py-[1.2vh] text-[1.4vh] font-bold tracking-tight shadow-lg">
          Slow Velocity
        </div>
      </div>

      {/* Overlapping logo circles */}
      <div className="absolute bottom-[5vh] right-[4vw] flex items-center z-20">
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#C0522C] flex items-center justify-center font-black text-[3.2vh] text-[#F4EFE2] shadow-lg z-10">
          C
        </div>
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#DAA520] flex items-center justify-center font-black text-[3.2vh] text-[#1C1814] shadow-lg -ml-[1.8vh] z-0">
          B
        </div>
      </div>

      {/* === TEXTURE LAYERS (topmost) === */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={dotsStyle}
      />
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.3] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}
