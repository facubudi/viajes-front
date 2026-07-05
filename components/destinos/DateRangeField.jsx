"use client";
import { useEffect, useMemo, useRef, useState } from "react";

const WEEKDAYS = ["L", "M", "M", "J", "V", "S", "D"];

function toISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function fromISO(iso) {
  if (!iso) return null;
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatShort(iso) {
  const date = fromISO(iso);
  if (!date) return "";
  return date.toLocaleDateString("es-AR", { day: "2-digit", month: "short" }).replace(".", "");
}

function buildMonthDays(viewDate) {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < startOffset; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(new Date(year, month, d));
  return days;
}

export default function DateRangeField({ checkIn, checkOut, onChange }) {
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() => fromISO(checkIn) || new Date());
  const containerRef = useRef(null);

  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const checkInDate = fromISO(checkIn);
  const checkOutDate = fromISO(checkOut);

  const handleDayClick = (day) => {
    if (day < today) return;

    if (!checkInDate || (checkInDate && checkOutDate)) {
      onChange({ checkIn: toISO(day), checkOut: "" });
      return;
    }

    if (day < checkInDate) {
      onChange({ checkIn: toISO(day), checkOut: "" });
    } else {
      onChange({ checkIn, checkOut: toISO(day) });
    }
  };

  const clear = () => onChange({ checkIn: "", checkOut: "" });

  const changeMonth = (offset) => {
    setViewDate((v) => new Date(v.getFullYear(), v.getMonth() + offset, 1));
  };

  const renderMonth = (monthDate) => {
    const days = buildMonthDays(monthDate);
    const label = monthDate.toLocaleDateString("es-AR", { month: "long", year: "numeric" });

    return (
      <div className="w-full md:w-64">
        <p className="text-center text-[12px] tracking-[0.15em] uppercase text-dark/70 font-normal mb-3 capitalize">
          {label}
        </p>
        <div className="grid grid-cols-7 gap-y-1">
          {WEEKDAYS.map((w, i) => (
            <span key={i} className="text-[10px] text-muted text-center font-normal">
              {w}
            </span>
          ))}
          {days.map((day, i) => {
            if (!day) return <span key={i} />;

            const isPast = day < today;
            const isStart = checkInDate && day.getTime() === checkInDate.getTime();
            const isEnd = checkOutDate && day.getTime() === checkOutDate.getTime();
            const inRange =
              checkInDate && checkOutDate && day > checkInDate && day < checkOutDate;

            return (
              <button
                key={i}
                type="button"
                disabled={isPast}
                onClick={() => handleDayClick(day)}
                className={`h-8 text-[12px] font-light transition-colors duration-150 ${
                  isPast
                    ? "text-gray-300 cursor-not-allowed"
                    : isStart || isEnd
                    ? "bg-dark text-white"
                    : inRange
                    ? "bg-gold/15 text-dark"
                    : "text-dark/80 hover:bg-gray-100"
                }`}
              >
                {day.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const nextMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);

  return (
    <div ref={containerRef} className="relative">
      <label className="block text-[10px] tracking-[0.2em] uppercase text-muted font-normal mb-1.5">
        Fechas
      </label>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left bg-white border border-gray-200 px-5 py-3.5 outline-none text-[15px] font-light"
      >
        {checkIn ? (
          <span className="text-dark">
            {formatShort(checkIn)}
            {checkOut ? ` — ${formatShort(checkOut)}` : " — …"}
          </span>
        ) : (
          <span className="text-muted/50">Ingreso — Salida</span>
        )}
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg z-30 p-5">
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={() => changeMonth(-1)}
              className="w-6 h-6 flex items-center justify-center text-dark/50 hover:text-dark"
              aria-label="Mes anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={clear}
              className="text-[10px] tracking-[0.15em] uppercase text-muted hover:text-dark transition-colors duration-150"
            >
              Limpiar
            </button>
            <button
              type="button"
              onClick={() => changeMonth(1)}
              className="w-6 h-6 flex items-center justify-center text-dark/50 hover:text-dark"
              aria-label="Mes siguiente"
            >
              ›
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {renderMonth(viewDate)}
            <div className="hidden md:block">{renderMonth(nextMonth)}</div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="bg-dark text-white text-[11px] tracking-[0.2em] uppercase px-6 py-2.5 hover:bg-gold hover:text-dark transition-colors duration-200"
            >
              Listo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
