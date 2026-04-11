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
    <div className="w-screen h-screen bg-[#E5EDE6] relative overflow-hidden font-sans text-[#1A1A2E]">
      {/* === TOP BAR === */}
      <div className="absolute top-[5vh] left-[4vw] font-serif italic text-[#1B8A6B] text-[3vh] tracking-wide z-20">
        Team Allocation &amp; Q&amp;A
      </div>
      <div className="absolute top-[5.5vh] left-[32vw] text-[#1A1A2E]/40 font-medium text-[1.8vh] tracking-wide z-20">
        BBM485 · T2
      </div>
      <div className="absolute top-[5vh] right-[4vw] text-[#E65C41] font-bold text-[2.2vh] tracking-widest z-20">
        /(17-D1*)
      </div>

      {/* === MAIN HEADING === */}
      <div className="absolute top-[13vh] left-[4vw] z-20">
        <h1 className="text-[10vh] font-black leading-[0.8] tracking-tighter">
          Who Did
          <br />
          <span className="text-[#1B8A6B]">What.</span>
        </h1>
      </div>

      {/* Asterisk */}
      <div className="absolute top-[10vh] right-[4vw] z-20 leading-none text-[#1B8A6B]">
        <DecorativeAsterisk className="w-[6vh] h-[6vh]" />
      </div>

      {/* Side description */}
      <div className="absolute top-[18vh] right-[4vw] w-[28vw] text-right z-20">
        <p className="text-[1.7vh] leading-[1.55] text-[#1A1A2E]/55 font-medium tracking-wide">
          Three Students, One Analysis —
          <br />
          Each Responsible For A Distinct
          <br />
          Slice Of The C&amp;K Investigation.
        </p>
      </div>

      {/* === HORIZONTAL PILL CARDS === */}
      <div className="absolute top-[36vh] left-[3vw] right-[3vw] flex flex-col gap-[2vh] z-20">
        {team.map((member) => (
          <div
            key={member.initials}
            className="relative rounded-full py-[2.5vh] px-[3vw] flex items-center gap-[3vw] overflow-hidden shadow-lg"
            style={{ backgroundColor: member.color }}
          >
            <div
              className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none"
              style={noiseStyle}
            />

            {/* Avatar circle */}
            <div
              className="relative z-10 w-[8vh] h-[8vh] rounded-full bg-[#F4EFE2] flex items-center justify-center font-black text-[2.4vh] flex-shrink-0"
              style={{ color: member.color }}
            >
              {member.initials}
            </div>

            {/* Name and role */}
            <div className="relative z-10 flex items-center gap-[2vw] flex-1 min-w-0">
              <span className="text-[2.8vh] font-black text-[#F4EFE2] tracking-tight leading-none whitespace-nowrap">
                {member.name}
              </span>
              <span className="text-[1.5vh] font-medium text-[#F4EFE2]/80 tracking-wide truncate">
                {member.role}
              </span>
            </div>

            {/* Arrow */}
            <svg
              className="ml-auto relative z-10 w-[3.5vh] h-[3.5vh] text-[#F4EFE2]/40 flex-shrink-0"
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
      <div className="absolute bottom-[8vh] left-[4vw] flex items-center gap-[1.5vw] z-20 w-[42vw]">
        <div className="w-[3vw] h-[3px] bg-[#1B8A6B] flex-shrink-0" />
        <p className="text-[1.5vh] leading-[1.6] text-[#1A1A2E]/50 font-medium tracking-wide">
          Thank You For Listening — We Are Now Open To
          Any Questions About Our Methodology Or Findings.
        </p>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[5vh] right-[4vw] flex items-center z-20">
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#1B8A6B] flex items-center justify-center font-black text-[3.2vh] text-[#F4EFE2] shadow-lg z-10">
          Q
        </div>
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#E65C41] flex items-center justify-center font-black text-[3.2vh] text-[#F4EFE2] shadow-lg -ml-[1.8vh] z-0">
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
