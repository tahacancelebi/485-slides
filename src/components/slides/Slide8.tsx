import React from 'react';

export default function GodClassSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  const gridStyle = {
    backgroundImage: `linear-gradient(rgba(26,11,11,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(26,11,11,0.07) 1px, transparent 1px)`,
    backgroundSize: '4.2vh 4.2vh',
  };

  const suspects = [
    {
      rank: '01',
      name: 'WorkflowEditor',
      meta: 'LOC · CBO · WMC · RFC',
      color: '#B8322B',
      lead: true,
    },
    {
      rank: '02',
      name: 'NodeContainerEditPart',
      meta: 'CBO · WMC · RFC',
      color: '#677926',
      lead: false,
    },
    {
      rank: '03',
      name: 'StyledTextEditor',
      meta: 'LOC · WMC',
      color: '#1A0B0B',
      lead: false,
    },
  ];

  return (
    <div className="w-screen h-screen bg-[#EFE2CB] relative overflow-hidden font-sans text-[#1A0B0B]">
      {/* Blueprint grid */}
      <div className="absolute inset-0 z-0" style={gridStyle} />

      {/* Giant watermark number */}
      <div className="absolute -top-[6vh] -right-[2vw] text-[56vh] font-black leading-none tracking-tighter text-[#1A0B0B]/[0.05] z-0 select-none">
        03
      </div>

      {/* === TOP BAR === */}
      <div className="absolute top-[5vh] left-[4vw] font-serif italic text-[#B8322B] text-[3vh] tracking-wide z-20">
        Deep Dive · Anti-Pattern
      </div>
      <div className="absolute top-[5.5vh] left-[30vw] text-[#677926] font-medium text-[1.8vh] tracking-wide z-20">
        BBM485 · T1
      </div>
      <div className="absolute top-[5vh] right-[4vw] text-[#1A0B0B] font-bold text-[2.2vh] tracking-widest z-20">
        /(10-T1*)
      </div>

      {/* === MAIN HEADING — Upper right === */}
      <div className="absolute top-[13vh] right-[4vw] z-20 text-right">
        <h1 className="text-[10vh] font-black leading-[0.82] tracking-tighter">
          Three Usual
          <br />
          <span className="text-[#B8322B]">Suspects.</span>
        </h1>
        <p className="text-[1.5vh] font-bold text-[#1A0B0B]/55 tracking-[0.28em] uppercase mt-[2vh]">
          Dominate Every Metric
        </p>
      </div>

      {/* === RANK LIST — Left column === */}
      <div className="absolute top-[38vh] left-[4vw] z-20 flex flex-col gap-[1.2vh] w-[60vw]">
        {suspects.map((s, i) => (
          <div
            key={s.rank}
            className={`relative flex items-center gap-[2.2vw] py-[2.2vh] pr-[3vh] border-t-[3px] ${
              i === suspects.length - 1 ? 'border-b-[3px]' : ''
            } border-[#1A0B0B]/25`}
          >
            <span
              className="text-[8.5vh] font-black leading-none tracking-tighter w-[12vh]"
              style={{ color: s.color }}
            >
              {s.rank}
            </span>
            <div className="flex-1">
              <h3
                className="text-[3.8vh] font-black leading-none tracking-tight"
                style={{ color: s.lead ? '#B8322B' : (s.rank === '02' ? '#677926' : '#1A0B0B') }}
              >
                {s.name}
              </h3>
              <p className="text-[1.4vh] font-bold text-[#1A0B0B]/60 tracking-[0.22em] uppercase mt-[1vh]">
                Dominates · {s.meta}
              </p>
            </div>
            {s.lead && (
              <span className="text-[1.2vh] font-black text-[#EFE2CB] bg-[#B8322B] rounded-full px-[1.8vh] py-[0.7vh] tracking-[0.25em] uppercase whitespace-nowrap">
                Lead
              </span>
            )}
          </div>
        ))}
      </div>

      {/* === FLOATING STAT CHIPS — Right middle === */}
      <div className="absolute top-[39vh] right-[4vw] z-30 flex flex-col gap-[1.5vh] w-[24vw]">
        <div className="bg-[#E0A524] rounded-[2vh] px-[2.5vh] py-[2.2vh] shadow-xl relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.3] mix-blend-multiply pointer-events-none"
            style={noiseStyle}
          />
          <div className="relative z-10 flex items-baseline gap-[1.8vh]">
            <span className="text-[6vh] font-black leading-none text-[#1A0B0B] tracking-tighter">
              166
            </span>
            <div>
              <span className="text-[1.4vh] font-black text-[#1A0B0B]/85 tracking-[0.25em] uppercase block">
                Fan-in
              </span>
              <span className="text-[1.2vh] font-medium text-[#1A0B0B]/65 tracking-wide">
                WorkflowEditor
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#1A0B0B] rounded-[2vh] px-[2.5vh] py-[2.2vh] shadow-xl relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.22] mix-blend-multiply pointer-events-none"
            style={noiseStyle}
          />
          <div className="relative z-10 flex items-baseline gap-[1.8vh]">
            <span className="text-[6vh] font-black leading-none text-[#E0A524] tracking-tighter">
              24
            </span>
            <div>
              <span className="text-[1.4vh] font-black text-[#E0A524] tracking-[0.25em] uppercase block">
                try-catch
              </span>
              <span className="text-[1.2vh] font-medium text-[#EFE2CB]/55 tracking-wide">
                Depth-of-8 nesting
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description bottom-left */}
      <div className="absolute bottom-[5vh] left-[4vw] flex items-start gap-[1.5vw] z-20 w-[48vw]">
        <div className="w-[3vw] h-[3px] bg-[#B8322B] mt-[1vh] flex-shrink-0" />
        <p className="text-[1.55vh] leading-[1.65] text-[#1A0B0B]/70 font-medium tracking-wide">
          WorkflowEditor Has A Fan-In Of 166, Depth-Of-8
          <br />
          Nested Blocks And 24 Try-Catch Blocks — A Central
          <br />
          Pillar That Desperately Needs Decomposition.
        </p>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[5vh] right-[4vw] flex items-center z-20">
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#B8322B] flex items-center justify-center font-black text-[3.2vh] text-[#EFE2CB] shadow-lg z-10">
          G
        </div>
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#1A0B0B] flex items-center justify-center font-black text-[3.2vh] text-[#E0A524] shadow-lg -ml-[1.8vh] z-0">
          C
        </div>
      </div>

      {/* Noise overlay */}
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.12] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}
