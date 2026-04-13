import React from 'react';
import { DecorativeAsterisk } from '@/components/shared/DecorativeAsterisk';

export default function TeamAllocationSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  const team = [
    {
      initials: 'ME',
      name: 'Mert Ergün',
      role: 'OSS selection · Tool setup · Q1, Q2 · Graph generation',
      color: '#E65C41',
    },
    {
      initials: 'TC',
      name: 'Tahacan Çelebi',
      role: 'GQM tree design · Q3 analysis · Outlier identification',
      color: '#2C51F0',
    },
    {
      initials: 'SA',
      name: 'Serhat Akbulut',
      role: 'Q4 analysis · Package aggregation · Overall evaluation',
      color: '#1B8A6B',
    },

  ];

  return (
    <div className="w-[100cqw] h-[100cqh] bg-[#E5EDE6] relative overflow-hidden font-sans text-[#1A1A2E]">
      {/* === TOP BAR === */}
      <div className="absolute top-[5cqh] left-[4cqw] font-serif italic text-[#1B8A6B] text-[3cqh] tracking-wide z-20">
        Team Allocation &amp; Q&amp;A
      </div>
      <div className="absolute top-[5.5cqh] left-[32cqw] text-[#1A1A2E]/40 font-medium text-[1.8cqh] tracking-wide z-20">
        BBM485 · G05
      </div>
      <div className="absolute top-[5cqh] right-[4cqw] text-[#E65C41] font-bold text-[2.2cqh] tracking-widest z-20">
        /(17-D1*)
      </div>

      {/* === MAIN HEADING === */}
      <div className="absolute top-[13cqh] left-[4cqw] z-20">
        <h1 className="text-[10cqh] font-black leading-[0.8] tracking-tighter">
          Who Did
          <br />
          <span className="text-[#1B8A6B]">What.</span>
        </h1>
      </div>

      {/* Asterisk */}
      <div className="absolute top-[10cqh] right-[4cqw] z-20 leading-none text-[#1B8A6B]">
        <DecorativeAsterisk className="w-[6cqh] h-[6cqh]" />
      </div>

      {/* Side description */}
      <div className="absolute top-[18cqh] right-[4cqw] w-[28cqw] text-right z-20">
        <p className="text-[1.7cqh] leading-[1.55] text-[#1A1A2E]/55 font-medium tracking-wide">
          Three Students, One Analysis —
          <br />
          Each Responsible For A Distinct
          <br />
          Slice Of The C&amp;K Investigation.
        </p>
      </div>

      {/* === HORIZONTAL PILL CARDS === */}
      <div className="absolute top-[36cqh] left-[3cqw] right-[3cqw] flex flex-col gap-[2cqh] z-20">
        {team.map((member) => (
          <div
            key={member.initials}
            className="relative rounded-full py-[2.5cqh] px-[3cqw] flex items-center gap-[3cqw] overflow-hidden shadow-lg"
            style={{ backgroundColor: member.color }}
          >
            <div
              className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none"
              style={noiseStyle}
            />

            {/* Avatar circle */}
            <div
              className="relative z-10 w-[8cqh] h-[8cqh] rounded-full bg-[#F4EFE2] flex items-center justify-center font-black text-[2.4cqh] flex-shrink-0"
              style={{ color: member.color }}
            >
              {member.initials}
            </div>

            {/* Name and role */}
            <div className="relative z-10 flex items-center gap-[2cqw] flex-1 min-w-0">
              <span className="text-[2.8cqh] font-black text-[#F4EFE2] tracking-tight leading-none whitespace-nowrap">
                {member.name}
              </span>
              <span className="text-[1.5cqh] font-medium text-[#F4EFE2]/80 tracking-wide truncate">
                {member.role}
              </span>
            </div>

            {/* Arrow */}
            <svg
              className="ml-auto relative z-10 w-[3.5cqh] h-[3.5cqh] text-[#F4EFE2]/40 flex-shrink-0"
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
          </div>
        ))}
      </div>

      {/* Bottom description */}
      <div className="absolute bottom-[8cqh] left-[4cqw] flex items-center gap-[1.5cqw] z-20 w-[42cqw]">
        <div className="w-[3cqw] h-[3px] bg-[#1B8A6B] flex-shrink-0" />
        <p className="text-[1.5cqh] leading-[1.6] text-[#1A1A2E]/50 font-medium tracking-wide">
          Thank You For Listening — We Are Now Open To
          Any Questions About Our Methodology Or Findings.
        </p>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[5cqh] right-[4cqw] flex items-center z-20">
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#1B8A6B] flex items-center justify-center font-black text-[3.2cqh] text-[#F4EFE2] shadow-lg z-10">
          Q
        </div>
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#E65C41] flex items-center justify-center font-black text-[3.2cqh] text-[#F4EFE2] shadow-lg -ml-[1.8cqh] z-0">
          A
        </div>
      </div>

      {/* === TEXTURES (light variant) === */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(26, 26, 46, 0.045) 1.5px, transparent 1.5px)`,
          backgroundSize: '26px 26px',
        }}
      />
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.1] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}
