"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import DestinosSection from "@/components/home/DestinosSection";
import ServiciosSection from "@/components/home/ServiciosSection";
import PaquetesSection from "@/components/home/PaquetesSection";
import FAQSection from "@/components/home/FAQSection";
import Footer from "@/layouts/Footer";
import { MOCK_DESTINOS, getDestinoBySlug } from "@/data/destinos";

const API_URL = "https://viajes-back-sre6.onrender.com";

const MOCK_DESTINOS_DESTACADOS = MOCK_DESTINOS.slice(0, 5);

const MOCK_PAQUETES_DESTACADOS_SLUGS = ["islas-maldivas", "santorini", "tokio", "patagonia"];
const MOCK_PAQUETES_DESTACADOS = MOCK_PAQUETES_DESTACADOS_SLUGS.map((slug) => {
  const destino = getDestinoBySlug(slug);
  const paquete = destino.paquetes[0];
  return {
    id: paquete.id,
    destino: { slug: destino.slug, name: destino.name },
    description: paquete.description,
    duration_days: parseInt(paquete.duration, 10) || null,
    priceLabel: paquete.price,
    images: paquete.images,
    title: paquete.title,
  };
});

export default function HomePage() {
  // Mientras el backend no tenga suficientes destinos/paquetes cargados,
  // convivimos con los mocks como fallback para no dejar el home vacío.
  const [destinosDestacados, setDestinosDestacados] = useState(MOCK_DESTINOS_DESTACADOS);
  const [paquetesDestacados, setPaquetesDestacados] = useState(MOCK_PAQUETES_DESTACADOS);
  const [scrolled, setScrolled] = useState(false);
  const [inFooter, setInFooter] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    fetch(`${API_URL}/home/destinos`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setDestinosDestacados(data);
      })
      .catch(() => {});

    fetch(`${API_URL}/home/packages`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setPaquetesDestacados(data);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      ([entry]) => setInFooter(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <DestinosSection packages={destinosDestacados} />
      <ServiciosSection />
      <PaquetesSection packages={paquetesDestacados} />
      <FAQSection />

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

      <Footer ref={footerRef} />
    </>
  );
}
