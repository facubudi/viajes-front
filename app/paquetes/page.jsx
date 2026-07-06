"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Navbar from "@/components/home/Navbar";
import Footer from "@/layouts/Footer";
import DateRangeField from "@/components/destinos/DateRangeField";
import SelectField from "@/components/destinos/SelectField";
import FiltersDrawer, { PRICE_RANGES, DURATION_RANGES } from "@/components/destinos/FiltersDrawer";

const WHATSAPP_NUMBER = "5493513934673";

const ALOJAMIENTOS = ["Hotel", "Resort", "Aparthotel", "Crucero"];

const TIPOS = [
  { id: "parejas", label: "Paquetes para parejas", icon: "💑" },
  { id: "familiares", label: "Paquetes familiares", icon: "👨‍👩‍👧‍👦" },
  { id: "luna-de-miel", label: "Paquetes de luna de miel", icon: "💍" },
  { id: "economicos", label: "Paquetes económicos", icon: "💰" },
  { id: "premium", label: "Paquetes premium", icon: "✨" },
  { id: "grupales", label: "Paquetes grupales", icon: "👥" },
  { id: "aventura", label: "Paquetes de aventura", icon: "🏔️" },
  { id: "relax", label: "Paquetes relax", icon: "🧘" },
  { id: "gastronomicos", label: "Paquetes gastronómicos", icon: "🍷" },
  { id: "a-medida", label: "Paquetes a medida", icon: "🎯" },
];

const MOCK_PAQUETES = [
  { id: 1, destino: "Islas Maldivas", descripcion: "Villas sobre el agua, arrecifes de coral y atardeceres infinitos.", duracion: "10 días", precio: "USD 2.800", tipo: "luna-de-miel", category: "Playa", alojamiento: "Resort", destacado: true, imagen: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80" },
  { id: 2, destino: "Santorini", descripcion: "Arquitectura blanca, vinos locales y el mar Egeo de fondo.", duracion: "7 días", precio: "USD 1.900", tipo: "parejas", category: "Europa", alojamiento: "Hotel", destacado: true, imagen: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80" },
  { id: 3, destino: "Tokio", descripcion: "Tradición y modernidad en una de las ciudades más fascinantes del mundo.", duracion: "12 días", precio: "USD 2.400", tipo: "premium", category: "Asia", alojamiento: "Hotel", destacado: true, imagen: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },
  { id: 4, destino: "Patagonia", descripcion: "Torres imponentes, glaciares y silencio en el fin del mundo.", duracion: "8 días", precio: "USD 1.100", tipo: "aventura", category: "América", alojamiento: "Hotel", destacado: true, imagen: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80" },
  { id: 5, destino: "Bariloche en familia", descripcion: "Lagos, chocolate y actividades para todas las edades.", duracion: "6 días", precio: "USD 780", tipo: "familiares", category: "América", alojamiento: "Hotel", destacado: true, imagen: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80" },
  { id: 6, destino: "Punta Cana", descripcion: "Resort todo incluido frente al Caribe.", duracion: "7 días", precio: "USD 1.400", tipo: "economicos", category: "Playa", alojamiento: "Resort", destacado: true, imagen: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80" },
  { id: 7, destino: "Excursión grupal a Cusco", descripcion: "Machu Picchu y el Valle Sagrado con grupo reducido.", duracion: "9 días", precio: "USD 1.250", tipo: "grupales", category: "América", alojamiento: "Hotel", destacado: false, imagen: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80" },
  { id: 8, destino: "Bali", descripcion: "Templos, arrozales y spas frente al mar.", duracion: "11 días", precio: "USD 1.750", tipo: "relax", category: "Asia", alojamiento: "Resort", destacado: false, imagen: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80" },
  { id: 9, destino: "Dubái", descripcion: "Lujo, desierto y arquitectura futurista.", duracion: "5 días", precio: "USD 1.850", tipo: "premium", category: "Asia", alojamiento: "Hotel", destacado: false, imagen: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80" },
  { id: 10, destino: "Roma en pareja", descripcion: "Historia, gastronomía y atardeceres sobre el Tíber.", duracion: "8 días", precio: "USD 1.650", tipo: "parejas", category: "Europa", alojamiento: "Aparthotel", destacado: false, imagen: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80" },
  { id: 11, destino: "Crucero por el Caribe", descripcion: "Varios destinos, un solo equipaje.", duracion: "9 días", precio: "USD 2.100", tipo: "familiares", category: "Playa", alojamiento: "Crucero", destacado: false, imagen: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80" },
  { id: 12, destino: "Marruecos aventura", descripcion: "Desierto del Sahara, dunas y noches bajo las estrellas.", duracion: "9 días", precio: "USD 1.300", tipo: "aventura", category: "Europa", alojamiento: "Aparthotel", destacado: false, imagen: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800&q=80" },
  { id: 13, destino: "Ruta del vino en Mendoza", descripcion: "Bodegas boutique, maridajes y cenas al pie de la cordillera.", duracion: "5 días", precio: "USD 890", tipo: "gastronomicos", category: "América", alojamiento: "Hotel", destacado: false, imagen: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80" },
];

const inputClass =
  "w-full bg-white border border-gray-200 px-5 py-3.5 outline-none text-dark text-[15px] font-light placeholder:text-muted/50 focus:border-dark transition-colors duration-150";

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.2em] uppercase text-muted font-normal mb-1.5">{label}</label>
      {children}
    </div>
  );
}

export default function PaquetesPage() {
  const router = useRouter();
  const [paquetes, setPaquetes] = useState(MOCK_PAQUETES);
  const [tipoSeleccionado, setTipoSeleccionado] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [inFooter, setInFooter] = useState(false);

  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [personasBusqueda, setPersonasBusqueda] = useState(2);
  const [alojamiento, setAlojamiento] = useState("");
  const [appliedQuery, setAppliedQuery] = useState("");
  const [appliedAlojamiento, setAppliedAlojamiento] = useState("");

  const [showFilters, setShowFilters] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({ categories: [], priceRange: null, durationRange: null });

  const [formData, setFormData] = useState({});

  const listadoRef = useRef(null);
  const destacadosPrevRef = useRef(null);
  const destacadosNextRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://viajes-back-sre6.onrender.com/packages")
      .then((res) => { if (res.data?.length) setPaquetes(res.data); })
      .catch(() => {});

    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const destacados = useMemo(() => paquetes.filter((p) => p.destacado), [paquetes]);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return paquetes.filter((p) => p.destino.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 6);
  }, [paquetes, query]);

  const listado = useMemo(() => {
    const priceRange = PRICE_RANGES.find((r) => r.label === appliedFilters.priceRange);
    const durationRange = DURATION_RANGES.find((r) => r.label === appliedFilters.durationRange);

    return paquetes.filter((p) => {
      const matchesTipo = !tipoSeleccionado || p.tipo === tipoSeleccionado;
      const matchesQuery = !appliedQuery.trim() || p.destino.toLowerCase().includes(appliedQuery.trim().toLowerCase());
      const matchesAlojamiento = !appliedAlojamiento || p.alojamiento === appliedAlojamiento;
      const matchesCategory = appliedFilters.categories.length === 0 || appliedFilters.categories.includes(p.category);

      const priceValue = Number(String(p.precio).replace(/\D/g, ""));
      const matchesPrice =
        !priceRange ||
        ((priceRange.min === undefined || priceValue >= priceRange.min) &&
          (priceRange.max === undefined || priceValue <= priceRange.max));

      const durationValue = Number(String(p.duracion).replace(/\D/g, ""));
      const matchesDuration =
        !durationRange ||
        ((durationRange.min === undefined || durationValue >= durationRange.min) &&
          (durationRange.max === undefined || durationValue <= durationRange.max));

      return matchesTipo && matchesQuery && matchesAlojamiento && matchesCategory && matchesPrice && matchesDuration;
    });
  }, [paquetes, tipoSeleccionado, appliedQuery, appliedAlojamiento, appliedFilters]);

  const activeFilterCount =
    appliedFilters.categories.length + (appliedFilters.priceRange ? 1 : 0) + (appliedFilters.durationRange ? 1 : 0);

  const handleTipoClick = (tipoId) => {
    setTipoSeleccionado((prev) => (prev === tipoId ? null : tipoId));
    listadoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSearch = () => {
    setAppliedQuery(query);
    setAppliedAlojamiento(alojamiento);
    setShowSuggestions(false);
    listadoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const selectSuggestion = (name) => {
    setQuery(name);
    setShowSuggestions(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = [
      "Hola! Quiero armar un *paquete a medida*.",
      "",
      `Nombre: ${formData.name || "-"}`,
      `WhatsApp: ${formData.whatsapp || "-"}`,
      `Destino deseado: ${formData.destino || "-"}`,
      `Fecha aproximada: ${formData.fecha || "-"}`,
      `Cantidad de personas: ${formData.personas || "-"}`,
      `Presupuesto estimado: ${formData.presupuesto || "-"}`,
    ];

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
            Encontrá tu viaje ideal
          </p>
          <h1
            className="font-serif font-light text-white leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Paquetes
          </h1>
        </div>
      </section>

      {/* Searchbar */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 -mt-8">
        <div className="bg-gray-50 border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-4 flex flex-col md:flex-row md:flex-wrap md:items-stretch gap-3">

          {/* Destino */}
          <div className="flex-[1.4] min-w-[200px] relative">
            <label className="block text-[10px] tracking-[0.2em] uppercase text-muted font-normal mb-1.5">
              Destino
            </label>
            <div className="bg-white border border-gray-200 px-5 py-3.5">
              <input
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setShowSuggestions(true); }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                placeholder="¿A dónde querés ir?"
                className="w-full bg-transparent outline-none text-dark text-[15px] font-light placeholder:text-muted/50"
              />
            </div>
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 shadow-lg z-30">
                {suggestions.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onMouseDown={() => selectSuggestion(s.destino)}
                    className="w-full text-left px-4 py-3 text-[13px] text-dark/80 font-light hover:bg-gray-50 transition-colors duration-150 flex items-center justify-between"
                  >
                    <span>{s.destino}</span>
                    <span className="text-muted text-[11px] tracking-wide">{s.category}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Fechas */}
          <div className="flex-[1.2] min-w-[180px]">
            <DateRangeField
              checkIn={checkIn}
              checkOut={checkOut}
              onChange={({ checkIn: ci, checkOut: co }) => {
                setCheckIn(ci);
                setCheckOut(co);
              }}
            />
          </div>

          {/* Personas */}
          <div className="flex-none w-full md:w-48">
            <label className="block text-[10px] tracking-[0.2em] uppercase text-muted font-normal mb-1.5">
              Personas
            </label>
            <div className="bg-white border border-gray-200 px-4 py-3.5 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setPersonasBusqueda((p) => Math.max(1, p - 1))}
                disabled={personasBusqueda <= 1}
                className="w-6 h-6 rounded-full flex items-center justify-center text-dark/50 hover:text-dark hover:border-dark border border-gray-200 transition-colors duration-150 disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-dark/50"
                aria-label="Restar persona"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M5 12h14" />
                </svg>
              </button>
              <span className="text-dark text-[15px] font-light text-center leading-none">
                {personasBusqueda} <span className="text-muted text-[13px]">{personasBusqueda === 1 ? "persona" : "personas"}</span>
              </span>
              <button
                type="button"
                onClick={() => setPersonasBusqueda((p) => Math.min(20, p + 1))}
                disabled={personasBusqueda >= 20}
                className="w-6 h-6 rounded-full flex items-center justify-center text-dark/50 hover:text-dark hover:border-dark border border-gray-200 transition-colors duration-150 disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-dark/50"
                aria-label="Sumar persona"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
          </div>

          {/* Alojamiento */}
          <div className="flex-1 min-w-[160px]">
            <SelectField
              label="Alojamiento"
              value={alojamiento}
              options={ALOJAMIENTOS}
              onChange={setAlojamiento}
            />
          </div>

          {/* Filtros */}
          <div className="flex flex-col justify-end">
            <label className="hidden md:block text-[10px] mb-1.5 opacity-0 select-none" aria-hidden="true">
              Filtros
            </label>
            <button
              type="button"
              onClick={() => setShowFilters(true)}
              className="relative -top-1 w-full md:w-auto flex items-center justify-center gap-2 bg-white border border-gray-200 text-dark text-[12px] tracking-[0.2em] uppercase px-6 py-4 hover:border-dark transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M7 12h10M10 18h4" />
              </svg>
              Filtros
              {activeFilterCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-gold text-dark text-[10px] flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          {/* Buscar */}
          <div className="flex flex-col justify-end">
            <label className="hidden md:block text-[10px] mb-1.5 opacity-0 select-none" aria-hidden="true">
              Buscar
            </label>
            <button
              onClick={handleSearch}
              className="relative -top-1 w-full md:w-auto flex items-center justify-center gap-2 bg-dark text-white text-[12px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold hover:text-dark transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
              </svg>
              Buscar
            </button>
          </div>

        </div>
      </div>

      {/* Paquetes destacados */}
      <section className="relative z-10 bg-white pt-20 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="text-center md:text-left w-full md:w-auto">
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3 font-normal">
                Selección curada
              </p>
              <h2 className="font-serif text-dark text-4xl md:text-5xl font-light tracking-tight">
                Paquetes destacados
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <button
                type="button"
                ref={destacadosPrevRef}
                aria-label="Anterior"
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-dark/60 hover:text-dark hover:border-dark transition-colors duration-150"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                ref={destacadosNextRef}
                aria-label="Siguiente"
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-dark/60 hover:text-dark hover:border-dark transition-colors duration-150"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = destacadosPrevRef.current;
              swiper.params.navigation.nextEl = destacadosNextRef.current;
            }}
            navigation={{ prevEl: destacadosPrevRef.current, nextEl: destacadosNextRef.current }}
            spaceBetween={24}
            slidesPerView={1.15}
            breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 24 }, 1024: { slidesPerView: 3, spaceBetween: 32 } }}
            className="!pb-2"
          >
            {destacados.map((p) => (
              <SwiperSlide key={p.id} className="h-auto">
                <div
                  onClick={() => router.push(`/destinos/${p.id}`)}
                  className="group relative bg-white border border-gray-100 cursor-pointer overflow-hidden h-full flex flex-col"
                >
                  <div className="relative overflow-hidden shrink-0" style={{ aspectRatio: "5/4" }}>
                    <img
                      src={p.imagen}
                      alt={p.destino}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-serif text-dark text-lg font-light mb-1">{p.destino}</h3>
                    <p className="text-muted text-[12px] font-light leading-snug mb-3 line-clamp-2">{p.descripcion}</p>
                    <div className="flex items-center justify-between mt-auto pt-1">
                      <p className="text-muted text-[11px] tracking-wide font-light">{p.duracion}</p>
                      <p className="font-serif text-dark text-base font-light">{p.precio}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Paquetes por tipo de viaje */}
      <section className="bg-[#f7f6f4] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3 font-normal">
              ¿No sabés qué destino elegir?
            </p>
            <h2 className="font-serif text-dark text-4xl md:text-5xl font-light tracking-tight">
              Elegí por tipo de viaje
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {TIPOS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => handleTipoClick(t.id)}
                className={`flex flex-col items-center justify-center gap-3 bg-white border px-4 py-8 text-center transition-colors duration-200 ${
                  tipoSeleccionado === t.id ? "border-dark" : "border-gray-200 hover:border-dark"
                }`}
              >
                <span className="text-3xl">{t.icon}</span>
                <span className="text-dark text-[13px] font-light leading-snug">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Listado completo */}
      <section ref={listadoRef} className="relative z-10 bg-white pt-20 pb-24 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3 font-normal">
                {tipoSeleccionado ? TIPOS.find((t) => t.id === tipoSeleccionado)?.label : "Todo el catálogo"}
              </p>
              <h2 className="font-serif text-dark text-4xl md:text-5xl font-light tracking-tight">
                Listado completo de paquetes
              </h2>
            </div>
            {tipoSeleccionado && (
              <button
                type="button"
                onClick={() => setTipoSeleccionado(null)}
                className="text-[12px] tracking-widest uppercase text-muted hover:text-dark transition-colors duration-150 self-start md:self-auto"
              >
                Ver todos
              </button>
            )}
          </div>

          {listado.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {listado.map((p) => (
                <div
                  key={p.id}
                  onClick={() => router.push(`/destinos/${p.id}`)}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className="overflow-hidden" style={{ aspectRatio: "2/3" }}>
                    <img
                      src={p.imagen}
                      alt={p.destino}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between px-3 py-3 border border-t-0 border-gray-200 bg-white">
                    <div>
                      <h3 className="font-sans text-dark text-[16px] font-light tracking-wide">{p.destino}</h3>
                      <p className="text-muted text-[11px] tracking-wide font-light mt-0.5">
                        {p.duracion} · {p.precio}
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-dark shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted text-center py-24 text-sm tracking-wide">
              No encontramos paquetes con esos criterios de búsqueda.
            </p>
          )}
        </div>
      </section>

      {/* Paquete a medida */}
      <section className="bg-[#f7f6f4] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3 font-normal">A tu medida</p>
            <h2 className="font-serif text-dark text-4xl md:text-5xl font-light tracking-tight mb-5">
              ¿No encontraste el paquete ideal?
            </h2>
            <p className="text-muted text-[16px] font-light leading-relaxed tracking-wide max-w-xl mx-auto">
              Contanos destino, fechas y cantidad de personas, y te armamos una propuesta personalizada.
            </p>
          </div>

          <div className="bg-white border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 md:p-10">
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" onSubmit={handleSubmit}>
              <Field label="Nombre">
                <input
                  type="text"
                  id="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre completo"
                  required
                  className={inputClass}
                />
              </Field>
              <Field label="WhatsApp">
                <input
                  type="text"
                  id="whatsapp"
                  value={formData.whatsapp || ""}
                  onChange={handleChange}
                  placeholder="Ingresa tu número de WhatsApp"
                  required
                  className={inputClass}
                />
              </Field>
              <Field label="Destino deseado">
                <input
                  type="text"
                  id="destino"
                  value={formData.destino || ""}
                  onChange={handleChange}
                  placeholder="¿A dónde te gustaría ir?"
                  className={inputClass}
                />
              </Field>
              <Field label="Fecha aproximada">
                <input
                  type="text"
                  id="fecha"
                  value={formData.fecha || ""}
                  onChange={handleChange}
                  placeholder="Ej: Octubre 2026"
                  className={inputClass}
                />
              </Field>
              <Field label="Cantidad de personas">
                <input
                  type="number"
                  min="1"
                  id="personas"
                  value={formData.personas || ""}
                  onChange={handleChange}
                  placeholder="Ej: 2"
                  className={inputClass}
                />
              </Field>
              <Field label="Presupuesto estimado">
                <input
                  type="text"
                  id="presupuesto"
                  value={formData.presupuesto || ""}
                  onChange={handleChange}
                  placeholder="Ej: USD 1.500 por persona"
                  className={inputClass}
                />
              </Field>

              <div className="md:col-span-2 lg:col-span-3 flex flex-col items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="bg-dark text-white text-[12px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-gold hover:text-dark transition-colors duration-200"
                >
                  Quiero mi propuesta por WhatsApp
                </button>
              </div>
            </form>
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
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.099 1.51 5.833L.057 23.08a.75.75 0 0 0 .916.932l5.4-1.416A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.694 9.694 0 0 1-4.95-1.355l-.355-.211-3.683.965.981-3.584-.232-.369A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
        </svg>
        <span className="text-[11px] tracking-[0.15em] uppercase text-dark/70 font-sans group-hover:text-dark transition-colors duration-300">
          Háblanos
        </span>
      </a>

      <FiltersDrawer
        open={showFilters}
        onClose={() => setShowFilters(false)}
        filters={appliedFilters}
        onApply={setAppliedFilters}
      />

      <Footer />
    </>
  );
}
