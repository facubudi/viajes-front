"use client";
import { useEffect, useState } from "react";

const CATEGORIES = ["Europa", "Asia", "América", "Playa"];

const PRICE_RANGES = [
  { label: "Hasta USD 1.200", max: 1200 },
  { label: "USD 1.200 — 2.000", min: 1200, max: 2000 },
  { label: "Más de USD 2.000", min: 2000 },
];

const DURATION_RANGES = [
  { label: "Hasta 7 días", max: 7 },
  { label: "8 — 10 días", min: 8, max: 10 },
  { label: "Más de 10 días", min: 10 },
];

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left px-4 py-2.5 border text-[13px] font-light transition-colors duration-150 ${
        active
          ? "border-dark bg-dark text-white"
          : "border-gray-200 text-dark/70 hover:border-dark/40"
      }`}
    >
      {children}
    </button>
  );
}

export default function FiltersDrawer({ open, onClose, filters, onApply }) {
  const [draft, setDraft] = useState(filters);

  useEffect(() => {
    if (open) setDraft(filters);
  }, [open, filters]);

  const toggleCategory = (cat) => {
    setDraft((d) => ({
      ...d,
      categories: d.categories.includes(cat)
        ? d.categories.filter((c) => c !== cat)
        : [...d.categories, cat],
    }));
  };

  const selectPrice = (range) => {
    setDraft((d) => ({ ...d, priceRange: d.priceRange === range ? null : range }));
  };

  const selectDuration = (range) => {
    setDraft((d) => ({ ...d, durationRange: d.durationRange === range ? null : range }));
  };

  const clear = () => setDraft({ categories: [], priceRange: null, durationRange: null });

  const apply = () => {
    onApply(draft);
    onClose();
  };

  const activeCount = draft.categories.length + (draft.priceRange ? 1 : 0) + (draft.durationRange ? 1 : 0);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
          <h2 className="font-serif text-dark text-2xl font-light">Filtros</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar filtros"
            className="w-8 h-8 flex items-center justify-center text-dark/50 hover:text-dark transition-colors duration-150"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-10">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted font-normal mb-4">
              Categoría
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {CATEGORIES.map((cat) => (
                <Chip key={cat} active={draft.categories.includes(cat)} onClick={() => toggleCategory(cat)}>
                  {cat}
                </Chip>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted font-normal mb-4">
              Precio
            </p>
            <div className="flex flex-col gap-2.5">
              {PRICE_RANGES.map((range) => (
                <Chip key={range.label} active={draft.priceRange === range.label} onClick={() => selectPrice(range.label)}>
                  {range.label}
                </Chip>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted font-normal mb-4">
              Duración
            </p>
            <div className="flex flex-col gap-2.5">
              {DURATION_RANGES.map((range) => (
                <Chip key={range.label} active={draft.durationRange === range.label} onClick={() => selectDuration(range.label)}>
                  {range.label}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-6 border-t border-gray-100 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={clear}
            className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-dark transition-colors duration-150"
          >
            Limpiar {activeCount > 0 ? `(${activeCount})` : ""}
          </button>
          <button
            type="button"
            onClick={apply}
            className="flex-1 bg-dark text-white text-[12px] tracking-[0.2em] uppercase px-6 py-3.5 hover:bg-gold hover:text-dark transition-colors duration-200"
          >
            Aplicar filtros
          </button>
        </div>
      </div>
    </>
  );
}

export { CATEGORIES, PRICE_RANGES, DURATION_RANGES };
