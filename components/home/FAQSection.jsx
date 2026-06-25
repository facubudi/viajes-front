"use client";
import { useState } from "react";

const faqs = [
  {
    q: "¿Qué tipo de viajes ofrecen?",
    a: "Ofrecemos paquetes nacionales e internacionales, escapadas de fin de semana, viajes personalizados y excursiones grupales.",
  },
  {
    q: "¿Pueden ayudarme a planificar un viaje a medida?",
    a: "Sí, diseñamos itinerarios personalizados según tus preferencias, presupuesto y necesidades de viaje.",
  },
  {
    q: "¿En dónde se encuentran ubicados?",
    a: "Nuestro local está ubicado en la Galería Vía de la Fontana Local 14. Atendemos de Lunes a Viernes de 10hs hasta las 18hs.",
  },
  {
    q: "¿Ofrecen asistencia en caso de inconvenientes durante el viaje?",
    a: "Sí, brindamos soporte antes, durante y después del viaje para resolver cualquier imprevisto que puedas tener.",
  },
  {
    q: "¿Qué documentación necesito para viajar al extranjero?",
    a: "Depende del destino. Te asesoramos sobre pasaporte, visas y otros requisitos migratorios.",
  },
  {
    q: "¿Tienen promociones o descuentos especiales?",
    a: "Sí, contamos con ofertas temporales y descuentos para grupos, reservas anticipadas y clientes frecuentes.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

          {/* Columna izquierda — título */}
          <div className="md:col-span-4">
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3 font-normal">
              Ayuda
            </p>
            <h2 className="font-serif text-dark text-4xl md:text-5xl font-light tracking-tight leading-tight">
              Preguntas<br />Frecuentes
            </h2>
            <p className="mt-6 text-muted text-[14px] font-light leading-relaxed">
              Si tenés más dudas, escribinos por WhatsApp y te respondemos al instante.
            </p>
            <a
              href="https://wa.me/5493513934673"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-[12px] tracking-[0.2em] uppercase font-normal text-dark border-b border-dark/30 pb-0.5 hover:border-dark transition-colors duration-200"
            >
              Escribinos
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Columna derecha — acordeón */}
          <div className="md:col-span-8">
            <div className="divide-y divide-gray-100">
              {faqs.map((item, i) => (
                <div key={i}>
                  <button
                    className="w-full flex items-center justify-between py-5 text-left group"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="text-dark text-[16px] font-light tracking-wide pr-8 group-hover:text-dark/60 transition-colors duration-200">
                      {item.q}
                    </span>
                    <span
                      className="text-dark/40 text-lg flex-shrink-0 transition-transform duration-300 leading-none"
                      style={{ transform: open === i ? "rotate(45deg)" : "rotate(0)" }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: open === i ? "200px" : "0" }}
                  >
                    <p className="text-muted text-[13px] font-light leading-relaxed pb-5">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
