"use client";
import { useState } from "react";
import { Plus, X, ArrowUp, ArrowDown } from "phosphor-react";
import { Card } from "./ui";

export default function FeaturedPicker({ items, selectedIds, onChange, emptyLabel = "No hay elementos disponibles." }) {
  const [query, setQuery] = useState("");

  const byId = new Map(items.map((item) => [String(item.id), item]));
  const selected = selectedIds.map((id) => byId.get(String(id))).filter(Boolean);
  const available = items.filter((item) => !selectedIds.includes(String(item.id)) && !selectedIds.includes(item.id));

  const filteredAvailable = query.trim()
    ? available.filter((item) => item.label.toLowerCase().includes(query.trim().toLowerCase()))
    : available;

  const add = (id) => onChange([...selectedIds, id]);
  const remove = (id) => onChange(selectedIds.filter((sid) => String(sid) !== String(id)));
  const move = (index, direction) => {
    const next = [...selectedIds];
    const target = index + direction;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Disponibles</p>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar..."
          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm mb-3 outline-none focus:border-dark focus:ring-2 focus:ring-dark/10"
        />
        <div className="flex flex-col gap-1 max-h-80 overflow-y-auto">
          {filteredAvailable.length === 0 ? (
            <p className="text-sm text-slate-400 text-center py-6">{emptyLabel}</p>
          ) : (
            filteredAvailable.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => add(item.id)}
                className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-left hover:bg-slate-50 transition-colors duration-150"
              >
                {item.image && (
                  <img src={item.image} alt="" className="w-9 h-9 rounded-md object-cover bg-slate-100 shrink-0" />
                )}
                <span className="text-sm text-slate-700 truncate flex-1">{item.label}</span>
                <Plus size={16} className="text-slate-400 shrink-0" />
              </button>
            ))
          )}
        </div>
      </Card>

      <Card className="p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
          Destacados ({selected.length})
        </p>
        <div className="flex flex-col gap-1 max-h-[21.5rem] overflow-y-auto">
          {selected.length === 0 ? (
            <p className="text-sm text-slate-400 text-center py-6">Todavía no elegiste ninguno.</p>
          ) : (
            selected.map((item, index) => (
              <div key={item.id} className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-slate-50">
                <span className="w-5 text-xs font-semibold text-slate-400 text-center shrink-0">{index + 1}</span>
                {item.image && (
                  <img src={item.image} alt="" className="w-9 h-9 rounded-md object-cover bg-slate-100 shrink-0" />
                )}
                <span className="text-sm text-slate-800 truncate flex-1">{item.label}</span>
                <div className="flex items-center gap-0.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => move(index, -1)}
                    disabled={index === 0}
                    aria-label="Subir"
                    className="w-7 h-7 rounded-md flex items-center justify-center text-slate-500 hover:bg-slate-200 disabled:opacity-30 disabled:hover:bg-transparent transition-colors duration-150"
                  >
                    <ArrowUp size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => move(index, 1)}
                    disabled={index === selected.length - 1}
                    aria-label="Bajar"
                    className="w-7 h-7 rounded-md flex items-center justify-center text-slate-500 hover:bg-slate-200 disabled:opacity-30 disabled:hover:bg-transparent transition-colors duration-150"
                  >
                    <ArrowDown size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => remove(item.id)}
                    aria-label="Quitar"
                    className="w-7 h-7 rounded-md flex items-center justify-center text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
}
