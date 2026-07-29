/*
  FUENTE DE DATOS OPERATIVOS DE LA WEB.
  No publiques el número o alias de Bizum. Solo se facilita por privado tras confirmar el pedido.
  Mantén desactivado cualquier producto o patrocinador hasta que sus datos estén confirmados.
*/
window.MALIBU_CONFIG = {
  siteReady: false,
  season: "",
  domain: "",

  // Formato internacional, solo números. Ejemplo España: 34600111222
  whatsappNumber: "",
  whatsappGeneralMessage: "Hola, contacto con el Malibú FC desde la web.",

  instagramUrl: "",
  email: "",

  products: [
    {
      name: "Camiseta oficial Malibú FC",
      price: "Precio por confirmar",
      description: "Descripción pendiente de validación.",
      details: "Tallas, personalización, disponibilidad y plazo pendientes de confirmación.",
      image: "assets/producto-camiseta.svg",
      active: false
    }
  ],

  sponsors: [
    { name: "La Laguna Gran Hotel", url: "", active: false }
  ]
};
