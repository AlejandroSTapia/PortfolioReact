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

    note: "Caso profesional · Información empresarial publica limitada · No se comparte código, prompts ni repositorio",

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
    id: "project-2",
    name: "Enterprise Automation Hub",
    description:
      "Sistema centralizado que sincroniza CRMs (GoHighLevel) y ERPs, automatizando flujos de trabajo operativos y seguimiento de clientes mediante Webhooks y APIs.",
    tags: [
      { name: "n8n", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "gcp", color: "pink-text-gradient" },
    ],
    image: leaderboard, // TODO: Cambia 'leaderboard' por la imagen real de tu proyecto
    repo: "https://github.com/tu-usuario",
    demo: "https://tu-demo.com",
  },
  {
    id: "project-3",
    name: "ERP Dashboard Architecture",
    description:
      "Plataforma administrativa empresarial Full Stack con consumo de APIs REST (.NET Core), automatización de pagos y visualización de datos en tiempo real.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "csharp", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: math, // TODO: Cambia 'math' por la imagen real de tu proyecto
    repo: "https://github.com/tu-usuario",
    demo: "https://tu-demo.com",
  },
];

export { services, technologies, experiences, projects };
