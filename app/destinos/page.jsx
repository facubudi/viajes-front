"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/home/Navbar";
import Footer from "@/layouts/Footer";
import DateRangeField from "@/components/destinos/DateRangeField";
import { MOCK_DESTINOS } from "@/data/destinos";

export default function DestinosPage() {
  const router = useRouter();
  const [destinos] = useState(MOCK_DESTINOS);
  const [scrolled, setScrolled] = useState(false);
  const [inFooter, setInFooter] = useState(false);

  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [appliedQuery, setAppliedQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return destinos.filter((d) => d.name.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 6);
  }, [destinos, query]);

  const filtered = useMemo(() => {
    return destinos.filter((d) => {
      return !appliedQuery.trim() || d.name.toLowerCase().includes(appliedQuery.trim().toLowerCase());
    });
  }, [destinos, appliedQuery]);

  const handleSearch = () => {
    setAppliedQuery(query);
    setShowSuggestions(false);
  };

  const selectSuggestion = (name) => {
    setQuery(name);
    setShowSuggestions(false);
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
            Explorá el mundo
          </p>
          <h1
            className="font-serif font-light text-white leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Todos los destinos
          </h1>
        </div>
      </section>

      {/* Searchbar */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 -mt-8">
        <div className="bg-gray-50 border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-4 flex flex-col md:flex-row md:items-stretch gap-3">

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
                    onMouseDown={() => selectSuggestion(s.name)}
                    className="w-full text-left px-4 py-3 text-[13px] text-dark/80 font-light hover:bg-gray-50 transition-colors duration-150 flex items-center justify-between"
                  >
                    <span>{s.name}</span>
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

      {/* Grid */}
      <section className="relative z-10 bg-white pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-14">
              {filtered.map((pack) => (
                <div
                  key={pack.id}
                  onClick={() => router.push(`/destinos/${pack.slug}`)}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className="overflow-hidden" style={{ aspectRatio: "2/3" }}>
                    <img
                      src={pack.image || "/assets/images/places/image.png"}
                      alt={pack.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between px-3 py-3 border border-t-0 border-gray-200 bg-white">
                    <h3 className="font-sans text-dark text-[16px] font-light tracking-wide">
                      {pack.name}
                    </h3>
                    <svg className="w-5 h-5 text-dark shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted text-center py-24 text-sm tracking-wide">
              No encontramos destinos con esos criterios de búsqueda.
            </p>
          )}
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
