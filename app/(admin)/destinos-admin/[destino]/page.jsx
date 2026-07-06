"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UploadSimple, ArrowLeft } from "phosphor-react";
import AdminSelect from "@/components/admin/AdminSelect";
import { Field, Card, EmptyState, inputClass, btnPrimary, btnGhost, Loader } from "@/components/admin/ui";
import { CATEGORIES } from "@/components/destinos/FiltersDrawer";

const API_URL = "https://viajes-back-sre6.onrender.com";

export default function EditDestinoPage({ params }) {
  const destinoId = params.destino;
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [existingImage, setExistingImage] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.replace("/login");
      return;
    }

    fetch(`${API_URL}/api/destinos/${destinoId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener el destino");
        return res.json();
      })
      .then((data) => {
        setName(data.name || "");
        setCategory(data.category || "");
        setExistingImage(data.image || null);
      })
      .catch(() => setFetchError(true))
      .finally(() => setLoading(false));
  }, [destinoId, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const data = new FormData();
    data.append("name", name);
    data.append("category", category);
    if (image) data.append("image", image);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/api/destinos/${destinoId}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Error al actualizar el destino");
      toast.success("Destino actualizado con éxito");
      setTimeout(() => router.push("/destinos-admin"), 800);
    } catch (error) {
      toast.error(error.message);
      setSubmitting(false);
    }
  };

  if (loading) return <Loader />;

  if (fetchError) {
    return (
      <Card>
        <EmptyState title="No se pudo cargar el destino" description="Volvé al panel e intentá nuevamente." />
      </Card>
    );
  }

  return (
    <>
      <ToastContainer />

      <Link href="/destinos-admin" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-dark mb-4 transition-colors">
        <ArrowLeft size={15} weight="bold" />
        Volver a destinos
      </Link>

      <form onSubmit={handleSubmit} className="max-w-xl">
        <Card className="p-6 sm:p-8 flex flex-col gap-6">
          <div>
            <h1 className="text-lg font-semibold text-slate-900">Editar destino</h1>
            <p className="text-sm text-slate-500 mt-0.5">Actualizá el nombre, categoría o imagen del destino.</p>
          </div>

          <Field label="Imagen">
            {existingImage && !image && (
              <div className="w-32 h-32 rounded-lg overflow-hidden border border-slate-200 mb-3">
                <img src={existingImage} alt={name} className="w-full h-full object-cover" />
              </div>
            )}
            <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-300 rounded-lg h-32 cursor-pointer text-slate-500 text-sm hover:border-dark hover:bg-slate-50 transition-colors duration-150">
              <UploadSimple size={22} className="text-slate-400" />
              {image ? image.name : "Click para reemplazar la imagen"}
              <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0] || null)} className="hidden" />
            </label>
          </Field>

          <Field label="Nombre del destino">
            <input value={name} onChange={(e) => setName(e.target.value)} className={inputClass} required />
          </Field>

          <AdminSelect label="Categoría" value={category} options={CATEGORIES} placeholder="Elegir categoría" onChange={setCategory} />

          <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
            <button type="submit" disabled={submitting} className={btnPrimary}>
              {submitting ? "Guardando..." : "Actualizar destino"}
            </button>
            <Link href="/destinos-admin" className={btnGhost}>
              Cancelar
            </Link>
          </div>
        </Card>
      </form>
    </>
  );
}
