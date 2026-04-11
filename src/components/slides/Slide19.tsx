import DependencyFlowGraph from './DependencyFlowGraph';

export default function DependencyGraphSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  return (
    <div className="w-screen h-screen bg-[#B85C38] relative overflow-hidden font-sans text-[#F4EFE2]">
      {/* === TOP BAR === */}
      <div className="absolute top-[5vh] left-[4vw] font-serif italic text-[#F4EFE2] text-[3vh] tracking-wide z-30">
        Concrete Architecture
      </div>
      <div className="absolute top-[5.5vh] left-[32vw] text-[#F4EFE2]/40 font-medium text-[1.8vh] tracking-wide z-30">
        BBM485 · T1
      </div>
      <div className="absolute top-[5vh] right-[5vw] text-[#E8B83D] font-bold text-[2.2vh] tracking-widest z-30">
        /(13-T1*)
      </div>

      {/* === LEFT SIDE HEADING === */}
      <div className="absolute top-[16vh] left-[2vw] z-30 w-[28vw]">
        <h1 className="text-[9vh] font-black leading-[0.78] tracking-tighter">
          Dependency
          <br />
          <span className="text-[#E8B83D]">Graph.</span>
        </h1>
      </div>

      {/* Left description */}
      <div className="absolute top-[44vh] left-[4vw] flex items-start gap-[1.5vw] z-30 w-[24vw]">
        <div className="w-[3vw] h-[3px] bg-[#F4EFE2] mt-[1vh] flex-shrink-0" />
        <p className="text-[1.6vh] leading-[1.6] text-[#F4EFE2]/75 font-medium tracking-wide">
          Extracted At The Package
          <br />
          Level — Visual Density
          <br />
          Reveals The Real Hubs.
        </p>
      </div>

      {/* Packages-extracted stat (kept from original composition) */}
      <div className="absolute top-[56vh] left-[4vw] w-[16vw] h-[16vh] bg-[#1A1A2E] rounded-[1.5vh]  z-[25] shadow-xl overflow-hidden">
        <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none" style={noiseStyle} />
        <div className="relative z-10 h-full flex flex-col justify-end p-[2vh] ">
          <span className="text-[#F4EFE2] text-[4.5vh] font-black leading-none tracking-tighter">22</span>
          <span className="text-[#F4EFE2]/60 text-[1.2vh] font-bold mt-[0.3vh]">
            Packages
            <br />
            Extracted
          </span>
        </div>
      </div>

      {/* Large asterisk — moved behind the canvas for texture */}
      <div className="absolute top-[1vh] right-[13vw] text-[#E8B83D]/35 text-[16vh] font-black z-[11] leading-none pointer-events-none">
        +
      </div>

      {/* ==================================================== */}
      {/* === GRAPH CANVAS — React Flow (cool library) ==== */}
      {/* ==================================================== */}
      <div className="absolute top-[12vh] right-[2vw] w-[65vw] h-[81vh] z-[20]">
        {/* Cream card frame — editorial chrome wrapping the graph */}
        <div className="absolute inset-0 bg-[#F4EFE2] rounded-[2vh] rotate-[0.4deg] shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none" style={noiseStyle} />

          {/* canvas header */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-[2.2vh] py-[1.4vh] border-b border-[#2A1A1A]/12 z-20">
            <div className="flex items-center gap-[1vh]">
              <div className="w-[1.1vh] h-[1.1vh] rounded-full bg-[#B85C38]" />
              <div className="w-[1.1vh] h-[1.1vh] rounded-full bg-[#E8B83D]" />
              <div className="w-[1.1vh] h-[1.1vh] rounded-full bg-[#3D5240]" />
              <span className="ml-[1vh] text-[#2A1A1A]/70 text-[1.2vh] font-bold tracking-widest">
                FIG · 13-T1 · knime-workbench.dep-graph
              </span>
            </div>
            <span className="text-[#2A1A1A]/50 text-[1.1vh] font-bold tracking-widest">
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
          <div className="absolute top-[4.6vh] left-[1vh] right-[1vh] bottom-[10vh]">
            <DependencyFlowGraph />
          </div>

          {/* legend — bottom strip inside canvas */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-[#2A1A1A]/12 px-[2.2vh] py-[1.2vh] flex items-center justify-between gap-[1.6vh] z-20 bg-[#F4EFE2]/90">
            <div className="flex items-center gap-[1.6vh] flex-wrap">
              <LegendDot color="#F4EFE2" border="#2A1A1A" label="HUB" />
              <LegendDot color="#3D5240" border="#B8D44E" label="BASE" />
              <LegendDot color="#1A1A2E" border="#E8B83D" label="MID" />
              <LegendDot color="#F4EFE2" border="#B85C38" label="LEAF" />
              <LegendDot color="#E8B83D" border="#2A1A1A" label="TEST" />
              <LegendDot color="#F4EFE2" border="#2A1A1A" label="ISO" dashed />
            </div>
            <div className="flex items-center gap-[1.2vh] text-[1.05vh] font-bold tracking-widest text-[#2A1A1A]/70">
              <div className="flex items-center gap-[0.5vh]">
                <span className="inline-block w-[2.4vh] h-[2.5px] bg-[#B85C38] rounded-[1px]" />
                ≥100
              </div>
              <div className="flex items-center gap-[0.5vh]">
                <span className="inline-block w-[2.4vh] h-[1.8px] bg-[#2A1A1A]/85" />
                30-99
              </div>
              <div className="flex items-center gap-[0.5vh]">
                <span
                  className="inline-block w-[2.4vh] h-[1px]"
                  style={{ borderTop: '1.5px dashed rgba(42,26,26,0.6)' }}
                />
                &lt;30
              </div>
              <div className="flex items-center gap-[0.5vh] ml-[0.6vh] pl-[0.9vh] border-l border-[#2A1A1A]/20">
                <span className="inline-block w-[2.4vh] h-[2.8px] bg-[#D13B3B] rounded-[1px] shadow-[0_0_6px_rgba(209,59,59,0.5)]" />
                <span className="text-[#D13B3B]">CYCLE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Corner stat chip — key insight badge */}
        <div className="absolute -top-[2vh] -right-[1vh] bg-[#E8B83D] text-[#2A1A1A] px-[1.8vh] py-[1vh] rounded-[1vh] rotate-[3deg] shadow-xl z-30 border-[2px] border-[#2A1A1A]">
          <div className="text-[0.95vh] font-black tracking-[0.22em]">HEAVIEST EDGE</div>
          <div className="text-[1.9vh] font-black tracking-tight leading-none mt-[0.3vh]">
            editor → repository
          </div>
          <div className="text-[1.1vh] font-bold mt-[0.4vh]">
            362 · editor is top hub
          </div>
        </div>

        {/* ⚠ Cyclic dependency warning chip — bad-news red callout */}
        <div className="absolute -top-[2vh] right-[13vw] bg-[#D13B3B] text-[#F4EFE2] px-[1.8vh] py-[1vh] rounded-[1vh] -rotate-[2.5deg] z-30 border-[2px] border-[#2A1A1A] shadow-[0_0_24px_rgba(209,59,59,0.55)]">
          <div className="flex items-center gap-[0.7vh] text-[0.95vh] font-black tracking-[0.22em]">
            <span className="text-[1.4vh] leading-none">⚠</span>
            CYCLIC DEPENDENCY
          </div>
          <div className="text-[1.9vh] font-black tracking-tight leading-none mt-[0.3vh]">
            editor ↔ ui.layout
          </div>
          <div className="text-[1.1vh] font-bold mt-[0.4vh] text-[#F4EFE2]/90">
            12 forward · 105 back — breaks layering
          </div>
        </div>
      </div>

      {/* Logo circles */}
      <div className="absolute bottom-[5vh] left-[4vw] flex items-center z-30">
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#F4EFE2] flex items-center justify-center font-black text-[3.2vh] text-[#B85C38] shadow-lg z-10">
          D
        </div>
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#E8B83D] flex items-center justify-center font-black text-[3.2vh] text-[#2A1A1A] shadow-lg -ml-[1.8vh] z-0">
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
    <div className="flex items-center gap-[0.6vh]">
      <span
        className="inline-block w-[1.4vh] h-[1.4vh] rounded-[3px]"
        style={{ background: color, border: `1.5px ${dashed ? 'dashed' : 'solid'} ${border}` }}
      />
      <span className="text-[#2A1A1A]/75 text-[1.05vh] font-black tracking-[0.18em]">{label}</span>
    </div>
  );
}
