"use client";

import { useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";

const API_URL = "https://viajes-back-sre6.onrender.com";

const readOnlyClass =
  "w-full bg-gray-50 border border-gray-200 px-5 py-3.5 outline-none text-dark text-[15px] font-light";

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.2em] uppercase text-muted font-normal mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function MessageDetailPage({ params }) {
  const messageId = params.message;

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [fetchError, setFetchError] = useState(false);
  const [marking, setMarking] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
      return;
    }

    const token = localStorage.getItem("token");
    fetch(`${API_URL}/messages/${messageId}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener el mensaje");
        return res.json();
      })
      .then(setMessage)
      .catch(() => setFetchError(true))
      .finally(() => setLoading(false));
  }, [messageId]);

  const handleMarkAsRead = async () => {
    setMarking(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/messages/${message.id}/mark_as_read`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error();
      setMessage((prev) => ({ ...prev, leido: true }));
    } catch {
      // el botón vuelve a estar disponible para reintentar
    } finally {
      setMarking(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted text-sm tracking-wide">Cargando...</p>
      </div>
    );
  }

  if (fetchError || !message) {
    return (
      <AdminShell>
        <div className="px-8 py-10">
          <p className="border border-gray-200 text-muted text-sm text-center py-6">
            No se pudo cargar el mensaje.
          </p>
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="px-8 py-10 max-w-2xl">
        <h1 className="font-serif text-dark text-xl font-light mb-8">
          Dashboard <span className="text-muted text-[15px]">&gt; Mensajes &gt; Mensaje</span>
        </h1>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Field label="Categoría">
              <input readOnly value={message.category || ""} className={readOnlyClass} />
            </Field>
            <Field label="Nombre completo">
              <input readOnly value={message.name || ""} className={readOnlyClass} />
            </Field>
            <Field label="Teléfono o email">
              <input readOnly value={message.email || ""} className={readOnlyClass} />
            </Field>
          </div>

          <Field label="Mensaje">
            <textarea
              readOnly
              value={message.message || ""}
              className={`${readOnlyClass} resize-none min-h-[160px]`}
            />
          </Field>

          <button
            onClick={handleMarkAsRead}
            disabled={message.leido || marking}
            className="self-start bg-dark text-white text-[12px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold hover:text-dark transition-colors duration-200 disabled:opacity-50"
          >
            {message.leido ? "Leído" : marking ? "Marcando..." : "Marcar como leído"}
          </button>
        </div>
      </div>
    </AdminShell>
  );
}
