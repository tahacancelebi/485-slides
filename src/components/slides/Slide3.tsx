import React from 'react';
import { DecorativeAsterisk } from '@/components/shared/DecorativeAsterisk';

export default function OssOverviewSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  const dotsStyle = {
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)`,
    backgroundSize: '28px 28px',
    backgroundPosition: '0 0',
  };

  return (
    <div className="w-[100cqw] h-[100cqh] relative overflow-hidden bg-[#2D0B38] font-sans text-[#F4EFE2]">
      {/* 1. ARKA PLAN SOL ÜST EĞRİ (Parlak Mor) */}
      <div className="absolute w-[180cqh] h-[180cqh] bg-[#870E9B] rounded-full -left-[105cqh] -top-[35cqh] z-0" />

      {/* 2. ANA SARI ÇEMBER */}
      <div className="absolute w-[100cqh] h-[100cqh] bg-[#F1A90B] rounded-full top-[50%] -translate-y-[50%] left-[18cqh] shadow-[0_0_60px_rgba(0,0,0,0.3)] z-10 flex flex-col justify-center pl-[24cqh]">
        <h1 className="text-[#321142] font-black text-[12.5cqh] -ms-12 leading-[0.8] tracking-tighter">
          KNIME
          <br />
          Workbench
          <br />
          <span className="text-[#F4EFE2]">
            Data
            <br />
            Analytics.
          </span>
        </h1>
      </div>

      {/* 3. KIRMIZI/PEMBE ÇEMBER (Sağ Orta) */}
      <div className="absolute w-[52cqh] h-[52cqh] bg-[#E61B5A] rounded-full right-[7cqw] top-[25cqh] shadow-2xl z-20 flex flex-col justify-center px-[7cqh]">
        <span className="absolute right-[15%] top-[40%] text-[#F1A90B] text-[6cqh] font-black leading-none">
          +
        </span>
        <h2 className="text-[#F4EFE2] font-bold text-[5.2cqh] leading-[0.95] tracking-tight">
          Eclipse RCP
          <br />
          graphical
          <br />
          front-end for
          <br />
          workflows.
        </h2>
      </div>

      {/* 4. KÜÇÜK MOR ÇEMBER (Alt Orta) */}
      <div className="absolute w-[24cqh] h-[24cqh] bg-[#6112C8] rounded-full left-[52cqw] bottom-[10cqh] shadow-xl z-20 flex items-center justify-center">
        <DecorativeAsterisk className="text-[#F1A90B] w-[6cqw] h-[6cqw] shrink-0 " />
      </div>

      {/* --- METİNLER VE İKAZLAR --- */}

      {/* Sol Üst: OSS Product */}
      <div className="absolute top-[5cqh] left-[4cqw] font-serif italic text-[#E5A5D4] text-[3.2cqh] tracking-wide z-30">
        OSS Product.
      </div>

      {/* Sağ Üst: Etiketler */}
      <div className="absolute top-[5cqh] right-[4cqw] flex items-center gap-[3.5cqw] text-[1.8cqh] font-bold z-30">
        <span className="text-[#F1A90B] font-medium tracking-wide">
          BBM485 · G05
        </span>
        <span className="text-[#E61B5A] tracking-wider">/(02-D1*)</span>
      </div>

      {/* Sağ Üst: Uzun Paragraf */}
      <div className="absolute top-[13cqh] right-[4cqw] w-[30cqw] text-right text-[1.3cqh] leading-[1.65] text-[#F4EFE2]/80 font-medium tracking-wide z-30">
        A Widely Used, Open-Source Data Analytics Platform
        <br />
        Built Entirely In Java — Over 100,000 Lines Of Code
        <br />
        And 672 Classes Form A Realistic, Enterprise-Level
        <br />
        Codebase For Architectural Analysis.
      </div>

      {/* Sağ Alt: Kısa Vurgulu Paragraf */}
      <div className="absolute bottom-[8cqh] right-[4cqw] w-[24cqw] text-[2.3cqh] leading-[1.1] font-bold tracking-tight text-[#F4EFE2] z-30">
        Language: Java (OO).
        <br />
        License: GNU GPL.
        <br />
        <span className="text-[#E5A5D4]">
          ~100 KLOC across
          <br />
          672 classes, highly
          <br />
          object-oriented design.
        </span>
      </div>

      {/* Sol Alt: Logolar */}
      <div className="absolute bottom-[5cqh] left-[4cqw] flex items-center z-40">
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#F1A90B] flex items-center justify-center font-black text-[3.2cqh] text-[#321142] shadow-lg z-10">
          K
        </div>
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#FC64DA] flex items-center justify-center font-black text-[3.2cqh] text-[#321142] shadow-lg -ml-[1.8cqh] z-0">
          W
        </div>
      </div>

      {/* --- EN ÜST DOKU KATMANLARI --- */}
      <div
        className="absolute inset-0 z-50 pointer-events-none"
        style={dotsStyle}
      />

      <div
        className="absolute inset-0 z-[60] pointer-events-none opacity-[0.4] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}
