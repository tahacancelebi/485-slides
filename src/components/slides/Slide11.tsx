import React from 'react';

export default function WMCSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  const dotsStyle = {
    backgroundImage: `radial-gradient(rgba(244,239,226,0.08) 1.2px, transparent 1.2px)`,
    backgroundSize: '26px 26px',
  };

  // Threshold at 40, max at 576 → threshold sits at 6.94% of the scale.
  const safePct = (40 / 576) * 100;

  return (
    <div className="w-[100cqw] h-[100cqh] bg-[#2D0B38] relative overflow-hidden font-sans text-[#F4EFE2]">
      {/* Ghost watermark 576 — bottom right */}
      <div className="absolute -bottom-[18cqh] -right-[4cqw] text-[68cqh] font-black leading-none tracking-tighter text-[#F4EFE2]/[0.028] z-0 select-none">
        576
      </div>

      {/* Slim vertical stripes — editorial texture on left edge */}
      <div className="absolute top-0 bottom-0 left-[3cqw] w-[1px] bg-[#F4EFE2]/8 z-0" />
      <div className="absolute top-0 bottom-0 left-[3.4cqw] w-[1px] bg-[#F4EFE2]/5 z-0" />

      {/* === TOP BAR === */}
      <div className="absolute top-[5cqh] left-[4cqw] font-serif italic text-[#E8B83D] text-[3cqh] tracking-wide z-20">
        Q3 · Structural Complexity (WMC)
      </div>
      <div className="absolute top-[5.5cqh] left-[36cqw] text-[#E65C41] font-medium text-[1.8cqh] tracking-wide z-20">
        BBM485 · G05
      </div>
      <div className="absolute top-[5cqh] right-[4cqw] text-[#E8B83D] font-bold text-[2.2cqh] tracking-widest z-20">
        /(08-D1*
      </div>

      {/* === MAIN HEADING — Upper left === */}
      <div className="absolute top-[14cqh] left-[4cqw] z-20 w-[58cqw]">
        <h1 className="text-[12cqh] font-black leading-[0.78] tracking-tighter">
          Impossible
          <br />
          To <span className="text-[#E8B83D]">Unit Test.</span>
        </h1>
        <p className="text-[1.5cqh] font-bold text-[#F4EFE2]/50 tracking-[0.28em] uppercase mt-[2.5cqh]">
          Weighted Methods Per Class · KNIME Workbench
        </p>
      </div>

      {/* === HERO 576 — right side typographic === */}
      <div className="absolute top-[16cqh] right-[4cqw] z-20 text-right">
        <div className="inline-flex items-baseline gap-[1.2cqh] justify-end">
          <span className="text-[1.2cqh] font-black text-[#E8B83D] tracking-[0.3em] uppercase">
            Worst Case
          </span>
          <div className="w-[2.5cqh] h-[1px] bg-[#E8B83D]/60" />
        </div>
        <div className="relative mt-[1cqh]">
          <span className="text-[#F4EFE2] text-[24cqh] font-black leading-[0.72] tracking-tighter block">
            576
          </span>
          {/* Ink underline */}
          <div className="absolute -bottom-[1cqh] right-0 w-[14cqh] h-[0.5cqh] bg-[#E65C41]" />
        </div>
        <p className="text-[#F4EFE2]/80 text-[2cqh] font-black leading-[1.15] mt-[2cqh] tracking-tight">
          WorkflowEditor
        </p>
        <p className="text-[#F4EFE2]/45 text-[1.4cqh] font-medium leading-[1.4] mt-[0.8cqh] tracking-wide">
          14.4× above the very-complex
          <br />
          class threshold of 40
        </p>
      </div>

      {/* === VIOLATION CHIP — middle left === */}
      <div className="absolute top-[54cqh] left-[4cqw] z-20">
        <div className="inline-flex items-stretch bg-[#1A0B0B] border-l-[4px] border-[#E65C41] shadow-xl relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.22] mix-blend-overlay pointer-events-none"
            style={noiseStyle}
          />
          <div className="relative z-10 flex items-baseline gap-[2.2cqh] px-[3cqh] py-[2.2cqh]">
            <span className="text-[#E8B83D] text-[6cqh] font-black leading-none tracking-tighter">
              12.65%
            </span>
            <div>
              <span className="text-[#F4EFE2] text-[1.5cqh] font-black tracking-[0.22em] uppercase block">
                Of Classes Violate
              </span>
              <span className="text-[#F4EFE2]/55 text-[1.3cqh] font-medium tracking-wide">
                WMC &gt; 40 · Very-complex threshold
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* === DISTRIBUTION SCALE — solid blocks, no gradient === */}
      <div className="absolute bottom-[23cqh] left-[4cqw] right-[4cqw] z-20">
        {/* Header row */}
        <div className="flex items-end justify-between mb-[1.6cqh]">
          <span className="text-[#F4EFE2]/40 text-[1.25cqh] font-bold tracking-[0.3em] uppercase">
            WMC Distribution Scale
          </span>
          <span className="text-[#F4EFE2]/40 text-[1.25cqh] font-bold tracking-[0.3em] uppercase">
            0 → 576 · Outlier
          </span>
        </div>

        {/* Track — flex container with two solid blocks */}
        <div className="relative h-[2.4cqh] bg-[#1A0B0B] flex overflow-hidden">
          {/* Safe zone — solid olive */}
          <div
            className="relative bg-[#5C8A5C] overflow-hidden"
            style={{ width: `${safePct}%` }}
          >
            <div
              className="absolute inset-0 opacity-[0.3] mix-blend-multiply pointer-events-none"
              style={noiseStyle}
            />
          </div>
          {/* Violation zone — solid coral */}
          <div className="relative flex-1 bg-[#E65C41] overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.3] mix-blend-multiply pointer-events-none"
              style={noiseStyle}
            />
          </div>
          {/* Outlier marker — cream block at far right */}
          <div className="absolute right-0 top-0 bottom-0 w-[0.8cqh] bg-[#F4EFE2]" />
        </div>

        {/* Tick row below track */}
        <div className="relative mt-[0.8cqh] h-[4cqh]">
          {/* 0 label — flush left */}
          <div className="absolute left-0 top-0">
            <div className="w-[1px] h-[1cqh] bg-[#F4EFE2]/30 mb-[0.4cqh]" />
            <span className="text-[#F4EFE2]/40 text-[1.2cqh] font-bold tracking-wide">
              0
            </span>
          </div>

          {/* Threshold 40 tick */}
          <div
            className="absolute top-0"
            style={{ left: `${safePct}%`, transform: 'translateX(-50%)' }}
          >
            <div className="flex flex-col items-center">
              <div className="w-[2px] h-[1.2cqh] bg-[#E8B83D]" />
              <span className="text-[#E8B83D] text-[1.2cqh] font-black tracking-[0.18em] uppercase mt-[0.4cqh] whitespace-nowrap">
                40 · Threshold
              </span>
            </div>
          </div>

          {/* 576 outlier — flush right */}
          <div className="absolute right-0 top-0">
            <div className="flex flex-col items-end">
              <div className="w-[2px] h-[1.2cqh] bg-[#F4EFE2] self-end" />
              <span className="text-[#F4EFE2] text-[1.2cqh] font-black tracking-[0.18em] uppercase mt-[0.4cqh] whitespace-nowrap">
                576 · WorkflowEditor
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="absolute bottom-[5cqh] left-[4cqw] flex items-start gap-[1.5cqw] z-20 w-[50cqw]">
        <div className="w-[3cqw] h-[3px] bg-[#E8B83D] mt-[1cqh] flex-shrink-0" />
        <p className="text-[1.6cqh] leading-[1.6] text-[#F4EFE2]/75 font-medium tracking-wide">
          A WMC Of 576 Means Hundreds Of If/Else Branches
          <br />
          And Loops — Making Full Path Coverage Practically
          <br />
          Impossible. These Classes Become Bug Hubs.
        </p>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[5cqh] right-[4cqw] flex items-center z-20">
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#E8B83D] flex items-center justify-center font-black text-[3.2cqh] text-[#2D0B38] shadow-lg z-10">
          W
        </div>
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#E65C41] flex items-center justify-center font-black text-[3.2cqh] text-[#F4EFE2] shadow-lg -ml-[1.8cqh] z-0">
          M
        </div>
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 z-40 pointer-events-none" style={dotsStyle} />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.22] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}
