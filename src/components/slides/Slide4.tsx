import React from 'react';

export default function WhyChooseUsSlideExact() {
  // Kumlu (noise) doku - Katmanların üzerine vintage doku verir
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  // Nokta (dot) dokusu - En üst katmanda ince detay
  const dotsStyle = {
    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)`,
    backgroundSize: '28px 28px',
    backgroundPosition: '0 0',
  };

  return (
    <div className="w-screen h-screen bg-[#11162F] relative overflow-hidden font-sans text-[#F4EFE2] selection:bg-[#E1F555] selection:text-[#11162F]">
      {/* --- SOL KISIM (Absolute ile Milimetrik Kilitlenmiş Metinler) --- */}

      {/* Sol Üst: Why Choose Us */}
      <div className="absolute top-[5vh] left-[4vw] font-serif italic text-[#6EE0A0] text-[3vh] tracking-wide z-20">
        Why Choose Us
      </div>

      {/* Üst Orta: Numara Etiketi */}
      <div className="absolute top-[5.5vh] left-[34vw] font-bold text-[#E1F555] text-[2vh] tracking-widest z-20">
        /(04-D1*)
      </div>

      {/* Orta Sol: Yıldız İkonu */}
      <div className="absolute top-[22vh] left-[4vw] text-[#E1F555] text-[9vh] font-black leading-none z-20">
        *
      </div>

      {/* Orta: Kısa Açıklama */}
      <div className="absolute top-[24vh] left-[26vw] w-[20vw] z-20">
        <p className="text-[2.8vh] font-bold leading-[1.05] tracking-tight">
          Because we deliver
          <br />
          clarity, creativity, and
          <br />
          consistency.
        </p>
      </div>

      {/* ANA DEV BAŞLIK */}
      {/* Satır aralığı (leading) ve harf aralığı (tracking) görseldeki gibi iç içe girecek kadar sıkı */}
      <div className="absolute top-[42vh] left-[3.5vw] z-20">
        <h1 className="text-[14.5vh] font-black leading-[0.8] tracking-tighter">
          Why Brands
          <br />
          Choose to
          <br />
          <span className="text-[#2C51F0]">Work With Us</span>
        </h1>
      </div>

      {/* Sol Alt: D & S Logoları */}
      <div className="absolute bottom-[5vh] left-[4vw] flex items-center z-20">
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#e2f174] flex items-center justify-center font-black text-[3.2vh] text-[#11162F] shadow-lg z-10">
          M
        </div>
        <div className="w-[7.5vh] h-[7.5vh] rounded-full bg-[#6EE0A0] flex items-center justify-center font-black text-[3.2vh] text-[#11162F] shadow-lg -ml-[1.5vh] z-0">
          E
        </div>
      </div>

      {/* Alt Orta: Uzun Paragraf */}
      <div className="absolute bottom-[4.5vh] left-[24vw] w-[26vw] z-20">
        <p className="text-[1.35vh] leading-[1.6] text-[#F4EFE2]/80 font-medium tracking-wide">
          Brands Choose To Work With Us Because We
          <br />
          Bring Clarity And Creativity To Every Stage Of
          <br />
          Their Marketing Journey. We Don't Believe In
          <br />
          One-Size-Fits-All Solutions Instead.
        </p>
      </div>

      {/* --- SAĞ KISIM (Kartlar - Flexbox ile tam eşitlik ve spacing) --- */}
      {/* Görseldeki gibi kartların ekrana olan uzaklığı ve birbirleri arasındaki gap kusursuz ayarlandı */}
      <div className="absolute right-[3vw] top-[3.5vh] bottom-[3.5vh] w-[42vw] flex flex-col gap-[1.8vh] z-20">
        {/* Kart 1 : Sarı/Yeşil */}
        <div className="flex-1 bg-[#E1F555] rounded-[3vh] p-[4.5vh] relative flex flex-col justify-center shadow-xl">
          <ArrowIcon />
          <h3 className="text-[#11162F] text-[3.3vh] font-bold leading-[0.95] tracking-tight w-[80%]">
            Personalized Strategy
            <br />
            Every brand is different :<br />
            we tailor every move to
            <br />
            your goals.
          </h3>
        </div>

        {/* Kart 2 : Su Yeşili */}
        <div className="flex-1 bg-[#6EE0A0] rounded-[3vh] p-[4.5vh] relative flex flex-col justify-center shadow-xl">
          <ArrowIcon />
          <h3 className="text-[#11162F] text-[3.3vh] font-bold leading-[0.95] tracking-tight w-[80%]">
            Creative Excellence
            <br />
            Design that not only
            <br />
            catches the eye, but
            <br />
            captures attention.
          </h3>
        </div>

        {/* Kart 3 : Canlı Mavi */}
        {/* Mavi kartın üzerindeki metin de koyu lacivert (görseldeki kontrastla birebir) */}
        <div className="flex-1 bg-[#3655EB] rounded-[3vh] p-[4.5vh] relative flex flex-col justify-center shadow-xl">
          <ArrowIcon />
          <h3 className="text-[#11162F] text-[3.3vh] font-bold leading-[0.95] tracking-tight w-[80%]">
            Creative Excellence
            <br />
            Design that not only
            <br />
            catches the eye, but
            <br />
            captures attention.
          </h3>
        </div>
      </div>

      {/* --- DOKU KATMANLARI (EN ÜSTTE) --- */}

      {/* Nokta (Dot) Dokusu: Z-40 ile tüm elementlerin üzerinde ama transparan */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={dotsStyle}
      />

      {/* Kum (Noise) Dokusu: Z-50 ile en üstte genel vintage/kağıt hissiyatını verir */}
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-[0.35] mix-blend-multiply"
        style={noiseStyle}
      />
    </div>
  );
}

// Sağ Üst Ok İkonu (Kartların köşesindeki ince tasarım)
function ArrowIcon() {
  return (
    <svg
      className="absolute top-[4vh] right-[4vh] w-[4.5vh] h-[4.5vh] text-[#11162F]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17L17 7M17 7H7M17 7V17"
      />
    </svg>
  );
}
