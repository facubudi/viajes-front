"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, PageHeader, Loader, btnPrimary } from "@/components/admin/ui";
import FeaturedPicker from "@/components/admin/FeaturedPicker";

const API_URL = "https://viajes-back-sre6.onrender.com";

export default function InicioAdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [savingDestinos, setSavingDestinos] = useState(false);
  const [savingPackages, setSavingPackages] = useState(false);

  const [destinos, setDestinos] = useState([]);
  const [packages, setPackages] = useState([]);
  const [selectedDestinoIds, setSelectedDestinoIds] = useState([]);
  const [selectedPackageIds, setSelectedPackageIds] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.replace("/login");
      return;
    }

    Promise.all([
      fetch(`${API_URL}/destinos`).then((res) => res.json()),
      fetch(`${API_URL}/packages`).then((res) => res.json()),
    ])
      .then(([destinosData, packagesData]) => {
        const destinosList = Array.isArray(destinosData) ? destinosData : [];
        const packagesList = Array.isArray(packagesData) ? packagesData : [];

        setDestinos(destinosList);
        setPackages(packagesList);

        setSelectedDestinoIds(
          destinosList
            .filter((d) => d.featured)
            .sort((a, b) => (a.featured_order ?? 0) - (b.featured_order ?? 0))
            .map((d) => d.id)
        );
        setSelectedPackageIds(
          packagesList
            .filter((p) => p.featured)
            .sort((a, b) => (a.featured_order ?? 0) - (b.featured_order ?? 0))
            .map((p) => p.id)
        );
      })
      .catch(() => {
        toast.error("Error al cargar destinos y paquetes");
      })
      .finally(() => setLoading(false));
  }, [router]);

  const saveDestinos = async () => {
    setSavingDestinos(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/api/home/destinos`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ destino_ids: selectedDestinoIds }),
      });
      if (!response.ok) throw new Error();
      toast.success("Destinos destacados actualizados");
    } catch {
      toast.error("No se pudieron guardar los destinos destacados");
    } finally {
      setSavingDestinos(false);
    }
  };

  const savePackages = async () => {
    setSavingPackages(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/api/home/packages`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ package_ids: selectedPackageIds }),
      });
      if (!response.ok) throw new Error();
      toast.success("Paquetes destacados actualizados");
    } catch {
      toast.error("No se pudieron guardar los paquetes destacados");
    } finally {
      setSavingPackages(false);
    }
  };

  if (loading) return <Loader />;

  const destinoItems = destinos.map((d) => ({ id: d.id, label: d.name, image: d.image }));
  const packageItems = packages.map((p) => ({
    id: p.id,
    label: p.destino?.name ? `${p.title} · ${p.destino.name}` : p.title,
    image: p.images?.[0],
  }));

  return (
    <>
      <ToastContainer />

      <PageHeader
        title="Destinos en portada"
        subtitle="Elegí qué destinos aparecen en la sección principal del sitio y en qué orden."
      />
      <Card className="p-5 mb-4">
        <FeaturedPicker items={destinoItems} selectedIds={selectedDestinoIds} onChange={setSelectedDestinoIds} />
        <div className="flex justify-end mt-4">
          <button onClick={saveDestinos} disabled={savingDestinos} className={btnPrimary}>
            {savingDestinos ? "Guardando..." : "Guardar destinos"}
          </button>
        </div>
      </Card>

      <PageHeader
        title="Paquetes populares"
        subtitle="Elegí qué paquetes se muestran como destacados en la home y en qué orden."
      />
      <Card className="p-5">
        <FeaturedPicker items={packageItems} selectedIds={selectedPackageIds} onChange={setSelectedPackageIds} />
        <div className="flex justify-end mt-4">
          <button onClick={savePackages} disabled={savingPackages} className={btnPrimary}>
            {savingPackages ? "Guardando..." : "Guardar paquetes"}
          </button>
        </div>
      </Card>
    </>
  );
}
