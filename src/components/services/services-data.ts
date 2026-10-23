/**
 * Copy for /servicios and the home services rows, word for word from Idan
 * (2026-10-21). English below (`*_EN`), approved by Idan 2026-10-23.
 * Pages read both through `servicesCopy(language)`.
 */

const WA = "https://wa.me/573216154870?text=";

/**
 * WhatsApp link that opens with a note saying which service (or package)
 * the visitor is interested in, in the language they are browsing in.
 */
export function whatsapp(service: string, language: string) {
  const text =
    language === "es"
      ? `Hola Kathe, me interesa ${service} y me gustaría agendar la reunión de revisión.`
      : `Hi Kathe, I'm interested in ${service} and would like to book the review meeting.`;
  return WA + encodeURIComponent(text);
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

/* English, approved by Idan 2026-10-23 (draft: claude.ai/artifact/FPvotktmVTrpWRJsvvRekU). */

const INTRO_EN: typeof INTRO = {
  title: "Strategic solutions for where you are right now",
  paragraphs: [
    "Every brand, business and team needs a different path. That's why we start with a review meeting to understand where you are, what you want to achieve and what kind of support makes sense for you.",
    "Before you sign on, you'll receive a proposal with the scope, deliverables, schedule and investment.",
  ],
};

const SERVICES_EN: Service[] = [
  {
    title: "Personal Brand & Entrepreneurship Mentorship",
    tagline: "Positioning, clarity and direction to build your next stage.",
    intro: [
      "Personalized guidance for professionals, founders and entrepreneurs who want to organize their ideas, strengthen their value proposition and build a brand with intention.",
      "In our review meeting, I'll identify your needs and recommend the session package that best fits your goal.",
    ],
    blocks: [
      {
        title: "What we can work on",
        items: [
          "Positioning and differentiation: identify what makes you relevant, who you help and how to communicate your value.",
          "Offer and business model: organize your services around your clients' needs.",
          "Digital and content strategy: define channels, messaging pillars and priorities.",
          "Storytelling and writing: develop messages that express your experience clearly.",
          "Focus and executive mindset: work through the blocks and decisions that affect your progress.",
          "Action plan: turn strategy into tasks that fit your schedule.",
        ],
      },
      { title: "What you receive", text: ["Depending on the agreed scope, we'll build positioning documents, communication guides, content plans, organization tools or a roadmap. Your proposal will list the deliverables included."] },
      { title: "How sessions are organized", text: ["One-on-one sessions last 90 minutes. We agree on a weekly or biweekly rhythm based on your availability and the work between sessions. The number of sessions and the deadline to use them are set before payment."] },
    ],
    button: "Find the right support for you",
  },
  {
    title: "Premium 1:1 Consulting for Companies and Startups",
    tagline: "Strategic direction that connects operations, marketing and sales.",
    intro: [
      "For founders and teams who need to analyze their business, clear bottlenecks and make decisions with the full picture in view.",
      "We work on your company's real priorities, with a scope matched to its stage, resources and capacity to execute.",
    ],
    blocks: [
      {
        title: "What the monthly engagement includes",
        items: [
          "Initial assessment: a review of the areas and information covered in the proposal.",
          "Direction and follow-up sessions: time to make decisions, review progress and clear roadblocks.",
          "Monthly plan: priorities, actions, owners and dates.",
          "Working tools: documents, recommendations or process adjustments tied to the agreed goal.",
          "KPI tracking: a review of the agreed metrics and the available data.",
          "Period review: progress, open items and priorities for the next month.",
          "Support between sessions: answers on the plan's decisions and tasks.",
        ],
        text: [
          "The number and length of sessions, the areas involved and the deliverables are set out in your monthly proposal.",
          "When the goal calls for a growth plan, we'll map a six-month roadmap and decide which part we'll tackle in each contracted period.",
        ],
      },
      { title: "Clear responsibilities", text: ["We'll agree on which activities I carry out, which belong to your team and which additional implementation needs a quote. Continuity and scope changes are reviewed at the end of each period."] },
    ],
    button: "Let's review your company's priorities",
  },
  {
    title: "Workshops & In-Company Training",
    tagline: "Hands-on training built around your team's challenges.",
    intro: ["Tailored learning experiences for companies that want to strengthen their skills and apply tools to real situations in their operations."],
    blocks: [
      {
        title: "What we can work on",
        items: [
          "Digital strategy, content and positioning.",
          "Analytics for decision-making.",
          "Process organization and improvement.",
          "Alignment between marketing, sales and operations.",
          "Strategic focus and team coordination.",
        ],
      },
      {
        title: "What's included",
        items: [
          "A prior conversation with the person in charge to define needs.",
          "Agenda and content designed around the goal.",
          "Facilitation and hands-on exercises.",
          "Supporting materials for the workshop.",
          "A summary of key learnings and recommended actions.",
        ],
        text: ["The proposal will set out the format, length, participants, materials, dates and any travel costs. If you need follow-up afterward, we'll add it to the scope."],
      },
    ],
    button: "Let's design your team's workshop",
  },
  {
    title: "Social Media Kit",
    tagline: "You record and talk with your prospects. We organize and manage your content.",
    intro: [
      "For brands and businesses that need a steady, strategic digital presence but have little time to plan, produce and publish.",
      "We turn your knowledge into content aligned with your business goals.",
    ],
    blocks: [
      {
        title: "What's included",
        items: [
          "Initial review: goals, audience, offer and the state of your channels.",
          "Content strategy: pillars, formats and key messages.",
          "Recording plan: ideas, scripts and directions so you know what to record.",
          "Content production: video editing, design and copy for the formats in your plan.",
          "Calendar and publishing: organizing, scheduling and publishing approved content.",
          "Monthly analysis: a review of results and recommendations to improve.",
        ],
      },
      {
        title: "How we work",
        text: [
          "We prepare the strategy and the content; you bring your knowledge, record the material and answer your prospects' messages. We coordinate approvals before anything is published.",
          "Your monthly proposal will set the platforms included, the number of pieces, the formats, the rounds of revisions and the dates for delivering material.",
          "Replying to messages, closing sales and ad spend stay with your business unless they're expressly contracted.",
        ],
      },
    ],
    button: "I want to hand off my content",
  },
  {
    title: "Mentorship + Social Media Kit",
    tagline: "Direction for your brand and a team to help you bring it to your social media.",
    intro: [
      "For professionals and entrepreneurs who want to work on their positioning and business decisions while handing off their content management.",
      "We bring strategic guidance and social media execution together, moving in one direction.",
    ],
    blocks: [
      {
        title: "What's included",
        items: [
          "An assessment of your brand, offer and digital presence.",
          "Mentorship sessions on the agreed priorities.",
          "Positioning and messaging development.",
          "Strategy, calendar and recording guides.",
          "Production and publishing of the pieces in your plan.",
          "KPI tracking and adjustments.",
          "Support to coordinate the sessions and content execution.",
        ],
      },
      {
        title: "What you receive",
        text: [
          "A shared roadmap, the agreed mentorship deliverables and the content set for each period. We review what happens on your social media to guide the next decisions.",
          "The proposal will list separately the sessions available, how long they're valid and the monthly content volume. You record, share your experience and handle sales conversations; we coordinate the strategy and the management in your plan.",
        ],
      },
    ],
    button: "I want guidance and execution",
  },
];

const CLARITY_EN: typeof CLARITY = {
  title: "Clarity to decide. Strategy to move forward.",
  paragraphs: [
    "Your experience and your ideas have value. Giving them direction starts with understanding where you are, what you want to build and what you need to solve to take the next step.",
    "In these mentorships, we work on the reality of your personal brand or business: we strengthen your offer, organize your priorities and turn your goals into actions you can put into practice.",
    "In our review meeting, we identify your needs and choose the right package. Each session has a purpose and adapts to your pace, your challenges and how your project evolves.",
  ],
};

const PACKAGES_EN: typeof PACKAGES = {
  title: "360 Personalized Mentorship Packages",
  intro: "We work on what your personal brand or business needs: positioning, offer, digital strategy, organization and focus. In the review meeting, we identify your priorities and choose the right package.",
  items: [
    { name: "Express Diagnosis", price: "$220,000 COP", desc: "One 90-minute session to analyze a specific challenge, spot opportunities and define your next steps." },
    { name: "Key Boost 360", price: "$720,000 COP", desc: "Four 90-minute sessions to tackle one specific priority and move forward with strategic guidance and a personalized action plan." },
    { name: "Strategic Acceleration 360", price: "$1,200,000 COP", desc: "Eight 90-minute sessions to dig into your project's challenges, develop a strategy and review your progress during implementation." },
    { name: "VIP Program 360", price: "$1,500,000 COP", desc: "Twelve 90-minute sessions to work through several priorities step by step, follow up on execution and adjust decisions as you progress." },
  ],
  note: "Every package adapts to you. Goals, deliverables, frequency, validity period and support scope are agreed before you sign on.",
};

const MANGO_EN: typeof MANGO = {
  title: "Shape your brand with Mango Creative Studio",
  question: "Do you need a website, a refreshed visual identity or more online visibility for your business?",
  paragraphs: [
    "I invite you to discover Mango Creative Studio, my creative design agency. With my team, we develop your brand identity and your website, with a digital strategy focused on making you easy to find: SEO for search engines like Google, AEO for answer engines and GEO for AI platforms.",
    "We combine design, content and technology to connect your website with the people looking for what you offer.",
  ],
  link: "Discover Mango Creative Studio",
  // Mango's English site is its root; /en/ does not exist.
  href: "https://mangocreativestudio.com/",
};

/** All services copy in the visitor's language. */
export function servicesCopy(language: string) {
  return language === "en"
    ? { INTRO: INTRO_EN, SERVICES: SERVICES_EN, CLARITY: CLARITY_EN, PACKAGES: PACKAGES_EN, MANGO: MANGO_EN }
    : { INTRO, SERVICES, CLARITY, PACKAGES, MANGO };
}
