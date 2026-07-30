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

  instagramUrl: "",
  email: "",

  products: [
    {
      name: "Equipación oficial Malibú FC",
      price: "Precio por confirmar",
      description: "Camiseta de manga larga color crema con detalles negros y pantalón negro.",
      details: "Precio, tallas, personalización, disponibilidad y plazo pendientes de confirmación.",
      image: "assets/images/productos/equipacion-oficial-malibu-fc.webp",
      published: true,
      orderEnabled: false
    }
  ],

  sponsors: [
    { name: "La Laguna Gran Hotel", url: "", active: false }
  ]
};
