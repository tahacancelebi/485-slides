import React from 'react';

export default function AboutUsSlidePerfect() {
  // Kumlu (noise) doku - Hem kağıt hissi hem de retro görünüm için
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  // Nokta (dot) dokusu - En üstte, tüm şekillerin üzerinde
  const dotsStyle = {
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)`,
    backgroundSize: '28px 28px',
    backgroundPosition: '0 0',
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-[#2D0B38] font-sans text-[#F4EFE2]">
      {/* 1. ARKA PLAN SOL ÜST EĞRİ (Parlak Mor) */}
      {/* Orijinaldeki gibi sol üstten devasa bir şekilde giriyor */}
      <div className="absolute w-[180vh] h-[180vh] bg-[#870E9B] rounded-full -left-[105vh] -top-[35vh] z-0" />

      {/* 2. ANA SARI ÇEMBER */}
      <div className="absolute w-[100vh] h-[100vh] bg-[#F1A90B] rounded-full top-[50%] -translate-y-[50%] left-[18vh] shadow-[0_0_60px_rgba(0,0,0,0.3)] z-10 flex flex-col justify-center pl-[24vh]">
        {/* TM Yazısı - Tam olarak 'Not' kelimesinin hizasında sağ üstte */}

        {/* Ana Dev Başlık */}
        <h1 className="text-[#321142] font-black text-[14.5vh] -ms-12 leading-[0.8] tracking-tighter">
          We're Not
          <br />
          Just Another
          <br />
          <span className="text-[#F4EFE2]">
            Marketing
            <br />
            Agency.
          </span>
        </h1>
      </div>

      {/* 3. KIRMIZI/PEMBE ÇEMBER (Sağ Orta) */}
      <div className="absolute w-[52vh] h-[52vh] bg-[#E61B5A] rounded-full right-[7vw] top-[25vh] shadow-2xl z-20 flex flex-col justify-center px-[7vh]">
        {/* Artı İkonu - 'We're a' yazısının yanına milimetrik ayar */}
        <span className="absolute right-[15%] top-[40%] text-[#F1A90B] text-[6vh] font-black leading-none">
          +
        </span>
        <h2 className="text-[#F4EFE2] font-bold text-[5.2vh] leading-[0.95] tracking-tight">
          We're a<br />
          creative
          <br />
          partner for
          <br />
          the digital age.
        </h2>
      </div>

      {/* 4. KÜÇÜK MOR ÇEMBER (Alt Orta) */}
      {/* Sarı çemberin sağ altına basan mor yuvarlak */}
      <div className="absolute w-[24vh] h-[24vh] bg-[#6112C8] rounded-full left-[52vw] bottom-[10vh] shadow-xl z-20 flex items-center justify-center">
        <span className="text-[#F1A90B] text-[13vh] font-black leading-none mt-[3.5vh] ml-[0.5vh]">
          *
        </span>
      </div>

      {/* --- METİNLER VE İKAZLAR (Tümü absolute ile kilitli) --- */}

      {/* Sol Üst: About Us */}
      <div className="absolute top-[5vh] left-[4vw] font-serif italic text-[#E5A5D4] text-[3.2vh] tracking-wide z-30">
        About Us.
      </div>

      {/* Sağ Üst: Etiketler */}
      <div className="absolute top-[5vh] right-[4vw] flex items-center gap-[3.5vw] text-[1.8vh] font-bold z-30">
        <span className="text-[#F1A90B] font-medium tracking-wide">
          Disqet Design
        </span>
        <span className="text-[#E61B5A] tracking-wider">/(03-D1*)</span>
      </div>

      {/* Sağ Üst: Uzun Paragraf */}
      <div className="absolute top-[13vh] right-[4vw] w-[30vw] text-right text-[1.3vh] leading-[1.65] text-[#F4EFE2]/80 font-medium tracking-wide z-30">
        Our Team Blends Creativity, Strategy, And Technology
        <br />
        To Help Brands Grow Meaningfully — Not Just Louder.
        <br />
        From Brand Storytelling To Performance Marketing,
        <br />
        We Bring Ideas To Life That Connect And Convert.
      </div>

      {/* Sağ Alt: Kısa Vurgulu Paragraf */}
      <div className="absolute bottom-[8vh] right-[4vw] w-[24vw] text-[2.3vh] leading-[1.1] font-bold tracking-tight text-[#F4EFE2] z-30">
        We started with a<br />
        simple belief that
        <br />
        <span className="text-[#E5A5D4]">
          marketing should feel
          <br />
          authentic, measurable,
          <br />
          and human.
        </span>
      </div>

      {/* Sol Alt: D & S Logoları */}
      <div className="absolute bottom-[5vh] left-[4vw] flex items-center z-40">
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#F1A90B] flex items-center justify-center font-black text-[3.2vh] text-[#321142] shadow-lg z-10">
          S
        </div>
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#FC64DA] flex items-center justify-center font-black text-[3.2vh] text-[#321142] shadow-lg -ml-[1.8vh] z-0">
          A
        </div>
      </div>

      {/* --- EN ÜST DOKU KATMANLARI --- */}

      {/* Nokta (Dot) Dokusu: Z-50 ile tüm elementlerin üzerinde ama hafif transparan */}
      <div
        className="absolute inset-0 z-50 pointer-events-none"
        style={dotsStyle}
      />

      {/* Kum (Noise) Dokusu: Z-60 ile en üstte genel vintage/kağıt hissiyatını verir */}
      <div
        className="absolute inset-0 z-[60] pointer-events-none opacity-[0.4] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}
