"use client";
import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/layouts/Footer";
import SelectField from "@/components/destinos/SelectField";
import DateField from "@/components/destinos/DateField";
import debounce from "lodash.debounce";
import axios from "axios";

const TABS = [
  { id: "viajes", label: "Viajes" },
  { id: "aereos", label: "Aéreos" },
  { id: "alojamiento", label: "Alojamiento" },
  { id: "paquetes", label: "Paquetes" },
];

const TAB_FIELDS = {
  viajes: [
    { type: "text", id: "name", label: "Nombre completo", placeholder: "Ingresa tu nombre completo", required: true },
    { type: "text", id: "email", label: "Email o teléfono", placeholder: "Ingresa un email o teléfono", required: true },
    { type: "city", id: "destino", label: "Destino", placeholder: "Ingrese el destino..." },
    { type: "passengers" },
    { type: "select", id: "tipoAlojamiento", label: "Tipo de alojamiento", options: ["Hotel", "Apartamento"], placeholder: "Seleccione el alojamiento" },
  ],
  aereos: [
    { type: "text", id: "name", label: "Nombre del pasajero", placeholder: "Ingresa el nombre del pasajero" },
    { type: "text", id: "email", label: "Email o teléfono", placeholder: "Ingresa un email o teléfono" },
    { type: "select", id: "asistencia", label: "Asistencia al viajero", options: ["Si", "No"], placeholder: "Seleccione una opción" },
    { type: "airport", id: "origen", label: "Origen", placeholder: "Ingrese el origen..." },
    { type: "airport", id: "destino", label: "Destino", placeholder: "Ingrese el destino..." },
    { type: "passengers" },
    { type: "date", id: "partida", label: "Partida" },
    { type: "date", id: "regreso", label: "Regreso", minDateField: "partida" },
  ],
  alojamiento: [
    { type: "text", id: "name", label: "Nombre del pasajero", placeholder: "Ingresa el nombre del pasajero" },
    { type: "text", id: "email", label: "Email o teléfono", placeholder: "Ingresa un email o teléfono" },
    { type: "city", id: "destino", label: "Destino", placeholder: "Ingrese el destino..." },
    { type: "select", id: "tipoAlojamiento", label: "Tipo de alojamiento", options: ["Hotel", "Apartamento"], placeholder: "Seleccione una opción" },
    { type: "passengers" },
    { type: "date", id: "ingreso", label: "Ingreso" },
    { type: "date", id: "salida", label: "Salida", minDateField: "ingreso" },
  ],
  paquetes: [
    { type: "text", id: "name", label: "Nombre completo", placeholder: "Ingresa tu nombre completo" },
    { type: "text", id: "email", label: "Email o teléfono", placeholder: "Ingresa un email o teléfono" },
    { type: "city", id: "destino", label: "Destino", placeholder: "Ingrese el destino..." },
    { type: "passengers" },
    { type: "select", id: "tipoAlojamiento", label: "Tipo de alojamiento", options: ["Hotel", "Apartamento"], placeholder: "Seleccione el alojamiento" },
  ],
};

const fieldLabels = {
  name: "Nombre",
  email: "Email",
  origen: "Origen",
  destino: "Destino",
  partida: "Fecha de Partida",
  regreso: "Fecha de Regreso",
  asistencia: "Asistencia al viajero",
  tipoAlojamiento: "Tipo de Alojamiento",
  ingreso: "Fecha de Ingreso",
  salida: "Fecha de Salida",
  mensajeAdicional: "Mensaje Adicional",
};

const categoryMap = {
  viajes: "Viajes",
  aereos: "Aéreo",
  alojamiento: "Alojamiento",
  paquetes: "Paquetes",
};

const inputClass =
  "w-full bg-white border border-gray-200 px-5 py-3.5 outline-none text-dark text-[15px] font-light placeholder:text-muted/50 focus:border-dark transition-colors duration-150";

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.2em] uppercase text-muted font-normal mb-1.5">{label}</label>
      {children}
    </div>
  );
}

function AutocompleteField({ label, value, placeholder, onChange, onFocus, onBlur, suggestions, onSelect, renderSuggestion }) {
  return (
    <div className="relative">
      <Field label={label}>
        <input
          type="text"
          value={value || ""}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          className={inputClass}
        />
      </Field>
      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 shadow-lg z-30 max-h-52 overflow-y-auto">
          {suggestions.map((s, i) => (
            <button
              key={i}
              type="button"
              onMouseDown={() => onSelect(s)}
              className="w-full text-left px-4 py-3 text-[13px] text-dark/80 font-light hover:bg-gray-50 transition-colors duration-150"
            >
              {renderSuggestion(s)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function PassengerDropdown({ adultos, setAdultos, niños, setNiños, mayores, setMayores, discapacidad, setDiscapacidad }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const total = adultos + niños + mayores + discapacidad;

  const groups = [
    { label: "Adultos", state: adultos, setState: setAdultos, min: 1 },
    { label: "Niños (0-11 años)", state: niños, setState: setNiños, min: 0 },
    { label: "Mayores (+65 años)", state: mayores, setState: setMayores, min: 0 },
    { label: "Discapacidad", state: discapacidad, setState: setDiscapacidad, min: 0 },
  ];

  return (
    <div ref={containerRef} className="relative">
      <Field label="Pasajeros">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between gap-2 bg-white border border-gray-200 px-5 py-3.5 outline-none text-[15px] font-light text-left text-dark"
        >
          <span>{total} {total === 1 ? "pasajero" : "pasajeros"}</span>
          <svg
            className={`w-3.5 h-3.5 text-dark/40 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </Field>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 shadow-lg z-30 p-5">
          {groups.map((g) => (
            <div key={g.label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-[13px] text-dark/70 font-light">{g.label}</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => g.setState(Math.max(g.min, g.state - 1))}
                  className="w-6 h-6 rounded-full flex items-center justify-center text-dark/50 hover:text-dark hover:border-dark border border-gray-200 transition-colors duration-150"
                  aria-label={`Restar ${g.label}`}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" d="M5 12h14" />
                  </svg>
                </button>
                <span className="text-dark text-[14px] font-light w-4 text-center">{g.state}</span>
                <button
                  type="button"
                  onClick={() => g.setState(g.state + 1)}
                  className="w-6 h-6 rounded-full flex items-center justify-center text-dark/50 hover:text-dark hover:border-dark border border-gray-200 transition-colors duration-150"
                  aria-label={`Sumar ${g.label}`}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="bg-dark text-white text-[11px] tracking-[0.2em] uppercase px-6 py-2.5 hover:bg-gold hover:text-dark transition-colors duration-200"
            >
              Listo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ContactoPage() {
  const [activeTab, setActiveTab] = useState("viajes");
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [inFooter, setInFooter] = useState(false);

  const [airports, setAirports] = useState([]);
  const [suggestionsOrigen, setSuggestionsOrigen] = useState([]);
  const [suggestionsDestino, setSuggestionsDestino] = useState([]);
  const [activeField, setActiveField] = useState("");
  const [cities, setCities] = useState([]);
  const [suggestionsCityDestino, setSuggestionsCityDestino] = useState([]);

  const [adultos, setAdultos] = useState(1);
  const [niños, setNiños] = useState(0);
  const [mayores, setMayores] = useState(0);
  const [discapacidad, setDiscapacidad] = useState(0);

  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json")
      .then((res) => setCities(res.data))
      .catch((err) => console.error("Error al cargar ciudades", err));

    axios
      .get("https://raw.githubusercontent.com/mwgg/Airports/master/airports.json")
      .then((res) => {
        const airportsData = Object.values(res.data)
          .filter((airport) => airport.iata)
          .map((airport) => ({
            value: airport.iata,
            label: `${airport.iata} ${airport.name} - ${airport.city}, ${airport.country}`,
          }));
        setAirports(airportsData);
      })
      .catch((err) => console.error("Error al obtener aeropuertos", err));

    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cityList = useMemo(() => cities.map((c) => ({ name: c.name, country: c.country })), [cities]);
  const airportList = useMemo(() => airports, [airports]);

  const debouncedAirportSearch = useCallback(
    debounce((input, setSuggestions) => {
      if (!input.trim()) return setSuggestions([]);
      const inputLower = input.toLowerCase();
      setSuggestions(airportList.filter((a) => a.label.toLowerCase().includes(inputLower)).slice(0, 8));
    }, 200),
    [airportList]
  );

  const debouncedCitySearch = useCallback(
    debounce((input, setSuggestions) => {
      if (!input.trim()) return setSuggestions([]);
      const inputLower = input.toLowerCase();
      setSuggestions(
        cityList
          .filter((c) => c.name.toLowerCase().includes(inputLower) || c.country.toLowerCase().includes(inputLower))
          .slice(0, 8)
      );
    }, 200),
    [cityList]
  );

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelect = (selectedValue, field) => {
    setFormData((prev) => ({ ...prev, [field]: selectedValue }));
    setActiveField("");
  };

  const handleCityInputChange = (e, field) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    debouncedCitySearch(value, setSuggestionsCityDestino);
  };

  const handleAirportInputChange = (e, field) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    setActiveField(field);
    debouncedAirportSearch(value, field === "origen" ? setSuggestionsOrigen : setSuggestionsDestino);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const message = `Pasajeros:
      - Adultos: ${adultos}
      - Niños (0-11 años): ${niños}
      - Mayores (+65 años): ${mayores}
      - Personas con discapacidad: ${discapacidad}

    Detalles:
      ${Object.entries(formData)
        .filter(([key]) => key !== "name" && key !== "email")
        .map(([key, value]) => ` - ${fieldLabels[key] || key}: ${value}`)
        .join("\n")}`;

    const dataToSend = {
      name: formData.name,
      email: formData.email,
      category: categoryMap[activeTab],
      message,
    };

    try {
      const response = await axios.post("https://viajes-back-sre6.onrender.com/contact_messages", dataToSend, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        setSuccess(true);
        setFormData({ name: "", email: "" });
      }
    } catch (err) {
      console.error("Error in Axios request:", err.response || err.message);
      setError("Error al enviar el mensaje. Por favor, inténtelo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const renderField = (field) => {
    switch (field.type) {
      case "text":
        return (
          <Field label={field.label}>
            <input
              type="text"
              id={field.id}
              value={formData[field.id] || ""}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              className={inputClass}
            />
          </Field>
        );
      case "select":
        return (
          <SelectField
            label={field.label}
            value={formData[field.id] || ""}
            options={field.options}
            placeholder={field.placeholder}
            onChange={(val) => setFormData((prev) => ({ ...prev, [field.id]: val }))}
          />
        );
      case "date":
        return (
          <DateField
            label={field.label}
            value={formData[field.id] || ""}
            onChange={(iso) => setFormData((prev) => ({ ...prev, [field.id]: iso }))}
            minDate={field.minDateField ? formData[field.minDateField] : undefined}
          />
        );
      case "passengers":
        return (
          <PassengerDropdown
            adultos={adultos} setAdultos={setAdultos}
            niños={niños} setNiños={setNiños}
            mayores={mayores} setMayores={setMayores}
            discapacidad={discapacidad} setDiscapacidad={setDiscapacidad}
          />
        );
      case "city":
        return (
          <AutocompleteField
            label={field.label}
            value={formData[field.id]}
            placeholder={field.placeholder}
            onChange={(e) => handleCityInputChange(e, field.id)}
            onBlur={() => setTimeout(() => setSuggestionsCityDestino([]), 200)}
            suggestions={suggestionsCityDestino}
            onSelect={(s) => handleSelect(s.name, field.id)}
            renderSuggestion={(s) => `${s.name}, ${s.country}`}
          />
        );
      case "airport":
        return (
          <AutocompleteField
            label={field.label}
            value={formData[field.id]}
            placeholder={field.placeholder}
            onChange={(e) => handleAirportInputChange(e, field.id)}
            onFocus={() => setActiveField(field.id)}
            onBlur={() => setTimeout(() => setActiveField(""), 150)}
            suggestions={activeField === field.id ? (field.id === "origen" ? suggestionsOrigen : suggestionsDestino) : []}
            onSelect={(s) => handleSelect(s.label, field.id)}
            renderSuggestion={(s) => s.label}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[48vh] min-h-[380px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/hero.png')", filter: "saturate(0.85) brightness(0.7)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-white" />

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
          <p className="text-white text-[11px] tracking-[0.35em] uppercase mb-5 font-sans">
            Hablemos de tu próximo viaje
          </p>
          <h1
            className="font-serif font-light text-white leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Contacto
          </h1>
        </div>
      </section>

      {/* Formulario */}
      <section className="relative z-10 bg-white pt-16 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`text-[12px] tracking-[0.25em] uppercase pb-2 border-b-2 transition-colors duration-200 ${
                  activeTab === tab.id ? "text-dark border-gold" : "text-muted border-transparent hover:text-dark"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 md:p-10">
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" onSubmit={handleSubmit}>
              {TAB_FIELDS[activeTab].map((field, i) => (
                <div key={`${activeTab}-${field.id || field.type}-${i}`}>{renderField(field)}</div>
              ))}

              <div className="md:col-span-2 lg:col-span-3">
                <Field label="Mensaje">
                  <textarea
                    id="mensajeAdicional"
                    value={formData.mensajeAdicional || ""}
                    onChange={handleChange}
                    placeholder="Escriba un mensaje"
                    className={`${inputClass} resize-none min-h-[140px]`}
                  />
                </Field>
              </div>

              <div className="md:col-span-2 lg:col-span-3 flex flex-col items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-dark text-white text-[12px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-gold hover:text-dark transition-colors duration-200 disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
                {success && (
                  <div className="w-full text-center text-[13px] text-green-700 bg-green-50 border border-green-200 px-4 py-3">
                    ¡Mensaje enviado con éxito!
                  </div>
                )}
                {error && (
                  <div className="w-full text-center text-[13px] text-red-700 bg-red-50 border border-red-200 px-4 py-3">
                    {error}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="bg-[#f7f6f4] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3 font-normal">Visitanos</p>
            <h3 className="font-serif text-dark text-4xl font-light tracking-tight">
              Búscanos en esta dirección
            </h3>
            <p className="mt-5 text-muted text-[16px] font-light leading-relaxed tracking-wide max-w-md mx-auto">
              Galería Vía de la Fontana — Local 14, Córdoba, Argentina
            </p>
          </div>
          <div className="border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
            <iframe
              style={{ border: 0, width: "100%", height: "420px", display: "block" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0047358729003!2d-64.1869131!3d-31.4139956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28266a166eb%3A0x5c8fb41493b33695!2sGaleria%20Via%20De%20La%20Fontana!5e0!3m2!1ses-419!2sar!4v1735163487861!5m2!1ses-419!2sar"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Vaya Turismo"
            />
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/5493513934673"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={`fixed bottom-7 right-7 z-50 flex items-center gap-2.5 bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm px-4 py-2.5 hover:shadow-md transition-all duration-500 group ${
          scrolled && !inFooter ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.099 1.51 5.833L.057 23.08a.75.75 0 0 0 .916.932l5.4-1.416A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.694 9.694 0 0 1-4.95-1.355l-.355-.211-3.683.965.981-3.584-.232-.369A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
        </svg>
        <span className="text-[11px] tracking-[0.15em] uppercase text-dark/70 font-sans group-hover:text-dark transition-colors duration-300">
          Háblanos
        </span>
      </a>

      <Footer />
    </>
  );
}
