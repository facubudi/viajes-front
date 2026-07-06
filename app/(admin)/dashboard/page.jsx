"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PencilSimple, Trash, Plus, Airplane, MapPin, Clock } from "phosphor-react";
import { StatCard, Card, PageHeader, EmptyState, Loader, Badge, btnPrimary, btnGhost, btnDanger } from "@/components/admin/ui";

const API_URL = "https://viajes-back-sre6.onrender.com";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [packages, setPackages] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [packageToDelete, setPackageToDelete] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.replace("/login");
      return;
    }

    const fetchPackages = async () => {
      try {
        const response = await fetch(`${API_URL}/packages`);
        const data = await response.json();
        if (response.ok) {
          setPackages(data);
        } else {
          setFetchError(true);
        }
      } catch (err) {
        console.error("Error al obtener los paquetes:", err);
        setFetchError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [router]);

  const stats = useMemo(() => {
    const destinos = new Set(packages.map((p) => p.destino?.name).filter(Boolean));
    const durations = packages.map((p) => Number(p.duration_days)).filter((n) => n > 0);
    const avg = durations.length ? Math.round(durations.reduce((a, b) => a + b, 0) / durations.length) : 0;
    return { total: packages.length, destinos: destinos.size, avgDuration: avg };
  }, [packages]);

  const handleDelete = async () => {
    if (!packageToDelete) return;
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/api/delete_package/${packageToDelete}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Error al eliminar el paquete");
      const result = await response.json();
      toast.success(result.message);
      setPackageToDelete(null);
      setPackages((prev) => prev.filter((p) => p.id !== packageToDelete));
    } catch (error) {
      console.error("Error:", error);
      toast.error("No se pudo eliminar el paquete");
    }
  };

  if (loading) return <Loader />;

  return (
    <>
      <ToastContainer />

      <PageHeader
        title="Panel de paquetes"
        subtitle="Gestioná todos los paquetes turísticos publicados."
        actions={
          <Link href="/create-package" className={btnPrimary}>
            <Plus size={16} weight="bold" />
            Crear paquete
          </Link>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <StatCard label="Paquetes totales" value={stats.total} Icon={Airplane} />
        <StatCard label="Destinos activos" value={stats.destinos} Icon={MapPin} accent="bg-amber-100 text-amber-600" />
        <StatCard label="Duración promedio" value={`${stats.avgDuration} días`} Icon={Clock} accent="bg-emerald-100 text-emerald-600" />
      </div>

      <Card>
        {fetchError ? (
          <EmptyState title="Error al cargar los paquetes" description="Inténtalo nuevamente más tarde." />
        ) : packages.length === 0 ? (
          <EmptyState
            title="No hay paquetes disponibles"
            description="Creá tu primer paquete para empezar a publicar viajes."
            action={
              <Link href="/create-package" className={btnPrimary}>
                <Plus size={16} weight="bold" />
                Crear paquete
              </Link>
            }
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <th className="px-5 py-3 font-semibold">Paquete</th>
                  <th className="px-5 py-3 font-semibold">Destino</th>
                  <th className="px-5 py-3 font-semibold">Alojamiento</th>
                  <th className="px-5 py-3 font-semibold">Duración</th>
                  <th className="px-5 py-3 font-semibold">Precio</th>
                  <th className="px-5 py-3 font-semibold text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {packages.map((pack) => (
                  <tr
                    key={pack.id}
                    onClick={() => router.push(`/edit-package/${pack.id}`)}
                    className="hover:bg-slate-50 cursor-pointer transition-colors duration-150"
                  >
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={pack.images?.[0] || "/assets/images/places/image.png"}
                          alt={pack.title}
                          className="w-11 h-11 rounded-lg object-cover bg-slate-100 shrink-0"
                        />
                        <span className="font-medium text-slate-900 line-clamp-1">{pack.title}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-slate-600">{pack.destino?.name || "—"}</td>
                    <td className="px-5 py-3">
                      {pack.accommodation ? <Badge color="slate">{pack.accommodation}</Badge> : <span className="text-slate-400">—</span>}
                    </td>
                    <td className="px-5 py-3 text-slate-600">
                      {pack.duration_days ? `${pack.duration_days} días` : "—"}
                    </td>
                    <td className="px-5 py-3 text-slate-900 font-medium whitespace-nowrap">
                      {pack.price_amount ? `${pack.price_currency} ${Number(pack.price_amount).toLocaleString("es-AR")}` : "—"}
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center justify-end gap-1" onClick={(e) => e.stopPropagation()}>
                        <Link
                          href={`/edit-package/${pack.id}`}
                          aria-label="Editar paquete"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-dark transition-colors duration-150"
                        >
                          <PencilSimple size={16} />
                        </Link>
                        <button
                          onClick={() => setPackageToDelete(pack.id)}
                          aria-label="Eliminar paquete"
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

      {packageToDelete && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-6">
          <Card className="max-w-sm w-full p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Eliminar paquete</h3>
            <p className="text-sm text-slate-500 mb-6">
              ¿Estás seguro de que deseas eliminar este paquete? Esta acción no se puede deshacer.
            </p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setPackageToDelete(null)} className={btnGhost}>
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
