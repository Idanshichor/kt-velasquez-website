// Katherine's client intake form. Copy is Katherine's, word for word: edit here, nowhere else.
// Questions 9 and 10 (and the line after 10) only show when question 8 says the client has a team.

export const INTRO = {
  title: ["Cuéntame sobre", "tu proyecto"],
  lead: "Quiero conocer el momento en el que estás y qué necesitas resolver para que aprovechemos nuestra primera reunión. Tus respuestas me ayudarán a recomendarte el acompañamiento más adecuado para ti, tu negocio o tu equipo.",
};

export const CLOSING = {
  title: "Cierre del formulario",
  text: "Gracias por compartir este contexto. En nuestra reunión revisaremos tus prioridades y valoraremos qué servicio, alcance y forma de trabajo encajan mejor contigo.",
};

export type Field =
  | { kind: "contact" }
  | { kind: "text"; name: string; rows?: number }
  | { kind: "single"; name: string; options: string[] }
  | { kind: "multi"; name: string; options: string[] };

export type Question = {
  n: number;
  title: string;
  help?: string;
  field: Field;
  teamOnly?: boolean;
  /** An extra open answer under the options, with its own prompt. */
  extra?: { name: string; label: string; teamOnly?: boolean };
};

export const TEAM_YES = "Tengo un equipo de trabajo.";

export const QUESTIONS: Question[] = [
  {
    n: 1,
    title: "¿Cómo te llamas y por qué medio podemos contactarte?",
    help: "Nombre, correo electrónico y WhatsApp con código de país.",
    field: { kind: "contact" },
  },
  {
    n: 2,
    title: "¿Cómo se llama tu proyecto y a qué te dedicas?",
    help: "Cuéntame qué ofreces y a quién ayudas. Si tienes sitio web o redes sociales, comparte sus enlaces.",
    field: { kind: "text", name: "proyecto", rows: 5 },
  },
  {
    n: 3,
    title: "¿En qué etapa está tu proyecto?",
    field: {
      kind: "single",
      name: "etapa",
      options: [
        "Estoy preparando un nuevo proyecto y ya he emprendido antes.",
        "Ya lancé, pero todavía estoy validando mi oferta.",
        "Tengo clientes y ventas, y necesito más estructura.",
        "Mi negocio está creciendo y quiero mejorar o expandirme.",
        "Represento a una empresa que busca apoyo para su equipo.",
        "Otra situación.",
      ],
    },
  },
  {
    n: 4,
    title: "¿Cuál es el principal reto que te gustaría resolver y qué has intentado hasta ahora?",
    help: "Cuéntame qué está pasando, cómo afecta a tu proyecto y qué te ha funcionado o no.",
    field: { kind: "text", name: "reto", rows: 6 },
  },
  {
    n: 5,
    title: "¿Qué te gustaría conseguir en los próximos tres meses?",
    help: "Describe el cambio o resultado que haría que este acompañamiento valiera la pena para ti.",
    field: { kind: "text", name: "objetivo", rows: 5 },
  },
  {
    n: 6,
    title: "¿En qué áreas sientes que necesitas ayuda?",
    help: "Puedes elegir varias.",
    field: {
      kind: "multi",
      name: "areas",
      options: [
        "Marca personal, posicionamiento y comunicación.",
        "Oferta de servicios o enfoque de mi emprendimiento.",
        "Organización, procesos y dirección del negocio.",
        "Coordinación entre marketing y ventas.",
        "Estrategia, creación y publicación de contenido en redes.",
        "Formación o capacitación para mi equipo.",
        "Sitio web, branding o visibilidad en buscadores e inteligencia artificial.",
        "Necesito orientación para identificar por dónde empezar.",
      ],
    },
  },
  {
    n: 7,
    title: "¿Cuánto tiempo tienes disponible a la semana para participar en las sesiones y trabajar en tu proyecto?",
    field: {
      kind: "single",
      name: "tiempo",
      options: ["Menos de 2 horas.", "Entre 2 y 4 horas.", "Entre 5 y 8 horas.", "Más de 8 horas.", "Necesito organizar mi agenda para definirlo."],
    },
  },
  {
    n: 8,
    title: "¿Actualmente manejas todo por tu cuenta o tienes un equipo de trabajo?",
    // The two choices are added so the form knows whether to show 9 and 10.
    field: { kind: "single", name: "equipo", options: ["Manejo todo por mi cuenta.", TEAM_YES] },
    extra: { name: "equipo_detalle", label: "Si tienes equipo, cuéntame cuántas personas participan y qué funciones tienen.", teamOnly: true },
  },
  {
    n: 9,
    title: "¿Tienes una persona o un equipo encargado de marketing?",
    teamOnly: true,
    field: {
      kind: "single",
      name: "marketing",
      options: [
        "Sí, dentro de mi equipo.",
        "Sí, trabajo con un profesional externo o una agencia.",
        "Yo me encargo.",
        "Actualmente nadie tiene esa responsabilidad.",
      ],
    },
  },
  {
    n: 10,
    title: "¿La persona encargada de marketing es diferente de quien gestiona las ventas?",
    teamOnly: true,
    field: {
      kind: "single",
      name: "ventas",
      options: [
        "Sí, son personas o equipos diferentes.",
        "No, la misma persona se encarga de ambas áreas.",
        "Yo me encargo de marketing y ventas.",
        "Todavía no tenemos esas funciones definidas.",
      ],
    },
    extra: { name: "seguimiento", label: "Cuéntame también quién responde las consultas de posibles clientes y da seguimiento hasta la venta." },
  },
  {
    n: 11,
    title: "¿Cómo te gustaría trabajar conmigo?",
    field: {
      kind: "single",
      name: "modalidad",
      options: [
        "Quiero orientación y herramientas para implementar por mi cuenta.",
        "Quiero acompañamiento para dirigir mejor a mi equipo.",
        "Quiero delegar la gestión de contenido; puedo grabar y responder las consultas comerciales.",
        "Quiero combinar mentoría con gestión de contenido.",
        "Busco una capacitación para mi equipo.",
        "Necesito ayuda para elegir la mejor opción.",
      ],
    },
  },
  {
    n: 12,
    title: "¿Qué inversión tienes prevista y cuándo te gustaría comenzar?",
    help: "Indica un presupuesto aproximado y su moneda. Cuéntame si lo contemplas como una inversión mensual o para un proyecto puntual, y si tienes alguna fecha importante. Si todavía no lo has definido, puedes indicarlo.",
    field: { kind: "text", name: "inversion", rows: 5 },
  },
];
