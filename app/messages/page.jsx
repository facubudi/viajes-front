"use client";

import { useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";

const API_URL = "https://viajes-back-sre6.onrender.com";

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("es-AR", { day: "2-digit", month: "short", year: "numeric" });
}

export default function MessagesPage() {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }

    fetch(`${API_URL}/messages`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener los mensajes");
        return res.json();
      })
      .then((data) => setMessages(Array.isArray(data) ? data : []))
      .catch(() => setFetchError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted text-sm tracking-wide">Cargando...</p>
      </div>
    );
  }

  return (
    <AdminShell>
      <div className="px-8 py-10">
        <h1 className="font-serif text-dark text-xl font-light mb-8">
          Dashboard <span className="text-muted text-[15px]">&gt; Mensajes</span>
        </h1>

        {fetchError && (
          <p className="border border-gray-200 text-muted text-sm text-center py-6">
            Error al cargar los mensajes. Inténtalo más tarde.
          </p>
        )}

        {!fetchError && messages.length === 0 && (
          <p className="border border-gray-200 text-muted text-sm text-center py-6">No hay mensajes.</p>
        )}

        {messages.length > 0 && (
          <div className="max-w-3xl border-t border-gray-200">
            {messages.map((msg) => (
              <a
                key={msg.id}
                href={`/messages/${msg.id}`}
                className="flex items-center justify-between gap-4 px-1 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${msg.leido ? "bg-gray-300" : "bg-gold"}`}
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <p className={`text-[14px] truncate ${msg.leido ? "font-light text-dark/70" : "font-normal text-dark"}`}>
                      {msg.name}
                    </p>
                    <p className="text-[12px] text-muted font-light truncate">
                      {msg.category} · {formatDate(msg.created_at)}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-[11px] tracking-[0.15em] uppercase text-muted">Ver más</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </AdminShell>
  );
}
