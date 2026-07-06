"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Field, inputClass, btnPrimary } from "@/components/admin/ui";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) router.replace("/dashboard");
  }, [router]);

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
      if (!response.ok) throw new Error(data.error || "Error al iniciar sesión");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/dashboard");
    } catch (err) {
      toast.error(err.message || "Error al iniciar sesión");
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12"
      style={{ fontFamily: "Neue Haas, sans-serif" }}
    >
      <ToastContainer />

      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-xl bg-dark flex items-center justify-center mb-4">
            <img src="/images/vpt_logo_white.svg" alt="Vaya Turismo" className="h-7 w-auto" />
          </div>
          <h1 className="text-xl font-semibold text-slate-900">Panel de administración</h1>
          <p className="text-sm text-slate-500 mt-1">Iniciá sesión para continuar</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Field label="Correo electrónico">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
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
                placeholder="••••••••"
                className={inputClass}
                required
              />
            </Field>

            <button type="submit" disabled={loading} className={`${btnPrimary} w-full mt-1`}>
              {loading ? "Ingresando..." : "Iniciar sesión"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">Vaya Turismo · Acceso restringido</p>
      </div>
    </div>
  );
}
