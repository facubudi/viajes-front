"use client";

import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/home/Navbar";

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

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/dashboard";
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://viajes-back-sre6.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al iniciar sesión");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/dashboard";
    } catch (err) {
      toast.error(err.message || "Error al iniciar sesión");
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-[#f7f6f4] px-6 pt-24 pb-16">
        <div className="w-full max-w-sm bg-white border border-gray-200 p-8">
          <h1 className="font-serif text-dark text-2xl font-light mb-8">¡Bienvenido!</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Field label="Correo electrónico">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ingresa tu correo electrónico"
                className={inputClass}
                required
              />
            </Field>

            <Field label="Contraseña">
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Ingresa tu contraseña"
                className={inputClass}
                required
              />
            </Field>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-dark text-white text-[12px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-gold hover:text-dark transition-colors duration-200 disabled:opacity-50"
            >
              {loading ? "Cargando..." : "Iniciar sesión"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
