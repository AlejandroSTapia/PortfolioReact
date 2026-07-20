//import { code } from 'three/examples/jsm/nodes/Nodes.js';
import {
  IA,
  agentvoice,
  automation,
  backend_apis,
  frontend,
  crm,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  ghl,
  elevenlabs,
  make,
  n8n,
  csharp,
  mysql,
  gcp,
  python,
  postgresql,
  rubyrails,
  graphql,
  leaderboard,
  math,
  movie,
  nyeusi,
  ciosa,
  bullrocket,
  coding,
  network,
  panel_bull_contact,
  eleven_conversaciones,
  make_getDataLeadtoEleven,
  ghl_wf_LanzarLlamadaaLead,
  panel_eleven,


  page_bullrocket_home,
  collage_back_WP,
  form_call_WG_Elias,
  wordpressEditorElementor,
  wordpressAutomation,

  wordpressWebhookHandler,
wordpressIntegracionApi,
wordpressElevenLabs,
wordpressInfraestructura,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca de mí",
  },
  {
    id: "projects",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Arquitectura de Soluciones IA",
    icon: IA,
  },
  {
    title: "Agentes de Voz",
    icon: agentvoice,
  },
  {
    title: "Automatización de Procesos",
    icon: automation,
  },
  {
    title: "Desarrollo Backend & APIs",
    icon: backend_apis,
  },
  {
    title: "Desarrollo Frontend",
    icon: frontend,
  },
  {
    title: "Integraciones CRM & Webhooks",
    icon: crm,
  },
  {
    title: "Diseño UI/UX",
    icon: ux,
  },
  {
    title: "Prototipo de Software",
    icon: prototyping,
  },
];

const technologies = [
  // --- 1. IA & Automatización (Tu gancho principal) ---
  {
    name: "ElevenLabs",
    icon: elevenlabs,
  },
  {
    name: "GoHighLevel",
    icon: ghl,
  },
  {
    name: "Make",
    icon: make,
  },
  {
    name: "n8n",
    icon: n8n,
  },

  // --- 2. Backend & Arquitectura (Tu motor) ---
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C# .NET",
    icon: csharp,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  // --- 3. Frontend (Tus interfaces) ---
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  // --- 4. Bases de Datos ---
  {
    name: "MySQL",
    icon: mysql,
  },

  // --- 5. Cloud, DevOps & Control de Versiones ---
  {
    name: "Google Cloud", // O puedes cambiarlo por Azure si prefieres
    icon: gcp,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Integration Developer & AI Solutions Architect",
    company_name: "BullRocket",
    icon: bullrocket,
    iconBg: "#333333",
    date: "Enero 2025 - Actualidad",
    points: [
      "Arquitectura RAG & MCP: Diseño de sistemas conectados a MySQL y Google Cloud Console para vincular LLMs con datos estructurados.",
      "Agentes de Voz e Interfaces: Desarrollo de soluciones automatizadas utilizando Twilio, ElevenLabs y código backend (NodeJS, TS, .NET).",
      "Ecosistema de Automatización: Orquestación de flujos complejos en n8n y Make, integrando agentes de chat avanzados en GoHighLevel (GHL).",
      "DevOps e Infraestructura: Gestión integral de servidores, dominios y despliegues en plataformas como Railway, Render y Supabase.",
    ],
  },
  {
    title: "Ingeniero de Software en .NET y React",
    company_name: "Ciosa Autotodo",
    icon: ciosa,
    iconBg: "#333333",
    date: "Enero 2023 - Enero 2025",
    points: [
      "Desarrollo de APIs REST en ASP.NET Core y automatización de pagos en el ERP integrando la API de Mercado Pago.",
      "Implementación de la API de conversiones de Meta en el sitio web de ventas para optimizar el marketing digital.",
      "Desarrollo de aplicaciones empresariales multiplataforma utilizando Blazor WebAssembly, React PWA y Xamarin.",
      "Gestión de repositorios, integración continua y despliegues (CI/CD) utilizando GitHub Actions y Azure Pipelines.",
    ],
  },
  {
    title: "Desarrollador Full-Stack Freelance",
    company_name: "Independiente",
    icon: coding,
    iconBg: "#333333",
    date: "Enero 2021 - Diciembre 2023",
    points: [
      "Diseño y desarrollo de aplicaciones web y móviles a la medida utilizando Angular, Laravel, Ionic y Android Studio.",
      "Creación de APIs REST con PHP/Laravel y administración de bases de datos relacionales en MySQL.",
      "Gestión y despliegue de proyectos en servidores locales y plataformas cloud como Azure, Vercel y Railway.",
      "Publicación exitosa de aplicaciones móviles nativas directamente en la Google Play Store.",
    ],
  },
];

const projects = [
  {
    id: "project-1",

    slug: "agentes-ia-omnicanal",

    shortName: "AGENTES IA",

    name: "Automatización omnicanal con agentes de IA",

    description:
      "Solución privada que conecta agentes de WhatsApp y voz para atender, calificar y dar seguimiento a leads mediante workflows, telefonía e integraciones personalizadas.",

    image: panel_bull_contact,

    tags: [
      {
        name: "GoHighLevel",
      },
      {
        name: "ElevenLabs",
      },
      {
        name: "Twilio",
      },
      {
        name: "Make",
      },
    ],

    note:
  "Caso profesional · Información pública limitada · No se comparte código, prompts ni repositorio",
    repo: null,

    demo: null,

    challenge:
      "La operación necesitaba conectar la atención por WhatsApp con llamadas automatizadas, conservar el contexto del lead y mantener sincronizada la información entre diferentes plataformas.",

    solution:
      "Se diseñó una arquitectura donde GoHighLevel gestiona el canal de WhatsApp y los workflows iniciales, Make coordina webhooks y transformaciones, ElevenLabs ejecuta el agente de voz y Twilio proporciona la infraestructura telefónica.",

    role: "Diseñé la arquitectura de integración, configuré los agentes de chat y voz, desarrollé prompts y bases de conocimiento, construí workflows, configuré tools en ElevenLabs y desarrollé APIs, webhooks y servicios MCP para conectar los agentes con sistemas externos.",

    architecture: {
      eyebrow: "Flujo técnico",

      title: "Arquitectura e integraciones",

      description:
        "El flujo inicia cuando el agente de WhatsApp detecta una solicitud de llamada. GoHighLevel activa un workflow y envía la información a Make. El escenario valida y transforma los datos, ejecuta las integraciones necesarias y solicita a ElevenLabs el inicio de la llamada a través de Twilio. Durante la conversación, el agente puede utilizar tools y servicios externos para consultar, validar o actualizar información.",

      diagram: `Lead
  │
  ▼
WhatsApp
  │
  ▼
GoHighLevel
  │
  ├── Agente de chat
  ├── Workflows
  └── Solicitud de llamada
          │
          ▼
        Webhook
          │
          ▼
         Make
          │
          ├── Validación
          ├── Transformación de datos
          ├── APIs propias
          └── Registro de eventos
                  │
                  ▼
             ElevenLabs
                  │
                  ├── Agente de voz
                  ├── Base de conocimiento
                  └── Tools / MCP
                          │
                          ▼
                        Twilio
                          │
                          ▼
                     Llamada al lead`,
    },
    result:
      "La solución centraliza la comunicación entre chat, llamadas, automatizaciones y servicios externos, reduciendo intervenciones manuales y conservando la trazabilidad de cada interacción.",

    technologies: [
      "GoHighLevel",
      "ElevenLabs",
      "Twilio",
      "Make",
      "REST APIs",
      "Webhooks",
      "MCP",
    ],

    demoSection: {
  eyebrow: "Demostración",

  title: "Prueba los agentes",

  description:
  "Puedes probar el agente de WhatsApp o contactar al agente de voz. En dispositivos móviles se abrirá la aplicación telefónica; en escritorio se copiará el número para que puedas utilizarlo desde otro dispositivo.",
  actions: [
    {
      id: "whatsapp-agent",

      type: "whatsapp",

      label: "Probar agente de WhatsApp",

      detail: "+52 221 420 9187",

      href:
        "https://wa.me/522214209187?text=Hola%2C%20quiero%20probar%20el%20agente%20de%20WhatsApp.",

      external: true,
    },

{
  id: "voice-agent",

  type: "adaptive-phone",

  desktopLabel: "Copiar número del agente",

  mobileLabel: "Llamar al agente de voz",

  detail: "+52 222 912 6662",

  phone: "+522229126662",

  href: "tel:+522229126662",
},
  ],

note:
  "La disponibilidad puede variar. Las llamadas y mensajes pueden generar cargos según el operador del usuario.",
},

    evidence: {
      eyebrow: "Demostración",

      title: "Evidencia técnica",

      description:
        "Las capturas utilizan información limitada, datos de demostración y configuraciones anonimizadas para proteger la identidad del cliente y la infraestructura privada.",

      screenshots: [
        {
          src: panel_eleven,
          alt: "Panel de control del agente de voz en ElevenLabs",
          caption:
            "Información principal del agente mediante dashboards y asi poder visualizar de mejor manera el funcionamiento y flujo del agente de voz.",
        },
        {
          src: eleven_conversaciones,
          alt: "Conversación de demostración del agente de voz en ElevenLabs",
          caption:
            "Transcripcion y audio de la conversación de un lead que interactúa con el agente de voz.",
        },
        // {
        //   src: agentesWhatsapp,
        //   alt: 'Conversación de demostración del agente de WhatsApp',
        //   caption:
        //     'Conversación anonimizada donde el agente identifica la intención del lead y solicita los datos necesarios para iniciar una llamada.',
        // },
        {
          src: ghl_wf_LanzarLlamadaaLead,
          alt: "Workflow automatizado en GoHighLevel",
          caption:
            "Workflow encargado de detectar la solicitud de llamada y enviar la información hacia la capa de orquestación.",
        },
        {
          src: make_getDataLeadtoEleven,
          alt: "Escenario de integración desarrollado en Make",
          caption:
            "Escenario que recibe el webhook, valida los datos, transforma la información y ejecuta las integraciones externas, asi como guardar en el panel de cliente.",
        },
        // {
        //   src: agentesElevenLabs,
        //   alt: 'Configuración del agente de voz en ElevenLabs',
        //   caption:
        //     'Configuración anonimizada del agente, su prompt, variables dinámicas y base de conocimiento.',
        // },
        // {
        //   src: agentesTools,
        //   alt: 'Tools configuradas para el agente de ElevenLabs',
        //   caption:
        //     'Herramientas utilizadas por el agente para consultar, validar y actualizar información mediante APIs y webhooks.',
        // },
        // {
        //   src: agentesApi,
        //   alt: 'API personalizada para integración con agentes de IA',
        //   caption:
        //     'Endpoint propio utilizado como capa backend entre los agentes conversacionales y los servicios externos.',
        // },
        // {
        //   src: agentesResultado,
        //   alt: 'Resultado final de la automatización',
        //   caption:
        //     'Registro anonimizado del resultado de la llamada y de la actualización realizada por el flujo automatizado.',
        // },
      ],
    },
  },
 {
  id: "project-wordpress",

  slug: "backend-wordpress",

  shortName: "BACKEND WORDPRESS",

  name: "Ingeniería backend e infraestructura WordPress",

  description:
    "Implementación y administración de plataformas WordPress con plugins propios, lógica PHP, integraciones de IA, automatizaciones y gestión técnica de hosting.",

  image: collage_back_WP,

  tags: [
    {
      name: "WordPress",
    },
    {
      name: "PHP",
    },
    {
      name: "Hostinger",
    },
    {
      name: "REST APIs",
    },
  ],

  note:
    "Caso profesional compuesto · Implementaciones seleccionadas y anonimizadas",

  repo: null,

  demo: null,

  challenge:
    "Los proyectos requerían mucho más que construir páginas visuales: era necesario implementar funcionalidades personalizadas, conectar servicios externos, administrar el hosting y mantener una arquitectura estable dentro del ecosistema WordPress.",

  solution:
    "Se desarrollaron plugins y fragmentos de lógica personalizados, integraciones mediante APIs y webhooks, widgets de IA, personalizaciones de temas y plantillas, además de configuraciones técnicas y mantenimiento de los entornos alojados en Hostinger.",

  role:
    "Me encargué del desarrollo backend en WordPress, programación PHP, creación y modificación de plugins, implementación de hooks y filtros, integración de servicios externos, inserción de código personalizado, administración mediante Hostinger y cPanel, y construcción de páginas modulares utilizando Elementor y Gutenberg.",

  architecture: {
    eyebrow: "Arquitectura web",

    title: "WordPress como plataforma extensible",

    description:
      "La arquitectura representa distintas implementaciones realizadas en entornos WordPress. Cada proyecto utiliza únicamente los componentes necesarios, combinando la capa visual del CMS con lógica personalizada, integraciones externas y administración técnica del hosting.",

    diagram: `Visitante
  │
  ▼
Frontend WordPress
  │
  ├── Tema y plantillas
  ├── Elementor / Gutenberg
  ├── Componentes personalizados
  └── Widget de IA
          │
          ▼
Aplicación WordPress
  │
  ├── Plugins propios
  ├── Hooks y filtros
  ├── Código PHP / JavaScript
  ├── REST API / Webhooks
  └── MySQL
          │
          ▼
Servicios externos
  │
  ├── ElevenLabs
  ├── APIs de terceros
  └── Automatizaciones
          │
          ▼
Infraestructura
  │
  ├── Hostinger / cPanel
  ├── Archivos y configuración PHP
  ├── Dominios y SSL
  └── Logs, respaldos y mantenimiento`,
  },

  result:
    "Las implementaciones permitieron incorporar funcionalidades y automatizaciones específicas, integrar servicios de IA y mantener los sitios desde una perspectiva completa que abarca interfaz, backend, datos e infraestructura.",

  technologies: [
    "WordPress",
    "PHP",
    "MySQL",
    "JavaScript",
    "HTML",
    "CSS",
    "REST APIs",
    "Webhooks",
    "Hostinger",
    "cPanel",
    "Elementor",
    "Gutenberg",
    "ElevenLabs",
  ],

  demoSection: {
  eyebrow: "Sitio web",

  title: "Ver implementación en producción",

  description:
    "El sitio permite consultar el resultado público de distintas implementaciones realizadas en WordPress, incluyendo páginas personalizadas, formularios e integraciones de agentes de IA.",

  actions: [
    {
      id: "production-site",

      type: "website",

      label: "Visitar sitio web",

      detail: "bullrocket.com.mx",

      href: "https://bullrocket.com.mx/",

      external: true,
    },
  ],

  note:
    "El sitio continúa en operación y su contenido puede cambiar con el tiempo.",
},

  evidence: {
    eyebrow: "Implementación",

    title: "Evidencia técnica y visual",

    description:
      "Selección de implementaciones realizadas en entornos WordPress. Se ocultan dominios, credenciales, datos empresariales y configuraciones privadas.",

    screenshots: [
      {
  src: form_call_WG_Elias,

  alt:
    "Agente de voz integrado en un formulario WordPress con datos dinámicos",

  caption:
    "Resultado funcional de la integración: después de validar y enviar el formulario, el sitio prepara el contexto del lead, abre una experiencia de llamada personalizada y presenta el agente de voz en un modal controlado desde WordPress.",
},

{
  src: wordpressEditorElementor,

  alt:
    "Configuración del formulario de llamada en Elementor",

  caption:
    "Construcción del formulario en Elementor con campos de contacto, selección de necesidad y un token oculto utilizado para relacionar la información enviada con el análisis recuperado antes de iniciar la llamada.",
},

{
  src: wordpressWebhookHandler,

  alt:
    "Captura de datos y envío seguro desde Elementor hacia Make",

  caption:
    "Lógica JavaScript y PHP utilizada para generar un token de correlación, capturar los campos del formulario, sanitizar la información y enviar el payload desde WordPress hacia el flujo de automatización.",
},

{
  src: wordpressIntegracionApi,

  alt:
    "Endpoint REST personalizado desarrollado dentro de WordPress",

  caption:
    "API REST desarrollada en WordPress para recibir el análisis generado por la automatización, validarlo mediante un secreto en headers, almacenarlo temporalmente y permitir que el frontend consulte cuándo está listo.",
},

{
  src: wordpressElevenLabs,

  alt:
    "Personalización del widget de ElevenLabs dentro de WordPress",

  caption:
    "Integración avanzada del widget de voz mediante JavaScript personalizado: precarga del componente, modal propio, variables dinámicas, recuperación del contexto del lead, inicio controlado de la llamada y manejo de estados y fallbacks.",
},

{
  src: wordpressAutomation,

  alt:
    "Flujo de automatización entre WordPress, IA y CRM",

  caption:
    "Escenario de Make encargado de recibir los datos del formulario, consultar el sitio del lead, generar un análisis con IA, enviar el contexto al endpoint de WordPress y registrar el contacto en el CRM.",
},

{
  src: wordpressInfraestructura,

  alt:
    "Administración técnica del hosting y la instalación WordPress",

  caption:
    "Administración del entorno de hosting, estructura de archivos, HTTPS, rendimiento, respaldos y configuraciones necesarias para desplegar y mantener la plataforma WordPress.",
},
    ],
  },
},

  {
    id: "project-dotnet",

    slug: "ecommerce-aspnet-core",

    shortName: "E-COMMERCE .NET",

    name: "E-commerce con ASP.NET Core",

    description:
      "Aplicación web de comercio electrónico desarrollada para demostrar arquitectura backend, persistencia de datos, lógica de negocio y construcción de interfaces con tecnologías .NET.",
    image: coding,

    tags: [
      {
        name: "ASP.NET Core",
      },
      {
        name: "C#",
      },
      {
        name: "Entity Framework",
      },
      {
        name: "SQL Server",
      },
    ],

    note: "Proyecto de desarrollo de software",

    repo: null,

    demo: null,

    challenge:
      "Construir una aplicación que organizara el catálogo, la administración de productos, la persistencia de información y la lógica principal de una tienda en línea.",

    solution:
      "Se desarrolló una aplicación con ASP.NET Core, una estructura organizada por responsabilidades, acceso a datos mediante Entity Framework Core y persistencia en SQL Server.",

    role:
      "Diseño de la arquitectura, desarrollo backend, modelado de datos, validaciones, acceso a base de datos y construcción de las principales funcionalidades de la aplicación.",

    architecture: {
      eyebrow: "Arquitectura de software",

      title: "Backend y persistencia",

      description:
        "La solución está organizada en capas de presentación, lógica de negocio, acceso a datos e infraestructura.",

      diagram: `Interfaz web
  │
  ▼
ASP.NET Core
  │
  ├── Controllers
  ├── Services
  ├── Repositories
  └── Entity Framework Core
          │
          ▼
      SQL Server`,
    },

    result:
      "El proyecto integra las principales responsabilidades de una aplicación web empresarial y demuestra conocimientos de backend, bases de datos y arquitectura con el ecosistema .NET.",

    technologies: [
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "REST API",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    evidence: {
      eyebrow: "Aplicación",

      title: "Funcionalidades principales",

      description:
        "Las capturas mostrarán el catálogo, las vistas de productos, la administración y la estructura técnica de la aplicación.",

      screenshots: [],
    },
  },
];
export { services, technologies, experiences, projects };
