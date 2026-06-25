"use client";
import { useRouter } from "next/navigation";

const PAQUETES = [
  {
    id: 1,
    destino: "Islas Maldivas",
    descripcion: "Villas sobre el agua, arrecifes de coral y atardeceres infinitos.",
    duracion: "10 días",
    precio: "USD 2.800",
    imagen: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
  },
  {
    id: 2,
    destino: "Santorini",
    descripcion: "Arquitectura blanca, vinos locales y el mar Egeo de fondo.",
    duracion: "7 días",
    precio: "USD 1.900",
    imagen: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
  },
  {
    id: 3,
    destino: "Tokio",
    descripcion: "Tradición y modernidad en una de las ciudades más fascinantes del mundo.",
    duracion: "12 días",
    precio: "USD 2.400",
    imagen: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
  },
  {
    id: 4,
    destino: "Patagonia",
    descripcion: "Torres imponentes, glaciares y silencio en el fin del mundo.",
    duracion: "8 días",
    precio: "USD 1.100",
    imagen: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
  },
];

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
              key={p.id}
              onClick={() => router.push(`/destinos/${p.id}`)}
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
