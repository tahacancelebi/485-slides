import React from 'react';
import { DecorativeAsterisk } from '@/components/shared/DecorativeAsterisk';

export default function TestimonialsSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  return (
    <div className="w-[100cqw] h-[100cqh] bg-[#F5F0E8] relative overflow-hidden font-sans text-[#1A1A2E]">
      {/* === TOP BAR === */}
      <div className="absolute top-[5cqh] left-[4cqw] font-serif italic text-[#E65C41] text-[3cqh] tracking-wide z-20">
        What They Say
      </div>
      <div className="absolute top-[5.5cqh] left-[28cqw] text-[#1A1A2E]/40 font-medium text-[1.8cqh] tracking-wide z-20">
        Disqet Design
      </div>
      <div className="absolute top-[5cqh] right-[4cqw] text-[#E65C41] font-bold text-[2.2cqh] tracking-widest z-20">
        /(09-D1*)
      </div>

      {/* === LARGE CORAL TESTIMONIAL CARD === */}
      <div className="absolute left-[3cqw] top-[13cqh] bottom-[8cqh] w-[52cqw] bg-[#E65C41] rounded-[4cqh] overflow-hidden shadow-2xl z-10">
        <div
          className="absolute inset-0 opacity-[0.3] mix-blend-multiply pointer-events-none"
          style={noiseStyle}
        />

        {/* Giant decorative quote mark */}
        <span className="absolute top-[2cqh] left-[4cqw] text-[22cqh] font-black leading-none text-[#F4EFE2]/15 font-serif select-none">
          &ldquo;
        </span>

        {/* Quote content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-[5cqw] pt-[4cqh]">
          <p className="text-[3.8cqh] font-bold leading-[1.12] tracking-tight text-[#F4EFE2]">
            Disqet transformed our entire
            <br />
            digital presence. Their strategic
            <br />
            approach delivered results we
            <br />
            didn&apos;t think were possible.
          </p>
          <div className="mt-[4cqh] flex items-center gap-[2cqh]">
            <div className="w-[6cqh] h-[6cqh] rounded-full bg-[#F4EFE2] flex items-center justify-center text-[#E65C41] font-black text-[2.5cqh]">
              S
            </div>
            <div>
              <span className="text-[#F4EFE2] text-[2.1cqh] font-black tracking-tight">
                Sarah Chen
              </span>
              <span className="text-[#F4EFE2]/75 text-[1.6cqh] font-medium block mt-[0.3cqh]">
                CMO, TechVista Inc.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* === RIGHT SIDE HEADING === */}
      <div className="absolute top-[16cqh] right-[4cqw] z-20 text-right w-[38cqw]">
        <h1 className="text-[10cqh] font-black leading-[0.8] tracking-tighter text-[#1A1A2E]">
          Trusted By
          <br />
          <span className="text-[#E65C41]">Bold</span> Brands.
        </h1>
      </div>

      {/* Decorative asterisk */}
      <div className="absolute top-[46cqh] right-[40cqw] z-20 leading-none text-[#E65C41]">
        <DecorativeAsterisk className="w-[8cqh] h-[8cqh]" />
      </div>

      {/* === FLOATING SECOND TESTIMONIAL === */}
      <div className="absolute bottom-[14cqh] right-[4cqw] bg-white rounded-[3cqh] p-[3.5cqh] shadow-xl z-20 w-[34cqw]">
        <div className="absolute inset-0 rounded-[3cqh] overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
            style={noiseStyle}
          />
        </div>
        <div className="relative z-10">
          <p className="text-[2.2cqh] font-bold leading-[1.15] tracking-tight text-[#1A1A2E]">
            &ldquo;The best investment we made this year
            <br />
            was partnering with Disqet. We saw ROI
            <br />
            within the first 3 months.&rdquo;
          </p>
          <div className="mt-[2cqh] flex items-center gap-[1.5cqh]">
            <div className="w-[5cqh] h-[5cqh] rounded-full bg-[#2C51F0] flex items-center justify-center text-white font-black text-[2cqh]">
              M
            </div>
            <div>
              <span className="text-[1.7cqh] font-black text-[#1A1A2E]">
                Marcus Webb
              </span>
              <span className="text-[1.4cqh] font-medium text-[#1A1A2E]/55 block">
                Founder, Vega Studios
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side description */}
      <div className="absolute top-[42cqh] right-[4cqw] z-20 w-[30cqw] text-right">
        <p className="text-[1.6cqh] leading-[1.6] text-[#1A1A2E]/55 font-medium tracking-wide">
          Don&apos;t Take Our Word For It — Our Clients&apos;
          <br />
          Results And Experiences Speak For Themselves.
        </p>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[5cqh] left-[4cqw] flex items-center z-20">
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#E65C41] flex items-center justify-center font-black text-[3.2cqh] text-[#F4EFE2] shadow-lg z-10">
          T
        </div>
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#2C51F0] flex items-center justify-center font-black text-[3.2cqh] text-[#F4EFE2] shadow-lg -ml-[1.8cqh] z-0">
          S
        </div>
      </div>

      {/* Bottom right line accent + text */}
      <div className="absolute bottom-[5.5cqh] right-[4cqw] flex items-center gap-[1.5cqw] z-20">
        <p className="text-[1.5cqh] leading-[1.5] text-[#1A1A2E]/45 font-medium tracking-wide text-right">
          50+ Five-Star Reviews
        </p>
        <div className="w-[3cqw] h-[3px] bg-[#E65C41] flex-shrink-0" />
      </div>

      {/* === TEXTURE LAYERS (lighter for light theme) === */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(26, 26, 46, 0.05) 1.5px, transparent 1.5px)`,
          backgroundSize: '26px 26px',
        }}
      />
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.12] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}
