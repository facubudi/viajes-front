"use client";

import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Trash } from "phosphor-react";
import AdminShell from "@/components/admin/AdminShell";

const API_URL = "https://viajes-back-sre6.onrender.com";

export default function DestinosAdminPage() {
  const [loading, setLoading] = useState(true);
  const [destinos, setDestinos] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [destinoToDelete, setDestinoToDelete] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
      return;
    }

    fetch(`${API_URL}/destinos`)
      .then((res) => res.json())
      .then((data) => setDestinos(Array.isArray(data) ? data : []))
      .catch(() => setFetchError(true))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async () => {
    if (!destinoToDelete) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/api/destinos/${destinoToDelete}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Error al eliminar el destino");

      toast.success(result.message);
      setDestinoToDelete(null);
      setDestinos((prev) => prev.filter((d) => d.id !== destinoToDelete));
    } catch (error) {
      toast.error(error.message);
      setDestinoToDelete(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted text-sm tracking-wide">Cargando...</p>
      </div>
    );
  }

  return (
    <AdminShell>
      <ToastContainer />

      <div className="px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-dark text-xl font-light">
            Dashboard <span className="text-muted text-[15px]">&gt; Destinos</span>
          </h1>
          <button
            onClick={() => (window.location.href = "/destinos-admin/create")}
            className="bg-dark text-white text-[12px] tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-dark transition-colors duration-200"
          >
            Crear destino
          </button>
        </div>

        {fetchError && (
          <p className="border border-gray-200 text-muted text-sm text-center py-6">
            Error al cargar los destinos. Inténtalo más tarde.
          </p>
        )}

        {!fetchError && destinos.length === 0 && (
          <p className="border border-gray-200 text-muted text-sm text-center py-6">
            No hay destinos disponibles
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {destinos.map((destino) => (
            <div key={destino.id} className="group relative border border-gray-200 overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setDestinoToDelete(destino.id);
                }}
                aria-label="Eliminar destino"
                className="absolute top-2 right-2 z-10 w-8 h-8 bg-white/90 flex items-center justify-center text-dark/60 hover:text-dark transition-colors duration-150"
              >
                <Trash size={16} weight="bold" />
              </button>

              <img
                src={destino.image || "/assets/images/places/image.png"}
                alt={destino.name}
                onClick={() => (window.location.href = `/destinos-admin/${destino.id}`)}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white px-3 py-2.5 pointer-events-none">
                <p className="text-[13px] font-light truncate">{destino.name}</p>
                <p className="text-[11px] text-white/70 font-light truncate">
                  {destino.category} · {destino.paquetes?.length || 0} paquete{destino.paquetes?.length === 1 ? "" : "s"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {destinoToDelete && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-6">
          <div className="bg-white max-w-sm w-full p-6">
            <h3 className="font-serif text-dark text-lg font-light mb-3">Confirmar eliminación</h3>
            <p className="text-muted text-[14px] font-light mb-6">
              ¿Estás seguro de que deseas eliminar este destino? No se puede si tiene paquetes asociados.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDestinoToDelete(null)}
                className="px-5 py-2.5 text-[12px] tracking-[0.15em] uppercase text-dark/60 hover:text-dark transition-colors duration-150"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="px-5 py-2.5 bg-dark text-white text-[12px] tracking-[0.15em] uppercase hover:bg-red-600 transition-colors duration-200"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminShell>
  );
}
