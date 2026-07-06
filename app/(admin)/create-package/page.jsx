"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { X, UploadSimple, ArrowLeft } from "phosphor-react";
import AdminSelect from "@/components/admin/AdminSelect";
import AdminDateRange from "@/components/admin/AdminDateRange";
import { Field, Card, inputClass, btnPrimary, btnGhost, Loader } from "@/components/admin/ui";
import { CATEGORIES } from "@/components/destinos/FiltersDrawer";

const API_URL = "https://viajes-back-sre6.onrender.com";
const ACCOMMODATIONS = ["Hotel", "Resort", "Aparthotel", "Crucero"];
const CURRENCIES = ["USD", "ARS", "EUR"];

export default function CreatePackagePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [destinos, setDestinos] = useState([]);
  const [isNewDestino, setIsNewDestino] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [destinoName, setDestinoName] = useState("");
  const [category, setCategory] = useState("");
  const [durationDays, setDurationDays] = useState("");
  const [priceAmount, setPriceAmount] = useState("");
  const [priceCurrency, setPriceCurrency] = useState("USD");
  const [accommodation, setAccommodation] = useState("");
  const [includes, setIncludes] = useState([]);
  const [includeDraft, setIncludeDraft] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.replace("/login");
      return;
    }

    fetch(`${API_URL}/destinos`)
      .then((res) => res.json())
      .then((data) => setDestinos(Array.isArray(data) ? data : []))
      .catch(() => setDestinos([]))
      .finally(() => setLoading(false));
  }, [router]);

  const addInclude = () => {
    const value = includeDraft.trim();
    if (value && !includes.includes(value)) setIncludes([...includes, value]);
    setIncludeDraft("");
  };

  const removeInclude = (item) => setIncludes(includes.filter((i) => i !== item));
  const handleImageUpload = (event) => setUploadedImages((prev) => [...prev, ...Array.from(event.target.files)]);
  const removeImage = (index) => setUploadedImages((prev) => prev.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    if (isNewDestino) {
      data.append("destino_name", destinoName);
      data.append("category", category);
    } else {
      data.append("destino_id", destinoName);
    }
    data.append("duration_days", durationDays);
    data.append("price_amount", priceAmount);
    data.append("price_currency", priceCurrency);
    data.append("accommodation", accommodation);
    includes.forEach((item) => data.append("includes[]", item));
    data.append("departureDate", departureDate);
    data.append("returnDate", returnDate);
    uploadedImages.forEach((file) => data.append("images", file));

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/api/create_package`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });
      if (!response.ok) throw new Error("Error al crear el paquete");
      toast.success("Paquete creado con éxito");
      setTimeout(() => router.push("/dashboard"), 800);
    } catch (error) {
      console.error("Error al crear el paquete:", error);
      toast.error("Error al crear el paquete");
      setSubmitting(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <>
      <ToastContainer />

      <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-dark mb-4 transition-colors">
        <ArrowLeft size={15} weight="bold" />
        Volver a paquetes
      </Link>

      <form onSubmit={handleSubmit} className="max-w-3xl">
        <Card className="p-6 sm:p-8 flex flex-col gap-6">
          <div>
            <h1 className="text-lg font-semibold text-slate-900">Nuevo paquete</h1>
            <p className="text-sm text-slate-500 mt-0.5">Completá la información del paquete turístico.</p>
          </div>

          <Field label="Imágenes">
            <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-300 rounded-lg h-32 cursor-pointer text-slate-500 text-sm hover:border-dark hover:bg-slate-50 transition-colors duration-150">
              <UploadSimple size={22} className="text-slate-400" />
              Click para subir imágenes
              <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
            {uploadedImages.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {uploadedImages.map((file, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-1.5 text-xs text-slate-700">
                    <span className="max-w-[160px] truncate">{file.name}</span>
                    <button type="button" onClick={() => removeImage(i)} aria-label="Quitar imagen" className="text-slate-400 hover:text-red-500">
                      <X size={13} weight="bold" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </Field>

          <Field label="Título del paquete">
            <input value={title} onChange={(e) => setTitle(e.target.value)} className={inputClass} required />
          </Field>

          <Field label="Descripción">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`${inputClass} resize-none min-h-[100px]`}
            />
          </Field>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              {isNewDestino ? (
                <Field label="Destino">
                  <input
                    value={destinoName}
                    onChange={(e) => setDestinoName(e.target.value)}
                    placeholder="Nombre del destino nuevo"
                    className={inputClass}
                  />
                </Field>
              ) : (
                <AdminSelect
                  label="Destino"
                  value={destinos.find((d) => String(d.id) === String(destinoName))?.name || ""}
                  options={destinos.map((d) => d.name)}
                  placeholder="Elegir destino"
                  onChange={(name) => setDestinoName(destinos.find((d) => d.name === name)?.id?.toString() || "")}
                />
              )}
              <button
                type="button"
                onClick={() => {
                  setIsNewDestino((v) => !v);
                  setDestinoName("");
                }}
                className="text-xs font-medium text-slate-500 hover:text-dark transition-colors duration-150 mt-2"
              >
                {isNewDestino ? "← Elegir destino existente" : "+ Nuevo destino"}
              </button>
            </div>

            {isNewDestino && (
              <AdminSelect label="Categoría" value={category} options={CATEGORIES} placeholder="Elegir categoría" onChange={setCategory} />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Field label="Duración (días)">
              <input type="number" min="1" value={durationDays} onChange={(e) => setDurationDays(e.target.value)} className={inputClass} />
            </Field>
            <Field label="Precio">
              <input type="number" min="0" step="0.01" value={priceAmount} onChange={(e) => setPriceAmount(e.target.value)} className={inputClass} />
            </Field>
            <AdminSelect label="Moneda" value={priceCurrency} options={CURRENCIES} onChange={setPriceCurrency} />
          </div>

          <AdminSelect
            label="Alojamiento"
            value={accommodation}
            options={ACCOMMODATIONS}
            placeholder="Elegir alojamiento"
            onChange={setAccommodation}
          />

          <Field label="Este paquete incluye">
            <div className="flex gap-2">
              <input
                value={includeDraft}
                onChange={(e) => setIncludeDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addInclude();
                  }
                }}
                placeholder="Ej. Vuelos ida y vuelta"
                className={inputClass}
              />
              <button type="button" onClick={addInclude} className={`${btnGhost} shrink-0`}>
                Agregar
              </button>
            </div>
            {includes.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {includes.map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-1.5 text-sm text-slate-700">
                    {item}
                    <button type="button" onClick={() => removeInclude(item)} aria-label="Quitar" className="text-slate-400 hover:text-red-500">
                      <X size={13} weight="bold" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </Field>

          <AdminDateRange
            checkIn={departureDate}
            checkOut={returnDate}
            onChange={({ checkIn, checkOut }) => {
              setDepartureDate(checkIn);
              setReturnDate(checkOut);
            }}
          />

          <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
            <button type="submit" disabled={submitting} className={btnPrimary}>
              {submitting ? "Creando..." : "Crear paquete"}
            </button>
            <Link href="/dashboard" className={btnGhost}>
              Cancelar
            </Link>
          </div>
        </Card>
      </form>
    </>
  );
}
