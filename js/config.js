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
  teams: [
    { name: "Malibú Hacendado", division: "Senior + Primera División" },
    { name: "Malibú FC", division: "Senior + Segunda División grupo B" }
  ],

  // Formato internacional, solo números. Ejemplo España: 34600111222
  whatsappNumber: "",
  whatsappGeneralMessage: "Hola, contacto con el Malibú FC desde la web.",

  instagramUrl: "https://www.instagram.com/malibufc__/?hl=es",
  youtubeUrl: "https://www.youtube.com/@malibufc_tenerife",
  youtubeLabel: "Canal oficial Malibú FC",
  veoUrl: "https://app.veo.co/clubs/malibu-fc/teams/malibu-fc/recordings/",
  veoLabel: "Archivo de partidos en Veo",
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
      { name: "Carlos Gonzalez Vilar", number: "13", position: "Portero", published: true },
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
        dateISO: "2026-09-14T20:30:00+01:00",
        dateLabel: "Lunes 14 de septiembre · 20:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Malibú Hacendado",
        away: "Porto Restaurante Altagay",
        venue: "Santa María del Mar",
        resultLabel: "3–1",
        statusLabel: "Final",
        report: {
          title: "Bruno sostuvo al equipo y Pitu cerró la victoria",
          text: "Partido duro y dominado por Malibú. El equipo falló mucho, se puso 2–0 y un desajuste defensivo permitió el 2–1, casi detenido por Bruno. El portero salvó además dos goles claros y Pitu firmó la tranquilidad con el 3–1.",
          awards: [
            { label: "El crack", player: "Bruno", detail: "Dos paradas decisivas y seguridad bajo palos." },
            { label: "El goleador", player: "Pitu", detail: "Doblete para cerrar el partido." },
            { label: "Los debuts", player: "Marcos · Lemai", detail: "Primer partido con el equipo." }
          ]
        },
        reportId: "cronica-jornada-1",
        reportAnchor: "/#cronica-jornada-1",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-09-17-malibu-fc",
        dateISO: "2026-09-17T20:30:00+01:00",
        dateLabel: "Jueves 17 de septiembre · 20:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Malibú FC",
        away: "Mil Leches",
        venue: "Las Delicias",
        resultLabel: "11–1",
        statusLabel: "Final",
        report: {
          title: "Once goles y dos debuts para el Malibú FC",
          text: "Malibú FC cerró su partido de Segunda ante Mil Leches con un 11–1. Fele fue el máximo goleador con cinco tantos; Fer Rizo marcó tres, Rubén dos y Gimeno uno. El encuentro dejó además los debuts de Martín Álamo y Fer. En los reconocimientos de la jornada, Fele fue el crack, Gimeno el goleador y Azael, el caballo.",
          awards: [
            { label: "El crack", player: "Fele", detail: "Cinco goles en el triunfo del Malibú FC." },
            { label: "El goleador", player: "Gimeno", detail: "Un tanto en la victoria ante Mil Leches." },
            { label: "El caballo", player: "Azael", detail: "Reconocimiento de la jornada." },
            { label: "Los debuts", player: "Martín Álamo · Fer Rizo", detail: "Primer partido con el equipo." }
          ]
        },
        reportId: "cronica-jornada-2",
        reportAnchor: "/#cronica-jornada-2",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-09-21-malibu-hacendado",
        dateISO: "2026-09-21",
        dateLabel: "Lunes 21 de septiembre · hora no indicada",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Malibú Hacendado",
        away: "Canary Island F7",
        venue: "Montaña Pacho",
        resultLabel: "5–3",
        statusLabel: "Final",
        report: {
          title: "Fer Rizo lideró una victoria de carácter",
          text: "Malibú Hacendado superó 5–3 a Canary Island F7 en Montaña Pacho, ante un rival muy difícil y duro. El equipo resolvió el partido con un Fer Rizo espectacular, Ivan Soto dando solidez atrás y un Javi Pérez de la Rosa omnipresente. Fer Rizo marcó tres goles, Javi Pérez de la Rosa uno y Fele uno.",
          awards: [
            { label: "El goleador", player: "Fer Rizo", detail: "Tres goles en la victoria." },
            { label: "La solidez", player: "Ivan Soto", detail: "Actuación defensiva destacada." },
            { label: "El omnipresente", player: "Javi Pérez de la Rosa", detail: "Un gol y presencia en todo el campo." }
          ]
        },
        reportId: "cronica-jornada-3",
        reportAnchor: "/#cronica-jornada-3",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-09-24-malibu-fc",
        dateISO: "2026-09-24T20:30:00+01:00",
        dateLabel: "Jueves 24 de septiembre · 20:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Racayo Santa Grow F7",
        away: "Malibú FC",
        venue: "Las Delicias II",
        resultLabel: "6–4",
        statusLabel: "Final",
        report: {
          title: "Dani Martín lideró un partido de aprendizaje",
          text: "Malibú FC cayó 6–4 ante un Racayo Santa Grow F7 muy férreo. La falta de compenetración, propia de las primeras jornadas y de un partido con muchos debuts, marcó el desarrollo del encuentro. Dani Martín firmó un doblete, y también marcaron Lemai y Ale Cartaya.",
          awards: [
            { label: "El crack", player: "Dani Chamo", detail: "Tiró del carro durante todo el partido." },
            { label: "El goleador", player: "Dani Martín", detail: "Doblete y presencia constante en ataque." },
            { label: "El debut", player: "Carlos González", detail: "Primer partido en la portería del Malibú FC." }
          ]
        },
        reportId: "cronica-jornada-5",
        reportAnchor: "/#cronica-jornada-5",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-09-29-malibu-hacendado",
        dateISO: "2026-09-29T20:30:00+01:00",
        dateLabel: "Martes 29 de septiembre · 20:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Atco. Platense F7 Senior+",
        away: "Malibú Hacendado",
        venue: "Las Chumberas",
        resultLabel: "2–4",
        statusLabel: "Final",
        report: {
          title: "Fele marca dos en una derrota de mucho nivel",
          text: "Malibú Hacendado cayó 4–2 ante el Atco. Platense F7 Senior+, campeón histórico, en un partido competido y de buenas sensaciones. Fele firmó los dos goles del Malibú. Marcos cuajó una actuación espectacular, reconocida como la del mejor jugador de la liga, y Bruno fue infranqueable bajo palos.",
          awards: [
            { label: "El goleador", player: "Fele", detail: "Doblete ante el Platense." },
            { label: "El crack", player: "Marcos", detail: "Actuación espectacular, mejor jugador de la liga." },
            { label: "El portero", player: "Bruno", detail: "Infranqueable bajo palos." }
          ]
        },
        reportId: "cronica-jornada-4",
        reportAnchor: "/#cronica-jornada-4",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-10-01-malibu-fc",
        dateISO: "2026-10-01T21:30:00+01:00",
        dateLabel: "Jueves 1 de octubre · 21:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Malibú FC",
        away: "C.D. Cafetería Los Alfonso",
        venue: "El Tablero II",
        resultLabel: "6–0",
        statusLabel: "Final",
        report: {
          title: "Dominio aplastante y resultado corto",
          text: "Malibú FC dominó de principio a fin a C.D. Cafetería Los Alfonso y cerró la jornada con un 6–0 que incluso se quedó corto. Alberto marcó dos goles, Dani Fele otros dos, y completaron el marcador Martín y Gimeno.",
          awards: [
            { label: "El crack", player: "Alberto", detail: "Imparable en todas las acciones." },
            { label: "El goleador", player: "Martín", detail: "Galopada y llegada por banda para marcar." },
            { label: "La batuta", player: "Gimeno", detail: "Dirigió el juego del equipo." }
          ]
        },
        reportId: "cronica-jornada-6",
        reportAnchor: "/#cronica-jornada-6",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-10-05-malibu-hacendado",
        dateISO: "2026-10-05T21:30:00+01:00",
        dateLabel: "Lunes 5 de octubre · 21:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Malibú Hacendado",
        away: "Bayer De Los Caídos F7",
        venue: "Montaña Pacho VI",
        resultLabel: "3–0",
        statusLabel: "Final",
        report: {
          title: "Bruno cerró la portería y Fer abrió el camino",
          text: "Malibú Hacendado venció 3–0 a Bayer de Los Caídos F7 en un partido ante un rival muy sólido que apenas generó peligro. Marcaron Dani Fele, Rubén Pitu y Fer Rizo.",
          awards: [
            { label: "El crack", player: "Bruno", detail: "Infranqueable y con la portería a cero." },
            { label: "El goleador", player: "Fer Rizo", detail: "Golazo para abrir la lata." },
            { label: "El omnipresente", player: "Javi Pérez de la Rosa", detail: "Presencia constante en todas las zonas del campo." }
          ]
        },
        reportId: "cronica-jornada-7",
        reportAnchor: "/#cronica-jornada-7",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-10-08-malibu-fc",
        dateISO: "2026-10-08T21:30:00+01:00",
        dateLabel: "Jueves 8 de octubre · 21:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Candelaria KI",
        away: "Malibú FC",
        venue: "El Tablero II",
        resultLabel: "1–1",
        statusLabel: "Final",
        report: {
          title: "Fer puso el golazo y Lemai sostuvo el partidazo",
          text: "Malibú FC empató 1–1 ante Candelaria KI en El Tablero II. Fer Rizo firmó un golazo y Lemai completó un partidazo. El encuentro dejó además el debut de Víctor del Portillo, llegado desde Colombia y con el dorsal 10 para disputar este partido.",
          awards: [
            { label: "El goleador", player: "Fer Rizo", detail: "Golazo para abrir el marcador." },
            { label: "El crack", player: "Lemai", detail: "Partidazo en un encuentro muy competido." },
            { label: "El debut", player: "Víctor del Portillo", detail: "Dorsal 10 y debut con el Malibú FC." }
          ]
        },
        reportId: "cronica-jornada-8",
        reportAnchor: "/#cronica-jornada-8",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-10-13-malibu-hacendado",
        dateISO: "2026-10-13T21:30:00+01:00",
        dateLabel: "Martes 13 de octubre · 21:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Kortatu AFC",
        away: "Malibú Hacendado",
        venue: "San Andrés II",
        statusLabel: "Próximo",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-10-15-malibu-fc",
        dateISO: "2026-10-15T20:30:00+01:00",
        dateLabel: "Jueves 15 de octubre · 20:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Txema F7",
        away: "Malibú FC",
        venue: "Las Delicias II",
        statusLabel: "Próximo",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-10-19-malibu-hacendado",
        dateISO: "2026-10-19T20:30:00+01:00",
        dateLabel: "Lunes 19 de octubre · 20:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Malibú Hacendado",
        away: "Tumberos F7",
        venue: "San Andrés I",
        statusLabel: "Próximo",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-10-22-malibu-fc",
        dateISO: "2026-10-22T21:30:00+01:00",
        dateLabel: "Jueves 22 de octubre · 21:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Malibú FC",
        away: "Nottingham Prisas F7",
        venue: "Montaña Pacho VI",
        statusLabel: "Próximo",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-10-27-malibu-hacendado",
        dateISO: "2026-10-27T20:30:00+01:00",
        dateLabel: "Martes 27 de octubre · 20:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Malibú Hacendado",
        away: "Maximal Padel F.C. F7",
        venue: "Sta. María I",
        statusLabel: "Próximo",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-10-29-malibu-fc",
        dateISO: "2026-10-29T21:30:00+01:00",
        dateLabel: "Jueves 29 de octubre · 21:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Atalaya F7",
        away: "Malibú FC",
        venue: "Barranco Grande",
        statusLabel: "Próximo",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-11-03-malibu-hacendado",
        dateISO: "2026-11-03T20:30:00+01:00",
        dateLabel: "Martes 3 de noviembre · 20:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Se Queda F7",
        away: "Malibú Hacendado",
        venue: "Las Delicias I",
        statusLabel: "Próximo",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-11-05-malibu-fc",
        dateISO: "2026-11-05T20:30:00+01:00",
        dateLabel: "Jueves 5 de noviembre · 20:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Malibú FC",
        away: "CAD FC7",
        venue: "Montaña Pacho VI",
        statusLabel: "Próximo",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-11-10-malibu-hacendado",
        dateISO: "2026-11-10T21:30:00+01:00",
        dateLabel: "Martes 10 de noviembre · 21:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Malibú Hacendado",
        away: "Servicios Unión F7",
        venue: "Las Delicias I",
        statusLabel: "Próximo",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-11-12-malibu-fc",
        dateISO: "2026-11-12T20:30:00+01:00",
        dateLabel: "Jueves 12 de noviembre · 20:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "FC Sin Dar Rodeos",
        away: "Malibú FC",
        venue: "Las Delicias I",
        statusLabel: "Próximo",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-11-19-malibu-hacendado",
        dateISO: "2026-11-19T20:30:00+01:00",
        dateLabel: "Jueves 19 de noviembre · 20:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Atlético Norte F7",
        away: "Malibú Hacendado",
        venue: "Las Delicias II",
        statusLabel: "Próximo",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-11-26-malibu-hacendado",
        dateISO: "2026-11-26T21:30:00+01:00",
        dateLabel: "Jueves 26 de noviembre · 21:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Malibú Hacendado",
        away: "Dream Team F7",
        venue: "Las Delicias II",
        statusLabel: "Próximo",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-12-01-malibu-hacendado",
        dateISO: "2026-12-01T21:30:00+01:00",
        dateLabel: "Martes 1 de diciembre · 21:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "La Vaskita Tejina F7",
        away: "Malibú Hacendado",
        venue: "Sta. María I",
        statusLabel: "Próximo",
        ticketPrice: "0 €",
        ticketEnabled: false
      },
      {
        id: "2026-12-10-malibu-hacendado",
        dateISO: "2026-12-10T20:30:00+01:00",
        dateLabel: "Jueves 10 de diciembre · 20:30",
        competition: "Torneo Apertura · Liga de la Amistad",
        home: "Malibú Hacendado",
        away: "Marrero Team FT Obras y Servicios F7",
        venue: "El Tablero I",
        statusLabel: "Próximo",
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
        competition: "Torneo Apertura · Liga de la Amistad",
        sourceUrl: "https://futbol7amistad.mygol.es/tournaments/208?tab=classification&stage=0",
        sourceLabel: "Ver clasificación en MyGol",
        teamUrl: "https://futbol7amistad.mygol.es/tournaments/208/teams/3396",
        teamLabel: "Ver ficha del equipo",
        status: "Parcial, cuatro partidos registrados",
        team: "Malibú Hacendado",
        division: "Senior + Primera División",
        matches: 4,
        wins: 3,
        draws: 0,
        losses: 1,
        goalsFor: 13,
        goalsAgainst: 8,
        playerLeaders: [
          { name: "Fer Rizo", goals: 4, assists: null },
          { name: "Fele", goals: 5, assists: 1 },
          { name: "Pitu", goals: 3, assists: 0 },
          { name: "Javi Pérez de la Rosa", goals: 1, assists: null }
        ],
        note: "Registro parcial confirmado tras Malibú Hacendado 3–0 Bayer de Los Caídos F7. No se han proporcionado asistencias adicionales y quedan sin dato."
      },
      {
        id: "2026-27-malibu-fc",
        label: "2026/27",
        competition: "Torneo Apertura · Liga de la Amistad",
        sourceUrl: "https://futbol7amistad.mygol.es/tournaments/250?tab=classification&stage=0",
        sourceLabel: "Ver clasificación en MyGol",
        teamUrl: "https://futbol7amistad.mygol.es/tournaments/250/teams/3604",
        teamLabel: "Ver ficha del equipo",
        status: "Parcial, cuatro partidos registrados",
        team: "Malibú FC",
        division: "Senior + Segunda División grupo B",
        matches: 4,
        wins: 2,
        draws: 1,
        losses: 1,
        goalsFor: 22,
        goalsAgainst: 8,
        playerLeaders: [
          { name: "Fele", goals: 7, assists: null },
          { name: "Fer Rizo", goals: 4, assists: null },
          { name: "Rubén (Pitu)", goals: 2, assists: null },
          { name: "Gimeno", goals: 2, assists: null },
          { name: "Dani Martín", goals: 2, assists: null },
          { name: "Alber", goals: 2, assists: null },
          { name: "Martín Álamo", goals: 1, assists: null },
          { name: "Lemai", goals: 1, assists: null },
          { name: "Ale Cartaya", goals: 1, assists: null }
        ],
        note: "Registro parcial confirmado tras Malibú FC 6–0 C.D. Cafetería Los Alfonso. No se han proporcionado asistencias y quedan sin dato."
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
