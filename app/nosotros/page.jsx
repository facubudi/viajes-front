"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/layouts/Footer";

const stats = [
  { value: "2001", label: "Año de fundación" },
  { value: "20+", label: "Años de experiencia" },
  { value: "+50", label: "Destinos en cartera" },
  { value: "+5000", label: "Viajeros felices" },
];

export default function NosotrosPage() {
  const [scrolled, setScrolled] = useState(false);
  const [inFooter, setInFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[48vh] min-h-[380px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/hero.png')", filter: "saturate(0.85) brightness(0.7)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-white" />

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
          <p className="text-white text-[11px] tracking-[0.35em] uppercase mb-5 font-sans">
            De Córdoba al mundo
          </p>
          <h1
            className="font-serif font-light text-white leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Sobre nosotros
          </h1>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="bg-white pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3 font-normal">
              Nuestra historia
            </p>
            <h2 className="font-serif text-dark text-4xl md:text-5xl font-light tracking-tight mb-6">
              ¿Quiénes somos?
            </h2>
            <p className="text-muted text-[17px] font-light leading-relaxed tracking-wide max-w-lg">
              Fundada en 2001 en Córdoba, Argentina, Vaya Pasajes y Turismo comenzó
              con el sueño de crear experiencias de viaje únicas, ofreciendo desde
              escapadas nacionales hasta aventuras internacionales. Hoy, somos
              referentes en turismo, conectando a nuestros clientes con destinos
              inolvidables alrededor del mundo.
            </p>
          </div>
          <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <img
              src="/assets/images/places/image2.png"
              alt="Vaya Turismo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f7f6f4] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-sans text-dark text-4xl md:text-5xl font-light tracking-tight mb-2">
                {s.value}
              </p>
              <p className="font-sans text-muted text-[12px] tracking-[0.2em] uppercase font-light">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Objetivos + Proyecciones */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3 font-normal">
              Nuestro camino
            </p>
            <h3 className="font-serif text-dark text-3xl font-light tracking-tight mb-5">
              Objetivos alcanzados
            </h3>
            <p className="text-muted text-[16px] font-light leading-relaxed tracking-wide">
              A lo largo de más de 20 años, Vaya Pasajes y Turismo ha logrado
              consolidar su presencia en el mercado local, ofrecer paquetes de
              viajes adaptados a las necesidades de nuestros clientes y construir
              relaciones duraderas con proveedores clave. Estos logros nos permiten
              brindar experiencias confiables y memorables a cada viajero.
            </p>
          </div>
          <div>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3 font-normal">
              Hacia adelante
            </p>
            <h3 className="font-serif text-dark text-3xl font-light tracking-tight mb-5">
              Nuestras proyecciones
            </h3>
            <p className="text-muted text-[16px] font-light leading-relaxed tracking-wide">
              Nos apasiona seguir innovando. Con tecnologías avanzadas y un fuerte
              compromiso social, nuestro objetivo es ofrecer experiencias cada vez
              más enriquecedoras y sostenibles.
            </p>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="bg-[#f7f6f4] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3 font-normal">
              Visitanos
            </p>
            <h3 className="font-serif text-dark text-4xl font-light tracking-tight">
              Ubicación
            </h3>
            <p className="mt-5 text-muted text-[16px] font-light leading-relaxed tracking-wide max-w-md mx-auto">
              Galería Vía de la Fontana — Local 14, Córdoba, Argentina
            </p>
          </div>
          <div className="border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
            <iframe
              style={{ border: 0, width: "100%", height: "420px", display: "block" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0047358729003!2d-64.1869131!3d-31.4139956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28266a166eb%3A0x5c8fb41493b33695!2sGaleria%20Via%20De%20La%20Fontana!5e0!3m2!1ses-419!2sar!4v1735163487861!5m2!1ses-419!2sar"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Vaya Turismo"
            />
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/5493513934673"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={`fixed bottom-7 right-7 z-50 flex items-center gap-2.5 bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm px-4 py-2.5 hover:shadow-md transition-all duration-500 group ${
          scrolled && !inFooter ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.099 1.51 5.833L.057 23.08a.75.75 0 0 0 .916.932l5.4-1.416A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.694 9.694 0 0 1-4.95-1.355l-.355-.211-3.683.965.981-3.584-.232-.369A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
        </svg>
        <span className="text-[11px] tracking-[0.15em] uppercase text-dark/70 font-sans group-hover:text-dark transition-colors duration-300">
          Háblanos
        </span>
      </a>

      <Footer />
    </>
  );
}
