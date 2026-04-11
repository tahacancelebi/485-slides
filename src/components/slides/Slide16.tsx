import React from 'react';
import { DecorativeAsterisk } from '@/components/shared/DecorativeAsterisk';

export default function RecommendationsSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  return (
    <div className="w-screen h-screen bg-[#F4EFE2] relative overflow-hidden font-sans text-[#1A1A2E]">
      {/* === TOP BAR === */}
      <div className="absolute top-[5vh] left-[4vw] font-serif italic text-[#6B3FA0] text-[3vh] tracking-wide z-30">
        Recommendations
      </div>
      <div className="absolute top-[5.5vh] left-[30vw] text-[#1A1A2E]/35 font-medium text-[1.8vh] tracking-wide z-30">
        Bridge to D2
      </div>
      <div className="absolute top-[5vh] right-[4vw] text-[#6B3FA0] font-bold text-[2.2vh] tracking-widest z-30">
        /(16-D1*)
      </div>

      {/* === MAIN HEADING === */}
      <div className="absolute top-[13vh] left-[4vw] z-30">
        <h1 className="text-[10vh] font-black leading-[0.8] tracking-tighter">
          How We
          <br />
          <span className="text-[#6B3FA0]">Fix This.</span>
        </h1>
      </div>

      {/* Asterisk */}
      <div className="absolute top-[13vh] right-[16vw] z-30 leading-none text-[#6B3FA0]">
        <DecorativeAsterisk className="w-[7vh] h-[7vh]" />
      </div>

      {/* === THREE OVERLAPPING TILTED CARDS === */}

      {/* Card 1 — Purple — tilted left */}
      <div className="absolute top-[34vh] left-[5vw] w-[30vw] h-[48vh] bg-[#6B3FA0] rounded-[3vh] -rotate-3 shadow-2xl z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.3] mix-blend-multiply pointer-events-none" style={noiseStyle} />
        <div className="relative z-10 h-full flex flex-col justify-end p-[4vh]">
          <span className="text-[#DDD0EE] text-[6vh] font-black leading-none tracking-tighter">
            01
          </span>
          <h3 className="text-[#F4EFE2] text-[3.2vh] font-black leading-[0.95] tracking-tight mt-[1.5vh]">
            Decompose
            <br />
            God Classes
          </h3>
          <p className="text-[#F4EFE2]/70 text-[1.5vh] font-medium leading-[1.4] mt-[1.5vh]">
            Break down WorkflowEditor
            <br />
            to solve LOC, WMC and LCOM
            <br />
            in one architectural move.
          </p>
        </div>
      </div>

      {/* Card 2 — Coral — straight */}
      <div className="absolute top-[30vh] left-[30vw] w-[30vw] h-[52vh] bg-[#E65C41] rounded-[3vh] rotate-1 shadow-2xl z-15 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.3] mix-blend-multiply pointer-events-none" style={noiseStyle} />
        <div className="relative z-10 h-full flex flex-col justify-end p-[4vh]">
          <span className="text-[#F4EFE2]/30 text-[6vh] font-black leading-none tracking-tighter">
            02
          </span>
          <h3 className="text-[#F4EFE2] text-[3.2vh] font-black leading-[0.95] tracking-tight mt-[1.5vh]">
            Interface
            <br />
            Segregation
          </h3>
          <p className="text-[#F4EFE2]/70 text-[1.5vh] font-medium leading-[1.4] mt-[1.5vh]">
            Introduce narrow interfaces
            <br />
            to lower CBO and stop the
            <br />
            ripple effect at its source.
          </p>
        </div>
      </div>

      {/* Card 3 — Dark — tilted right */}
      <div className="absolute top-[26vh] left-[55vw] w-[30vw] h-[56vh] bg-[#1A1A2E] rounded-[3vh] rotate-3 shadow-2xl z-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none" style={noiseStyle} />
        <div className="relative z-10 h-full flex flex-col justify-end p-[4vh]">
          <span className="text-[#F4EFE2]/20 text-[6vh] font-black leading-none tracking-tighter">
            03
          </span>
          <h3 className="text-[#F4EFE2] text-[3.2vh] font-black leading-[0.95] tracking-tight mt-[1.5vh]">
            Break The
            <br />
            Cycle (DIP)
          </h3>
          <p className="text-[#F4EFE2]/70 text-[1.5vh] font-medium leading-[1.4] mt-[1.5vh]">
            Apply Dependency Inversion
            <br />
            to separate editor and ui.layout
            <br />
            for independent deployment.
          </p>
        </div>
      </div>

      {/* Bottom description */}
      <div className="absolute bottom-[5vh] left-[4vw] flex items-center gap-[1.5vw] z-30 w-[40vw]">
        <div className="w-[3vw] h-[3px] bg-[#6B3FA0] flex-shrink-0" />
        <p className="text-[1.5vh] leading-[1.6] text-[#1A1A2E]/45 font-medium tracking-wide">
          Three Concrete Interventions That Will Form The
          Basis Of Our D2 Conceptual Architecture Report.
        </p>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[5vh] right-[4vw] flex items-center z-30">
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#6B3FA0] flex items-center justify-center font-black text-[3.2vh] text-[#F4EFE2] shadow-lg z-10">
          R
        </div>
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#E65C41] flex items-center justify-center font-black text-[3.2vh] text-[#F4EFE2] shadow-lg -ml-[1.8vh] z-0">
          D
        </div>
      </div>

      {/* === TEXTURES === */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(26,26,46,0.04) 1.5px, transparent 1.5px)`,
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
