"use client";

import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminShell from "@/components/admin/AdminShell";
import SelectField from "@/components/destinos/SelectField";
import { CATEGORIES } from "@/components/destinos/FiltersDrawer";

const API_URL = "https://viajes-back-sre6.onrender.com";

const inputClass =
  "w-full bg-white border border-gray-200 px-5 py-3.5 outline-none text-dark text-[15px] font-light placeholder:text-muted/50 focus:border-dark transition-colors duration-150";

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

export default function CreateDestinoPage() {
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const data = new FormData();
    data.append("name", name);
    data.append("category", category);
    if (image) data.append("image", image);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/api/destinos`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Error al crear el destino");

      toast.success("Destino creado con éxito");
      setTimeout(() => (window.location.href = "/destinos-admin"), 800);
    } catch (error) {
      toast.error(error.message);
      setSubmitting(false);
    }
  };

  return (
    <AdminShell>
      <ToastContainer />

      <div className="px-8 py-10 max-w-2xl">
        <h1 className="font-serif text-dark text-xl font-light mb-8">
          Dashboard <span className="text-muted text-[15px]">&gt; Crear destino</span>
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Field label="Imagen">
            <label className="flex flex-col items-center justify-center border border-dashed border-gray-300 h-32 cursor-pointer text-muted text-[13px] font-light hover:border-dark transition-colors duration-150">
              {image ? image.name : "Click para subir una imagen"}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0] || null)}
                className="hidden"
              />
            </label>
          </Field>

          <Field label="Nombre del destino">
            <input value={name} onChange={(e) => setName(e.target.value)} className={inputClass} required />
          </Field>

          <SelectField label="Categoría" value={category} options={CATEGORIES} placeholder="Elegir categoría" onChange={setCategory} />

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 bg-dark text-white text-[12px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold hover:text-dark transition-colors duration-200 disabled:opacity-50 self-start"
          >
            {submitting ? "Creando..." : "Crear destino"}
          </button>
        </form>
      </div>
    </AdminShell>
  );
}
