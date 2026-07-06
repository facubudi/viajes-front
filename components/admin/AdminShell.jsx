"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Airplane, MapPin, ChatText, SignOut, List, X, House, Star } from "phosphor-react";

const NAV_LINKS = [
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
  { href: "/inicio-admin", label: "Inicio", Icon: Star, match: (p) => p.startsWith("/inicio-admin") },
];

export default function AdminShell({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  const activeSection = NAV_LINKS.find(({ match }) => match(pathname));
  const topbarTitle = activeSection?.label || "Panel";

  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      if (raw) setUser(JSON.parse(raw));
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const initial = (user?.name || user?.email || "A").trim().charAt(0).toUpperCase();

  const SidebarContent = (
    <div className="flex flex-col h-full">
      <div className="px-6 h-16 flex items-center border-b border-white/10">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/images/vpt_logo_white.svg" alt="Vaya Turismo" className="h-7 w-auto" />
        </Link>
      </div>

      <nav className="flex-1 px-3 py-5 flex flex-col gap-1 overflow-y-auto">
        <p className="px-3 text-[11px] font-semibold tracking-wider uppercase text-slate-500 mb-2">
          Gestión
        </p>
        {NAV_LINKS.map(({ href, label, Icon, match }) => {
          const active = match(pathname);
          return (
            <Link
              key={href}
              href={href}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                active ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon
                size={18}
                weight={active ? "fill" : "regular"}
                className={active ? "text-gold" : "text-slate-500 group-hover:text-slate-300"}
              />
              {label}
            </Link>
          );
        })}

        <p className="px-3 text-[11px] font-semibold tracking-wider uppercase text-slate-500 mb-2 mt-6">
          Sitio
        </p>
        <Link
          href="/"
          className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors duration-150"
        >
          <House size={18} className="text-slate-500 group-hover:text-slate-300" />
          Ver sitio público
        </Link>
      </nav>

      <div className="border-t border-white/10 p-3">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-9 h-9 rounded-full bg-gold/20 text-gold flex items-center justify-center text-sm font-semibold shrink-0">
            {initial}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-white truncate">{user?.name || "Administrador"}</p>
            <p className="text-xs text-slate-500 truncate">{user?.email || ""}</p>
          </div>
          <button
            onClick={logout}
            aria-label="Cerrar sesión"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors duration-150 shrink-0"
          >
            <SignOut size={16} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "Neue Haas, sans-serif" }}>
      {/* Sidebar desktop */}
      <aside className="hidden md:flex fixed top-0 left-0 h-full w-64 bg-dark z-40 flex-col">
        {SidebarContent}
      </aside>

      {/* Sidebar mobile (drawer) */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute top-0 left-0 h-full w-64 bg-dark flex flex-col">
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Cerrar menú"
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>
            {SidebarContent}
          </aside>
        </div>
      )}

      <div className="md:ml-64 min-h-screen flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-30 h-16 bg-white/90 backdrop-blur border-b border-slate-200 flex items-center gap-4 px-4 sm:px-8">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Abrir menú"
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-100"
          >
            <List size={20} />
          </button>
          <h2 className="text-[15px] font-semibold text-slate-900 truncate">{topbarTitle}</h2>
        </header>

        <main className="flex-1 px-4 sm:px-8 py-6 sm:py-8">{children}</main>
      </div>
    </div>
  );
}
