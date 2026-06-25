"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/images/hero.png')", filter: "saturate(0.85) brightness(0.75)" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
      {/* Overlay gradiente */}

      {/* Contenido — izquierda, pegado al fondo */}
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center items-center text-center -mt-10">

        <p className="text-white text-[11px] tracking-[0.35em] uppercase mb-5 font-sans">
          Vaya Turismo de Córdoba al mundo
        </p>
        <div className="mb-6" />

        <h1
          className="font-serif font-light text-white leading-[1.05] tracking-tight mb-10"
          style={{ fontSize: "clamp(3.125rem, 8.2vw, 7.125rem)" }}
        >
          Cada destino,<br />una historia nueva
        </h1>

      </div>

      {/* Scroll indicator — centro abajo */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-white/50 animate-bounce"
        >
          <path
            d="M4 7L10 13L16 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
