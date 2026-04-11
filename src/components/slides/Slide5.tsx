import React from 'react';
import { DecorativeAsterisk } from '@/components/shared/DecorativeAsterisk';

export default function CBOSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  const dotsStyle = {
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)`,
    backgroundSize: '26px 26px',
  };

  return (
    <div className="w-[100cqw] h-[100cqh] bg-[#1C1814] relative overflow-hidden font-sans text-[#F4EFE2]">
      {/* Subtle darker bottom zone for depth */}
      <div
        className="absolute bottom-0 left-0 w-full h-[30%] bg-[#14110E]"
        style={dotsStyle}
      />

      {/* === THE ARCH — Signature geometric doorway === */}
      <div className="absolute right-[8cqw] top-[8cqh] bottom-0 w-[36cqw] bg-[#C0522C] rounded-t-full overflow-hidden shadow-[0_0_100px_rgba(192,82,44,0.2)] z-10">
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
        <div className="relative z-10 h-full flex flex-col items-center pt-[24cqh] px-[4cqw]">
          <span className="text-[#F4EFE2]/75 text-[1.7cqh] font-bold tracking-[0.4em] uppercase">
            High Coupling
          </span>
          <h2 className="text-[13cqh] font-black leading-[0.72] tracking-tighter text-center mt-[1.5cqh]">
            21%
          </h2>
          <div className="w-[4cqh] h-[3px] bg-[#DAA520] mt-[3.5cqh] mb-[3.5cqh]" />
          <p className="text-[2.4cqh] font-bold leading-[1.2] text-center text-[#F4EFE2]/90 tracking-tight">
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
      <div className="absolute right-[10cqw] top-[3cqh] w-[14cqh] h-[14cqh] rounded-full bg-[#DAA520] shadow-2xl z-20 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.4] mix-blend-multiply"
            style={noiseStyle}
          />
        </div>
        <span className="text-[6.5cqh] font-black text-[#1C1814] relative z-10 leading-none">
          !
        </span>
      </div>

      {/* === TOP BAR — Labels and branding === */}
      <div className="absolute top-[5cqh] left-[4cqw] font-serif italic text-[#DAA520] text-[3cqh] tracking-wide z-20">
        Q2 · Coupling (CBO)
      </div>
      <div className="absolute top-[5.5cqh] left-[28cqw] text-[#DAA520] font-medium text-[1.8cqh] tracking-wide z-20">
        BBM485 · T2
      </div>
      <div className="absolute top-[5cqh] right-[4cqw] text-[#C0522C] font-bold text-[2.2cqh] tracking-widest z-20">
        /(07-D1*)
      </div>

      {/* === MAIN HEADLINE — Left side massive text === */}
      <div className="absolute top-[18cqh] left-[3.5cqw] z-20">
        <h1 className="text-[13cqh] font-black leading-[0.78] tracking-tighter">
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
      <div className="absolute top-[15cqh] left-[46cqw] z-20 leading-none text-[#DAA520]">
        <DecorativeAsterisk className="w-[9cqh] h-[9cqh]" />
      </div>

      {/* Description paragraph with horizontal line accent */}
      <div className="absolute bottom-[18cqh] left-[4cqw] flex items-start gap-[1.5cqw] z-20 w-[38cqw]">
        <div className="w-[3cqw] h-[3px] bg-[#DAA520] mt-[1cqh] flex-shrink-0" />
        <p className="text-[1.6cqh] leading-[1.65] text-[#F4EFE2]/85 font-medium tracking-wide">
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
      <div className="absolute left-[43cqw] bottom-[26cqh] bg-[#F4EFE2] rounded-[2.5cqh] px-[3cqh] py-[2.8cqh] shadow-2xl z-30 w-[17cqw]">
        <div className="absolute inset-0 rounded-[2.5cqh] overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
            style={noiseStyle}
          />
        </div>
        <svg
          className="absolute top-[2cqh] right-[2cqh] w-[3cqh] h-[3cqh] text-[#C0522C]"
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
          <div className="text-[#C0522C] text-[5cqh] font-black leading-none tracking-tighter">
            220
          </div>
          <p className="text-[#1C1814] text-[1.3cqh] font-bold leading-[1.2] mt-[1cqh] tracking-tight">
            CBO Value Inside
            <br />
            WorkflowEditor — The
            <br />
            Critical Outlier Class
          </p>
        </div>
      </div>

      {/* Service category pills */}
      <div className="absolute bottom-[5cqh] left-[4cqw] flex gap-[1.2cqh] z-20">
        <div className="bg-[#C0522C] rounded-full px-[2.5cqh] py-[1.2cqh] text-[1.4cqh] font-bold tracking-tight shadow-lg">
          Fragility
        </div>
        <div className="bg-[#DAA520] rounded-full px-[2.5cqh] py-[1.2cqh] text-[1.4cqh] font-bold tracking-tight text-[#1C1814] shadow-lg">
          Ripple Risk
        </div>
        <div className="bg-[#5C8A5C] rounded-full px-[2.5cqh] py-[1.2cqh] text-[1.4cqh] font-bold tracking-tight shadow-lg">
          Slow Velocity
        </div>
      </div>

      {/* Overlapping logo circles */}
      <div className="absolute bottom-[5cqh] right-[4cqw] flex items-center z-20">
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#C0522C] flex items-center justify-center font-black text-[3.2cqh] text-[#F4EFE2] shadow-lg z-10">
          C
        </div>
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#DAA520] flex items-center justify-center font-black text-[3.2cqh] text-[#1C1814] shadow-lg -ml-[1.8cqh] z-0">
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
