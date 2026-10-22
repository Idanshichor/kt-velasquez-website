// Katherine's client intake form. Copy is Katherine's, word for word: edit here, nowhere else.

export const INTRO = {
  title: ["Cuéntame sobre", "tus proyectos"],
  lead: [
    "Quiero conocer lo que estás construyendo, el momento en el que te encuentras y los retos que necesitas resolver.",
    "Tus respuestas me ayudarán a preparar nuestra reunión y recomendarte un acompañamiento que tenga sentido para ti, tu negocio o tu equipo.",
  ],
};

export const CLOSING = {
  title: "Gracias por compartir este contexto",
  text: "Con tus respuestas podré aprovechar nuestra reunión para profundizar en tus prioridades, valorar las opciones de acompañamiento y definir una forma de trabajo que se ajuste a tu realidad.",
};

export type Field =
  | { kind: "contact" }
  | { kind: "text"; name: string; rows?: number }
  | { kind: "single"; name: string; options: string[]; other?: string }
  | { kind: "multi"; name: string; options: string[]; other?: string };

export type Question = {
  /** Unnumbered blocks (contact details) sit above question 1. */
  numbered: boolean;
  title: string;
  help?: string[];
  field: Field;
  /** An optional open answer under the options, with its own prompt. */
  extra?: { name: string; label: string };
  /** A closing note under the answer. */
  note?: string;
};

export const QUESTIONS: Question[] = [
  {
    // Not in the question list: needed so Katherine knows who answered and can reply.
    numbered: false,
    title: "Nombre, correo electrónico y WhatsApp con código de país.",
    field: { kind: "contact" },
  },
  {
    numbered: true,
    title: "¿Qué proyectos tienes actualmente y en cuáles necesitas acompañamiento?",
    help: [
      "Cuéntame brevemente en qué consiste cada proyecto, qué ofreces, a quién ayudas y cuál es tu rol. Indica en cuáles te gustaría que trabajáramos y cuál es tu prioridad.",
      "Si tienes sitios web o redes sociales que aún no me has compartido, incluye sus enlaces.",
    ],
    field: { kind: "text", name: "proyectos", rows: 6 },
  },
  {
    numbered: true,
    title: "¿En qué etapa se encuentra el proyecto que quieres priorizar?",
    help: ["Elige la opción que mejor describa su situación actual."],
    field: {
      kind: "single",
      name: "etapa",
      options: [
        "Estoy preparando un nuevo proyecto y ya tengo experiencia emprendiendo.",
        "Ya lo lancé y estoy validando mi oferta.",
        "Tengo clientes y ventas, y necesito más estructura.",
        "Mi negocio está creciendo y quiero optimizarlo o expandirlo.",
        "Busco fortalecer las capacidades de mi equipo.",
        "Otra situación: cuéntame cuál.",
      ],
      other: "Otra situación: cuéntame cuál.",
    },
  },
  {
    numbered: true,
    title: "¿Cuál es el principal reto que te gustaría resolver y qué has intentado hasta ahora?",
    help: ["Cuéntame qué está pasando, cómo afecta a tu proyecto y qué acciones has tomado. Me interesa conocer tanto lo que ha funcionado como lo que todavía necesita atención."],
    field: { kind: "text", name: "reto", rows: 6 },
  },
  {
    numbered: true,
    title: "¿Qué te gustaría conseguir en los próximos tres meses?",
    help: ["Describe el cambio o resultado que te haría sentir que estamos avanzando en la dirección correcta. Puedes mencionar una meta concreta o una situación que quieras mejorar."],
    field: { kind: "text", name: "objetivo", rows: 5 },
  },
  {
    numbered: true,
    title: "¿En qué áreas sientes que necesitas ayuda?",
    help: ["Puedes seleccionar varias opciones."],
    field: {
      kind: "multi",
      name: "areas",
      options: [
        "Marca personal, posicionamiento y comunicación.",
        "Definición de mi oferta de servicios o enfoque de mi emprendimiento.",
        "Organización, procesos y dirección del negocio.",
        "Coordinación entre marketing y ventas.",
        "Estrategia, creación y publicación de contenido en redes sociales.",
        "Formación o capacitación para mi equipo.",
        "Sitio web, identidad de marca o visibilidad en buscadores y plataformas de inteligencia artificial.",
        "Organización de mi agenda, definición de prioridades y cambio de hábitos que dificultan mi avance.",
        "Necesito orientación para identificar por dónde empezar.",
        "Otra área: cuéntame cuál.",
      ],
      other: "Otra área: cuéntame cuál.",
    },
  },
  {
    numbered: true,
    title: "¿Cuánto tiempo puedes dedicar cada semana a las sesiones y a implementar lo que trabajemos?",
    help: ["Piensa en el tiempo que puedes reservar de forma realista dentro de tu agenda."],
    field: {
      kind: "single",
      name: "tiempo",
      options: [
        "Menos de 2 horas por semana.",
        "Entre 2 y 4 horas por semana.",
        "Más de 4 y hasta 8 horas por semana.",
        "Más de 8 horas por semana.",
        "Necesito revisar mi agenda para definirlo.",
      ],
    },
  },
  {
    numbered: true,
    title: "¿Gestionas el proyecto por tu cuenta o cuentas con un equipo?",
    help: ["Si tienes equipo, cuéntame cuántas personas participan, cuáles son sus funciones y con quiénes trabajaríamos durante el acompañamiento."],
    field: { kind: "text", name: "equipo", rows: 4 },
  },
  {
    numbered: true,
    title: "¿Quién se encarga actualmente del marketing?",
    help: ["Puedes seleccionar varias opciones si las responsabilidades están compartidas."],
    field: {
      kind: "multi",
      name: "marketing",
      options: ["Una persona o un equipo interno.", "Un profesional externo o una agencia.", "Yo me encargo.", "Actualmente nadie tiene esa responsabilidad."],
    },
    extra: { name: "marketing_tareas", label: "Si corresponde, cuéntame qué tareas realiza cada persona." },
  },
  {
    numbered: true,
    title: "¿Marketing y ventas están a cargo de personas diferentes?",
    field: {
      kind: "single",
      name: "ventas",
      options: [
        "Sí, son personas o equipos diferentes.",
        "No, una misma persona se encarga de ambas áreas.",
        "Yo me encargo de marketing y ventas.",
        "Todavía no tenemos esas funciones definidas.",
      ],
    },
    extra: { name: "seguimiento", label: "Cuéntame también quién responde las consultas de posibles clientes y hace seguimiento hasta concretar la venta." },
  },
  {
    numbered: true,
    title: "¿Cómo te gustaría trabajar conmigo?",
    help: ["Selecciona las opciones que más se acerquen a lo que buscas."],
    field: {
      kind: "multi",
      name: "modalidad",
      options: [
        "Quiero orientación y herramientas para implementar por mi cuenta.",
        "Quiero acompañamiento estratégico para dirigir mejor a mi equipo.",
        "Quiero delegar la gestión del contenido; puedo grabar y responder las consultas de posibles clientes.",
        "Quiero combinar mentoría con gestión de contenido.",
        "Busco una capacitación para mi equipo.",
        "Necesito ayuda para elegir la opción más adecuada.",
      ],
    },
  },
  {
    numbered: true,
    title: "¿Cuándo te gustaría comenzar?",
    help: ["Cuéntame si quieres empezar pronto o si tienes alguna fecha importante en mente. Si todavía lo estás definiendo, también puedes indicarlo."],
    field: { kind: "text", name: "inicio", rows: 4 },
    note: "En nuestra reunión revisaremos qué acompañamiento encaja contigo. Después recibirás una propuesta con el alcance y el precio para que puedas decidir con tranquilidad.",
  },
];
