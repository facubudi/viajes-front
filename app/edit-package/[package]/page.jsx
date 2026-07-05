"use client";

import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { X } from "phosphor-react";
import AdminShell from "@/components/admin/AdminShell";
import SelectField from "@/components/destinos/SelectField";
import DateRangeField from "@/components/destinos/DateRangeField";
import { CATEGORIES } from "@/components/destinos/FiltersDrawer";

const API_URL = "https://viajes-back-sre6.onrender.com";
const ACCOMMODATIONS = ["Hotel", "Resort", "Aparthotel", "Crucero"];
const CURRENCIES = ["USD", "ARS", "EUR"];

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

export default function EditPackagePage({ params }) {
  const packageId = params.package;

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [fetchError, setFetchError] = useState(false);
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
  const [existingImages, setExistingImages] = useState([]);
  const [imagesToDelete, setImagesToDelete] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
      return;
    }

    Promise.all([
      fetch(`${API_URL}/destinos`).then((res) => res.json()),
      fetch(`${API_URL}/api/packages/${packageId}`).then((res) => {
        if (!res.ok) throw new Error("Error al obtener el paquete");
        return res.json();
      }),
    ])
      .then(([destinosData, pkg]) => {
        setDestinos(Array.isArray(destinosData) ? destinosData : []);
        setTitle(pkg.title || "");
        setDescription(pkg.description || "");
        setDestinoName(pkg.destino?.id ? String(pkg.destino.id) : "");
        setDurationDays(pkg.duration_days ?? "");
        setPriceAmount(pkg.price_amount ?? "");
        setPriceCurrency(pkg.price_currency || "USD");
        setAccommodation(pkg.accommodation || "");
        setIncludes(pkg.includes || []);
        setDepartureDate(pkg.departureDate ? new Date(pkg.departureDate).toISOString().split("T")[0] : "");
        setReturnDate(pkg.returnDate ? new Date(pkg.returnDate).toISOString().split("T")[0] : "");
        setExistingImages(pkg.images || []);
      })
      .catch((err) => {
        console.error("Error al cargar el paquete:", err);
        setFetchError(true);
      })
      .finally(() => setLoading(false));
  }, [packageId]);

  const addInclude = () => {
    const value = includeDraft.trim();
    if (value && !includes.includes(value)) {
      setIncludes([...includes, value]);
    }
    setIncludeDraft("");
  };

  const removeInclude = (item) => {
    setIncludes(includes.filter((i) => i !== item));
  };

  const handleImageUpload = (event) => {
    setUploadedImages((prev) => [...prev, ...Array.from(event.target.files)]);
  };

  const removeNewImage = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const removeExistingImage = (url) => {
    setExistingImages((prev) => prev.filter((img) => img !== url));
    setImagesToDelete((prev) => [...prev, url]);
  };

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
    imagesToDelete.forEach((url) => data.append("deleteImages", url));
    uploadedImages.forEach((file) => data.append("images", file));

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/api/packages/${packageId}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      });

      if (!response.ok) throw new Error("Error al actualizar el paquete");

      toast.success("Paquete actualizado con éxito");
      setTimeout(() => (window.location.href = "/dashboard"), 800);
    } catch (error) {
      console.error("Error al actualizar el paquete:", error);
      toast.error("Error al actualizar el paquete");
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted text-sm tracking-wide">Cargando...</p>
      </div>
    );
  }

  if (fetchError) {
    return (
      <AdminShell>
        <div className="px-8 py-10">
          <p className="border border-gray-200 text-muted text-sm text-center py-6">
            No se pudo cargar el paquete.
          </p>
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <ToastContainer />

      <div className="px-8 py-10 max-w-2xl">
        <h1 className="font-serif text-dark text-xl font-light mb-8">
          Dashboard <span className="text-muted text-[15px]">&gt; Editar paquete</span>
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Field label="Imágenes">
            {existingImages.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {existingImages.map((url) => (
                  <div key={url} className="relative w-20 h-20 border border-gray-200">
                    <img src={url} alt="" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeExistingImage(url)}
                      aria-label="Quitar imagen"
                      className="absolute top-0.5 right-0.5 w-5 h-5 bg-white/90 flex items-center justify-center"
                    >
                      <X size={10} />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <label className="flex flex-col items-center justify-center border border-dashed border-gray-300 h-32 cursor-pointer text-muted text-[13px] font-light hover:border-dark transition-colors duration-150">
              Click para subir imágenes nuevas
              <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
            {uploadedImages.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {uploadedImages.map((file, i) => (
                  <div key={i} className="flex items-center gap-2 border border-gray-200 px-3 py-1.5 text-[12px] text-dark/70">
                    {file.name}
                    <button type="button" onClick={() => removeNewImage(i)} aria-label="Quitar imagen">
                      <X size={12} />
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
            <Field label="Destino">
              {isNewDestino ? (
                <input
                  value={destinoName}
                  onChange={(e) => setDestinoName(e.target.value)}
                  placeholder="Nombre del destino nuevo"
                  className={inputClass}
                />
              ) : (
                <SelectField
                  label=""
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
                className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-dark transition-colors duration-150 mt-2"
              >
                {isNewDestino ? "Elegir destino existente" : "+ Nuevo destino"}
              </button>
            </Field>

            {isNewDestino && (
              <SelectField label="Categoría" value={category} options={CATEGORIES} placeholder="Elegir categoría" onChange={setCategory} />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Field label="Duración (días)">
              <input
                type="number"
                min="1"
                value={durationDays}
                onChange={(e) => setDurationDays(e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Precio">
              <input
                type="number"
                min="0"
                step="0.01"
                value={priceAmount}
                onChange={(e) => setPriceAmount(e.target.value)}
                className={inputClass}
              />
            </Field>
            <SelectField label="Moneda" value={priceCurrency} options={CURRENCIES} onChange={setPriceCurrency} />
          </div>

          <SelectField
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
              <button
                type="button"
                onClick={addInclude}
                className="shrink-0 px-5 border border-gray-200 text-[12px] tracking-[0.15em] uppercase text-dark/70 hover:border-dark transition-colors duration-150"
              >
                Agregar
              </button>
            </div>
            {includes.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {includes.map((item) => (
                  <div key={item} className="flex items-center gap-2 border border-gray-200 px-4 py-2 text-[13px] font-light text-dark/80">
                    {item}
                    <button type="button" onClick={() => removeInclude(item)} aria-label="Quitar">
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </Field>

          <DateRangeField
            checkIn={departureDate}
            checkOut={returnDate}
            onChange={({ checkIn, checkOut }) => {
              setDepartureDate(checkIn);
              setReturnDate(checkOut);
            }}
          />

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 bg-dark text-white text-[12px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold hover:text-dark transition-colors duration-200 disabled:opacity-50 self-start"
          >
            {submitting ? "Guardando..." : "Actualizar paquete"}
          </button>
        </form>
      </div>
    </AdminShell>
  );
}
