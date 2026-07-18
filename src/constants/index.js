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
    panel_bull_contact,
    leaderboard,
    math,
    movie,
    nyeusi,
    ciosa,
    bullrocket,
    coding,
    network
  } from '../assets';

  export const navLinks = [
    {
      id: 'about',
      title: 'Acerca de mí',
    },
    {
      id: 'projects',
      title: 'Proyectos',
    },
    {
      id: 'contact',
      title: 'Contacto',
    },
  ];

  const services = [
    {
      title: 'Arquitectura de Soluciones IA',
      icon: IA,
    },
    {
      title: 'Agentes de Voz',
      icon: agentvoice,
    },
    {
      title: 'Automatización de Procesos',
      icon: automation,
    },
    {
      title: 'Desarrollo Backend & APIs',
      icon: backend_apis,
    },
    {
      title: 'Desarrollo Frontend',
      icon: frontend,
    },
    {
      title: 'Integraciones CRM & Webhooks',
      icon: crm,
    },
    {
      title: 'Diseño UI/UX',
      icon: ux,
    },
    {
      title: 'Prototipo de Software',
      icon: prototyping,
    },
  ];

const technologies = [
    // --- 1. IA & Automatización (Tu gancho principal) ---
    {
      name: 'ElevenLabs',
      icon: elevenlabs,
    },
    {
      name: 'GoHighLevel',
      icon: ghl, 
    },
    {
      name: 'Make',
      icon: make,
    },
    {
      name: 'n8n',
      icon: n8n,
    },

    // --- 2. Backend & Arquitectura (Tu motor) ---
    {
      name: 'Python',
      icon: python,
    },
    {
      name: 'C# .NET',
      icon: csharp,
    },
    {
      name: 'Node JS',
      icon: nodejs,
    },

    // --- 3. Frontend (Tus interfaces) ---
    {
      name: 'TypeScript',
      icon: typescript,
    },
    {
      name: 'React JS',
      icon: reactjs,
    },

    // --- 4. Bases de Datos ---
    {
      name: 'MySQL',
      icon: mysql, 
    },

    // --- 5. Cloud, DevOps & Control de Versiones ---
    {
      name: 'Google Cloud', // O puedes cambiarlo por Azure si prefieres
      icon: gcp,
    },
    {
      name: 'Docker',
      icon: docker,
    },
    {
      name: 'Git',
      icon: git,
    },
  ];

const experiences = [
    {
      title: 'Integration Developer & AI Solutions Architect',
      company_name: 'BullRocket',
      icon: bullrocket,
      iconBg: '#333333',
      date: 'Enero 2025 - Actualidad',
      points: [
        "Arquitectura RAG & MCP: Diseño de sistemas conectados a MySQL y Google Cloud Console para vincular LLMs con datos estructurados.",
        "Agentes de Voz e Interfaces: Desarrollo de soluciones automatizadas utilizando Twilio, ElevenLabs y código backend (NodeJS, TS, .NET).",
        "Ecosistema de Automatización: Orquestación de flujos complejos en n8n y Make, integrando agentes de chat avanzados en GoHighLevel (GHL).",
        "DevOps e Infraestructura: Gestión integral de servidores, dominios y despliegues en plataformas como Railway, Render y Supabase.",
      ],
    },
    {
      title: 'Ingeniero de Software en .NET y React',
      company_name: 'Ciosa Autotodo',
      icon: ciosa,
      iconBg: '#333333',
      date: 'Enero 2023 - Enero 2025',
      points: [
        "Desarrollo de APIs REST en ASP.NET Core y automatización de pagos en el ERP integrando la API de Mercado Pago.",
        "Implementación de la API de conversiones de Meta en el sitio web de ventas para optimizar el marketing digital.",
        "Desarrollo de aplicaciones empresariales multiplataforma utilizando Blazor WebAssembly, React PWA y Xamarin.",
        "Gestión de repositorios, integración continua y despliegues (CI/CD) utilizando GitHub Actions y Azure Pipelines.",
      ],
    },
    {
      title: 'Desarrollador Full-Stack Freelance',
      company_name: 'Independiente',
      icon: coding,
      iconBg: '#333333',
      date: 'Enero 2021 - Diciembre 2023',
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
      id: 'project-1',
      name: 'AGENTES IA',
      description: 'Sistema conversacional de atención y seguimiento de leads, integrando Twilio, ElevenLabs y GoHighLevel para automatizar interacciones con clientes mediante agentes de voz y chat.',
      tags: [
        { name: 'elevenlabs', color: 'blue-text-gradient' },
        { name: 'twilio', color: 'green-text-gradient' },
        { name: 'make', color: 'pink-text-gradient' },
      ],
      image: panel_bull_contact, // TODO: Cambia 'komikult' por la imagen real de tu proyecto
      repo: 'https://github.com/tu-usuario', // TODO: Pon tu link real o déjalo en '#'
      demo: 'https://tu-demo.com', // TODO: Pon tu link real o déjalo en '#'
    },
    {
      id: 'project-2',
      name: 'Enterprise Automation Hub',
      description: 'Sistema centralizado que sincroniza CRMs (GoHighLevel) y ERPs, automatizando flujos de trabajo operativos y seguimiento de clientes mediante Webhooks y APIs.',
      tags: [
        { name: 'n8n', color: 'blue-text-gradient' },
        { name: 'nodejs', color: 'green-text-gradient' },
        { name: 'gcp', color: 'pink-text-gradient' },
      ],
      image: leaderboard, // TODO: Cambia 'leaderboard' por la imagen real de tu proyecto
      repo: 'https://github.com/tu-usuario', 
      demo: 'https://tu-demo.com',
    },
    {
      id: 'project-3',
      name: 'ERP Dashboard Architecture',
      description: 'Plataforma administrativa empresarial Full Stack con consumo de APIs REST (.NET Core), automatización de pagos y visualización de datos en tiempo real.',
      tags: [
        { name: 'react', color: 'blue-text-gradient' },
        { name: 'csharp', color: 'green-text-gradient' },
        { name: 'mysql', color: 'pink-text-gradient' },
      ],
      image: math, // TODO: Cambia 'math' por la imagen real de tu proyecto
      repo: 'https://github.com/tu-usuario',
      demo: 'https://tu-demo.com',
    },
  ];

  export { services, technologies, experiences, projects };