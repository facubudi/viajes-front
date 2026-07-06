"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { CaretLeft, CaretRight, Calendar } from "phosphor-react";
import { Field } from "./ui";

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
  const startOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < startOffset; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(new Date(year, month, d));
  return days;
}

export default function AdminDateRange({ checkIn, checkOut, onChange }) {
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
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
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
  const changeMonth = (offset) => setViewDate((v) => new Date(v.getFullYear(), v.getMonth() + offset, 1));

  const renderMonth = (monthDate) => {
    const days = buildMonthDays(monthDate);
    const label = monthDate.toLocaleDateString("es-AR", { month: "long", year: "numeric" });

    return (
      <div className="w-full md:w-60">
        <p className="text-center text-sm font-medium text-slate-700 mb-3 capitalize">{label}</p>
        <div className="grid grid-cols-7 gap-y-1">
          {WEEKDAYS.map((w, i) => (
            <span key={i} className="text-[11px] text-slate-400 text-center font-medium">
              {w}
            </span>
          ))}
          {days.map((day, i) => {
            if (!day) return <span key={i} />;
            const isPast = day < today;
            const isStart = checkInDate && day.getTime() === checkInDate.getTime();
            const isEnd = checkOutDate && day.getTime() === checkOutDate.getTime();
            const inRange = checkInDate && checkOutDate && day > checkInDate && day < checkOutDate;

            return (
              <button
                key={i}
                type="button"
                disabled={isPast}
                onClick={() => handleDayClick(day)}
                className={`h-8 rounded-md text-[13px] transition-colors duration-150 ${
                  isPast
                    ? "text-slate-300 cursor-not-allowed"
                    : isStart || isEnd
                    ? "bg-dark text-white font-medium"
                    : inRange
                    ? "bg-dark/10 text-dark"
                    : "text-slate-700 hover:bg-slate-100"
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
    <Field label="Fechas">
      <div ref={containerRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center gap-2.5 text-left bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-dark focus:ring-2 focus:ring-dark/10 transition-colors duration-150"
        >
          <Calendar size={16} className="text-slate-400 shrink-0" />
          {checkIn ? (
            <span className="text-slate-800">
              {formatShort(checkIn)}
              {checkOut ? ` — ${formatShort(checkOut)}` : " — …"}
            </span>
          ) : (
            <span className="text-slate-400">Ingreso — Salida</span>
          )}
        </button>

        {open && (
          <div className="absolute top-full left-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-lg z-30 p-5">
            <div className="flex items-center justify-between mb-3">
              <button
                type="button"
                onClick={() => changeMonth(-1)}
                className="w-7 h-7 rounded-md flex items-center justify-center text-slate-500 hover:bg-slate-100"
                aria-label="Mes anterior"
              >
                <CaretLeft size={14} weight="bold" />
              </button>
              <button
                type="button"
                onClick={clear}
                className="text-xs font-medium text-slate-500 hover:text-dark transition-colors duration-150"
              >
                Limpiar
              </button>
              <button
                type="button"
                onClick={() => changeMonth(1)}
                className="w-7 h-7 rounded-md flex items-center justify-center text-slate-500 hover:bg-slate-100"
                aria-label="Mes siguiente"
              >
                <CaretRight size={14} weight="bold" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {renderMonth(viewDate)}
              <div className="hidden md:block">{renderMonth(nextMonth)}</div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-dark text-white text-sm font-medium px-5 py-2 hover:bg-dark/90 transition-colors duration-150"
              >
                Listo
              </button>
            </div>
          </div>
        )}
      </div>
    </Field>
  );
}
