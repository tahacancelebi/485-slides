import React from 'react';
import { DecorativeAsterisk } from '@/components/shared/DecorativeAsterisk';

export default function TitleSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  const dotsStyle = {
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)`,
    backgroundSize: '22px 22px',
  };

  return (
    <div className="w-full min-h-[100cqh] relative overflow-hidden text-[#f0ecdb] font-sans bg-[#176E71] flex flex-col">
      {/* 1. GLOBAL TEXTURE LAYER */}
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-30 mix-blend-multiply"
        style={noiseStyle}
      />

      {/* 2. BACKGROUND SPLIT */}
      <div className="absolute inset-0 flex flex-col z-0">
        <div className="h-[65%] w-full bg-[#176E71]" />
        <div className="h-[35%] w-full bg-[#0F3D43]" style={dotsStyle} />
      </div>

      {/* 3. CONTENT WRAPPER */}
      <div className="relative z-10 w-full h-full min-h-[100cqh] flex flex-col px-10 py-10 md:px-16 md:py-12">
        {/* Üst Menü / Etiketler */}
        <div className="flex justify-between items-start tracking-wide">
          <div className="flex items-center space-x-8">
            <span className="text-[#F5D95C] font-semibold text-lg">
              BBM485 · G05 Report
            </span>
            <span className="font-serif italic text-3xl tracking-wide">
              Concrete Architecture
            </span>
          </div>
          <span className="text-[#F27A8A] font-bold text-2xl tracking-wider">
            /(01-D1*)
          </span>
        </div>

        {/* Ana Başlık ve Sağ Üst İkon */}
        <div className="mt-14 relative w-full flex justify-between items-start">
          <h1 className="text-[7.5cqw] font-black leading-[0.85] tracking-tighter w-[75%] transform scale-y-[1.15] origin-top-left">
            KNIME Workbench
            <br />
            Architecture
            <br />
            <span className="text-[#F27A8A]">Evaluation.</span>
          </h1>

          <div className="flex flex-col items-end text-right w-[25%] pt-4">
            <DecorativeAsterisk className="w-16 h-16 text-[#F5D95C] mb-8 shrink-0" />
            <p className="text-sm md:text-base leading-snug text-white/90 font-medium">
              Maintainability Analysis
              <br />
              Via C&K And LOC Metrics
              <br />
              Software Architectures 2025–26.
            </p>
          </div>
        </div>

        {/* KARTLAR BÖLÜMÜ */}
        <div className=" w-full flex flex-col gap-6 pb-4 mt-36">
          {/* --- 1. SATIR: Turkuaz ve Krem Kartlar --- */}
          <div className="flex flex-row items-stretch gap-0 w-full">
            {/* Turkuaz Büyük Kart (Sol) */}
            <div className="bg-[#229297] rounded-[2rem] py-8 px-10 flex items-center justify-between shadow-2xl relative overflow-hidden flex-[2.7]">
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                style={noiseStyle}
              />

              <div className="text-[6.5cqw] font-bold tracking-tighter leading-none">
                100<span className="text-[#F27A8A]">K</span>
              </div>
              <div className="text-[1.6rem] md:text-[2rem] font-bold max-w-[280px] leading-[1.1]">
                Lines of Code
                <br />
                across 672 Java
                <br />
                classes analyzed
                <br />
                <span className="text-[#F5D95C] text-base mt-2 block font-bold">
                  KNIME Workbench (GPL)
                </span>
              </div>
            </div>

            {/* Krem Kart (Sağ) */}
            <div className="bg-[#F4EFE2] rounded-[2rem] py-6 px-10 text-[#176E71] shadow-2xl relative overflow-hidden flex flex-col justify-between flex-[1.3]">
              <div
                className="absolute inset-0 opacity-[0.08] mix-blend-multiply pointer-events-none"
                style={noiseStyle}
              />

              <div className="flex justify-end text-[#F27A8A]">
                <svg
                  className="w-9 h-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>

              <div className="text-[1.9rem] md:text-[2.2rem] font-medium leading-[1.15] tracking-tight mt-auto">
                Static analysis
                <br />
                with SciTools
                <br />
                Understand, Python
                <br />
                & SonarQube.
              </div>
            </div>
          </div>

          {/* --- 2. SATIR: Pembe Kart, Açıklama ve Logolar --- */}
          <div className="flex flex-row items-center gap-8 w-full mt-2">
            <div className="bg-[#F27A8A] rounded-[1.8rem] py-5 px-8 flex items-center gap-6 shadow-xl relative overflow-hidden w-max">
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                style={noiseStyle}
              />
              <div className="text-[3.2rem] font-bold tracking-tight">
                C&K
              </div>
              <div className="text-[1.1rem] font-medium leading-tight text-white/95">
                Chidamber & Kemerer
                <br />
                metric suite applied.
              </div>
            </div>

            <div className="text-[1.05rem] leading-snug text-white/80 max-w-[480px] font-medium">
              A Deep Architectural Audit Uncovering The
              <br />
              Real Maintainability, Hidden God Classes,
              <br />
              And Technical Debt Concentrated In Hotspots.
            </div>

            <div className="ml-auto flex gap-3 pr-2">
              <div className="w-14 h-14 rounded-full bg-[#F27A8A] flex items-center justify-center font-bold text-2xl shadow-xl">
                M
              </div>
              <div className="-ms-4 w-14 h-14 rounded-full bg-[#229297] flex items-center justify-center font-bold text-2xl shadow-xl">
                T
              </div>
              <div className="-ms-4 w-14 h-14 rounded-full bg-[#F5D95C] flex items-center justify-center font-bold text-2xl shadow-xl text-[#176E71]">
                S
              </div>
            </div>
          </div>

          {/* Team members line */}
          <div className="text-white/75 text-sm font-medium tracking-wide mt-2">
            Mert Ergün · Tahacan Çelebi · Serhat Akbulut
          </div>
        </div>
      </div>
    </div>
  );
}
