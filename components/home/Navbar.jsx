"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const leftLinks = [
  { label: "Inicio", href: "/" },
  { label: "Destinos", href: "/destinos" },
  { label: "Paquetes", href: "/paquetes" },
  { label: "Nosotros", href: "/nosotros" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !scrolled;

  const linkClass = `nav-underline text-[12px] tracking-[0.15em] no-underline transition-colors duration-300 ${
    onDark ? "text-white hover:text-white/70" : "text-dark/60 hover:text-dark"
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-white/20" : "bg-transparent"
      }`}
    >
      <div className="h-[3px] bg-gold w-full" />

      <div className="w-full px-10 h-[72px] flex items-center" style={{ maxWidth: "calc(100% - 80px)", margin: "0 auto" }}>

        {/* Izquierda — logo */}
        <Link href="/">
          <img
            src="/images/vpt_logo_white.svg"
            alt="Vaya Turismo"
            className="h-9 w-auto transition-all duration-300"
            style={{ filter: scrolled ? "brightness(0)" : "none" }}
          />
        </Link>

        {/* Centro — links */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {leftLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass} style={{ fontWeight: 400 }}>
              {l.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        {/* Derecha — Contacto */}
        <div className="hidden md:flex items-center ml-auto">
          <Link href="/contacto" className={linkClass} style={{ fontWeight: 400 }}>
            CONTACTO
          </Link>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden flex justify-end ml-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[5px] p-1"
            aria-label="Menú"
          >
            <span className={`block w-5 h-px transition-all ${onDark ? "bg-white" : "bg-dark"}`} />
            <span className={`block w-5 h-px transition-all ${onDark ? "bg-white" : "bg-dark"}`} />
            <span className={`block w-3 h-px transition-all ${onDark ? "bg-white" : "bg-dark"}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-10 pt-4 pb-8 flex flex-col gap-5 border-t border-gray-50">
          {[...leftLinks, { label: "Contacto", href: "/contacto" }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[12px] tracking-[0.15em] text-dark/50 hover:text-dark transition-colors"
            >
              {l.label.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
