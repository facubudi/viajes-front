"use client";
import { useEffect, useRef, useState } from "react";

export default function SelectField({ label, value, options, placeholder = "Cualquiera", onChange }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const select = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <label className="block text-[10px] tracking-[0.2em] uppercase text-muted font-normal mb-1.5">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-2 bg-white border border-gray-200 px-5 py-3.5 outline-none text-[15px] font-light text-left"
      >
        <span className={value ? "text-dark" : "text-muted/50"}>
          {value || placeholder}
        </span>
        <svg
          className={`w-3.5 h-3.5 text-dark/40 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 md:w-48 mt-2 bg-white border border-gray-200 shadow-lg z-30 py-1">
          <button
            type="button"
            onClick={() => select("")}
            className={`w-full text-left px-4 py-2.5 text-[13px] font-light transition-colors duration-150 ${
              !value ? "text-gold" : "text-dark/80 hover:bg-gray-50"
            }`}
          >
            {placeholder}
          </button>
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => select(option)}
              className={`w-full text-left px-4 py-2.5 text-[13px] font-light transition-colors duration-150 ${
                value === option ? "text-gold" : "text-dark/80 hover:bg-gray-50"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
