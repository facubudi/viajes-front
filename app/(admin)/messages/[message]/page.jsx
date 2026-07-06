"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, EnvelopeSimple, User, Tag } from "phosphor-react";
import { Card, EmptyState, Loader, Badge, btnPrimary } from "@/components/admin/ui";

const API_URL = "https://viajes-back-sre6.onrender.com";

function InfoRow({ Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 py-3">
      <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
        <Icon size={17} />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-slate-400">{label}</p>
        <p className="text-sm text-slate-800 break-words">{value || "—"}</p>
      </div>
    </div>
  );
}

export default function MessageDetailPage({ params }) {
  const messageId = params.message;
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const [fetchError, setFetchError] = useState(false);
  const [marking, setMarking] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.replace("/login");
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
  }, [messageId, router]);

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

  if (loading) return <Loader />;

  if (fetchError || !message) {
    return (
      <Card>
        <EmptyState title="No se pudo cargar el mensaje" description="Volvé a la bandeja e intentá nuevamente." />
      </Card>
    );
  }

  return (
    <>
      <Link href="/messages" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-dark mb-4 transition-colors">
        <ArrowLeft size={15} weight="bold" />
        Volver a mensajes
      </Link>

      <div className="max-w-2xl">
        <Card className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-lg font-semibold text-slate-900">{message.name || "Consulta"}</h1>
            <Badge color={message.leido ? "green" : "amber"}>{message.leido ? "Leído" : "Sin leer"}</Badge>
          </div>

          <div className="divide-y divide-slate-100 border-y border-slate-100 my-4">
            <InfoRow Icon={Tag} label="Categoría" value={message.category} />
            <InfoRow Icon={User} label="Nombre completo" value={message.name} />
            <InfoRow Icon={EnvelopeSimple} label="Teléfono o email" value={message.email} />
          </div>

          <div className="mb-6">
            <p className="text-xs text-slate-400 mb-1.5">Mensaje</p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 whitespace-pre-wrap min-h-[120px]">
              {message.message || "—"}
            </div>
          </div>

          <button onClick={handleMarkAsRead} disabled={message.leido || marking} className={btnPrimary}>
            <Check size={16} weight="bold" />
            {message.leido ? "Leído" : marking ? "Marcando..." : "Marcar como leído"}
          </button>
        </Card>
      </div>
    </>
  );
}
