"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/home/Navbar";
import Footer from "@/layouts/Footer";
import { getDestinoBySlug } from "@/data/destinos";

export default function DestinoPage({ params }) {
  const router = useRouter();
  const destino = getDestinoBySlug(params.destino);

  if (!destino) {
    return (
      <>
        <Navbar />
        <section className="min-h-[60vh] flex items-center justify-center px-6">
          <p className="text-muted text-center text-sm tracking-wide">
            No encontramos ese destino.
          </p>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${destino.image}')`, filter: "saturate(0.85) brightness(0.7)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-white" />

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
          <p className="text-white text-[11px] tracking-[0.35em] uppercase mb-5 font-sans">
            {destino.category}
          </p>
          <h1
            className="font-serif font-light text-white leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {destino.name}
          </h1>
        </div>
      </section>

      {/* Paquetes */}
      <section className="relative z-10 bg-white pb-24 px-6 pt-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-dark text-2xl font-light mb-8">
            Paquetes disponibles en {destino.name}
          </h2>

          <div className="flex flex-col gap-4">
            {destino.paquetes.map((paquete) => (
              <div
                key={paquete.id}
                onClick={() => router.push(`/destinos/${destino.slug}/${paquete.id}`)}
                className="group cursor-pointer flex flex-col md:flex-row border border-gray-200 hover:border-dark transition-colors duration-200"
              >
                <div className="md:w-64 shrink-0 overflow-hidden" style={{ aspectRatio: "3/2" }}>
                  <img
                    src={paquete.images?.[0] || destino.image}
                    alt={paquete.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between p-5">
                  <div>
                    <h3 className="font-sans text-dark text-[18px] font-light tracking-wide">
                      {paquete.title}
                    </h3>
                    <p className="text-muted text-[13px] font-light mt-2 leading-relaxed">
                      {paquete.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-muted text-[11px] tracking-wide uppercase">
                      {paquete.duration} · {paquete.alojamiento}
                    </span>
                    <span className="text-dark text-[15px] font-light">{paquete.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
