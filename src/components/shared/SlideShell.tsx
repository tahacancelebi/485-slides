"use client";

interface SlideShellProps {
  children: React.ReactNode;
  bgColor: string;
  texture?: "dots" | "dots-dark" | "scanlines" | "crosshatch" | "vignette" | "none";
  slideNumber: number;
  totalSlides?: number;
  slideNumberColor?: string;
  className?: string;
}

export default function SlideShell({
  children,
  bgColor,
  texture = "none",
  slideNumber,
  totalSlides = 17,
  slideNumberColor = "rgba(255,255,255,0.3)",
  className = "",
}: SlideShellProps) {
  const textureClass =
    texture === "dots" ? "texture-dots" :
    texture === "dots-dark" ? "texture-dots-dark" :
    texture === "scanlines" ? "texture-scanlines" :
    texture === "crosshatch" ? "texture-crosshatch" :
    texture === "vignette" ? "texture-vignette" :
    "";

  const padded = String(slideNumber).padStart(2, "0");
  const total = String(totalSlides).padStart(2, "0");

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden ${textureClass} ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Slide Number */}
      <div
        className="absolute top-[28px] right-[40px] z-10"
        style={{
          fontFamily: "var(--font-general)",
          fontSize: "14px",
          color: slideNumberColor,
          letterSpacing: "0.5px",
        }}
      >
        /({padded}-{total})
      </div>

      {/* Content */}
      <div className="slide-content w-full h-full">
        {children}
      </div>
    </div>
  );
}
