"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CaretRight } from "phosphor-react";
import { Card, PageHeader, EmptyState, Loader, Badge } from "@/components/admin/ui";

const API_URL = "https://viajes-back-sre6.onrender.com";

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("es-AR", { day: "2-digit", month: "short", year: "numeric" });
}

export default function MessagesPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
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
  }, [router]);

  if (loading) return <Loader />;

  const unread = messages.filter((m) => !m.leido).length;

  return (
    <>
      <PageHeader
        title="Bandeja de mensajes"
        subtitle={
          messages.length
            ? `${messages.length} mensaje${messages.length === 1 ? "" : "s"}${unread ? ` · ${unread} sin leer` : ""}`
            : "Consultas recibidas desde el sitio."
        }
      />

      <Card>
        {fetchError ? (
          <EmptyState title="Error al cargar los mensajes" description="Inténtalo nuevamente más tarde." />
        ) : messages.length === 0 ? (
          <EmptyState title="No hay mensajes" description="Las consultas del formulario de contacto aparecerán acá." />
        ) : (
          <ul className="divide-y divide-slate-100">
            {messages.map((msg) => (
              <li key={msg.id}>
                <Link
                  href={`/messages/${msg.id}`}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors duration-150"
                >
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${msg.leido ? "bg-slate-300" : "bg-amber-400"}`}
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1">
                    <p className={`text-sm truncate ${msg.leido ? "text-slate-600" : "font-semibold text-slate-900"}`}>
                      {msg.name}
                    </p>
                    <p className="text-xs text-slate-400 truncate">{formatDate(msg.created_at)}</p>
                  </div>
                  {msg.category && <Badge color={msg.leido ? "slate" : "amber"}>{msg.category}</Badge>}
                  <CaretRight size={16} className="text-slate-300 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </>
  );
}
