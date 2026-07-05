"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Airplane, MapPin, ChatText, SignOut, List } from "phosphor-react";

const NAV_LINKS = [
  { href: "/", label: "Inicio", Icon: House, match: (p) => p === "/" },
  {
    href: "/dashboard",
    label: "Paquetes",
    Icon: Airplane,
    match: (p) => p === "/dashboard" || p === "/create-package" || p.startsWith("/edit-package"),
  },
  {
    href: "/destinos-admin",
    label: "Destinos",
    Icon: MapPin,
    match: (p) => p.startsWith("/destinos-admin"),
  },
  { href: "/messages", label: "Mensajes", Icon: ChatText, match: (p) => p.startsWith("/messages") },
];

export default function AdminShell({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Neue Haas, sans-serif" }}>
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-40 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="px-8 py-8">
          <Link href="/">
            <img
              src="/images/vpt_logo_white.svg"
              alt="Vaya Turismo"
              className="h-8 w-auto"
              style={{ filter: "brightness(0)" }}
            />
          </Link>
        </div>
        <div className="h-px bg-gray-200 mx-8" />
        <nav className="px-8 py-6 flex flex-col gap-1">
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-3">Acciones</p>
          {NAV_LINKS.map(({ href, label, Icon, match }) => {
            const active = match(pathname);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2.5 px-3 py-2.5 text-[13px] font-light tracking-wide transition-colors duration-150 ${
                  active ? "bg-dark text-white" : "text-dark/60 hover:text-dark"
                }`}
              >
                <Icon size={16} weight="bold" />
                {label}
              </Link>
            );
          })}
          <button
            onClick={logout}
            className="flex items-center gap-2.5 px-3 py-2.5 text-[13px] font-light tracking-wide text-dark/60 hover:text-dark transition-colors duration-150 mt-2"
          >
            <SignOut size={16} weight="bold" />
            Cerrar sesión
          </button>
        </nav>
      </aside>

      <div className="md:hidden flex items-center justify-between px-6 h-14 border-b border-gray-200">
        <button onClick={() => setSidebarOpen((o) => !o)} aria-label="Abrir menú">
          <List size={20} />
        </button>
      </div>

      <main className="md:ml-64 min-h-screen">{children}</main>
    </div>
  );
}
