"use client";
import { useRouter } from "next/navigation";

export default function DestinosSection({ packages }) {
  const router = useRouter();

  return (
    <section id="destinos" className="relative z-10 -mt-[136px] pb-[72px] px-6">
      {/* Fondo blanco que empieza desde la mitad de las cards */}
      <div className="absolute bottom-0 left-0 right-0 bg-white" style={{ top: "50%" }} />

      <div className="relative max-w-7xl mx-auto">
        {packages.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {packages.slice(0, 5).map((pack) => (
                <div
                  key={pack.id}
                  onClick={() => router.push(`/destinos/${pack.slug}`)}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className="overflow-hidden" style={{ aspectRatio: "2/3" }}>
                    <img
                      src={pack.image || "/assets/images/places/image.png"}
                      alt={pack.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between px-3 py-3 border border-t-0 border-gray-200 bg-white">
                    <h3 className="font-sans text-dark text-[16px] font-light tracking-wide">
                      {pack.name}
                    </h3>
                    <svg className="w-5 h-5 text-dark transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => router.push("/destinos")}
                className="px-12 py-4 border border-dark text-dark text-sm tracking-widest font-normal hover:bg-dark hover:text-white transition-all duration-200"
              >
                VER MÁS DESTINOS
              </button>
            </div>
          </>
        ) : (
          <p className="text-muted text-center py-16 text-sm tracking-wide">
            No hay destinos disponibles en este momento.
          </p>
        )}
      </div>
    </section>
  );
}
