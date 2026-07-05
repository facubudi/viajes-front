"use client";
import { useRouter } from "next/navigation";
import { getDestinoBySlug } from "@/data/destinos";

const DESTACADOS_SLUGS = ["islas-maldivas", "santorini", "tokio", "patagonia"];

const PAQUETES = DESTACADOS_SLUGS.map((slug) => {
  const destino = getDestinoBySlug(slug);
  const paquete = destino.paquetes[0];
  return {
    id: paquete.id,
    destinoSlug: destino.slug,
    destino: destino.name,
    descripcion: paquete.description,
    duracion: paquete.duration,
    precio: paquete.price,
    imagen: paquete.images[0],
  };
});

export default function PaquetesSection() {
  const router = useRouter();

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3 font-normal">
            Selección curada
          </p>
          <h2 className="font-serif text-dark text-4xl md:text-5xl font-light tracking-tight">
            Paquetes Populares
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
          {PAQUETES.map((p) => (
            <div
              key={`${p.destinoSlug}-${p.id}`}
              onClick={() => router.push(`/destinos/${p.destinoSlug}/${p.id}`)}
              className="group relative bg-white cursor-pointer overflow-hidden"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={p.imagen}
                  alt={p.destino}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-dark text-2xl font-light mb-1">
                    {p.destino}
                  </h3>
                  <p className="text-muted text-[13px] font-light leading-relaxed max-w-xs">
                    {p.descripcion}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-dark text-[11px] tracking-widest uppercase font-normal text-muted mb-1">
                    desde
                  </p>
                  <p className="font-serif text-dark text-xl font-light">
                    {p.precio}
                  </p>
                  <p className="text-muted text-[11px] tracking-wide mt-0.5 font-light">
                    {p.duracion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => router.push("/destinos")}
            className="px-12 py-4 border border-dark text-dark text-sm tracking-widest font-normal hover:bg-dark hover:text-white transition-all duration-200"
          >
            VER TODOS LOS PAQUETES
          </button>
        </div>

      </div>
    </section>
  );
}
