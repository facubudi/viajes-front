"use client";

// Sistema de UI del panel admin (estética CRM).
// Clases y primitivos reutilizables para mantener consistencia entre páginas.

export const inputClass =
  "w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-dark focus:ring-2 focus:ring-dark/10 transition-colors duration-150";

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-dark text-white text-sm font-medium px-4 py-2.5 hover:bg-dark/90 active:bg-dark transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed";

export const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium px-4 py-2.5 hover:bg-slate-50 transition-colors duration-150 disabled:opacity-50";

export const btnDanger =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 text-white text-sm font-medium px-4 py-2.5 hover:bg-red-700 transition-colors duration-150 disabled:opacity-50";

export function Field({ label, children, hint }) {
  return (
    <div>
      {label && (
        <label className="block text-[13px] font-medium text-slate-700 mb-1.5">{label}</label>
      )}
      {children}
      {hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
    </div>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white border border-slate-200 rounded-xl shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function PageHeader({ title, subtitle, actions }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-900 tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

const BADGE_STYLES = {
  slate: "bg-slate-100 text-slate-600",
  amber: "bg-amber-100 text-amber-700",
  green: "bg-emerald-100 text-emerald-700",
  blue: "bg-blue-100 text-blue-700",
};

export function Badge({ color = "slate", children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${BADGE_STYLES[color] || BADGE_STYLES.slate}`}
    >
      {children}
    </span>
  );
}

export function StatCard({ label, value, Icon, accent = "bg-dark/5 text-dark" }) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="text-2xl font-semibold text-slate-900 mt-1">{value}</p>
        </div>
        {Icon && (
          <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${accent}`}>
            <Icon size={20} weight="bold" />
          </div>
        )}
      </div>
    </Card>
  );
}

export function EmptyState({ title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      <p className="text-sm font-medium text-slate-700">{title}</p>
      {description && <p className="text-sm text-slate-400 mt-1 max-w-sm">{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function Loader() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="flex items-center gap-2.5 text-slate-400 text-sm">
        <span className="w-4 h-4 rounded-full border-2 border-slate-300 border-t-dark animate-spin" />
        Cargando...
      </div>
    </div>
  );
}
