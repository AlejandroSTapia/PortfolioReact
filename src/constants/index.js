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
    komikult,
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
      {
      name: 'ghl',
      icon: ghl, // TODO: Cambia 'figma' por 'elevenlabs'
    },
    {
      name: 'ElevenLabs',
      icon: elevenlabs, // TODO: Cambia 'figma' por 'elevenlabs'
    },
    {
      name: 'Make',
      icon: make, // TODO: Cambia 'rubyrails' por 'make'
    },
    {
      name: 'n8n',
      icon: n8n, // TODO: Cambia 'redux' por 'n8n'
    },
    {
      name: 'C# .NET',
      icon: csharp, // TODO: Cambia 'postgresql' por 'csharp'
    },
    {
      name: 'Python',
      icon: python, // TODO: Cambia 'graphql' por 'python' cuando descargues su logo
    },
        {
      name: 'TypeScript',
      icon: typescript,
    },
        {
      name: 'Node JS',
      icon: nodejs,
    },
    {
      name: 'React JS',
      icon: reactjs,
    },
        {
      name: 'MySQL',
      icon: mysql, // TODO: Cambia 'html' por 'mysql'
    },
    {
      name: 'Tailwind CSS',
      icon: tailwind,
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
      title: 'Arquitecto de Soluciones IA & Integraciones',
      company_name: 'BullRocket Agency',
      icon: bullrocket,
      iconBg: '#333333',
      date: 'Junio 2025 - Actualidad',
      points: [
        "Diseño y desarrollo de Agentes de Voz (ElevenLabs, Twilio) y Chatbots (GoHighLevel), implementando ingeniería de prompts, RAG y Model Context Protocol (MCP).",
        "Orquestación de flujos de trabajo automatizados utilizando Make y n8n, conectando APIs, Google Cloud Console y bases de datos MySQL.",
        "Desarrollo Full Stack de sistemas internos tipo ERP y aplicaciones web a medida, gestionando el ciclo completo de vida del software.",
        "Administración de infraestructura DevOps, gestionando servidores, dominios y despliegues en plataformas como Railway, Render y Supabase.",
      ],
    },
    {
      title: 'Ingeniero de Software Senior (.NET & React)',
      company_name: 'Autotodo Mexicana (Ciosa)',
      icon: ciosa,
      iconBg: '#333333',
      date: 'Febrero 2023 - Junio 2025',
      points: [
        "Desarrollo de APIs REST de alto rendimiento con ASP.NET Core e integración con pasarelas de pago (Mercado Pago).",
        "Modernización de interfaces críticas del ERP utilizando React y Blazor WebAssembly.",
        "Implementación de la API de Conversiones de Meta en el sitio web de ventas para optimizar el marketing digital.",
        "Monitoreo de servidores y bases de datos SQL Server, asegurando la disponibilidad crítica del sistema.",
      ],
    },
    {
      title: 'Consultor Full Stack & Móvil',
      company_name: 'Proyectos Independientes (Freelance)',
      icon: coding,
      iconBg: '#333333',
      date: 'Octubre 2022 - Febrero 2023',
      points: [
        "Diseño y desarrollo de aplicaciones web y móviles a medida para PyMEs, utilizando React, PHP (Laravel) y Android nativo.",
        "Gestión integral del proyecto: desde la toma de requerimientos hasta el despliegue en servidores VPS y configuración de dominios.",
      ],
    },
    {
      title: 'Programador Backend Java',
      company_name: 'TASF',
      icon: backend_apis,
      iconBg: '#333333',
      date: 'Junio 2022 - Septiembre 2022',
      points: [
        "Mantenimiento y desarrollo de módulos backend para sistemas financieros.",
        "Optimización de consultas SQL y lógica de negocio mediante Java.",
      ],
    },
    {
      title: 'Desarrollador Web Frontend',
      company_name: 'Nearshore Coders',
      icon: html,
      iconBg: '#333333',
      date: 'Febrero 2021 - Mayo 2022',
      points: [
        "Creación de interfaces de usuario dinámicas y responsivas con HTML, CSS y JS.",
        "Desarrollo de aplicaciones móviles nativas con Android Studio (Java/Kotlin) y PWAs.",
      ],
    },
    {
      title: 'Ingeniero de Soluciones TI (Preventa)',
      company_name: 'Advanced Consulting Group (ACG)',
      icon: network,
      iconBg: '#333333',
      date: 'Enero 2020 - Diciembre 2020',
      points: [
        "Diseño y dimensionamiento de arquitecturas de red y seguridad empresarial utilizando tecnologías de Cisco y Fortinet.",
        "Elaboración de propuestas técnicas y análisis de viabilidad para proyectos de infraestructura crítica.",
      ],
    },
  ];

  const projects = [
    {
      id: 'project-1',
      name: 'AI Voice Concierge',
      description: 'Agente telefónico autónomo capaz de interactuar, cualificar leads y responder dudas frecuentes en tiempo real con voz natural.',
      tags: [
        { name: 'python', color: 'blue-text-gradient' },
        { name: 'elevenlabs', color: 'green-text-gradient' },
        { name: 'twilio', color: 'pink-text-gradient' },
      ],
      image: komikult, // TODO: Cambia 'komikult' por la imagen real de tu proyecto
      repo: '#',
      demo: '#',
    },
    {
      id: 'project-2',
      name: 'Enterprise Automation Hub',
      description: 'Sistema centralizado que sincroniza CRMs y ERPs, automatizando flujos de trabajo operativos y seguimiento de clientes mediante Webhooks.',
      tags: [
        { name: 'make', color: 'blue-text-gradient' },
        { name: 'n8n', color: 'green-text-gradient' },
        { name: 'nodejs', color: 'pink-text-gradient' },
      ],
      image: leaderboard, // TODO: Cambia 'leaderboard' por la imagen real de tu proyecto
      repo: '#',
      demo: '#',
    },
    {
      id: 'project-3',
      name: 'SaaS Dashboard Architecture',
      description: 'Plataforma administrativa Full Stack con consumo de APIs REST, autenticación segura y visualización de datos en tiempo real.',
      tags: [
        { name: 'react', color: 'blue-text-gradient' },
        { name: 'csharp', color: 'green-text-gradient' },
        { name: 'sqlserver', color: 'pink-text-gradient' },
      ],
      image: math, // TODO: Cambia 'math' por la imagen real de tu proyecto
      repo: '#',
      demo: '#',
    },
  ];

  export { services, technologies, experiences, projects };