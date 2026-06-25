const servicios = [
  { img: "/assets/images/1.png", title: "HOTELERÍA", style: { marginTop: "50px", textAlign: "left" } },
  { img: "/assets/images/4.png", title: "TRASLADOS", style: { marginTop: "300px", textAlign: "left" } },
  { img: "/assets/images/3.png", title: "EXPERIENCIAS ÚNICAS", style: { marginTop: "50px", marginLeft: "-10%", textAlign: "right" } },
  { img: "/assets/images/2.png", title: "TURISMO", style: { marginTop: "50px", marginLeft: "5%", textAlign: "left" } },
];

export default function ServiciosSection() {
  return (
    <section id="servicios" className="pt-20 pb-0 px-6 bg-white">
      <div className="text-center mb-12">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3 font-normal">
          Lo que ofrecemos
        </p>
        <h2 className="font-serif text-dark text-4xl md:text-5xl font-light tracking-tight">
          Nuestros <span>Servicios</span>
        </h2>
        <p className="mt-5 text-muted text-[17px] font-light leading-relaxed tracking-wide max-w-sm mx-auto">
          Diseñamos cada viaje a medida, desde el alojamiento hasta la última experiencia.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-5 pb-20">
        {servicios.map((s) => (
          <div
            key={s.title}
            style={{ flex: "1 1 280px", maxWidth: "340px", ...s.style }}
          >
            <img src={s.img} alt={s.title} className="w-full" />
            <p className="mt-3 text-sm font-light tracking-widest text-dark">
              {s.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
