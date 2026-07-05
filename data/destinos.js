export function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const GENERIC_INCLUYE = /vuelos|alojamiento|asistencia|traslado/i;

function buildItinerario(paquete, destino) {
  const totalDias = parseInt(paquete.duration, 10) || 5;
  const diasAMostrar = Math.min(totalDias, 6);
  const destacados = paquete.incluye.filter((item) => !GENERIC_INCLUYE.test(item));

  const dias = [];
  dias.push({
    day: 1,
    title: `Llegada a ${destino.name}`,
    description: "Recepción en el aeropuerto, traslado al hotel y tarde libre para descansar.",
  });

  const diasIntermedios = diasAMostrar - 2;
  for (let i = 0; i < diasIntermedios; i++) {
    const destacado = destacados[i];
    dias.push(
      destacado
        ? { day: i + 2, title: destacado, description: `Jornada dedicada a: ${destacado.toLowerCase()}.` }
        : { day: i + 2, title: `Día libre en ${destino.name}`, description: "Día libre para explorar por tu cuenta." }
    );
  }

  if (diasAMostrar > 1) {
    dias.push({
      day: diasAMostrar,
      title: "Regreso",
      description: "Desayuno, tiempo libre según horario de vuelo y traslado al aeropuerto de regreso.",
    });
  }

  return dias;
}

function buildFechasSalida() {
  const base = new Date();
  return [45, 90, 135].map((offset) => {
    const d = new Date(base);
    d.setDate(d.getDate() + offset);
    return d.toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });
  });
}

function buildNoIncluye(paquete) {
  if (paquete.alojamiento === "Crucero") {
    return ["Excursiones en tierra no listadas", "Bebidas alcohólicas y wifi a bordo", "Propinas de la tripulación", "Seguro de viaje"];
  }
  return ["Impuestos y tasas del país de destino", "Seguro de viaje", "Propinas y gastos personales", "Excursiones opcionales no listadas"];
}

const CANCELACION =
  "Cancelación gratuita hasta 30 días antes de la salida. Entre 29 y 15 días antes, se retiene el 30% de la seña. Dentro de los 14 días previos, la reserva no es reembolsable.";

const CATEGORY_GALLERY = {
  Playa: [
    "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80",
  ],
  Europa: [
    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800&q=80",
    "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
  ],
  Asia: [
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  ],
  "América": [
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
  ],
};

function buildGaleria(paquete, destino) {
  const pool = CATEGORY_GALLERY[destino.category] || [];
  const extras = pool.filter((src) => src !== paquete.images[0]);
  const offset = extras.length ? (destino.id + paquete.id) % extras.length : 0;
  const rotadas = extras.length ? [...extras.slice(offset), ...extras.slice(0, offset)] : [];
  return [paquete.images[0], ...rotadas].slice(0, 3);
}

function enrichPaquete(paquete, destino) {
  const galeria = buildGaleria(paquete, destino);

  return {
    ...paquete,
    images: galeria,
    itinerario: buildItinerario(paquete, destino),
    fechasSalida: buildFechasSalida(),
    noIncluye: buildNoIncluye(paquete),
    cancelacion: CANCELACION,
  };
}

const RAW_DESTINOS = [
  {
    id: 1,
    name: "Islas Maldivas",
    category: "Playa",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    paquetes: [
      {
        id: 1,
        title: "Maldivas Romance",
        description: "Villas sobre el agua, arrecifes de coral y atardeceres infinitos, pensado para parejas.",
        duration: "10 días",
        price: "USD 2.800",
        alojamiento: "Resort",
        images: ["https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento con desayuno", "Traslados aeropuerto-hotel", "Asistencia al viajero"],
      },
      {
        id: 2,
        title: "Maldivas Aventura Acuática",
        description: "Snorkel, buceo y excursiones en catamarán por los mejores arrecifes del archipiélago.",
        duration: "8 días",
        price: "USD 2.200",
        alojamiento: "Hotel",
        images: ["https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento", "Excursión de snorkel", "Asistencia al viajero"],
      },
    ],
  },
  {
    id: 2,
    name: "Santorini",
    category: "Europa",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    paquetes: [
      {
        id: 1,
        title: "Santorini Clásica",
        description: "Arquitectura blanca, vinos locales y el mar Egeo de fondo.",
        duration: "7 días",
        price: "USD 1.900",
        alojamiento: "Hotel",
        images: ["https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento con desayuno", "Traslados aeropuerto-hotel", "Asistencia al viajero"],
      },
      {
        id: 2,
        title: "Santorini + Islas Griegas",
        description: "Recorré Santorini, Mykonos y Atenas en un mismo viaje por las islas griegas.",
        duration: "12 días",
        price: "USD 2.650",
        alojamiento: "Aparthotel",
        images: ["https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Traslados entre islas", "Alojamiento", "Asistencia al viajero"],
      },
    ],
  },
  {
    id: 3,
    name: "Patagonia",
    category: "América",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    paquetes: [
      {
        id: 1,
        title: "Patagonia Trekking",
        description: "Torres imponentes, glaciares y silencio en el fin del mundo.",
        duration: "8 días",
        price: "USD 1.100",
        alojamiento: "Hotel",
        images: ["https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento con desayuno", "Excursión a glaciares", "Asistencia al viajero"],
      },
      {
        id: 2,
        title: "Patagonia en Familia",
        description: "Lagos, chocolate y actividades para todas las edades en Bariloche y alrededores.",
        duration: "6 días",
        price: "USD 780",
        alojamiento: "Hotel",
        images: ["https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento", "Traslados", "Asistencia al viajero"],
      },
    ],
  },
  {
    id: 4,
    name: "Tokio",
    category: "Asia",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    paquetes: [
      {
        id: 1,
        title: "Tokio Tradición y Modernidad",
        description: "Tradición y modernidad en una de las ciudades más fascinantes del mundo.",
        duration: "12 días",
        price: "USD 2.400",
        alojamiento: "Hotel",
        images: ["https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento con desayuno", "Traslados aeropuerto-hotel", "Asistencia al viajero"],
      },
      {
        id: 2,
        title: "Tokio Premium",
        description: "Hoteles de lujo, gastronomía exclusiva y experiencias a medida.",
        duration: "9 días",
        price: "USD 3.100",
        alojamiento: "Hotel",
        images: ["https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento 5 estrellas", "Traslados privados", "Asistencia al viajero"],
      },
    ],
  },
  {
    id: 5,
    name: "Marruecos",
    category: "Europa",
    image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800&q=80",
    paquetes: [
      {
        id: 1,
        title: "Marruecos Imperial",
        description: "Marrakech, Fez y las ciudades imperiales en un recorrido clásico.",
        duration: "9 días",
        price: "USD 1.300",
        alojamiento: "Aparthotel",
        images: ["https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento con desayuno", "Traslados", "Asistencia al viajero"],
      },
      {
        id: 2,
        title: "Marruecos Aventura en el Sahara",
        description: "Desierto del Sahara, dunas y noches bajo las estrellas en jaimas de lujo.",
        duration: "9 días",
        price: "USD 1.450",
        alojamiento: "Aparthotel",
        images: ["https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Noche en el desierto", "Traslados en 4x4", "Asistencia al viajero"],
      },
    ],
  },
  {
    id: 6,
    name: "Bali",
    category: "Asia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    paquetes: [
      {
        id: 1,
        title: "Bali Templos y Arrozales",
        description: "Templos, arrozales y spas frente al mar.",
        duration: "11 días",
        price: "USD 1.750",
        alojamiento: "Resort",
        images: ["https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento con desayuno", "Traslados", "Asistencia al viajero"],
      },
      {
        id: 2,
        title: "Bali Relax",
        description: "Spas, playas tranquilas y retiros de bienestar.",
        duration: "7 días",
        price: "USD 1.400",
        alojamiento: "Resort",
        images: ["https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento", "Sesión de spa", "Asistencia al viajero"],
      },
    ],
  },
  {
    id: 7,
    name: "Río de Janeiro",
    category: "América",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
    paquetes: [
      {
        id: 1,
        title: "Río Clásico",
        description: "Copacabana, Pan de Azúcar y el Cristo Redentor.",
        duration: "6 días",
        price: "USD 950",
        alojamiento: "Hotel",
        images: ["https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento con desayuno", "Traslados aeropuerto-hotel", "Asistencia al viajero"],
      },
      {
        id: 2,
        title: "Río + Búzios",
        description: "Combiná la energía de Río con las playas de Búzios.",
        duration: "9 días",
        price: "USD 1.250",
        alojamiento: "Hotel",
        images: ["https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento", "Traslados entre ciudades", "Asistencia al viajero"],
      },
    ],
  },
  {
    id: 8,
    name: "Roma",
    category: "Europa",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    paquetes: [
      {
        id: 1,
        title: "Roma en Pareja",
        description: "Historia, gastronomía y atardeceres sobre el Tíber.",
        duration: "8 días",
        price: "USD 1.650",
        alojamiento: "Aparthotel",
        images: ["https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento con desayuno", "Traslados", "Asistencia al viajero"],
      },
      {
        id: 2,
        title: "Roma Imperial",
        description: "Coliseo, Foro Romano y Vaticano con guía especializado.",
        duration: "6 días",
        price: "USD 1.400",
        alojamiento: "Hotel",
        images: ["https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento", "Tour guiado", "Asistencia al viajero"],
      },
    ],
  },
  {
    id: 9,
    name: "Punta Cana",
    category: "Playa",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    paquetes: [
      {
        id: 1,
        title: "Punta Cana Todo Incluido",
        description: "Resort todo incluido frente al Caribe.",
        duration: "7 días",
        price: "USD 1.400",
        alojamiento: "Resort",
        images: ["https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Todo incluido", "Traslados aeropuerto-hotel", "Asistencia al viajero"],
      },
      {
        id: 2,
        title: "Punta Cana Familiar",
        description: "Resort familiar con actividades para chicos y pileta con toboganes.",
        duration: "7 días",
        price: "USD 1.550",
        alojamiento: "Resort",
        images: ["https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Todo incluido", "Kids club", "Asistencia al viajero"],
      },
    ],
  },
  {
    id: 10,
    name: "Nueva York",
    category: "América",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    paquetes: [
      {
        id: 1,
        title: "Nueva York Clásica",
        description: "Times Square, Central Park y los íconos de la Gran Manzana.",
        duration: "6 días",
        price: "USD 1.500",
        alojamiento: "Hotel",
        images: ["https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento con desayuno", "Traslados aeropuerto-hotel", "Asistencia al viajero"],
      },
      {
        id: 2,
        title: "Nueva York + Shopping",
        description: "Con jornada extra de shopping en los outlets más buscados.",
        duration: "8 días",
        price: "USD 1.800",
        alojamiento: "Hotel",
        images: ["https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento", "Excursión de shopping", "Asistencia al viajero"],
      },
    ],
  },
  {
    id: 11,
    name: "Dubái",
    category: "Asia",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    paquetes: [
      {
        id: 1,
        title: "Dubái Lujo y Desierto",
        description: "Lujo, desierto y arquitectura futurista.",
        duration: "5 días",
        price: "USD 1.850",
        alojamiento: "Hotel",
        images: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento con desayuno", "Safari por el desierto", "Asistencia al viajero"],
      },
      {
        id: 2,
        title: "Dubái Premium",
        description: "Hoteles 5 estrellas, Burj Khalifa y experiencias VIP.",
        duration: "6 días",
        price: "USD 2.300",
        alojamiento: "Hotel",
        images: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento 5 estrellas", "Entrada a Burj Khalifa", "Asistencia al viajero"],
      },
    ],
  },
  {
    id: 12,
    name: "París",
    category: "Europa",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    paquetes: [
      {
        id: 1,
        title: "París Romántico",
        description: "Torre Eiffel, Montmartre y cruceros por el Sena.",
        duration: "8 días",
        price: "USD 2.100",
        alojamiento: "Aparthotel",
        images: ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento con desayuno", "Crucero por el Sena", "Asistencia al viajero"],
      },
      {
        id: 2,
        title: "París + Castillos del Loira",
        description: "Sumá una excursión a los castillos del Loira a tu estadía en París.",
        duration: "10 días",
        price: "USD 2.450",
        alojamiento: "Hotel",
        images: ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Alojamiento", "Excursión a castillos", "Asistencia al viajero"],
      },
    ],
  },
  {
    id: 13,
    name: "Crucero por el Caribe",
    category: "Playa",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80",
    paquetes: [
      {
        id: 1,
        title: "Crucero Caribe Clásico",
        description: "Varios destinos, un solo equipaje.",
        duration: "9 días",
        price: "USD 2.100",
        alojamiento: "Crucero",
        images: ["https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Cabina en crucero", "Pensión completa a bordo", "Asistencia al viajero"],
      },
      {
        id: 2,
        title: "Crucero Caribe Premium",
        description: "Cabina superior con balcón y excursiones incluidas en cada puerto.",
        duration: "9 días",
        price: "USD 2.750",
        alojamiento: "Crucero",
        images: ["https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80"],
        incluye: ["Vuelos ida y vuelta", "Cabina con balcón", "Excursiones en cada puerto", "Asistencia al viajero"],
      },
    ],
  },
].map((d) => ({ ...d, slug: slugify(d.name) }));

export const MOCK_DESTINOS = RAW_DESTINOS.map((d) => ({
  ...d,
  paquetes: d.paquetes.map((p) => enrichPaquete(p, d)),
}));

export function getDestinoBySlug(slug) {
  return MOCK_DESTINOS.find((d) => d.slug === slug);
}

export function getRelatedPaquetes(destino, paqueteId, count = 3) {
  const propios = destino.paquetes
    .filter((p) => String(p.id) !== String(paqueteId))
    .map((p) => ({ destino, paquete: p }));

  const otros = MOCK_DESTINOS.filter((d) => d.slug !== destino.slug && d.category === destino.category)
    .flatMap((d) => d.paquetes.map((p) => ({ destino: d, paquete: p })));

  return [...propios, ...otros].slice(0, count);
}
