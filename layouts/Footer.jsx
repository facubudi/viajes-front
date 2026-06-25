import Link from "next/link";
import { forwardRef } from "react";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Destinos", href: "/destinos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

const Footer = forwardRef(function Footer(props, ref) {
  return (
    <footer ref={ref} className="bg-[#0f0f0f] pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top — logo + tagline */}
        <div className="border-b border-white/10 pb-14 mb-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div>
            <Link href="/">
              <img
                src="/images/vpt_logo_white.svg"
                alt="Vaya Turismo"
                className="h-12 w-auto mb-2"
              />
            </Link>
            <p className="text-white text-[14px] font-normal mb-5" style={{ fontFamily: "Neue Haas, sans-serif" }}>
              Vaya Turismo
            </p>
            <p className="text-white/40 text-[14px] font-light leading-relaxed max-w-xs">
              De Córdoba al mundo.<br />
              Diseñamos cada viaje a medida.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/vayaturismo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/vayapasajesyturismo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/5493513934673"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.099 1.51 5.833L.057 23.08a.75.75 0 0 0 .916.932l5.4-1.416A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.694 9.694 0 0 1-4.95-1.355l-.355-.211-3.683.965.981-3.584-.232-.369A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Middle — columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Contacto */}
          <div>
            <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase mb-5 font-normal">
              Contacto
            </p>
            <div className="flex flex-col gap-2.5 text-[14px] text-white/50 font-light">
              <span>Galería Vía de la Fontana — Local 14</span>
              <span>Córdoba, Argentina</span>
              <span className="mt-1">(+54) 351-393-4673</span>
              <span>vayapasajesyturismo@hotmail.com</span>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase mb-5 font-normal">
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/50 text-[14px] font-light hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase mb-5 font-normal">
              Horarios
            </p>
            <div className="flex flex-col gap-2.5 text-[14px] text-white/50 font-light">
              <div className="flex justify-between gap-8">
                <span>Lunes — Viernes</span>
                <span>10:00 — 18:00</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Sábado</span>
                <span>Cerrado</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Domingo</span>
                <span>Cerrado</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-[13px] font-light tracking-wide">
            © {new Date().getFullYear()} Vaya Pasajes y Turismo. Todos los derechos reservados.
          </p>
          <p className="text-white/25 text-[13px] font-light">
            desarrollado por{" "}
            <a
              href="https://nuba.studio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, display: "inline-flex", flexDirection: "column", lineHeight: 1.1, verticalAlign: "middle", marginLeft: "10px" }}
              className="hover:text-white transition-colors duration-200"
            >
              <span>nuba</span>
              <span>studio</span>
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
});

export default Footer;
