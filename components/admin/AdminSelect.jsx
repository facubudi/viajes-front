"use client";
import { useEffect, useRef, useState } from "react";
import { CaretDown, Check } from "phosphor-react";
import { Field } from "./ui";

export default function AdminSelect({ label, value, options, placeholder = "Seleccionar", onChange }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const select = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <Field label={label}>
      <div ref={containerRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between gap-2 bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-left outline-none focus:border-dark focus:ring-2 focus:ring-dark/10 transition-colors duration-150"
        >
          <span className={value ? "text-slate-800" : "text-slate-400"}>{value || placeholder}</span>
          <CaretDown
            size={14}
            weight="bold"
            className={`text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-lg shadow-lg z-30 py-1 max-h-64 overflow-y-auto">
            <button
              type="button"
              onClick={() => select("")}
              className="w-full flex items-center justify-between text-left px-3.5 py-2 text-sm text-slate-500 hover:bg-slate-50 transition-colors duration-150"
            >
              {placeholder}
              {!value && <Check size={14} weight="bold" className="text-dark" />}
            </button>
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => select(option)}
                className={`w-full flex items-center justify-between text-left px-3.5 py-2 text-sm transition-colors duration-150 ${
                  value === option ? "text-dark font-medium bg-slate-50" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {option}
                {value === option && <Check size={14} weight="bold" className="text-dark" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </Field>
  );
}
