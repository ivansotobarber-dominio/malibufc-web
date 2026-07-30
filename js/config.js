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

  // Formato internacional, solo números. Ejemplo España: 34600111222
  whatsappNumber: "",
  whatsappGeneralMessage: "Hola, contacto con el Malibú FC desde la web.",

  instagramUrl: "https://www.instagram.com/malibufc__/?hl=es",
  youtubeUrl: "",
  email: "",

  competition: {
    name: "Liga de la Amistad",
    websiteUrl: "https://futbol7amistad.com/",
    instagramUrl: "https://www.instagram.com/futbol7amistad/?hl=es",
    facebookUrl: "https://www.facebook.com/futbol7amistad/?locale=es_ES"
  },

  squad: {
    published: false,
    players: []
  },

  calendar: {
    demoMode: true,
    events: [
      {
        id: "demo-match",
        dateLabel: "Fecha por confirmar",
        competition: "Liga de la Amistad",
        home: "Malibú FC",
        away: "Rival por confirmar",
        venue: "Lugar por confirmar",
        ticketPrice: "0 €",
        ticketEnabled: false
      }
    ]
  },

  products: [
    {
      name: "Equipación oficial Malibú FC",
      category: "Primera equipación",
      visualLabel: "1ª",
      price: "Precio por confirmar",
      description: "Camiseta de manga larga color crema con detalles negros y pantalón negro.",
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
      description: "Versión negra de la equipación del Malibú FC, con letras blancas.",
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
    { name: "Giroenviro", url: "https://giroenviro.com/", active: true },
    { name: "La Laguna Gran Hotel", url: "https://lalagunagranhotel.com/", active: true }
  ],

  collaborators: [
    { name: "Envite Canario", url: "https://envitecanario.es/", active: true },
    { name: "Peakland", url: "https://www.instagram.com/peakland_/?hl=es", active: true }
  ]
};
