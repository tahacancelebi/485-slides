import DependencyFlowGraph from './DependencyFlowGraph';

export default function DependencyGraphSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  return (
    <div className="w-[100cqw] h-[100cqh] bg-[#B85C38] relative overflow-hidden font-sans text-[#F4EFE2]">
      {/* === TOP BAR === */}
      <div className="absolute top-[5cqh] left-[4cqw] font-serif italic text-[#F4EFE2] text-[3cqh] tracking-wide z-30">
        Concrete Architecture
      </div>
      <div className="absolute top-[5.5cqh] left-[32cqw] text-[#F4EFE2]/40 font-medium text-[1.8cqh] tracking-wide z-30">
        BBM485 · T2
      </div>
      <div className="absolute top-[5cqh] right-[5cqw] text-[#E8B83D] font-bold text-[2.2cqh] tracking-widest z-30">
        /(13-D1*)
      </div>

      {/* === LEFT SIDE HEADING === */}
      <div className="absolute top-[16cqh] left-[2cqw] z-30 w-[28cqw]">
        <h1 className="text-[9cqh] font-black leading-[0.78] tracking-tighter">
          Dependency
          <br />
          <span className="text-[#E8B83D]">Graph.</span>
        </h1>
      </div>

      {/* Left description */}
      <div className="absolute top-[44cqh] left-[4cqw] flex items-start gap-[1.5cqw] z-30 w-[24cqw]">
        <div className="w-[3cqw] h-[3px] bg-[#F4EFE2] mt-[1cqh] flex-shrink-0" />
        <p className="text-[1.6cqh] leading-[1.6] text-[#F4EFE2]/75 font-medium tracking-wide">
          Extracted At The Package
          <br />
          Level — Visual Density
          <br />
          Reveals The Real Hubs.
        </p>
      </div>

      {/* Packages-extracted stat (kept from original composition) */}
      <div className="absolute top-[56cqh] left-[4cqw] w-[16cqw] h-[16cqh] bg-[#1A1A2E] rounded-[1.5cqh]  z-[25] shadow-xl overflow-hidden">
        <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none" style={noiseStyle} />
        <div className="relative z-10 h-full flex flex-col justify-end p-[2cqh] ">
          <span className="text-[#F4EFE2] text-[4.5cqh] font-black leading-none tracking-tighter">22</span>
          <span className="text-[#F4EFE2]/60 text-[1.2cqh] font-bold mt-[0.3cqh]">
            Packages
            <br />
            Extracted
          </span>
        </div>
      </div>

      {/* Large asterisk — moved behind the canvas for texture */}
      <div className="absolute top-[1cqh] right-[13cqw] text-[#E8B83D]/35 text-[16cqh] font-black z-[11] leading-none pointer-events-none">
        +
      </div>

      {/* ==================================================== */}
      {/* === GRAPH CANVAS — React Flow (cool library) ==== */}
      {/* ==================================================== */}
      <div className="absolute top-[12cqh] right-[2cqw] w-[65cqw] h-[81cqh] z-[20]">
        {/* Cream card frame — editorial chrome wrapping the graph */}
        <div className="absolute inset-0 bg-[#F4EFE2] rounded-[2cqh] rotate-[0.4deg] shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none" style={noiseStyle} />

          {/* canvas header */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-[2.2cqh] py-[1.4cqh] border-b border-[#2A1A1A]/12 z-20">
            <div className="flex items-center gap-[1cqh]">
              <div className="w-[1.1cqh] h-[1.1cqh] rounded-full bg-[#B85C38]" />
              <div className="w-[1.1cqh] h-[1.1cqh] rounded-full bg-[#E8B83D]" />
              <div className="w-[1.1cqh] h-[1.1cqh] rounded-full bg-[#3D5240]" />
              <span className="ml-[1cqh] text-[#2A1A1A]/70 text-[1.2cqh] font-bold tracking-widest">
                FIG · 13-T2 · knime-workbench.dep-graph
              </span>
            </div>
            <span className="text-[#2A1A1A]/50 text-[1.1cqh] font-bold tracking-widest">
              4 LAYERS · 16 NODES · 20 EDGES
            </span>
          </div>

          {/* paper texture dots */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(42,26,26,0.10) 1px, transparent 1px)`,
              backgroundSize: '22px 22px',
            }}
          />

          {/* actual react-flow graph */}
          <div className="absolute top-[4.6cqh] left-[1cqh] right-[1cqh] bottom-[10cqh]">
            <DependencyFlowGraph />
          </div>

          {/* legend — bottom strip inside canvas */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-[#2A1A1A]/12 px-[2.2cqh] py-[1.2cqh] flex items-center justify-between gap-[1.6cqh] z-20 bg-[#F4EFE2]/90">
            <div className="flex items-center gap-[1.6cqh] flex-wrap">
              <LegendDot color="#F4EFE2" border="#2A1A1A" label="HUB" />
              <LegendDot color="#3D5240" border="#B8D44E" label="BASE" />
              <LegendDot color="#1A1A2E" border="#E8B83D" label="MID" />
              <LegendDot color="#F4EFE2" border="#B85C38" label="LEAF" />
              <LegendDot color="#E8B83D" border="#2A1A1A" label="TEST" />
              <LegendDot color="#F4EFE2" border="#2A1A1A" label="ISO" dashed />
            </div>
            <div className="flex items-center gap-[1.2cqh] text-[1.05cqh] font-bold tracking-widest text-[#2A1A1A]/70">
              <div className="flex items-center gap-[0.5cqh]">
                <span className="inline-block w-[2.4cqh] h-[2.5px] bg-[#B85C38] rounded-[1px]" />
                ≥100
              </div>
              <div className="flex items-center gap-[0.5cqh]">
                <span className="inline-block w-[2.4cqh] h-[1.8px] bg-[#2A1A1A]/85" />
                30-99
              </div>
              <div className="flex items-center gap-[0.5cqh]">
                <span
                  className="inline-block w-[2.4cqh] h-[1px]"
                  style={{ borderTop: '1.5px dashed rgba(42,26,26,0.6)' }}
                />
                &lt;30
              </div>
              <div className="flex items-center gap-[0.5cqh] ml-[0.6cqh] pl-[0.9cqh] border-l border-[#2A1A1A]/20">
                <span className="inline-block w-[2.4cqh] h-[2.8px] bg-[#D13B3B] rounded-[1px] shadow-[0_0_6px_rgba(209,59,59,0.5)]" />
                <span className="text-[#D13B3B]">CYCLE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Corner stat chip — key insight badge */}
        <div className="absolute -top-[2cqh] -right-[1cqh] bg-[#E8B83D] text-[#2A1A1A] px-[1.8cqh] py-[1cqh] rounded-[1cqh] rotate-[3deg] shadow-xl z-30 border-[2px] border-[#2A1A1A]">
          <div className="text-[0.95cqh] font-black tracking-[0.22em]">HEAVIEST EDGE</div>
          <div className="text-[1.9cqh] font-black tracking-tight leading-none mt-[0.3cqh]">
            editor → repository
          </div>
          <div className="text-[1.1cqh] font-bold mt-[0.4cqh]">
            362 · editor is top hub
          </div>
        </div>

        {/* ⚠ Cyclic dependency warning chip — bad-news red callout */}
        <div className="absolute -top-[2cqh] right-[13cqw] bg-[#D13B3B] text-[#F4EFE2] px-[1.8cqh] py-[1cqh] rounded-[1cqh] -rotate-[2.5deg] z-30 border-[2px] border-[#2A1A1A] shadow-[0_0_24px_rgba(209,59,59,0.55)]">
          <div className="flex items-center gap-[0.7cqh] text-[0.95cqh] font-black tracking-[0.22em]">
            <span className="text-[1.4cqh] leading-none">⚠</span>
            CYCLIC DEPENDENCY
          </div>
          <div className="text-[1.9cqh] font-black tracking-tight leading-none mt-[0.3cqh]">
            editor ↔ ui.layout
          </div>
          <div className="text-[1.1cqh] font-bold mt-[0.4cqh] text-[#F4EFE2]/90">
            12 forward · 105 back — breaks layering
          </div>
        </div>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[5cqh] left-[4cqw] flex items-center z-30">
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#F4EFE2] flex items-center justify-center font-black text-[3.2cqh] text-[#B85C38] shadow-lg z-10">
          D
        </div>
        <div className="w-[7.5cqh] h-[7.5cqh] rounded-full bg-[#E8B83D] flex items-center justify-center font-black text-[3.2cqh] text-[#2A1A1A] shadow-lg -ml-[1.8cqh] z-0">
          G
        </div>
      </div>

      {/* === GLOBAL TEXTURES === */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(244,239,219,0.08) 1.5px, transparent 1.5px)`,
          backgroundSize: '26px 26px',
        }}
      />
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.18] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}

function LegendDot({
  color,
  border,
  label,
  dashed = false,
}: {
  color: string;
  border: string;
  label: string;
  dashed?: boolean;
}) {
  return (
    <div className="flex items-center gap-[0.6cqh]">
      <span
        className="inline-block w-[1.4cqh] h-[1.4cqh] rounded-[3px]"
        style={{ background: color, border: `1.5px ${dashed ? 'dashed' : 'solid'} ${border}` }}
      />
      <span className="text-[#2A1A1A]/75 text-[1.05cqh] font-black tracking-[0.18em]">{label}</span>
    </div>
  );
}
