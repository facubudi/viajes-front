"use client";
import { useState } from "react";

const servicios = [
  {
    title: "Hotelería",
    text: "Alojamientos seleccionados, de boutique a resort.",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1400&q=80",
  },
  {
    title: "Traslados",
    text: "Cada tramo del viaje, resuelto con precisión.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=80",
  },
  {
    title: "Experiencias únicas",
    text: "Momentos diseñados para no repetirse.",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1400&q=80",
  },
  {
    title: "Turismo",
    text: "Guías y circuitos pensados a tu medida.",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1400&q=80",
  },
];

export default function ServiciosSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="servicios" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3 font-normal">
            Lo que ofrecemos
          </p>
          <h2 className="font-serif text-dark text-4xl md:text-5xl font-light tracking-tight">
            Nuestros <span className="italic">Servicios</span>
          </h2>
          <p className="mt-5 text-muted text-[17px] font-light leading-relaxed tracking-wide max-w-sm mx-auto">
            Diseñamos cada viaje a medida, desde el alojamiento hasta la última experiencia.
          </p>
        </div>

        {/* Desktop: menú de selección + vitrina */}
        <div className="hidden md:grid grid-cols-12 gap-16 items-center">
          <div className="col-span-5 divide-y divide-gray-100">
            {servicios.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="w-full bg-transparent text-left py-6 first:pt-0 last:pb-0"
              >
                <div className="flex items-baseline gap-5">
                  <span
                    className={`h-px transition-all duration-500 ${
                      active === i ? "w-9 bg-gold" : "w-3 bg-gray-300"
                    }`}
                  />
                  <span
                    className={`font-serif text-2xl lg:text-[28px] font-light tracking-tight transition-colors duration-300 ${
                      active === i ? "text-dark" : "text-gray-300"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
                <p
                  className={`mt-2 ml-14 text-sm font-light leading-relaxed transition-colors duration-300 ${
                    active === i ? "text-muted" : "text-gray-300"
                  }`}
                >
                  {s.text}
                </p>
              </button>
            ))}
          </div>

          <div className="col-span-7">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              {servicios.map((s, i) => (
                <img
                  key={s.title}
                  src={s.img}
                  alt={s.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-sm">
                <span className="text-xs tracking-[0.25em] uppercase text-dark">
                  {servicios[active].title}
                </span>
                <span className="text-xs text-muted tracking-wide">
                  0{active + 1} — 0{servicios.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: listado editorial */}
        <div className="md:hidden flex flex-col gap-12">
          {servicios.map((s) => (
            <div key={s.title}>
              <div className="overflow-hidden mb-5" style={{ aspectRatio: "16/11" }}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif text-dark text-2xl font-light tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-muted text-sm font-light leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
