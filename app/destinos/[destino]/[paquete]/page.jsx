"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/home/Navbar";
import Footer from "@/layouts/Footer";
import { getDestinoBySlug, getRelatedPaquetes } from "@/data/destinos";

export default function PaquetePage({ params }) {
  const router = useRouter();
  const destino = getDestinoBySlug(params.destino);
  const paquete = destino?.paquetes.find((p) => String(p.id) === params.paquete);

  if (!destino || !paquete) {
    return (
      <>
        <Navbar />
        <section className="min-h-[60vh] flex items-center justify-center px-6">
          <p className="text-muted text-center text-sm tracking-wide">
            No encontramos ese paquete.
          </p>
        </section>
        <Footer />
      </>
    );
  }

  const relacionados = getRelatedPaquetes(destino, paquete.id, 3);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[48vh] min-h-[380px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${paquete.images?.[0] || destino.image}')`, filter: "saturate(0.85) brightness(0.7)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-white" />

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
          <p className="text-white text-[11px] tracking-[0.35em] uppercase mb-5 font-sans">
            {destino.name} · {paquete.duration}
          </p>
          <h1
            className="font-serif font-light text-white leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            {paquete.title}
          </h1>
        </div>
      </section>

      {/* Contenido */}
      <section className="relative z-10 bg-white pb-24 px-6 pt-14">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 border-b border-gray-200 pb-8 mb-8">
            <div>
              <p className="text-muted text-[15px] font-light leading-relaxed max-w-xl">
                {paquete.description}
              </p>
              <p className="text-muted text-[11px] tracking-[0.15em] uppercase mt-4">
                {paquete.duration} · Alojamiento en {paquete.alojamiento}
              </p>
            </div>
            <div className="text-left md:text-right shrink-0">
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-1">Desde</p>
              <p className="text-dark text-3xl font-serif font-light">{paquete.price}</p>
            </div>
          </div>

          {/* Galería */}
          {paquete.images?.length > 1 && (
            <div className="mb-12">
              <h2 className="font-serif text-dark text-xl font-light mb-5">Galería</h2>
              <div className="grid grid-cols-3 gap-3">
                {paquete.images.map((src, i) => (
                  <div key={i} className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <img src={src} alt={`${paquete.title} ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Itinerario */}
          {paquete.itinerario?.length > 0 && (
            <div className="mb-12">
              <h2 className="font-serif text-dark text-xl font-light mb-5">Itinerario día a día</h2>
              <div className="flex flex-col gap-5">
                {paquete.itinerario.map((dia) => (
                  <div key={dia.day} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-dark text-[13px] font-light">
                      {dia.day}
                    </div>
                    <div>
                      <h3 className="text-dark text-[15px] font-normal">{dia.title}</h3>
                      <p className="text-muted text-[13px] font-light mt-0.5">{dia.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fechas de salida */}
          {paquete.fechasSalida?.length > 0 && (
            <div className="mb-12">
              <h2 className="font-serif text-dark text-xl font-light mb-5">Próximas fechas de salida</h2>
              <div className="flex flex-wrap gap-2.5">
                {paquete.fechasSalida.map((fecha, i) => (
                  <span
                    key={i}
                    className="border border-gray-200 text-dark/80 text-[13px] font-light px-4 py-2 capitalize"
                  >
                    {fecha}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Incluye / No incluye */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <h2 className="font-serif text-dark text-xl font-light mb-5">Este paquete incluye</h2>
              <ul className="flex flex-col gap-3">
                {paquete.incluye.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-dark/80 text-[14px] font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {paquete.noIncluye?.length > 0 && (
              <div>
                <h2 className="font-serif text-dark text-xl font-light mb-5">No incluye</h2>
                <ul className="flex flex-col gap-3">
                  {paquete.noIncluye.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted text-[14px] font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Cancelación */}
          {paquete.cancelacion && (
            <div className="mb-12 border border-gray-200 p-5">
              <h2 className="font-serif text-dark text-lg font-light mb-2">Política de cancelación</h2>
              <p className="text-muted text-[13px] font-light leading-relaxed">{paquete.cancelacion}</p>
            </div>
          )}

          <a
            href="https://wa.me/5493513934673"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-dark text-white text-[12px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold hover:text-dark transition-colors duration-200"
          >
            Consultar por este paquete
          </a>

          {/* Relacionados */}
          {relacionados.length > 0 && (
            <div className="mt-16 pt-10 border-t border-gray-200">
              <h2 className="font-serif text-dark text-xl font-light mb-5">También te puede interesar</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relacionados.map(({ destino: d, paquete: p }) => (
                  <div
                    key={`${d.slug}-${p.id}`}
                    onClick={() => router.push(`/destinos/${d.slug}/${p.id}`)}
                    className="group cursor-pointer flex flex-col"
                  >
                    <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                      <img
                        src={p.images?.[0] || d.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-1 py-3">
                      <h3 className="text-dark text-[14px] font-light">{p.title}</h3>
                      <p className="text-muted text-[12px] font-light mt-0.5">{d.name} · {p.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
