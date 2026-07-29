export type Language = "es" | "en";

export const translations = {
  es: {
    nav: {
      inicio: "Inicio",
      sobre_mi: "Quién Soy",
      metodologia: "Metodología",
      servicios: "Servicios",
      contacto: "Contacto",
      podcast: "Podcast"
    },
    hero: {
      consultoria: "Consultoría Estratégica 360°",
      360: "360",
      katherine: "Katherine",
      velasquez: "Velasquez",
      h1_keyword: "Consultoría Estratégica 360 para fundadores y marcas en Colombia",
      direccion: "Dirección estratégica para marcas y negocios con visión de futuro.",
      description: "Integro estructura de negocio, estrategia digital y mentalidad ejecutiva para escalar con claridad, sin dejar tu bienestar en el camino.",
      cta: "Hablemos de tu proyecto"
    },
    banner: {
      para_quienes: "para quienes",
      estan_construyendo: "están construyendo",
      algo_real: "algo real.",
      desc: "Startups, empresas y líderes que construyen su marca personal que ya pasaron la etapa de improvisar y hoy buscan claridad, estructura y un plan de expansión sostenible."
    },
    logos: {
      trust: "Confían en Katherine"
    },
    diagnostic: {
      tag: "El diagnóstico común",
      title: "Tu negocio o marca está creciendo, pero te quedas preguntándote ¿qué sigue?",
      desc1: "Has construido tracción y tienes la validación del mercado, pero el día a día se siente reactivo. Falta alinear operaciones, comunicación y tu propia energía como líder.",
      desc2: "Soy la estratega a la que llamas cuando estás listo para dejar de adivinar y diseñar un plan claro de crecimiento.",
      cta: "CONVERSA CONMIGO"
    },
    about: {
      tag: "Hola, soy Katherine",
      desc1: "Soy Ingeniera Civil con doble maestría en Marketing y Comunicación Digital. Tras fundar mis propias empresas y asesorar proyectos en el ecosistema corporativo y de startups, entendí que un negocio no escala solo con buen marketing o mejores procesos.",
      desc2: "El verdadero crecimiento ocurre en la intersección de tres áreas: la estructura del negocio, la estrategia de comunicación y la mentalidad del líder. A esto lo llamo mi enfoque 360. Ayudo a fundadores y marcas maduras a operar con sistema, claridad y dirección."
    },
    methodology: {
      title: "El Ecosistema",
      title_accent: "360",
      desc: "Con pilares interconectados. Una ejecución sólida.",
      p1_title: "Estructura de Negocio",
      p1_desc: "Optimizamos tus operaciones, flujos de trabajo y modelos de negocio. Si el motor interno no es eficiente, la tracción externa rompe la empresa.",
      p2_title: "Estrategia & Social Media",
      p2_desc: "Creamos una narrativa de marca y una estrategia digital que no solo busque \"likes\", sino que posicione tu autoridad, atraiga clientes ideales y convierta.",
      p3_title: "Mentalidad Ejecutiva",
      p3_desc: "El cuello de botella de un negocio suele ser la mente de quien lo lidera. Trabajamos en la toma de decisiones, el enfoque estratégico y la resiliencia para sostener el crecimiento.",
      p4_title: "Ejecución & Medición",
      p4_desc: "Implementamos con metodologías claras, medimos con datos reales y ajustamos. La estrategia sin ejecución es solo teoría."
    },
    services: {
      title: "Soluciones Estratégicas",
      desc: "Estructura y claridad diseñadas para tu etapa actual.",
      t1_title: "Mentoría de Marca Personal 360",
      t1_subtitle: "Posicionamiento y autoridad para líderes",
      t1_desc: "Este programa está diseñado de manera personalizada para ti, si eres un profesional o fundador que busca empaquetar su conocimiento, dominar su nicho y construir una marca personal influyente con una estrategia clara y una mentalidad sólida.",
      t1_features: [
        "Definición de tus pilares de posicionamiento: Identificaremos las bases estratégicas sobre las cuales vas a construir tu autoridad en el mercado.",
        "Auditoría de diferenciación y análisis de mercado: Analizaremos en detalle a tu competencia para encontrar tu valor único y lograr que destaques con claridad.",
        "Estrategia integral de Social Media y contenidos: Diseñaremos un plan a tu medida para que sepas exactamente qué publicar, cómo comunicarlo y cómo convertir tu audiencia en clientes.",
        "Formación en UX Writing y narrativa de autoridad: Aprenderás las técnicas de redacción persuasiva y estructura de mensajes necesarias para que cada publicación genere impacto y confianza.",
        "Trabajo de enfoque y mentalidad: Desarrollaremos las herramientas para superar bloqueos y comunicar con seguridad, claridad y enfoque constante en tus objetivos.",
        "Plan de acción personalizado a tu ritmo: Construiremos un paso a paso claro y aplicable a tu agenda real para garantizar que avances con seguridad hacia tus metas."
      ],
      t1_plans: [
        {
          name: "Programa VIP 360 (Más Popular)",
          desc: "12 Horas de Mentoría — Acompañamiento por 3 meses",
          price: "$900.000 COP",
          link: "https://checkout.wompi.co/l/2CNIob"
        },
        {
          name: "Aceleración Estratégica",
          desc: "8 Horas de Asesoría — Acompañamiento por 2 meses",
          price: "$700.000 COP",
          link: "https://checkout.wompi.co/l/k2bWcs"
        },
        {
          name: "Impulso Clave",
          desc: "4 Horas de Asesoría — Acompañamiento por 1 mes",
          price: "$400.000 COP",
          link: "https://checkout.wompi.co/l/4CnI6A"
        },
        {
          name: "Sesión Diagnóstico Express",
          desc: "1 Hora de Asesoría Puntual",
          price: "$180.000 COP",
          link: "https://checkout.wompi.co/l/Cuakxy"
        }
      ],
      t2_tag: "Destacado",
      t2_title: "Consultoría 1:1 Premium (Empresas y Startups)",
      t2_subtitle: "Dirección y optimización de negocio",
      t2_desc: "Este programa está diseñado para ti y tu equipo si lideras una startup o empresa constituida y buscas acelerar su crecimiento. Analizaremos tu modelo de negocio en profundidad para alinear tus objetivos comerciales con una operación eficiente y una presencia digital que convierta.",
      t2_features: [
        "Diagnóstico profundo de tus operaciones actuales: Analizaremos a fondo el estado de tu negocio para identificar cuellos de botella, ineficiencias y oportunidades inmediatas de mejora.",
        "Plan estratégico de expansión a 6 meses: Diseñaremos una hoja de ruta clara, accionable y a la medida de tu empresa para escalar tus resultados de forma ordenada.",
        "Alineación de Marketing, Ventas y Operaciones: Lograremos que todas las áreas de tu negocio hablen el mismo idioma para maximizar la conversión y la retención de clientes.",
        "Auditoría analítica y optimización de embudos: Revisaremos tus métricas y canales de venta para ajustar cada etapa del embudo y optimizar tu retorno de inversión.",
        "Acompañamiento directo en la toma de decisiones: Tendrás un aliado estratégico a tu lado para validar pasos clave, resolver bloqueos y ejecutar con seguridad.",
        "Soporte y acceso directo vía WhatsApp: Mantendremos una comunicación constante y fluida para resolver tus dudas del día a día sin frenar el ritmo de tu negocio."
      ],
      t2_plan: {
        name: "Acompañamiento Mensual Empresarial",
        price: "$600.000 COP",
        link: "https://checkout.wompi.co/l/XlbNWX"
      },
      t3_title: "Talleres e In-Company",
      t3_subtitle: "Capacitación estratégica para equipos",
      t3_desc: "Este programa está diseñado para ti y tu empresa si buscas transformar las capacidades de tu talento humano de forma directa e interactiva. A través de sesiones intensivas y workshops prácticos en las instalaciones de tu organización, alinearás a tu equipo bajo el Ecosistema 360 para potenciar su rendimiento y llevar los resultados de tu negocio al siguiente nivel.",
      t3_features: [
        "Workshops intensivos presenciales: Capacitaremos a tu equipo cara a cara con metodologías dinámicas, actividades prácticas e interacción en tiempo real adaptadas a tu operación.",
        "Capacitación práctica en analítica digital: Formaremos a tu talento en vivo para que tome decisiones basadas en datos reales y optimice cada acción estratégica.",
        "Implementación del Ecosistema 360: Guiaremos a tu equipo de manera presencial en la integración de esta estructura para que trabajen de forma articulada y con una visión global del negocio.",
        "Optimización y agilidad en procesos internos: Trabajaremos hombro a hombro con tu equipo para eliminar fricciones en la operación diaria, acelerar tiempos de entrega y aumentar la productividad.",
        "Alineación e integración del equipo de trabajo: Crearemos un espacio de conexión presencial donde todos los colaboradores remen en la misma dirección, compartiendo los mismos objetivos estratégicos."
      ],
      t3_inclusions: "Incluido en todas las sesiones: Entregaremos a tu equipo material práctico y playbooks de ejecución (guías físicas y digitales paso a paso) con herramientas listas para aplicar desde el primer día.",
      t3_question: "¿En qué área de tu equipo necesitas ayuda hoy? (Hablemos y te diseño la sesión a tu medida).",
      t3_plan: {
        name: "Capacitación estratégica para equipos - 1 Hora de Mentoría",
        price: "$190.000 COP",
        link: "https://checkout.wompi.co/l/1dvqBr"
      }
    },
    newsletter: {
      tag: "Recibe el Newsletter 360",
      title: "Estrategia Directo a tu Bandeja",
      desc: "Ideas semanales sobre optimización de negocios, analítica y estrategia digital para fundadores. Sin rodeos.",
      placeholder: "Tu email",
      button: "Unirme al Newsletter",
      submitting: "Enviando...",
      success: "¡Suscrito!",
      error: "Error"
    },
    podcast: {
      tag: "Podcast",
      title_p1: "Estrategia 360 -",
      title_p2: "Sin Pelos en la Lengua",
      desc: "Conversaciones honestas, análisis de negocio y herramientas de crecimiento personal para líderes que prefieren la sustancia por encima del hype. A través de historias reales de líderes reales, descubrimos el camino detrás del éxito y la mentalidad necesaria para sostenerlo.",
      cta: "Escuchar Podcast"
    },
    podcastPage: {
      heroTag: "EL PODCAST",
      heroTitlePart1: "Estrategia 360:",
      heroTitlePart2: "Sin Pelos en la Lengua",
      heroSubtitle: "El espacio seguro donde CEOs, empresarios y emprendedores nos quitamos la máscara corporativa para hablar de la verdad del negocio.",
      manifestoTag: "Manifiesto",
      manifestoP1: "Aquí no venimos a tirar palabras elegantes ni discursos cordiales de LinkedIn que nadie entiende.",
      manifestoP2: "Este es un espacio libre y seguro para confesar todas las emociones por las que pasamos quienes decidimos salirnos de la carrera de la rata e intentar algo que de verdad nos llene por dentro. Queremos hablar de cómo nos sentimos cuando nos quebramos, cuando cometemos el error que nos lleva a la quiebra, cuando toca empezar de cero... pero también de cómo la estallamos, cómo logramos lo que queríamos y cuáles son nuestros sueños a futuro.",
      manifestoP3: "Aquí entendemos que el desarrollo del negocio + las estrategias digitales + la mentalidad (del equipo y del CEO) van de la mano. Sin filtros, como si estuviéramos en la sala de la casa con tu mejor amiga.",
      valuesTitle: "¿Con qué nos identificamos aquí?",
      valuesSubtitle: "Para sentarte a tomar un café conmigo, no necesitas ser perfecto. Necesitas ser real. Busco líderes:",
      value1Title: "Apasionados y Soñadores con Visión",
      value1Desc: "Que no se conforman y siempre van por más.",
      value2Title: "Resilientes",
      value2Desc: "Que saben lo que es caerse y tener los pantalones para levantarse.",
      value3Title: "Padres Empresarios y Personas Reales",
      value3Desc: "Que balancean la vida, el caos y los negocios con amor propio (o que están en el camino de encontrarse y cuidarse).",
      platformsTitle: "Escúchanos en tu plataforma favorita",
      ctaTitle: "¿Te identificas y quieres contar tu historia?",
      ctaSubtitle: "No busco jefes perfectos; busco personas de carne y hueso, del común, dispuestas a inspirar desde la honestidad. Si quieres ser invitado a mi podcast para que nos tomemos un café y hablemos claro:",
      ctaButton: "Inscríbete aquí para ser invitado",
      formName: "Nombre completo",
      formEmail: "Correo electrónico",
      formSocial: "Redes sociales o Web (Instagram, LinkedIn, etc.)",
      formStory: "Cuéntanos brevemente tu historia y qué tema te gustaría compartir",
      formSuccess: "¡Solicitud enviada con éxito! Nos pondremos en contacto contigo.",
      formSubmitting: "Enviando solicitud...",
      formError: "Hubo un error al enviar. Por favor, intenta de nuevo."
    },
    aboutPage: {
      heroTag: "Quién Soy",
      heroTitlePart1: "Hola, soy",
      heroTitlePart2: "Katherine Velasquez Garcia",
      heroSubtitle: "Ingeniera Civil de profesión, estratega por pasión y emprendedora por instinto.",
      ch1Title: "Raíces e Independencia",
      ch1Text: "Desde niña fui rebuscadora e independiente; vendía barquillos de arequipe y accesorios porque quería mis propios ingresos. En mis primeros semestres de universidad me iba al centro de Medellín a vender jeans y a volantear solo para asegurarme mi primer viaje a Coveñas. Siempre tuve claro que el movimiento y la independencia eran lo mío.",
      ch2Title: "La Maratón Académica",
      ch2Text1: "Antes de terminar la carrera, decidí montar mis propios negocios: una tattoo studio y una rock clothing store en el famoso Centro Comercial Paseo de la Playa. Durante tres años estuve en una maratón impresionante: estudiaba Ingeniería Civil, hacía un MBA (Método Base de Aceleración Empresarial) aplicando cada clase directamente a mis negocios, y por las noches trabajaba como bailarina profesional.",
      ch2Text2: "Al final, hice mi tesis calculando el riesgo de la lámina de precipitación por lluvias con la ayuda de Empresas Públicas de Medellín (EPM). Me gradué, pero decidí no ejercer ni trabajarle a nadie. Seguí independiente.",
      ch3Title: "El Choque y La Quiebra",
      ch3Text: "Mudé mis negocios a El Poblado, y adicional a eso monté un taller de estampación y me enamoré del servicio de perforación profesional. Estaba recién casada y decidí hacer mi mayor inversión... justo antes de que llegara la pandemia. El COVID me dio un golpe en seco: caí en una quiebra total y me vi obligada a entrar en liquidación absoluta, sin opciones.",
      ch3Callout: "Pero las crisis a mí no me congelan.",
      ch4Title: "Resiliencia Desde Cero",
      ch4Text: "En plena pandemia me levanté de nuevo desde cero, como perforadora profesional y creando mi marca Katherine Piercing Jewelry. Pero mientras salía a flote en lo económico, emocionalmente entré en una prueba impresionante: recibí la noticia de que mi madre tenía cáncer. Sin dudarlo, inicié el maravilloso pero retador proceso de cuidarla, asistirla y apoyarla con todo el amor de mi alma, mi madre superó esta prueba tan grande. Al cabo de dos años de tanta carga, mi relación entró en un mal mood y decidí separarme después de 12 años de relación. Con el amor propio por el suelo pero las ganas intactas, decidí no dejarme vencer y empecé de cero en todos los aspectos de mi vida.",
      ch5Title: "Emigrar de Golpe",
      ch5Text: "Me metí de cabeza en el mundo del trading. Viviendo sola, empoderada y combinando las perforaciones con las inversiones, empecé a sentirme en mi mejor momento. Organicé mis proyectos para salir del país paso a paso, pero la vida decidió acelerar el reloj y cambiarme los planes de golpe. Debido a un conflicto financiero ajeno de un familiar muy cercano al que amo que terminó comprometiendo mi tranquilidad de forma directa, me vi obligada a tomar una decisión radical: emigrar en menos de una semana.",
      ch5Quote: "“A veces, la mejor gestión de riesgo te la da la vida misma.”",
      ch6Title: "Las Chocoaventuras y Mango Creative",
      ch6Text1: "Viví demasiadas chocoaventuras fuera. Para certificar toda la experiencia que traía con mis empresas de tantos años, me postulé a dos becas para un doble máster en Madrid... ¡y pasé! Eso me dio la oportunidad de residir en España por un tiempo. Sin embargo, la montaña rusa emocional del trading no iba con la paz que yo quería para mi futuro, así que decidí retirarme de los mercados a pesar de que me iba bien.",
      ch6Text2: "Todos los que hemos emigrado sabemos que es un proceso donde tienes el cuerpo en otro país, pero tu corazón sigue en Colombia. Y fue justo ahí cuando recibí la segunda oleada: a mi madre le dio cáncer de nuevo. Como esta vez no podía estar físicamente ahí para cuidarla como en la primera ocasión, mi amado padre jugó un papel impresionante sosteniéndolo todo. Al final, mi madre, que es una guerrera absoluta, superó con éxito esta segunda prueba.",
      ch6Text3: "Me resultó una propuesta de trabajo en España que me garantizaba quedarme legal con contrato a largo plazo. Pero la idea de encerrarme a trabajar en una empresa tradicional simplemente no encajaba conmigo. Ahí nació Mango Creative Studio, mi prueba piloto para trabajar de forma freelance mientras viajaba por India, Vietnam, Tailandia, Israel, Italia y Estados Unidos y bueno… también abriendo las puertas de mi corazón para el amor.",
      ch7Title: "La Pregunta de los Viajeros",
      ch7Dialog: "“Che/Oye, ¿y vos a qué te dedicás que estás acá en un día laboral, al mediodía, metido en un café o cerca de la playa?”",
      ch7Text1: "En cada destino me iba encontrando con otros viajeros. Siempre que te topás con gente en la misma sintonía, te pica la curiosidad y nace la típica pregunta:",
      ch7Text2: "Así fue como empecé a conectar con personas que tenían distintas necesidades en sus negocios. Muchos lideraban startups o impulsaban su marca personal; proyectos que funcionaban bien, pero que pasaban por aprietos que yo misma me postulaba a solucionar. Día a día puse a prueba mi creatividad, diseñando estrategias a la medida de la gente que me cruzaba en el camino. Al recopilar tantos retos con resultados positivos, me di cuenta de algo: el método que aplicaba, y que siempre funcionaba con éxito, tenía un gran común denominador.",
      galleryTag: "Galería de Viaje",
      galleryTitle: "La vida detrás de la estrategia",
      gallerySubtitle: "India, Tailandia y cada destino que marcó el camino: momentos reales del viaje donde nació Estrategia 360.",
      ch8Title: "Nace Estrategia 360",
      ch8Text1: "Hoy lo llamo Estrategia 360: una metodología integral que une el desarrollo del negocio, las estrategias digitales y la mentalidad de crecimiento.",
      ch8Text2: "A través de este método, he liderado la optimización de operaciones para personas en diferentes partes del mundo, ayudándolas a romperla en sus industrias. He guiado a marcas a pasar de aprietos financieros a generar facturaciones de $250,000 USD.",
      ch8Text3: "Así nació KT. VELASQUEZ.",
      ctaTitle: "Hablemos Claro",
      ctaText1: "En cada etapa de mi vida tuve la oportunidad de tomar el camino 'seguro' de un empleo tradicional, pero siempre seguí mi pasión por el emprendimiento. ¿Por qué? Esa historia se las comparto cuando me inviten a un podcast.",
      ctaText2: "No te cuento todo esto para que veas qué tan triste fue mi historia, hubieron también cosas maravillosas. Te lo cuento porque si te identificas con alguna de mis etapas y decides contar la tuya, estoy aquí para que nos sentemos, nos tomemos un café y hablemos como si estuviéramos en la sala de tu casa hablando regias e intergalácticas pero sin pelos en la lengua.",
      ctaButton: "Inscríbete aquí y hablemos"
    },
    testimonials: {
      title: "Lo que dicen las que ya están construyendo con claridad"
    },
    faq: {
      title: "Preguntas",
      accent: "antes de empezar"
    },
    cta: {
      title: "Deja de improvisar el próximo",
      accent: "paso",
      suffix: "de tu negocio",
      desc: "Agenda una sesión estratégica de 30 minutos. Analizaremos dónde está tu negocio hoy y definiremos la hoja de ruta para tu enfoque 360.",
      button: "Programar mi sesión"
    },
    footer: {
      tagline: "Especialista en Estrategia 360° uniendo la lógica de la Ingeniería Civil con la ejecución del Marketing Digital.",
      newsletter: "Boletín Informativo",
      subscribe: "Suscribirse",
      placeholder_name: "Nombre",
      placeholder_lastname: "Apellido",
      placeholder_email: "Correo Electrónico",
      contact_title: "Contacto & Cobertura",
      contact_phone: "Teléfono",
      contact_whatsapp: "WhatsApp",
      service_area: "Medellín, Colombia & Remoto Internacional",
      privacy_policy: "Política de Privacidad"
    },
    faqs: [
      {
        q: "¿Para quién NO es esto?",
        a: "No soy una coach motivacional; mi enfoque está en darte estructura y claridad, no discursos de inspiración. Este espacio no es para ti si prefieres los rodeos o las respuestas maquilladas; me gusta hablar con total transparencia y honestidad sobre lo que tu negocio necesita para crecer."
      },
      {
        q: "¿Recibo proyectos desde cero?",
        a: "Sí, por supuesto, siempre y cuando ya cuentes con experiencia previa emprendiendo. Si ya conoces la realidad de gestionar un negocio y esta vez quieres fundar con bases sólidas y orden estratégico desde el primer día, eres más que bienvenido."
      },
      {
        q: "¿Cuánto tiempo tarda en verse resultados?",
        a: "La claridad llega en la primera sesión. Los resultados medibles, en 60 a 90 días. Pero esto no es magia: depende de qué tan rápido implementas."
      }
    ],
    marquee: [
      "Mentalidad Ejecutiva",
      "Estructura de Negocio",
      "Posicionamiento de Marca",
      "Estrategia Digital 360",
      "Visión a Largo Plazo",
      "Crecimiento Sostenible"
    ]
  },
  en: {
    nav: {
      inicio: "Home",
      sobre_mi: "About Me",
      metodologia: "Methodology",
      servicios: "Services",
      contacto: "Contact",
      podcast: "Podcast"
    },
    hero: {
      consultoria: "360° Strategic Consulting",
      360: "360",
      katherine: "Katherine",
      velasquez: "Velasquez",
      h1_keyword: "360° Strategic Consulting for Founders and Brands",
      direccion: "Strategic direction for future-oriented brands and businesses.",
      description: "I integrate business structure, digital strategy, and executive mindset to help you scale with clarity—without burning out along the way.",
      cta: "Let's discuss your project"
    },
    banner: {
      para_quienes: "for those",
      estan_construyendo: "building something",
      algo_real: "real.",
      desc: "Startups, established businesses, and leaders building personal brands who are done with improvising and are ready for clarity, structure, and a sustainable expansion plan."
    },
    logos: {
      trust: "Trusted by founders at"
    },
    diagnostic: {
      tag: "The Common Diagnosis",
      title: "Your business or brand is growing, yet you're left wondering: what's next?",
      desc1: "You've built traction and validated your market, but the day-to-day operations still feel reactive. There's a mismatch between your logistics, your brand narrative, and your own energy as a leader.",
      desc2: "I am the strategist you call when you're ready to stop guessing and design a clear path to scale.",
      cta: "TALK WITH ME"
    },
    about: {
      tag: "Hi, I'm Katherine",
      desc1: "I am a Civil Engineer with a double master's degree in Marketing and Digital Communication. Having founded my own businesses and advised startups and corporate ventures, I realized that scaling isn't just about clever marketing or optimized workflows.",
      desc2: "True expansion happens at the intersection of three pillars: business structure, communication strategy, and executive leadership mindset. This is my 360° approach. I help founders and mature brands operate with systematic clarity and strategic direction."
    },
    methodology: {
      title: "The 360°",
      title_accent: "Ecosystem",
      desc: "Interconnected pillars. Bulletproof execution.",
      p1_title: "Business Structure",
      p1_desc: "We optimize your operations, workflows, and business models. If the internal engine isn't efficient, external traction will eventually break the business.",
      p2_title: "Strategy & Social Media",
      p2_desc: "We craft a brand narrative and digital strategy that doesn't just chase vanity likes, but positions your authority, attracts ideal clients, and converts.",
      p3_title: "Executive Mindset",
      p3_desc: "The bottleneck of a business is usually the mind of the leader. We work on decision-making, strategic focus, and the resilience needed to sustain long-term growth.",
      p4_title: "Execution & Analytics",
      p4_desc: "We implement with clear frameworks, measure with real data, and adjust accordingly. Strategy without execution is just theory."
    },
    services: {
      title: "Strategic Solutions",
      desc: "Structure and clarity built for your current stage of growth.",
      t1_title: "360° Personal Brand Mentorship",
      t1_subtitle: "Authority and positioning for leaders",
      t1_desc: "This program is custom-designed for you if you are a professional or founder looking to package your expertise, dominate your niche, and build an influential personal brand with a clear strategy and a solid mindset.",
      t1_features: [
        "Core positioning pillars definition: We will identify the strategic bases upon which you will build your authority in the market.",
        "Differentiation audit and market analysis: We will analyze your competitors in detail to find your unique value and help you stand out clearly.",
        "Comprehensive Social Media and content strategy: We will design a custom plan so you know exactly what to publish, how to communicate it, and how to convert your audience into clients.",
        "UX Writing and authority storytelling training: You will learn the persuasive writing techniques and message structures needed to ensure every post generates impact and trust.",
        "Focus and mindset work: We will develop the tools to overcome blockages and communicate with confidence, clarity, and constant focus on your goals.",
        "Action plan tailored to your pace: We will build a clear, actionable step-by-step roadmap that fits your real agenda to ensure you move forward confidently toward your goals."
      ],
      t1_plans: [
        {
          name: "VIP 360 Program (Most Popular)",
          desc: "12 Mentorship Hours — 3-month accompaniment",
          price: "$900.000 COP",
          link: "https://checkout.wompi.co/l/2CNIob"
        },
        {
          name: "Strategic Acceleration",
          desc: "8 Advisory Hours — 2-month accompaniment",
          price: "$700.000 COP",
          link: "https://checkout.wompi.co/l/k2bWcs"
        },
        {
          name: "Key Boost",
          desc: "4 Advisory Hours — 1-month accompaniment",
          price: "$400.000 COP",
          link: "https://checkout.wompi.co/l/4CnI6A"
        },
        {
          name: "Express Diagnostic Session",
          desc: "1 Hour of focused Advisory",
          price: "$180.000 COP",
          link: "https://checkout.wompi.co/l/Cuakxy"
        }
      ],
      t2_tag: "Featured",
      t2_title: "Premium 1:1 Consulting (Startups & SMEs)",
      t2_subtitle: "Business direction and optimization",
      t2_desc: "This program is designed for you and your team if you lead a startup or established company and want to accelerate its growth. We will analyze your business model in depth to align your commercial goals with an efficient operation and a high-converting digital presence.",
      t2_features: [
        "Deep diagnostic of current operations: We will analyze your business's state in depth to identify bottlenecks, inefficiencies, and immediate opportunities for improvement.",
        "6-month strategic expansion plan: We will design a clear, actionable, and customized roadmap for your company to scale your results in an orderly manner.",
        "Alignment of Marketing, Sales, and Operations: We will align all areas of your business to speak the same language to maximize client conversion and retention.",
        "Analytics audit and funnel optimization: We will review your metrics and sales channels to adjust each stage of the funnel and optimize your return on investment.",
        "Direct advisory in decision-making: You will have a strategic partner by your side to validate key steps, overcome bottlenecks, and execute with confidence.",
        "Priority support and direct WhatsApp access: We will maintain constant and smooth communication to solve your daily questions without slowing down your business's momentum."
      ],
      t2_plan: {
        name: "Monthly Business Advisory",
        price: "$600.000 COP",
        link: "https://checkout.wompi.co/l/XlbNWX"
      },
      t3_title: "Workshops & In-Company Training",
      t3_subtitle: "Strategic training for high-performing teams",
      t3_desc: "This program is designed for you and your company if you are looking to transform the capabilities of your human talent in a direct and interactive way. Through intensive sessions and practical workshops at your organization's facilities, we will align your team under the 360° Ecosystem to boost their performance and take your business results to the next level.",
      t3_features: [
        "Intensive workshops (in-person or remote): We will train your team face-to-face with dynamic methodologies, practical activities, and real-time interaction tailored to your operations.",
        "Hands-on digital analytics training: We will train your talent live to make decisions based on real data and optimize every strategic action.",
        "Implementation of the 360° Ecosystem: We will guide your team in person to integrate this framework, enabling them to work cohesively and with a global business vision.",
        "Workflow optimization and agility: We will work shoulder-to-shoulder with your team to eliminate daily friction, accelerate delivery times, and boost productivity.",
        "Team alignment and integration: We will create a connection space where all collaborators steer in the same direction, sharing the same strategic goals."
      ],
      t3_inclusions: "Included in all sessions: We will deliver practical materials and execution playbooks (step-by-step physical and digital guides) with tools ready to apply from day one.",
      t3_question: "Which area of your team needs help today? (Let's talk and I'll design a custom session for you).",
      t3_plan: {
        name: "Strategic training for teams - 1 Hour Mentorship",
        price: "$190.000 COP",
        link: "https://checkout.wompi.co/l/1dvqBr"
      }
    },
    newsletter: {
      tag: "Join the 360° Newsletter",
      title: "Strategy Delivered Straight to Your Inbox",
      desc: "Weekly insights on business optimization, analytics, and digital strategy for founders. No fluff.",
      placeholder: "Your email",
      button: "Join the Newsletter",
      submitting: "Submitting...",
      success: "Subscribed!",
      error: "Error"
    },
    podcast: {
      tag: "Podcast",
      title_p1: "Estrategia 360:",
      title_p2: "The Podcast",
      desc: "Honest conversations, deep-dive business analysis, and growth tools for leaders who prioritize substance over hype. Through real stories of real founders, we explore the mindset and systems required to sustain success.",
      cta: "Listen to Podcast"
    },
    podcastPage: {
      heroTag: "THE PODCAST",
      heroTitlePart1: "360° Strategy:",
      heroTitlePart2: "Raw & Unfiltered",
      heroSubtitle: "The safe space where CEOs, business owners, and entrepreneurs take off the corporate mask to talk about the real truth of business.",
      manifestoTag: "Manifesto",
      manifestoP1: "We are not here to throw around fancy words or polite LinkedIn speeches that nobody understands.",
      manifestoP2: "This is a free and safe space to confess all the emotions we go through when we decide to step out of the rat race and try something that truly fulfills us. We want to talk about how we feel when we break, when we make the mistake that leads to bankruptcy, when we have to start from scratch... but also how we crush it, how we achieved what we wanted, and what our future dreams are.",
      manifestoP3: "Here we understand that business development + digital strategies + mindset (of both the team and the CEO) go hand in hand. Without filters, as if we were sitting in the living room with your best friend.",
      valuesTitle: "What do we stand for here?",
      valuesSubtitle: "To sit down and have a coffee with me, you don't need to be perfect. You need to be real. I look for leaders who are:",
      value1Title: "Passionate & Visionary Dreamers",
      value1Desc: "Who don't settle and are always striving for more.",
      value2Title: "Resilient",
      value2Desc: "Who know what it means to fall and have the courage to stand back up.",
      value3Title: "Parents & Genuine People",
      value3Desc: "Who balance life, chaos, and business with self-love (or are on the path to finding and taking care of themselves).",
      platformsTitle: "Listen on your favorite platform",
      ctaTitle: "Do you identify with this and want to tell your story?",
      ctaSubtitle: "I'm not looking for perfect bosses; I look for real, everyday, flesh-and-blood people who are ready to inspire through honesty. If you want to be a guest on my podcast to have coffee and speak clearly:",
      ctaButton: "Apply here to be a guest",
      formName: "Full Name",
      formEmail: "Email Address",
      formSocial: "Social Media or Website (Instagram, LinkedIn, etc.)",
      formStory: "Briefly tell us your story and the topic you would like to share",
      formSuccess: "Application submitted successfully! We will get in touch soon.",
      formSubmitting: "Submitting application...",
      formError: "An error occurred. Please try again."
    },
    aboutPage: {
      heroTag: "About Me",
      heroTitlePart1: "Hello, I'm",
      heroTitlePart2: "Katherine Velasquez Garcia",
      heroSubtitle: "Civil Engineer by profession, strategist by passion, and entrepreneur by instinct.",
      ch1Title: "Roots & Independence",
      ch1Text: "Since I was a child, I was resourceful and independent; I sold caramel cones and accessories because I wanted my own income. In my first college semesters, I went to downtown Medellín to sell jeans and hand out flyers just to secure my first trip to Coveñas. It was always clear to me that movement and independence were my path.",
      ch2Title: "The Academic Marathon",
      ch2Text1: "Before finishing my degree, I decided to open my own businesses: a tattoo studio and a rock clothing store in the famous Paseo de the Playa shopping center. For three years, I was in an impressive marathon: I studied Civil Engineering, did an MBA applying every class directly to my businesses, and worked as a professional dancer at night.",
      ch2Text2: "In the end, I did my thesis calculating the rainfall runoff risk with the help of Empresas Públicas de Medellín (EPM). I graduated, but decided not to practice civil engineering or work for anyone else. I stayed independent.",
      ch3Title: "The Collision & The Crash",
      ch3Text: "I moved my businesses to El Poblado, opened a screen printing workshop, and fell in love with professional piercing. I was newly married and decided to make my biggest investment... just before the pandemic hit. COVID hit me hard: I fell into total bankruptcy and was forced into absolute liquidation, with no options left.",
      ch3Callout: "But crises don't freeze me.",
      ch4Title: "Resilience From Scratch",
      ch4Text: "Right in the middle of the pandemic, I rose again from scratch as a professional piercer and created my brand, Katherine Piercing Jewelry. But as I was getting back on my feet financially, I entered a massive emotional trial: I received the news that my mother had cancer. Without hesitation, I started the beautiful yet challenging journey of caring for, assisting, and supporting her with all the love in my soul. My mother overcame this great test. After two years of such a heavy load, my relationship hit a rough patch, and I decided to separate after a 12-year relationship. With my self-esteem on the floor but my drive intact, I decided not to let myself be defeated and started from scratch in every aspect of my life.",
      ch5Title: "Sudden Emigration & Risk Management",
      ch5Text: "I threw myself headfirst into the world of trading. Living alone, empowered, and combining body piercing with investing, I started feeling at my best. I organized my projects to leave the country step-by-step, but life decided to speed up the clock and change my plans overnight. Due to a financial conflict involving a very close family member I love, which directly compromised my peace of mind, I was forced to make a radical decision: emigrate in less than a week.",
      ch5Quote: "“Sometimes, the best risk management is given to you by life itself.”",
      ch6Title: "Adventures & Mango Creative",
      ch6Text1: "I lived through too many wild adventures abroad. To certify all the business experience I carried from so many years, I applied for two scholarships for a double master's degree in Madrid... and I got in! That gave me the opportunity to live in Spain for a while. However, the emotional roller coaster of trading did not align with the peace I wanted for my future, so I decided to step away from the markets, even though I was doing well.",
      ch6Text2: "All of us who have emigrated know it's a process where your body is in another country, but your heart remains in Colombia. And it was right then when I received the second wave: my mother was diagnosed with cancer again. Since I couldn't be physically there to care for her like the first time, my beloved father played an amazing role supporting everything. In the end, my mother, who is an absolute warrior, successfully overcame this second battle.",
      ch6Text3: "I received a job offer in Spain that guaranteed I could stay legally with a long-term contract. But the idea of locking myself up to work in a traditional company simply didn't fit who I was. That's how Mango Creative Studio was born, my pilot project to work freelance while traveling through India, Vietnam, Thailand, Israel, Italy, and the United States—and, well, also opening the doors of my heart to love.",
      ch7Title: "The Traveler's Question",
      ch7Dialog: "“Hey, what do you do for a living that you're here on a workday, at noon, sitting in a cafe or near the beach?”",
      ch7Text1: "In every destination, I met other travelers. Whenever you run into people on the same wavelength, curiosity strikes, and that typical question is born:",
      ch7Text2: "That's how I started connecting with people who had different needs in their businesses. Many led startups or were boosting their personal brands; projects that were running well but going through tight spots that I offered to solve. Day by day, I tested my creativity, designing custom strategies for the people I met along the way. Collecting so many challenges with positive results, I realized something: the method I applied, which always worked successfully, had a huge common denominator.",
      galleryTag: "Travel Gallery",
      galleryTitle: "The life behind the strategy",
      gallerySubtitle: "India, Thailand, and every destination that shaped the path: real moments from the journey where Estrategia 360 was born.",
      ch8Title: "Estrategia 360 is Born",
      ch8Text1: "Today I call it Estrategia 360 (360° Strategy): an all-encompassing methodology that binds business development, digital strategies, and a growth mindset.",
      ch8Text2: "Through this method, I have led operations optimization for people in different parts of the world, helping them crush it in their industries. He guided brands to go from financial struggles to generating revenues of $250,000 USD.",
      ch8Text3: "That's how KT. VELASQUEZ was born.",
      ctaTitle: "Let's Talk Straight",
      ctaText1: "At every stage of my life, I had the chance to take the 'safe' path of a traditional job, but I always followed my passion for entrepreneurship. Why? That story I will share when you invite me to a podcast.",
      ctaText2: "I don't tell you all this to make you see how sad my story was—there were also wonderful things. I tell you this because if you identify with any of my stages and decide to tell yours, I am here for us to sit down, have coffee, and talk as if we were sitting in your living room talking 'regias' and 'intergalácticas', but completely unfiltered.",
      ctaButton: "Apply here and let's talk"
    },
    testimonials: {
      title: "What those building with clarity are saying"
    },
    faq: {
      title: "Questions",
      accent: "before we begin"
    },
    cta: {
      title: "Stop improvising the next",
      accent: "step",
      suffix: "of your business",
      desc: "Book a complimentary 30-minute strategy session. We'll analyze where your business stands today and map out the roadmap for your 360° growth.",
      button: "Schedule my session"
    },
    footer: {
      tagline: "360° Strategy Specialist bridging Civil Engineering logic with Digital Marketing execution.",
      newsletter: "Newsletter Signup",
      subscribe: "Subscribe",
      placeholder_name: "First Name",
      placeholder_lastname: "Last Name",
      placeholder_email: "Email Address",
      contact_title: "Contact & Service Area",
      contact_phone: "Phone",
      contact_whatsapp: "WhatsApp",
      service_area: "Medellin, Colombia & International Remote",
      privacy_policy: "Privacy Policy"
    },
    faqs: [
      {
        q: "Who is this NOT for?",
        a: "I am not a motivational coach; my focus is on giving you structure and clarity, not inspirational speeches. This space is not for you if you prefer beating around the bush or sugarcoated answers; I like to speak with total transparency and honesty about what your business needs to grow."
      },
      {
        q: "Do I accept projects from scratch?",
        a: "Yes, of course, as long as you already have prior entrepreneurial experience. If you already know the reality of managing a business and this time you want to build with solid foundations and strategic order from day one, you are more than welcome."
      },
      {
        q: "How long does it take to see results?",
        a: "Clarity comes in the very first session. Measurable results in 60 to 90 days. But this is not magic: it depends on how fast you implement."
      }
    ],
    marquee: [
      "Executive Mindset",
      "Business Structure",
      "Brand Positioning",
      "360° Digital Strategy",
      "Long-term Vision",
      "Sustainable Growth"
    ]
  }
};
