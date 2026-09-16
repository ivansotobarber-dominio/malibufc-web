/*
  FUENTE DE DATOS OPERATIVOS DE LA WEB.
  No publiques el número o alias de Bizum. Solo se facilita por privado tras confirmar el pedido.
  Un producto puede mostrarse con published: true, pero el pedido solo se habilita con orderEnabled: true.
  Mantén orderEnabled en false hasta confirmar precio, variantes, disponibilidad y condiciones.
*/
window.MALIBU_CONFIG = {
  siteReady: false,
  season: "",
  domain: "",
  firstTeamName: "Malibú Hacendado",
  kitTeams: ["Malibú Hacendado", "Malibú FC"],

  // Formato internacional, solo números. Ejemplo España: 34600111222
  whatsappNumber: "",
  whatsappGeneralMessage: "Hola, contacto con el Malibú FC desde la web.",

  instagramUrl: "https://www.instagram.com/malibufc__/?hl=es",
  youtubeUrl: "",
  youtubeLabel: "Canal de Malibú FC pendiente de crear",
  email: "info@malibufc.es",

  competition: {
    name: "Liga de la Amistad",
    websiteUrl: "https://futbol7amistad.com/",
    instagramUrl: "https://www.instagram.com/futbol7amistad/?hl=es",
    facebookUrl: "https://www.facebook.com/futbol7amistad/?locale=es_ES"
  },

  squad: {
    published: true,
    namesOnly: true,
    players: [
      { name: "Andres Azael Perez Mendez", number: "2", position: "Defensa", published: true },
      { name: "Daniel Martín Rodriguez", number: "3", position: "Defensa", published: true },
      { name: "Bruno Delgado Mesa", number: "1", position: "Portero", published: true },
      { name: "Erico Julián Martín Ravelo", number: "4", position: "Defensa", published: true },
      { name: "Lemai Lee Suarez", number: "5", position: "Defensa", published: true },
      { name: "Daniel Di Spagna Figueroa", number: "6", position: "Centrocampista", published: true },
      { name: "Eduardo Jordán Zárate", number: "7", position: "Delantero", published: true },
      { name: "Ruben Francisco Bretón Acosta", number: "8", position: "Delantero", published: true },
      { name: "Alejandro González Hernández", number: "8", position: "Defensa", published: true },
      { name: "Ignacio Arias Arias", number: "9", position: "Delantero", published: true },
      { name: "Gabriel Hernández Colino", number: "10", position: "Defensa", published: true },
      { name: "Jorge Baute Santana", number: "11", position: "Centrocampista", published: true },
      { name: "Fernando Rizo Martín", number: "14", position: "Centrocampista", published: true },
      { name: "Noel Feliciano Felipe", number: "15", position: "Centrocampista", published: true },
      { name: "Gines Coll Zurita", number: "16", position: "Centrocampista", published: true },
      { name: "Juan Manuel González Martín", number: "12", position: "Delantero", published: true },
      { name: "Pablo José Hernández Fernández", number: "17", position: "Defensa", published: true },
      { name: "Alberto Miranda Poncefrada", number: "18", position: "Centrocampista", published: true },
      { name: "Marcos Ortega Sancho", number: "20", position: "Centrocampista", published: true },
      { name: "Andoni Soto", number: "21", position: "Entrenador jugador", published: true },
      { name: "Javi Pérez de la Rosa", number: "22", position: "Defensa", published: true },
      { name: "Nacho Pasqua Diaz", number: "27", position: "Defensa", published: true },
      { name: "Ivan Soto Barber", number: "28", position: "Centrocampista", published: true },
      { name: "Daniel Fernández de León", number: "30", position: "Delantero", published: true },
      { name: "Pedro Planelles Díaz", number: "31", position: "Portero", published: true },
      { name: "Agustín Ruiz Ortega", number: "33", position: "Defensa", published: true },
      { name: "Daniel Jesús Rodríguez Suárez", number: "44", position: "Defensa", published: true },
      { name: "Martín Javier Alamo Gonzalez", number: "66", position: "Defensa", published: true },
      { name: "Jorge Gimeno Rodríguez", number: "77", position: "Defensa", published: true }
    ]
  },

  calendar: {
    demoMode: false,
    events: [
      {
        id: "2026-09-14-malibu-hacendado",
        dateLabel: "Lunes 14 de septiembre · 20:30",
        competition: "Liga de la Amistad",
        home: "Malibú Hacendado",
        away: "Porto Restaurante Altagay",
        venue: "Santa María del Mar",
        resultLabel: "3–1",
        statusLabel: "Final",
        report: {
          crack: "Bruno",
          scorer: "Pitu",
          debuts: "Marcos y Lemai",
          text: "Partido duro y dominado por Malibú. El equipo falló mucho, se puso 2–0 y un desajuste defensivo permitió el 2–1, casi detenido por Bruno. El portero salvó además dos goles claros y Pitu firmó la tranquilidad con el 3–1."
        },
        reportAnchor: "/#cronica-jornada-1",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-09-17-malibu-fc",
        dateLabel: "Jueves 17 de septiembre · 20:30",
        competition: "Liga de la Amistad",
        home: "Malibú FC",
        away: "Mil Leches",
        venue: "Las Delicias",
        ticketPrice: "0 €",
        ticketEnabled: false
      }
    ]
  },

  // Histórico público: solo datos confirmados, sin minutos ni valoraciones individuales.
  statistics: {
    seasons: [
      {
        id: "2026-27",
        label: "2026/27",
        competition: "Liga de la Amistad",
        status: "Parcial, una jornada registrada",
        team: "Malibú Hacendado",
        matches: 1,
        wins: 1,
        draws: 0,
        losses: 0,
        goalsFor: 3,
        goalsAgainst: 1,
        playerLeaders: [
          { name: "Pitu", goals: 2, assists: 0 },
          { name: "Fele", goals: 1, assists: 1 }
        ],
        note: "Registro inicial confirmado tras Malibú Hacendado 3–1 Porto Restaurante Altagay. El histórico se ampliará con cada acta validada."
      }
    ]
  },

  products: [
    {
      name: "Equipación oficial Malibú Hacendado",
      category: "Primera equipación",
      visualLabel: "1ª",
      price: "Precio por confirmar",
      description: "Equipación compartida por Malibú Hacendado y Malibú FC: camiseta de manga larga color crema con detalles negros y pantalón negro.",
      details: "Precio, tallas, personalización, disponibilidad y plazo pendientes de confirmación.",
      image: "/assets/images/productos/equipacion-oficial-malibu-fc.webp",
      published: true,
      orderEnabled: false
    },
    {
      name: "Segunda equipación",
      category: "Equipación",
      visualLabel: "2ª",
      price: "Precio por confirmar",
      description: "Segunda equipación compartida por Malibú Hacendado y Malibú FC, con base negra y letras blancas.",
      details: "Diseño final, tallas, disponibilidad y condiciones pendientes de confirmación.",
      image: "/assets/images/productos/segunda-equipacion-malibu-fc.webp",
      statusLabel: "Diseño de referencia",
      published: true,
      orderEnabled: false
    },
    {
      name: "Bufanda Malibú FC",
      category: "Afición",
      visualLabel: "MFC",
      price: "Precio por confirmar",
      description: "Bufanda del Malibú FC.",
      details: "Diseño, medidas, material y disponibilidad pendientes de confirmación.",
      image: "/assets/images/productos/bufanda-malibu-fc.webp",
      statusLabel: "Diseño de referencia",
      published: true,
      orderEnabled: false
    },
    {
      name: "Chaqueta retro",
      category: "Ropa",
      visualLabel: "RETRO",
      price: "Precio por confirmar",
      description: "Chaqueta retro del Malibú FC.",
      details: "Diseño, tallas, material y disponibilidad pendientes de confirmación.",
      image: "/assets/images/productos/chaqueta-retro-malibu-fc.webp",
      statusLabel: "Diseño de referencia",
      published: true,
      orderEnabled: false
    },
    {
      name: "Chándal Malibú FC",
      category: "Ropa",
      visualLabel: "MFC",
      price: "Precio por confirmar",
      description: "Chándal del Malibú FC.",
      details: "Diseño, tallas, composición y disponibilidad pendientes de confirmación.",
      image: "/assets/images/productos/chandal-malibu-fc.webp",
      statusLabel: "Diseño de referencia",
      published: true,
      orderEnabled: false
    },
    {
      name: "Mochila Malibú FC",
      category: "Accesorios",
      visualLabel: "MFC",
      price: "Precio por confirmar",
      description: "Mochila personalizada del Malibú FC.",
      details: "Diseño, capacidad, materiales y disponibilidad pendientes de confirmación.",
      image: "/assets/images/productos/mochila-malibu-fc.webp",
      statusLabel: "Diseño de referencia",
      published: true,
      orderEnabled: false
    },
    {
      name: "Brazalete de capitán",
      category: "Accesorios de juego",
      visualLabel: "C",
      price: "Precio por confirmar",
      description: "Brazalete de capitán personalizado del Malibú FC.",
      details: "Medidas, unidades disponibles y condiciones de pedido pendientes de confirmación.",
      image: "/assets/images/productos/brazalete-capitan-malibu-fc.webp",
      published: true,
      orderEnabled: false
    },
    {
      name: "Llavero Malibú FC",
      category: "Accesorios",
      visualLabel: "MFC",
      price: "Precio por confirmar",
      description: "Llavero personalizado del Malibú FC.",
      details: "Diseño, material, formato y disponibilidad pendientes de confirmación.",
      image: "/assets/images/productos/llavero-malibu-fc.webp",
      statusLabel: "Diseño de referencia",
      published: true,
      orderEnabled: false
    },
    {
      name: "Pizarra táctica personalizada",
      category: "Material técnico",
      visualLabel: "F7",
      price: "Precio por confirmar",
      description: "Pizarra táctica personalizada para el Malibú FC.",
      details: "Formato, medidas, accesorios y disponibilidad pendientes de confirmación.",
      image: "/assets/images/productos/pizarra-tactica-malibu-fc.webp",
      statusLabel: "Diseño de referencia",
      published: true,
      orderEnabled: false
    }
  ],

  sponsors: [
    { name: "Giroenviro", url: "https://giroenviro.com/", logo: "/assets/images/patrocinadores/giroenviro.png", team: "Malibú Hacendado", kit: "Primera equipación", active: true },
    { name: "La Laguna Gran Hotel", url: "https://lalagunagranhotel.com/", logo: "/assets/images/patrocinadores/la-laguna-gran-hotel.png?v=20260911-2", team: "Malibú Hacendado", kit: "Primera equipación", active: true }
  ],

  secondKitSponsors: [
    { name: "Alianza BIM", url: "https://alianzabim.com/", logo: "/assets/images/patrocinadores/alianza-bim.png", team: "Malibú FC", kit: "Segunda equipación", active: true },
    { name: "Envite Canario", url: "https://envitecanario.es/", logo: "/assets/images/patrocinadores/envite-canario.png", team: "Malibú FC", kit: "Segunda equipación", active: true }
  ],

  collaborators: [
    { name: "Peakland", url: "https://www.instagram.com/peakland_/?hl=es", active: true }
  ]
};
