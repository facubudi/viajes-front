"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PencilSimple, Trash, Plus } from "phosphor-react";
import { Card, PageHeader, EmptyState, Loader, Badge, btnPrimary, btnGhost, btnDanger } from "@/components/admin/ui";

const API_URL = "https://viajes-back-sre6.onrender.com";

export default function DestinosAdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [destinos, setDestinos] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [destinoToDelete, setDestinoToDelete] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.replace("/login");
      return;
    }

    fetch(`${API_URL}/destinos`)
      .then((res) => res.json())
      .then((data) => setDestinos(Array.isArray(data) ? data : []))
      .catch(() => setFetchError(true))
      .finally(() => setLoading(false));
  }, [router]);

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

  if (loading) return <Loader />;

  return (
    <>
      <ToastContainer />

      <PageHeader
        title="Panel de destinos"
        subtitle="Administrá los destinos disponibles y sus categorías."
        actions={
          <Link href="/destinos-admin/create" className={btnPrimary}>
            <Plus size={16} weight="bold" />
            Crear destino
          </Link>
        }
      />

      <Card>
        {fetchError ? (
          <EmptyState title="Error al cargar los destinos" description="Inténtalo nuevamente más tarde." />
        ) : destinos.length === 0 ? (
          <EmptyState
            title="No hay destinos disponibles"
            description="Creá tu primer destino para asociar paquetes."
            action={
              <Link href="/destinos-admin/create" className={btnPrimary}>
                <Plus size={16} weight="bold" />
                Crear destino
              </Link>
            }
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <th className="px-5 py-3 font-semibold">Destino</th>
                  <th className="px-5 py-3 font-semibold">Categoría</th>
                  <th className="px-5 py-3 font-semibold">Paquetes</th>
                  <th className="px-5 py-3 font-semibold text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {destinos.map((destino) => (
                  <tr
                    key={destino.id}
                    onClick={() => router.push(`/destinos-admin/${destino.id}`)}
                    className="hover:bg-slate-50 cursor-pointer transition-colors duration-150"
                  >
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={destino.image || "/assets/images/places/image.png"}
                          alt={destino.name}
                          className="w-11 h-11 rounded-lg object-cover bg-slate-100 shrink-0"
                        />
                        <span className="font-medium text-slate-900 line-clamp-1">{destino.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      {destino.category ? <Badge color="blue">{destino.category}</Badge> : <span className="text-slate-400">—</span>}
                    </td>
                    <td className="px-5 py-3 text-slate-600">
                      {destino.paquetes?.length || 0} paquete{destino.paquetes?.length === 1 ? "" : "s"}
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center justify-end gap-1" onClick={(e) => e.stopPropagation()}>
                        <Link
                          href={`/destinos-admin/${destino.id}`}
                          aria-label="Editar destino"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-dark transition-colors duration-150"
                        >
                          <PencilSimple size={16} />
                        </Link>
                        <button
                          onClick={() => setDestinoToDelete(destino.id)}
                          aria-label="Eliminar destino"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
                        >
                          <Trash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {destinoToDelete && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-6">
          <Card className="max-w-sm w-full p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Eliminar destino</h3>
            <p className="text-sm text-slate-500 mb-6">
              ¿Estás seguro de que deseas eliminar este destino? No se puede si tiene paquetes asociados.
            </p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setDestinoToDelete(null)} className={btnGhost}>
                Cancelar
              </button>
              <button onClick={handleDelete} className={btnDanger}>
                Eliminar
              </button>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
