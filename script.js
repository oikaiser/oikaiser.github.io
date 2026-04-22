/* ══════════════════════════════════════════
  TRANSLATIONS
══════════════════════════════════════════ */
const i18n = {
  es: {
    /* NAV */
    'nav.experience':     'Experiencia',
    'nav.skills':         'Habilidades',
    'nav.services':       'Servicios',
    'nav.education':      'Educación',
    'nav.certifications': 'Certificaciones',
    'nav.contact':        'Contacto',
    'nav.lang-btn':       'EN',
    /* HERO */
    'hero.tag':           'Scrum Master & Project Manager',
    'hero.summary':       'Scrum Master certificado SAFe y Project Manager Asociado con experiencia en coordinación de iniciativas tecnológicas, facilitación de ceremonias ágiles y comunicación clara con stakeholders en entornos remotos y con clientes.',
    'hero.cta.contact':   'Contáctame',
    'hero.cta.linkedin':  'LinkedIn',
    'hero.card.label':    'Resumen Rápido',
    'hero.stat.years':    'Años de Experiencia',
    'hero.stat.clients':  'Clientes Atendidos',
    'hero.stat.langs':    'Idiomas',
    'hero.cert.label':    'Certificaciones',
    'hero.loc.label':     'Ubicación',
    /* EXPERIENCE */
    'exp.eyebrow':        'Experiencia Laboral',
    'exp.title':          'Trayectoria Profesional',
    'job1.role':          'Entrenador de LLM',
    'job1.company':       'Revelo · Remoto · Freelance',
    'job1.period':        'Feb 2027 – Presente',
    'job1.desc':          'Proyectos de entrenamiento y evaluación de IA enfocados en generación de apps full-stack y desarrollo front-end de una sola página, con especial atención a estándares de calidad y retroalimentación estructurada.',
    'job1.b1':            'Reelaboré y puliría aplicaciones de una página generadas por IA en HTML, CSS y JavaScript para cumplir referencias de UI y entregar resultados responsivos y listos para producción.',
    'job1.b2':            'Aseguré que los entregables soportaran escritorio y móvil, modo claro/oscuro e interacciones completas para el usuario.',
    'job1.b3':            'Diseñé prompts multi-paso realistas y solicitudes de seguimiento para evaluar apps generadas por IA en escenarios de entrega estructurada.',
    'job1.b4':            'Validé la preparación de aplicaciones mediante verificación de compilación, tiempo de ejecución, responsividad y funcionalidades, incluyendo verificación con Docker.',
    'job1.b5':            'Produje evaluaciones estructuradas y materiales de entrega final que soportan consistencia y trazabilidad en flujos de trabajo de entrenamiento de IA.',
    'job2.role':          'Entrenador de LLM',
    'job2.company':       'Turing · Remoto · Freelance · Cliente: Apple',
    'job2.period':        'Sep 2025 – Ene 2026',
    'job2.desc':          'Iniciativas de entrenamiento de IA multilingüe — diseño de escenarios estructurados y evaluación de salidas de modelos, fortaleciendo el pensamiento analítico y la disciplina de procesos.',
    'job2.b1':            'Diseñé flujos de trabajo multi-turno complejos y marcos de evaluación con atención a precisión, calidad y consistencia.',
    'job2.b2':            'Realicé revisiones estructuradas, identifiqué brechas y documenté retroalimentación correctiva para la mejora continua.',
    'job2.b3':            'Colaboré con equipos interfuncionales para mejorar estándares de entrenamiento, calidad de anotaciones y consistencia de entrega.',
    'job3.role':          'Project Manager Asociado / Scrum Master',
    'job3.company':       'Instituto Federal de Telecomunicaciones (IFT) · Ciudad de México (Remoto)',
    'job3.period':        'Jun 2024 – Sep 2025',
    'job3.desc':          'Colaboré con stakeholders internos y externos para estructurar la entrega del proyecto utilizando prácticas predictivas y ágiles para una iniciativa tecnológica del sector público.',
    'job3.b1':            'Definí e introduje la estructura operativa ágil del proyecto, alineando ceremonias, flujos de trabajo y prácticas de entrega con las expectativas del cliente.',
    'job3.b2':            'Creé y mantuve la documentación del proyecto para mantener alineados a stakeholders, desarrolladores y entregables durante toda la ejecución.',
    'job3.b3':            'Propuse y configuré flujos de trabajo basados en Jira para rastrear actividades de sprint, incidentes, dependencias y el progreso general.',
    'job3.b4':            'Preparé informes de avance recurrentes y ad hoc para liderazgo interno y stakeholders del cliente.',
    'job3.b5':            'Apoyé la coordinación entre líderes técnicos, configuradores y desarrolladores para sacar a la luz bloqueadores y mantener el ritmo de ejecución.',
    'job4.role':          'Ingeniero de Software (Full-Stack)',
    'job4.company':       'Luxoft · Guadalajara, México (Remoto) · Cliente: Expedia Group',
    'job4.period':        'May 2022 – Abr 2024',
    'job4.desc':          'Contribuí a un equipo de producto desarrollando y soportando experiencias de usuario relacionadas con vuelos en un entorno SAFe Ágil.',
    'job4.b1':            'Construí y mantuve componentes de UI para la página de vuelos usando React, TypeScript y JavaScript.',
    'job4.b2':            'Apoyé prácticas de calidad mediante pruebas unitarias y de componentes con Jest y Cypress.',
    'job4.b3':            'Colaboré en un esquema SAFe Ágil, apoyando la entrega del equipo, sesiones de refinamiento y mejoras continuas del producto.',
    'job5.role':          'Desarrollador Web',
    'job5.company':       'Nerdy Trust · Ciudad de México · Clientes: BAMF, enDrive, Turbodega, Ubuken, TED, NAFIN',
    'job5.period':        'Jul 2018 – May 2022',
    'job5.desc':          'Diseñé y entregué landing pages y sitios web para múltiples clientes, equilibrando usabilidad, funcionalidad y requisitos del cliente.',
    'job5.b1':            'Gestioné cambios solicitados y mejoras iterativas en proyectos para diferentes stakeholders.',
    'job6.role':          'Desarrollador Interno',
    'job6.company':       'CODES, Consultoría y Desarrollo de Sistemas · Ciudad de México',
    'job6.period':        'Feb – Ago 2017',
    'job6.desc':          'Apoyé actividades de desarrollo front-end y back-end para la app YAAX.',
    'job6.b1':            'Creé páginas web e implementé cambios de back-end solicitados.',
    /* SKILLS */
    'skills.eyebrow':     'Capacidades',
    'skills.title':       'Habilidades y Herramientas',
    'skill1.title':       'Ágil y Gestión de Proyectos',
    'skill2.title':       'Desarrollo Frontend',
    'skill3.title':       'Pruebas y QA',
    'skill4.title':       'IA y Entrenamiento de LLM',
    'skill5.title':       'Backend y DevOps',
    'skill6.title':       'Colaboración y Documentación',
    /* SERVICES */
    'svc.eyebrow':        'Servicios',
    'svc.title':          'Lo que Ofrezco',
    'svc.intro':          'Además de mi experiencia en gestión de proyectos ágiles, ofrezco servicios de desarrollo web freelance especializados en páginas únicas modernas y mejoras de diseño para sitios existentes.',
    'svc1.title':         'Single-Page Applications',
    'svc1.desc':          'Desarrollo páginas web de una sola vista completamente responsivas, rápidas y listas para producción. Desde landing pages hasta portfolios, me encargo del diseño y la implementación de principio a fin.',
    'svc1.i1':            'Diseño adaptable (mobile-first)',
    'svc1.i2':            'Modo oscuro / claro integrado',
    'svc1.i3':            'HTML, CSS, JS vanilla o React',
    'svc1.i4':            'Soporte para múltiples idiomas',
    'svc1.i5':            'Animaciones y microinteracciones',
    'svc2.title':         'Mejora de Diseño',
    'svc2.desc':          '¿Tu sitio se ve desactualizado o no convierte? Analizo tu página actual y aplico mejoras de UI/UX concretas: tipografía, paleta de colores, espaciado, jerarquía visual y experiencia de usuario.',
    'svc2.i1':            'Auditoría visual y de usabilidad',
    'svc2.i2':            'Rediseño de componentes clave',
    'svc2.i3':            'Optimización de paleta y tipografía',
    'svc2.i4':            'Mejora de jerarquía y estructura',
    'svc2.i5':            'Entrega con documentación de cambios',
    'svc.cta.heading':    '¿Tienes un proyecto en mente?',
    'svc.cta.sub':        'Hablemos sobre lo que necesitas construir o mejorar.',
    'svc.cta.btn':        'Contáctame',
    /* EDUCATION */
    'edu.eyebrow':        'Educación',
    'edu.title':          'Formación Académica',
    'edu1.degree':        'Ing. en Sistemas Computacionales (ISC)',
    'edu1.inst':          'Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)',
    'edu2.degree':        'Programa de Idioma Alemán',
    'edu2.inst':          'Goethe-Institut · Freiburg im Breisgau, Alemania',
    'edu2.note':          'Inmersión total; habilidades de comunicación intercultural mejoradas.',
    /* CERTIFICATIONS */
    'cert.eyebrow':       'Certificaciones',
    'cert.title':         'Licencias y Credenciales',
    'cert1.name':         'SAFe 6 Scrum Master',
    'cert1.issuer':       'Scaled Agile Inc. · May 2024 – May 2025',
    'cert2.name':         'Certified Associate in Project Management (CAPM)',
    'cert2.issuer':       'Project Management Institute (PMI) · Jun 2021 – Jun 2024',
    /* LANGUAGES */
    'lang.eyebrow':       'Idiomas',
    'lang.title':         'Comunicación',
    'lang1.name':         'Español',
    'lang1.level':        'Nativo',
    'lang2.name':         'Inglés',
    'lang2.level':        'Intermedio Alto (B2)',
    'lang3.name':         'Alemán',
    'lang3.level':        'Elemental (A2)',
    'lang4.name':         'Japonés',
    'lang4.level':        'Aprendiendo (N5)',
    /* CONTACT */
    'contact.eyebrow':    'Contacto',
    'contact.title':      'Trabajemos Juntos',
    'contact.sub':        'Abierto a roles de Scrum Master, Agile Project Manager y Delivery Coordinator. ¡No dudes en escribirme!',
    'contact.linkedin':   'Perfil de LinkedIn',
    /* FOOTER */
    'footer.text':        '© 2026 César Adrián Galván Medrano',
  },
  en: {
    /* NAV */
    'nav.experience':     'Experience',
    'nav.skills':         'Skills',
    'nav.services':       'Services',
    'nav.education':      'Education',
    'nav.certifications': 'Certifications',
    'nav.contact':        'Contact',
    'nav.lang-btn':       'ES',
    /* HERO */
    'hero.tag':           'Scrum Master & Project Manager',
    'hero.summary':       'SAFe-certified Scrum Master and Associate Project Manager with a software engineering background. Experienced in coordinating technology initiatives, facilitating agile ceremonies, and delivering clear stakeholder communication in remote and client-facing environments.',
    'hero.cta.contact':   'Get in touch',
    'hero.cta.linkedin':  'LinkedIn',
    'hero.card.label':    'Quick Overview',
    'hero.stat.years':    'Years of Experience',
    'hero.stat.clients':  'Clients Served',
    'hero.stat.langs':    'Languages',
    'hero.cert.label':    'Certifications',
    'hero.loc.label':     'Location',
    /* EXPERIENCE */
    'exp.eyebrow':        'Work Experience',
    'exp.title':          'Professional Journey',
    'job1.role':          'LLM Trainer',
    'job1.company':       'Revelo · Remote · Freelance',
    'job1.period':        'Feb 2027 – Present',
    'job1.desc':          'AI training and evaluation projects focused on full-stack app generation and single-page front-end development, with strong attention to quality standards and structured feedback.',
    'job1.b1':            'Reworked and polished AI-generated single-page applications in HTML, CSS, and JavaScript to meet UI references and produce responsive, production-ready results.',
    'job1.b2':            'Ensured deliverables supported desktop & mobile layouts, light/dark mode, and complete user-facing interactions.',
    'job1.b3':            'Designed realistic multi-step prompts and follow-up requests to evaluate AI-generated apps in structured delivery scenarios.',
    'job1.b4':            'Validated application readiness through build, runtime, responsiveness, and feature checks including Docker-based verification.',
    'job1.b5':            'Produced structured evaluations and final handoff materials supporting consistency and traceability in AI training workflows.',
    'job2.role':          'LLM Trainer',
    'job2.company':       'Turing · Remote · Freelance · Client: Apple',
    'job2.period':        'Sep 2025 – Jan 2026',
    'job2.desc':          'Multilingual AI training initiatives — designing structured scenarios and evaluating model outputs, strengthening analytical thinking and process discipline.',
    'job2.b1':            'Designed complex multi-turn workflows and evaluation frameworks with attention to accuracy, quality, and consistency.',
    'job2.b2':            'Performed structured reviews, identified gaps, and documented corrective feedback for continuous improvement.',
    'job2.b3':            'Collaborated with cross-functional teams to improve training standards, annotation quality, and delivery consistency.',
    'job3.role':          'Associate Project Manager / Scrum Master',
    'job3.company':       'Instituto Federal de Telecomunicaciones (IFT) · Mexico City (Remote)',
    'job3.period':        'Jun 2024 – Sep 2025',
    'job3.desc':          'Partnered with internal and external stakeholders to structure project delivery using predictive and agile practices for a public-sector technology initiative.',
    'job3.b1':            'Defined and introduced the agile operating structure, aligning ceremonies, workflows, and delivery practices with client expectations.',
    'job3.b2':            'Created and maintained project documentation to keep stakeholders, developers, and deliverables aligned throughout execution.',
    'job3.b3':            'Proposed and configured Jira-based workflows to track sprint activities, incidents, dependencies, and overall progress.',
    'job3.b4':            'Prepared recurring and ad hoc progress reports for internal leadership and client stakeholders.',
    'job3.b5':            'Supported coordination across technical leads, configurators, and developers to surface blockers and maintain execution rhythm.',
    'job4.role':          'Software Engineer (Full-Stack)',
    'job4.company':       'Luxoft · Guadalajara, México (Remote) · Client: Expedia Group',
    'job4.period':        'May 2022 – Apr 2024',
    'job4.desc':          'Contributed to a product team developing and supporting flight-related user experiences in a SAFe Agile environment.',
    'job4.b1':            'Built and maintained UI components for the flights page using React, TypeScript, and JavaScript.',
    'job4.b2':            'Supported quality practices through unit and component testing with Jest and Cypress.',
    'job4.b3':            'Collaborated in a SAFe Agile setup, supporting team delivery, refinement sessions, and ongoing product improvements.',
    'job5.role':          'Web Developer',
    'job5.company':       'Nerdy Trust · Mexico City · Clients: BAMF, enDrive, Turbodega, Ubuken, TED, NAFIN',
    'job5.period':        'Jul 2018 – May 2022',
    'job5.desc':          'Designed and delivered landing pages and websites for multiple clients, balancing usability, functionality, and client requirements.',
    'job5.b1':            'Managed requested changes and iterative improvements across projects for different stakeholders.',
    'job6.role':          'Intern Developer',
    'job6.company':       'CODES, Consultoría y Desarrollo de Sistemas · Mexico City',
    'job6.period':        'Feb – Aug 2017',
    'job6.desc':          'Supported front-end and back-end development activities for the YAAX app.',
    'job6.b1':            'Created web pages and implemented requested back-end changes.',
    /* SKILLS */
    'skills.eyebrow':     'Capabilities',
    'skills.title':       'Skills & Tools',
    'skill1.title':       'Agile & Project Management',
    'skill2.title':       'Frontend Development',
    'skill3.title':       'Testing & QA',
    'skill4.title':       'AI & LLM Training',
    'skill5.title':       'Backend & DevOps',
    'skill6.title':       'Collaboration & Docs',
    /* SERVICES */
    'svc.eyebrow':        'Services',
    'svc.title':          'What I Offer',
    'svc.intro':          'In addition to my agile project management experience, I offer freelance web development services specialising in modern single-page websites and design improvements for existing sites.',
    'svc1.title':         'Single-Page Applications',
    'svc1.desc':          'I build fully responsive, fast, production-ready single-view web pages. From landing pages to portfolios, I handle design and implementation from start to finish.',
    'svc1.i1':            'Responsive design (mobile-first)',
    'svc1.i2':            'Integrated dark / light mode',
    'svc1.i3':            'HTML, CSS, vanilla JS or React',
    'svc1.i4':            'Multi-language support',
    'svc1.i5':            'Animations & micro-interactions',
    'svc2.title':         'Design Improvement',
    'svc2.desc':          'Does your site look outdated or underperform? I audit your current page and apply concrete UI/UX improvements: typography, colour palette, spacing, visual hierarchy and user experience.',
    'svc2.i1':            'Visual & usability audit',
    'svc2.i2':            'Redesign of key components',
    'svc2.i3':            'Palette & typography optimisation',
    'svc2.i4':            'Hierarchy & structure improvement',
    'svc2.i5':            'Delivery with change documentation',
    'svc.cta.heading':    'Have a project in mind?',
    'svc.cta.sub':        "Let's talk about what you need to build or improve.",
    'svc.cta.btn':        'Get in touch',
    /* EDUCATION */
    'edu.eyebrow':        'Education',
    'edu.title':          'Academic Background',
    'edu1.degree':        'B.S.C. Computer Science & Technology (ISC)',
    'edu1.inst':          'Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)',
    'edu2.degree':        'German Language Program',
    'edu2.inst':          'Goethe-Institut · Freiburg im Breisgau, Germany',
    'edu2.note':          'Full immersion; enhanced cross-cultural communication skills.',
    /* CERTIFICATIONS */
    'cert.eyebrow':       'Certifications',
    'cert.title':         'Licenses & Credentials',
    'cert1.name':         'SAFe 6 Scrum Master',
    'cert1.issuer':       'Scaled Agile Inc. · May 2024 – May 2025',
    'cert2.name':         'Certified Associate in Project Management (CAPM)',
    'cert2.issuer':       'Project Management Institute (PMI) · Jun 2021 – Jun 2024',
    /* LANGUAGES */
    'lang.eyebrow':       'Languages',
    'lang.title':         'Communication',
    'lang1.name':         'Spanish',
    'lang1.level':        'Native',
    'lang2.name':         'English',
    'lang2.level':        'Upper-Intermediate (B2)',
    'lang3.name':         'German',
    'lang3.level':        'Elementary (A2)',
    'lang4.name':         'Japanese',
    'lang4.level':        'Learning (N5)',
    /* CONTACT */
    'contact.eyebrow':    'Get in Touch',
    'contact.title':      "Let's Work Together",
    'contact.sub':        'Open to Scrum Master, Agile Project Manager, and Delivery Coordinator roles. Feel free to reach out!',
    'contact.linkedin':   'LinkedIn Profile',
    /* FOOTER */
    'footer.text':        '© 2026 César Adrián Galván Medrano',
  }
};

/* ══════════════════════════════════════════
  STATE
══════════════════════════════════════════ */
let currentLang  = localStorage.getItem('lang')  || document.documentElement.lang || 'es';
let currentTheme = localStorage.getItem('theme') || 'light';

/* ══════════════════════════════════════════
  APPLY THEME
══════════════════════════════════════════ */
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : '');
  localStorage.setItem('theme', theme);

  // Swap icon: moon = light mode active (click → go dark), sun = dark mode active (click → go light)
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

/* ══════════════════════════════════════════
  APPLY LANGUAGE
══════════════════════════════════════════ */
function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
}

/* ══════════════════════════════════════════
  TOGGLE HANDLERS
══════════════════════════════════════════ */
function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

function toggleLang() {
  applyLang(currentLang === 'es' ? 'en' : 'es');
}

/* ══════════════════════════════════════════
  SCROLL ANIMATIONS
══════════════════════════════════════════ */
function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    '.exp-content, .skill-card, .edu-card, .cert-card, .lang-card, .service-card, .services-cta'
  ).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease, border-color 0.3s, background 0.35s';
    observer.observe(el);
  });
}

/* ══════════════════════════════════════════
  INIT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Init Lucide icons (replaces data-lucide elements)
  lucide.createIcons();

  // Wire up buttons
  document.getElementById('btn-theme').addEventListener('click', toggleTheme);
  document.getElementById('btn-lang').addEventListener('click', toggleLang);

  // Apply saved / default state (reads localStorage first)
  applyTheme(currentTheme);
  applyLang(currentLang);

  // Scroll animations
  initScrollObserver();
});
