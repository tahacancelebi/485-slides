import React from 'react';

export default function LCOMSlide() {
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  const dotsStyle = {
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)`,
    backgroundSize: '32px 32px',
    backgroundPosition: '0 0',
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden font-sans flex text-[#F4EFE2]">
      {/* GLOBAL TEXTURE LAYER */}
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.25] mix-blend-multiply"
        style={noiseStyle}
      />

      {/* --- SOL KOLON (Turuncu Kısım) --- */}
      <div className="w-[55%] bg-[#E65C41] relative flex flex-col p-10 md:p-14 lg:p-16 pb-[16vh] z-10">
        {/* Üst Alan: Etiket */}
        <span className="text-white/80 font-medium tracking-wide text-[0.8rem] md:text-sm">
          Q4 · Cohesion Analysis
        </span>

        {/* Başlık ve Alıntı Yanyana */}
        <div className="flex justify-between items-start mt-8 w-full">
          <h2 className="font-serif italic text-6xl  leading-[0.9] tracking-tight">
            Lack of
            <br />
            Cohesion
            <br />
            (LCOM)
          </h2>

          <div className="flex gap-4 max-w-[45%] pt-2">
            <span className="text-5xl lg:text-6xl font-black font-serif leading-none mt-1 opacity-90">
              “
            </span>
            <p className="text-lg md:text-xl lg:text-[1.35rem] font-bold leading-[1.1] tracking-tight">
              WorkflowEditor
              <br />
              reaches a catastrophic
              <br />
              LCOM value of
              <br />
              7,690.
            </p>
          </div>
        </div>

        {/* Ana Dev Başlık */}
        <div className="mt-28 w-full">
          <h1 className="text-[6vw] font-black leading-[0.82] tracking-tighter transform scale-y-[1.1] origin-bottom-left">
            <span className="text-[#EAD037]">Methods Share Almost</span>{' '}
            No Data Fields — A Dumping Ground.
          </h1>
        </div>

        {/* SOL ALT: Çizgi ve Açıklama */}
        <div className="absolute bottom-[2%] left-0 w-full px-10 md:px-14 lg:px-16 flex justify-between items-start translate-y-[-1.5rem]">
          <div className="w-8 h-[3px] bg-white mt-1.5 opacity-90"></div>
          <p className="text-[0.75rem] md:text-[0.85rem] leading-snug font-medium opacity-85 text-right tracking-wide">
            Violates Single
            <br />
            Responsibility Principle,
            <br />
            Logic Cannot Be Reused
          </p>
        </div>
      </div>

      {/* --- SAĞ KOLON (Mavi Kısım) --- */}
      <div className="w-[45%] flex flex-col relative z-10 h-screen">
        {/* Sağ Üst Ana Alan (Açık Mavi) */}
        <div className="flex-1 bg-[#323681] relative flex flex-col items-center justify-center p-10 lg:p-14 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={dotsStyle}
          />

          <div
            className="absolute inset-0 pointer-events-none opacity-[0.35] mix-blend-multiply"
            style={noiseStyle}
          />

          {/* Sağ Üst Menü / Logolar */}
          <div className="absolute top-10 left-10 lg:top-14 lg:left-14 flex items-center z-20">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#E65C41] flex items-center justify-center font-black text-xl lg:text-2xl shadow-lg z-10 text-white">
              L
            </div>
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#EAD037] flex items-center justify-center font-black text-xl lg:text-2xl shadow-lg -ml-3 z-0 text-white">
              C
            </div>
          </div>
          <div className="absolute top-12 right-10 lg:top-16 lg:right-14 text-[#EAD037] font-bold text-xl lg:text-2xl tracking-wider z-20">
            /(11-D1*)
          </div>

          {/* Dev Çember */}
          <div className="relative z-20 w-[70%] max-w-[480px] aspect-square rounded-full bg-[#22245C] flex flex-col items-center justify-center shadow-2xl mt-4">
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0 opacity-[0.45] mix-blend-multiply"
                style={noiseStyle}
              />
            </div>

            {/* 64 Sayısı */}
            <div className="text-[11rem] lg:text-[14rem] xl:text-[17rem] font-bold leading-none tracking-tighter text-[#F4EFE2] relative z-10">
              64
            </div>

            {/* Çember Altı Yazısı */}
            <p className="absolute bottom-[0%] text-center text-[0.75rem] lg:text-[0.9rem] font-medium max-w-[220px] lg:max-w-[260px] leading-tight text-[#F4EFE2]/90 relative z-10 tracking-wide">
              Of All Classes Violate
              <br />
              The LCOM &gt; 1 Threshold —
              <br />
              Low Internal Cohesion.
            </p>

            {/* Yüzde Rozeti */}
            <div className="absolute top-[6%] -right-[6%] lg:top-[8%] lg:-right-[8%] w-[33%] aspect-square rounded-full bg-[#E65C41] flex items-center justify-center shadow-xl z-20">
              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <div
                  className="absolute inset-0 opacity-[0.4] mix-blend-multiply"
                  style={noiseStyle}
                />
              </div>
              <span className="text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-none text-[#F4EFE2] relative z-10">
                %
              </span>
            </div>
          </div>
        </div>

        {/* Sağ Alt Alan (Koyu Mavi Footer) */}
        <div className="h-[18%] bg-[#22245C] w-full px-10 lg:px-14 flex justify-between items-center relative z-20">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply"
            style={noiseStyle}
          />

          <div className="flex flex-col relative z-10">
            <span className="text-[#E65C41] text-[2.8rem] lg:text-[3.8rem] xl:text-[4.5rem] font-black leading-[0.85] tracking-tighter">
              7,690
            </span>
            <span className="text-[#F4EFE2] text-[2.8rem] lg:text-[3.8rem] xl:text-[4.5rem] font-black leading-[0.85] tracking-tighter">
              LCOM Max
            </span>
          </div>

          <div className="flex flex-col items-end text-right justify-center relative z-10">
            <span className="text-[#EAD037] text-4xl lg:text-5xl font-bold leading-none mb-1">
              !
            </span>
            <p className="text-[0.75rem] lg:text-[0.85rem] font-bold leading-tight max-w-[130px] lg:max-w-[150px] text-[#F4EFE2]">
              Catastrophic
              <br />
              outlier inside
              <br />
              WorkflowEditor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
