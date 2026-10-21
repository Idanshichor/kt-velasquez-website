/**
 * Copy for /servicios and the home services rows, word for word from Idan
 * (2026-10-21). Spanish only for now: the English site shows the same text
 * until a translation exists.
 */

const WA = "https://wa.me/573216154870?text=";

/** WhatsApp link that opens with a short note naming the service. */
export function whatsapp(service: string) {
  return WA + encodeURIComponent(`Hola Kathe, quiero agendar la reunión de revisión para: ${service}.`);
}

export const INTRO = {
  title: "Soluciones estratégicas para tu momento actual",
  paragraphs: [
    "Cada marca, negocio y equipo necesita un camino diferente. Por eso, comenzamos con una reunión de revisión para entender dónde estás, qué quieres lograr y qué acompañamiento tiene sentido para ti.",
    "Antes de contratar, recibirás una propuesta con el alcance, los entregables, el calendario y la inversión.",
  ],
};

/** A titled block of text or bullet points inside a service. */
export type Block = { title: string; items?: string[]; text?: string[] };

export type Service = {
  title: string;
  tagline: string;
  intro: string[];
  blocks: Block[];
  button: string;
};

export const SERVICES: Service[] = [
  {
    title: "Mentoría para Marca Personal & Emprendimiento",
    tagline: "Posicionamiento, claridad y dirección para construir tu siguiente etapa.",
    intro: [
      "Un acompañamiento personalizado para profesionales, fundadores y emprendedores que quieren organizar sus ideas, fortalecer su propuesta de valor y desarrollar una marca con intención.",
      "En nuestra reunión de revisión identificaré tus necesidades y te recomendaré el paquete de sesiones más adecuado para tu objetivo.",
    ],
    blocks: [
      {
        title: "Qué podemos trabajar",
        items: [
          "Posicionamiento y diferenciación: identificar qué te hace relevante, a quién ayudas y cómo comunicar tu valor.",
          "Oferta y modelo de negocio: organizar tus servicios y su relación con las necesidades de tus clientes.",
          "Estrategia digital y contenidos: definir canales, pilares de comunicación y prioridades.",
          "Narrativa y escritura: desarrollar mensajes que expresen tu experiencia con claridad.",
          "Enfoque y mentalidad ejecutiva: trabajar los bloqueos y decisiones que afectan tu avance.",
          "Plan de acción: convertir la estrategia en tareas compatibles con tu agenda.",
        ],
      },
      { title: "Qué recibes", text: ["Según el alcance acordado, construiremos documentos de posicionamiento, guías de comunicación, planes de contenido, herramientas de organización o una hoja de ruta. Tu propuesta especificará los entregables incluidos."] },
      { title: "Cómo se organizan las sesiones", text: ["Las sesiones individuales duran 90 minutos. Acordamos una frecuencia semanal o quincenal según tu disponibilidad y el trabajo entre encuentros. El número de sesiones y la fecha límite para utilizarlas quedan definidos antes del pago."] },
    ],
    button: "Encuentra tu acompañamiento ideal",
  },
  {
    title: "Consultoría 1:1 Premium para Empresas y Startups",
    tagline: "Dirección estratégica para conectar operación, marketing y ventas.",
    intro: [
      "Para fundadores y equipos que necesitan analizar su negocio, resolver cuellos de botella y tomar decisiones con una visión integral.",
      "Trabajamos sobre las prioridades reales de tu empresa, con un alcance ajustado a su etapa, recursos y capacidad de ejecución.",
    ],
    blocks: [
      {
        title: "Qué incluye el acompañamiento mensual",
        items: [
          "Diagnóstico inicial: revisión de las áreas e información contempladas en la propuesta.",
          "Sesiones de dirección y seguimiento: espacios para tomar decisiones, revisar avances y resolver bloqueos.",
          "Plan mensual: prioridades, acciones, responsables y fechas.",
          "Herramientas de trabajo: documentos, recomendaciones o ajustes de procesos relacionados con el objetivo contratado.",
          "Seguimiento de indicadores: revisión de las métricas acordadas y de la información disponible.",
          "Balance del periodo: avances, pendientes y prioridades para el siguiente mes.",
          "Soporte entre sesiones: aclaraciones sobre las decisiones y tareas del plan.",
        ],
        text: [
          "El número y duración de las sesiones, las áreas involucradas y los entregables se detallan en tu propuesta mensual.",
          "Cuando el objetivo requiera una visión de expansión, trazaremos una hoja de ruta a seis meses y definiremos qué parte abordaremos en cada periodo contratado.",
        ],
      },
      { title: "Responsabilidades claras", text: ["Acordaremos qué actividades ejecuto yo, cuáles corresponden a tu equipo y qué implementación adicional necesita cotización. La continuidad y los ajustes de alcance se revisan al cierre de cada periodo."] },
    ],
    button: "Revisemos las prioridades de tu empresa",
  },
  {
    title: "Talleres e In-Company",
    tagline: "Capacitación práctica alrededor de los retos de tu equipo.",
    intro: ["Experiencias de aprendizaje personalizadas para empresas que quieren fortalecer sus capacidades y aplicar herramientas a situaciones reales de su operación."],
    blocks: [
      {
        title: "Qué podemos trabajar",
        items: [
          "Estrategia digital, contenidos y posicionamiento.",
          "Analítica para la toma de decisiones.",
          "Organización y mejora de procesos.",
          "Alineación entre marketing, ventas y operación.",
          "Enfoque estratégico y coordinación del equipo.",
        ],
      },
      {
        title: "Qué incluye",
        items: [
          "Conversación previa con la persona responsable para definir necesidades.",
          "Diseño de agenda y contenidos según el objetivo.",
          "Facilitación y ejercicios prácticos.",
          "Material de apoyo correspondiente al taller.",
          "Síntesis de aprendizajes y acciones recomendadas.",
        ],
        text: ["La propuesta especificará modalidad, duración, participantes, materiales, fechas y cualquier gasto de desplazamiento. Si necesitas seguimiento posterior, lo incorporaremos al alcance."],
      },
    ],
    button: "Diseñemos el taller de tu equipo",
  },
  {
    title: "Kit de Social Media",
    tagline: "Tú grabas y atiendes a tus posibles clientes. Nosotros organizamos y gestionamos tu contenido.",
    intro: [
      "Para marcas y negocios que necesitan una presencia digital constante y estratégica, pero cuentan con poco tiempo para planear, producir y publicar.",
      "Convertimos tu conocimiento en contenido alineado con tus objetivos comerciales.",
    ],
    blocks: [
      {
        title: "Qué incluye",
        items: [
          "Revisión inicial: objetivos, audiencia, oferta y estado de tus canales.",
          "Estrategia de contenido: pilares, formatos y mensajes prioritarios.",
          "Plan de grabación: ideas, guiones e indicaciones para que sepas qué grabar.",
          "Preparación de piezas: edición de videos, diseño y textos según los formatos contratados.",
          "Calendario y publicación: organización, programación y publicación del contenido aprobado.",
          "Análisis mensual: revisión de resultados y recomendaciones de mejora.",
        ],
      },
      {
        title: "Cómo trabajamos",
        text: [
          "Nosotros preparamos la estrategia y el contenido; tú aportas tu conocimiento, grabas el material y respondes los mensajes de tus posibles clientes. Coordinamos las aprobaciones antes de publicar.",
          "Tu propuesta mensual establecerá las redes incluidas, la cantidad de piezas, los formatos, las rondas de ajustes y las fechas de entrega del material.",
          "La atención de mensajes, el cierre de ventas y la inversión publicitaria quedan a cargo de tu negocio, salvo contratación expresa.",
        ],
      },
    ],
    button: "Quiero delegar mi contenido",
  },
  {
    title: "Mentoría + Kit de Social Media",
    tagline: "Dirección para tu marca y un equipo que te ayude a llevarla a tus redes.",
    intro: [
      "Para profesionales y emprendedores que quieren trabajar su posicionamiento y sus decisiones de negocio mientras delegan la gestión de su contenido.",
      "Integramos el acompañamiento estratégico con la ejecución en redes, siguiendo una misma dirección.",
    ],
    blocks: [
      {
        title: "Qué incluye",
        items: [
          "Diagnóstico de tu marca, oferta y presencia digital.",
          "Sesiones de mentoría sobre las prioridades acordadas.",
          "Desarrollo de posicionamiento y mensajes.",
          "Estrategia, calendario y guías de grabación.",
          "Preparación y publicación de las piezas contratadas.",
          "Seguimiento de indicadores y ajustes.",
          "Soporte para coordinar las sesiones y la ejecución del contenido.",
        ],
      },
      {
        title: "Qué recibes",
        text: [
          "Una hoja de ruta compartida, los entregables de mentoría acordados y el contenido definido para cada periodo. Revisamos lo que sucede en tus redes para orientar las siguientes decisiones.",
          "La propuesta especificará por separado las sesiones disponibles, su vigencia y el volumen mensual de contenido. Tú grabas, compartes tu experiencia y atiendes las conversaciones comerciales; nosotros coordinamos la estrategia y la gestión contratada.",
        ],
      },
    ],
    button: "Quiero acompañamiento y ejecución",
  },
];

/** The "Claridad para decidir" block that follows the mentorship. */
export const CLARITY = {
  title: "Claridad para decidir. Estrategia para avanzar.",
  paragraphs: [
    "Tu experiencia y tus ideas tienen valor. Darles dirección empieza por entender dónde estás, qué quieres construir y qué necesitas resolver para dar el siguiente paso.",
    "En estas mentorías trabajamos sobre la realidad de tu marca personal o emprendimiento: fortalecemos tu propuesta, organizamos tus prioridades y convertimos tus objetivos en acciones que puedas llevar a la práctica.",
    "En nuestra reunión de revisión identificamos tus necesidades y elegimos el paquete adecuado. Cada encuentro tiene un propósito y se adapta a tu ritmo, tus retos y la evolución de tu proyecto",
  ],
};

export const PACKAGES = {
  title: "Paquetes de Mentoría Personalizada 360",
  intro: "Trabajamos sobre las necesidades de tu marca personal o emprendimiento: posicionamiento, oferta, estrategia digital, organización y enfoque. En la reunión de revisión identificamos tus prioridades y elegimos el paquete adecuado.",
  items: [
    { name: "Diagnóstico Express", price: "$220.000 COP", desc: "Una sesión de 90 minutos para analizar un reto puntual, identificar oportunidades y definir tus siguientes pasos." },
    { name: "Impulso Clave 360", price: "$720.000 COP", desc: "Cuatro sesiones de 90 minutos para abordar una prioridad concreta y avanzar con orientación estratégica y un plan de acción personalizado." },
    { name: "Aceleración Estratégica 360", price: "$1.200.000 COP", desc: "Ocho sesiones de 90 minutos para profundizar en los retos de tu proyecto, desarrollar una estrategia y revisar tus avances durante la implementación." },
    { name: "Programa VIP 360", price: "$1.500.000 COP", desc: "Doce sesiones de 90 minutos para trabajar varias prioridades de forma progresiva, dar seguimiento a la ejecución y ajustar las decisiones según tu evolución." },
  ],
  note: "Todos los paquetes se adaptan a ti. Los objetivos, entregables, frecuencia, vigencia y alcance del soporte se acuerdan antes de contratar.",
};

export const MANGO = {
  title: "Dale forma a tu marca con Mango Creative Studio",
  question: "¿Necesitas una página web, renovar tu identidad visual o mejorar la visibilidad de tu negocio en internet?",
  paragraphs: [
    "Te invito a conocer Mango Creative Studio, mi agencia de diseño creativo. Junto a mi equipo desarrollamos tu identidad de marca y tu sitio web, con una estrategia digital enfocada en que puedan encontrarte: SEO para buscadores como Google, AEO para motores de respuesta y GEO para plataformas de inteligencia artificial.",
    "Combinamos diseño, contenido y tecnología para conectar tu sitio web con las personas que buscan lo que ofreces.",
  ],
  link: "Conoce Mango Creative Studio",
  href: "https://mangocreativestudio.com/es/",
};
