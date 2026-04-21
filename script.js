const EMAIL_ADDRESS = "cesar.galvanmedrano@gmail.com";
const WHATSAPP_NUMBER = "525555094243";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const THEME_STORAGE_KEY = "portfolio-theme";
const LANGUAGE_STORAGE_KEY = "portfolio-language";

const TRANSLATIONS = {
  es: {
    metaTitle: "César Adrián Galván Medrano | Portfolio",
    metaDescription:
      "Portfolio de César Adrián Galván Medrano. Desarrollo páginas web single-page, front-end polish y coordinación ágil con tarifa de $30 USD por hora.",
    switchToEnglish: "Switch to English",
    switchToSpanish: "Cambiar a español",
    themeSwitchToLight: "Cambiar a modo claro",
    themeSwitchToDark: "Cambiar a modo oscuro",
    navHome: "Inicio",
    navProfile: "Perfil",
    navServices: "Servicios",
    navExperience: "Experiencia",
    navStack: "Stack",
    navContact: "Contacto",
    heroEyebrow: "Sitios single-page · Project Management · entrega Scrum",
    heroTitle: "Desarrollo páginas single-page con diseño minimalista y enfoque en entrega.",
    heroDescription:
      "Soy César Adrián Galván Medrano, ingeniero de software con experiencia en desarrollo front-end, Project Management y Scrum Master. Combino diseño limpio, ejecución técnica y seguimiento ágil para construir sitios web claros, rápidos y listos para convertir.",
    heroPrimaryCta: "Solicitar una página",
    heroWhatsappCta: "WhatsApp",
    heroRate: "$30 USD por hora",
    heroModes: "Modo claro + modo oscuro",
    heroLocation: "Ciudad de México · Remoto",
    helpLabel: "En qué te ayudo",
    helpTitle: "Presencia web clara, rápida y profesional.",
    helpItem1: "Landing pages y portfolios de una sola página",
    helpItem2: "Mejora visual y pulido front-end",
    helpItem3: "Gestión de entregables con disciplina ágil",
    directContactLabel: "Contacto directo",
    extraValueLabel: "También aporto",
    extraBadgePm: "Project Manager",
    extraBadgeScrum: "Scrum Master",
    extraBadgeReporting: "Stakeholder Reporting",
    extraBadgeJira: "Jira & Confluence",
    profileEyebrow: "Perfil",
    profileTitle: "Desarrollo web con mentalidad de delivery.",
    profileCopy:
      "Mi experiencia mezcla construcción de interfaces, sitios para clientes, QA de aplicaciones y coordinación de trabajo con equipos técnicos y stakeholders.",
    profileParagraph1:
      "He trabajado en desarrollo front-end con React, TypeScript, JavaScript, HTML, CSS, SCSS y Vue, además de pruebas con Jest y Cypress. También he entregado landing pages y websites para múltiples clientes en entornos de trabajo ágiles.",
    profileParagraph2:
      "Como Associate Project Manager y Scrum Master estructuré ceremonias, flujos en Jira, seguimiento de avances y reportes a stakeholders. Esa combinación hace que no sólo diseñe la página, sino que la lleve con orden, claridad y buen ritmo de entrega.",
    profileMetricYears: "Años participando en proyectos web y de software",
    profileMetricPm: "Experiencia en Project Management, Scrum y seguimiento de entregables",
    profileMetricLanguage: "Inglés para colaborar con clientes y equipos internacionales",
    servicesEyebrow: "Servicios",
    servicesTitle: "Servicios enfocados en páginas web single-page.",
    servicesCopy:
      "Trabajo en proyectos pequeños, iteraciones puntuales o una landing completa con una estructura simple y orientada a contacto.",
    service1Title: "Landing pages y portfolios",
    service1Copy:
      "Páginas de una sola pantalla con jerarquía visual clara, contenido ordenado y llamados a la acción visibles.",
    service2Title: "Responsive y dark/light mode",
    service2Copy:
      "Ajusto layout, tipografía, espaciado y comportamiento entre desktop, tablet y mobile, incluyendo temas claro y oscuro.",
    service3Title: "Contacto y conversión",
    service3Copy:
      "Integro WhatsApp, correo, teléfono y formularios simples para que la página te ayude a recibir mensajes, no sólo a verse bien.",
    service4Title: "Iteraciones con orden ágil",
    service4Copy:
      "Si el proyecto lo necesita, también puedo manejar seguimiento, prioridades y entregables con enfoque de Project Manager / Scrum Master.",
    pricingLabel: "Tarifa",
    pricingTitle: "$30 USD por hora",
    pricingCopy:
      "Modelo de cobro transparente para mejoras puntuales, refinamiento visual o una página single-page completa lista para publicación.",
    pricingCheck1: "HTML, CSS, JavaScript y Bootstrap listos para publicar",
    pricingCheck2: "Estructura enfocada en claridad, servicio y contacto",
    pricingCheck3: "Publicación preparada para hosting gratis",
    experienceEyebrow: "Experiencia",
    experienceTitle: "Desarrollo, Project Management y Scrum en proyectos reales.",
    experienceCopy:
      "Además de desarrollo web, también tengo experiencia formal coordinando trabajo, documentación, seguimiento y comunicación con stakeholders.",
    experienceHighlightLabel: "Project Manager / Scrum Master",
    experienceHighlightTitle: "Instituto Federal de Telecomunicaciones",
    experienceHighlightItem1: "Definí ceremonias ágiles, estructura operativa y ritmo de entrega",
    experienceHighlightItem2:
      "Preparé documentación, seguimiento y reportes para liderazgo y cliente",
    experienceHighlightItem3: "Di seguimiento a incidentes, dependencias y progreso con Jira",
    timeline1Date: "Jun 2024 · Sep 2025",
    timeline1Title: "Associate Project Manager / Scrum Master · IFT",
    timeline1Copy:
      "Coordiné stakeholders internos y externos, configuré flujos en Jira, mantuve documentación y reporté estatus de entrega para una iniciativa tecnológica del sector público.",
    timeline2Date: "Trabajo freelance actual",
    timeline2Title: "LLM Trainer · Front-end QA · Single-page apps",
    timeline2Copy:
      "Refiné aplicaciones generadas en HTML, CSS y JavaScript, validando calidad visual, responsividad, funcionalidad y consistencia antes de entrega final.",
    timeline3Date: "May 2022 · Apr 2024",
    timeline3Title: "Software Engineer (Full-Stack) · Luxoft para Expedia Group",
    timeline3Copy:
      "Desarrollé y mantuve componentes de interfaz para experiencias de vuelos usando React, TypeScript y JavaScript, con soporte de testing en Jest y Cypress.",
    timeline4Date: "Jul 2018 · May 2022",
    timeline4Title: "Web Developer · Nerdy Trust",
    timeline4Copy:
      "Diseñé y entregué landing pages y sitios web para clientes como BAMF, enDrive, Turbodega, Ubuken, TED y NAFIN, atendiendo cambios y mejoras iterativas.",
    stackEyebrow: "Stack",
    stackTitle: "Tecnología, QA y gestión ágil destacadas.",
    stackCopy:
      "No sólo trabajo la parte visual del sitio: también entiendo delivery, seguimiento, calidad y comunicación de proyecto.",
    stackFrontendTitle: "Front-end y desarrollo",
    stackPmTitle: "Project Management / Scrum",
    stackQualityTitle: "Calidad y entrega",
    stackTeamTitle: "Trabajo con cliente y equipo",
    stackLanguagesTitle: "Idiomas y certificaciones",
    stackLanguage1: "Español nativo",
    stackLanguage2: "Inglés B2",
    stackLanguage3: "Alemán A2",
    stackLanguage4: "Japonés N5 en curso",
    contactEyebrow: "Contacto",
    contactTitle: "Si quieres una página single-page, escríbeme.",
    contactCopy:
      "Cuéntame si necesitas un portfolio, landing page de servicios o una mejora visual en una página existente.",
    contactIntro:
      "Trabajo con foco en claridad visual, contacto fácil y entregas simples de mantener. Si también necesitas orden de proyecto, puedo apoyar desde el ángulo técnico y de coordinación.",
    contactWhatsapp: "WhatsApp directo",
    copyEmail: "Copiar email",
    formNameLabel: "Nombre",
    formNamePlaceholder: "Tu nombre",
    formEmailLabel: "Correo",
    formEmailPlaceholder: "tu@email.com",
    formProjectLabel: "Proyecto",
    formProjectPlaceholder: "Landing page, portfolio, rediseño...",
    formMessageLabel: "Mensaje",
    formMessagePlaceholder: "Cuéntame el objetivo del sitio y el estilo que buscas.",
    formSubmit: "Abrir mensaje por correo",
    footerCopy: "Portfolio single-page de César Adrián Galván Medrano.",
    footerAvailability: "© {year} · Disponible para proyectos web single-page.",
    copySuccess: "Email copiado al portapapeles.",
    copyFailure: "No pude copiarlo automáticamente, pero el correo está visible arriba.",
    formFeedback: "Abrí tu cliente de correo con el mensaje precargado.",
    mailtoSubjectPrefix: "Consulta web",
    heroWhatsappMessage: "Hola César, quiero cotizar una página single-page.",
    contactWhatsappMessage: "Hola César, me interesa tu servicio de single-page website.",
  },
  en: {
    metaTitle: "César Adrián Galván Medrano | Single-Page Portfolio",
    metaDescription:
      "Portfolio of César Adrián Galván Medrano. I build single-page websites, front-end polish, and agile delivery support at a $30 USD hourly rate.",
    switchToEnglish: "Switch to English",
    switchToSpanish: "Switch to Spanish",
    themeSwitchToLight: "Switch to light mode",
    themeSwitchToDark: "Switch to dark mode",
    navHome: "Home",
    navProfile: "Profile",
    navServices: "Services",
    navExperience: "Experience",
    navStack: "Stack",
    navContact: "Contact",
    heroEyebrow: "Single-page websites · Project Management · Scrum delivery",
    heroTitle: "Single-page websites with a minimal design and delivery focus.",
    heroDescription:
      "I am César Adrián Galván Medrano, a software engineer with experience in front-end development, Project Management, and Scrum Master work. I combine clean design, technical execution, and agile follow-through to build websites that are clear, fast, and ready to convert.",
    heroPrimaryCta: "Request a website",
    heroWhatsappCta: "WhatsApp",
    heroRate: "$30 USD per hour",
    heroModes: "Light mode + dark mode",
    heroLocation: "Mexico City · Remote",
    helpLabel: "How I help",
    helpTitle: "Clear, fast, and professional web presence.",
    helpItem1: "Single-page landing pages and portfolios",
    helpItem2: "Visual refinement and front-end polish",
    helpItem3: "Agile-minded delivery coordination",
    directContactLabel: "Direct contact",
    extraValueLabel: "Additional value",
    extraBadgePm: "Project Manager",
    extraBadgeScrum: "Scrum Master",
    extraBadgeReporting: "Stakeholder Reporting",
    extraBadgeJira: "Jira & Confluence",
    profileEyebrow: "Profile",
    profileTitle: "Web development with a delivery mindset.",
    profileCopy:
      "My background blends interface building, client websites, application QA, and coordination with technical teams and stakeholders.",
    profileParagraph1:
      "I have worked in front-end development with React, TypeScript, JavaScript, HTML, CSS, SCSS, and Vue, plus testing with Jest and Cypress. I have also delivered landing pages and websites for multiple clients in agile environments.",
    profileParagraph2:
      "As an Associate Project Manager and Scrum Master, I structured ceremonies, Jira workflows, progress tracking, and stakeholder reporting. That combination means I do not just design the page, I also keep delivery organized, clear, and moving at a solid pace.",
    profileMetricYears: "Years contributing to web and software projects",
    profileMetricPm: "Experience in Project Management, Scrum, and delivery follow-up",
    profileMetricLanguage: "English for collaborating with clients and international teams",
    servicesEyebrow: "Services",
    servicesTitle: "Services focused on single-page websites.",
    servicesCopy:
      "I work on small projects, focused iterations, or a full landing page with a simple structure oriented to contact and conversion.",
    service1Title: "Landing pages and portfolios",
    service1Copy:
      "Single-page websites with clear visual hierarchy, organized content, and visible calls to action.",
    service2Title: "Responsive and dark/light mode",
    service2Copy:
      "I adjust layout, typography, spacing, and behavior across desktop, tablet, and mobile, including light and dark themes.",
    service3Title: "Contact and conversion",
    service3Copy:
      "I integrate WhatsApp, email, phone, and simple forms so the page helps you receive messages, not just look good.",
    service4Title: "Agile delivery iterations",
    service4Copy:
      "If the project needs it, I can also handle follow-up, priorities, and delivery tracking with a Project Manager / Scrum Master approach.",
    pricingLabel: "Rate",
    pricingTitle: "$30 USD per hour",
    pricingCopy:
      "Transparent pricing for focused improvements, visual refinement, or a complete single-page website ready to publish.",
    pricingCheck1: "HTML, CSS, JavaScript, and Bootstrap ready to publish",
    pricingCheck2: "Structure focused on clarity, service, and contact",
    pricingCheck3: "Prepared for free hosting and deployment",
    experienceEyebrow: "Experience",
    experienceTitle: "Development, Project Management, and Scrum in real projects.",
    experienceCopy:
      "Alongside web development, I also have formal experience coordinating work, documentation, follow-up, and stakeholder communication.",
    experienceHighlightLabel: "Project Manager / Scrum Master",
    experienceHighlightTitle: "Federal Telecommunications Institute",
    experienceHighlightItem1: "Defined agile ceremonies, operational structure, and delivery rhythm",
    experienceHighlightItem2:
      "Prepared documentation, follow-up, and reporting for leadership and client teams",
    experienceHighlightItem3: "Tracked incidents, dependencies, and progress in Jira",
    timeline1Date: "Jun 2024 · Sep 2025",
    timeline1Title: "Associate Project Manager / Scrum Master · IFT",
    timeline1Copy:
      "I coordinated internal and external stakeholders, configured Jira workflows, maintained documentation, and reported delivery status for a public-sector technology initiative.",
    timeline2Date: "Current freelance work",
    timeline2Title: "LLM Trainer · Front-end QA · Single-page apps",
    timeline2Copy:
      "I refined generated HTML, CSS, and JavaScript applications, validating visual quality, responsiveness, functionality, and consistency before final delivery.",
    timeline3Date: "May 2022 · Apr 2024",
    timeline3Title: "Software Engineer (Full-Stack) · Luxoft for Expedia Group",
    timeline3Copy:
      "I developed and maintained interface components for flight experiences using React, TypeScript, and JavaScript, with test support in Jest and Cypress.",
    timeline4Date: "Jul 2018 · May 2022",
    timeline4Title: "Web Developer · Nerdy Trust",
    timeline4Copy:
      "I designed and delivered landing pages and websites for clients such as BAMF, inDrive, Turbodega, Ubuken, TED, and NAFIN, handling iterative changes and improvements.",
    stackEyebrow: "Stack",
    stackTitle: "Highlighted technology, QA, and agile delivery skills.",
    stackCopy:
      "I do not only work on the visual side of a website. I also understand delivery, follow-up, quality, and project communication.",
    stackFrontendTitle: "Front-end and development",
    stackPmTitle: "Project Management / Scrum",
    stackQualityTitle: "Quality and delivery",
    stackTeamTitle: "Client and team collaboration",
    stackLanguagesTitle: "Languages and certifications",
    stackLanguage1: "Native Spanish",
    stackLanguage2: "English B2",
    stackLanguage3: "German A2",
    stackLanguage4: "Japanese N5 in progress",
    contactEyebrow: "Contact",
    contactTitle: "If you need a single-page website, let's talk.",
    contactCopy:
      "Tell me if you need a portfolio, a service landing page, or a visual improvement for an existing website.",
    contactIntro:
      "I work with a focus on visual clarity, easy contact, and straightforward deliverables that are easy to maintain. If you also need project order, I can support from both the technical and coordination angles.",
    contactWhatsapp: "Direct WhatsApp",
    copyEmail: "Copy email",
    formNameLabel: "Name",
    formNamePlaceholder: "Your name",
    formEmailLabel: "Email",
    formEmailPlaceholder: "your@email.com",
    formProjectLabel: "Project",
    formProjectPlaceholder: "Landing page, portfolio, redesign...",
    formMessageLabel: "Message",
    formMessagePlaceholder: "Tell me the goal of the site and the style you want.",
    formSubmit: "Open email draft",
    footerCopy: "Single-page portfolio of César Adrián Galván Medrano.",
    footerAvailability: "© {year} · Available for single-page web projects.",
    copySuccess: "Email copied to clipboard.",
    copyFailure: "I could not copy it automatically, but the email is visible above.",
    formFeedback: "I opened your email client with the drafted message.",
    mailtoSubjectPrefix: "Website inquiry",
    heroWhatsappMessage: "Hi César, I would like to get a quote for a single-page website.",
    contactWhatsappMessage: "Hi César, I am interested in your single-page website service.",
  },
};

const rootElement = document.documentElement;
const bodyElement = document.body;
const pageTitle = document.querySelector("#page-title");
const pageDescription = document.querySelector("#page-description");
const siteHeader = document.querySelector(".site-header");
const themeToggle = document.querySelector("#theme-toggle");
const themeToggleIcon = document.querySelector("#theme-toggle-icon");
const languageToggle = document.querySelector("#language-toggle");
const languageToggleLabel = document.querySelector("#language-toggle-label");
const footerYear = document.querySelector("#footer-year");
const progressBar = document.querySelector("#scroll-progress-bar");
const revealItems = document.querySelectorAll("[data-reveal]");
const sections = Array.from(document.querySelectorAll(".section-shell[id]"));
const navLinks = Array.from(document.querySelectorAll("#portfolio-nav .nav-link"));
const translatableNodes = document.querySelectorAll("[data-i18n]");
const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
const heroWhatsappLink = document.querySelector("#hero-whatsapp-link");
const contactWhatsappLink = document.querySelector("#contact-whatsapp-link");
const copyEmailButton = document.querySelector("#copy-email-button");
const copyFeedback = document.querySelector("#copy-feedback");
const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");
const navbarCollapseElement = document.querySelector("#portfolio-navbar");
const navbarCollapse =
  navbarCollapseElement && window.bootstrap
    ? bootstrap.Collapse.getOrCreateInstance(navbarCollapseElement, { toggle: false })
    : null;

const navLinkMap = new Map(
  navLinks.map((link) => [String(link.getAttribute("href") || "").replace(/^#/, ""), link])
);

function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function getTranslation(language, key) {
  return TRANSLATIONS[language]?.[key] ?? TRANSLATIONS.es[key] ?? "";
}

function getCurrentLanguage() {
  return rootElement.lang === "en" ? "en" : "es";
}

function getPreferredLanguage() {
  return localStorage.getItem(LANGUAGE_STORAGE_KEY) === "en" ? "en" : "es";
}

function getCurrentTheme() {
  return rootElement.getAttribute("data-bs-theme") === "dark" ? "dark" : "light";
}

function setThemeIcon(theme) {
  if (!themeToggleIcon) {
    return;
  }

  themeToggleIcon.innerHTML = `<i data-lucide="${theme === "dark" ? "sun" : "moon"}"></i>`;
  renderIcons();
}

function updateThemeToggle(theme) {
  if (!themeToggle) {
    return;
  }

  const language = getCurrentLanguage();
  const ariaKey = theme === "dark" ? "themeSwitchToLight" : "themeSwitchToDark";
  themeToggle.setAttribute("aria-label", getTranslation(language, ariaKey));
  setThemeIcon(theme);
}

function updateLanguageToggle(language) {
  if (!languageToggle || !languageToggleLabel) {
    return;
  }

  const switchToEnglish = language === "es";
  languageToggleLabel.textContent = switchToEnglish ? "EN" : "ES";
  languageToggle.setAttribute(
    "aria-label",
    getTranslation(language, switchToEnglish ? "switchToEnglish" : "switchToSpanish")
  );
}

function updateFooterYear() {
  if (!footerYear) {
    return;
  }

  const text = getTranslation(getCurrentLanguage(), "footerAvailability");
  footerYear.textContent = text.replace("{year}", String(new Date().getFullYear()));
}

function updateWhatsAppLinks(language) {
  const heroMessage = encodeURIComponent(getTranslation(language, "heroWhatsappMessage"));
  const contactMessage = encodeURIComponent(getTranslation(language, "contactWhatsappMessage"));

  if (heroWhatsappLink) {
    heroWhatsappLink.setAttribute("href", `${WHATSAPP_BASE_URL}?text=${heroMessage}`);
  }

  if (contactWhatsappLink) {
    contactWhatsappLink.setAttribute("href", `${WHATSAPP_BASE_URL}?text=${contactMessage}`);
  }
}

function applyLanguage(language) {
  rootElement.lang = language;
  bodyElement.setAttribute("data-language", language);

  if (pageTitle) {
    pageTitle.textContent = getTranslation(language, "metaTitle");
  }

  document.title = getTranslation(language, "metaTitle");

  if (pageDescription) {
    pageDescription.setAttribute("content", getTranslation(language, "metaDescription"));
  }

  translatableNodes.forEach((node) => {
    node.textContent = getTranslation(language, node.dataset.i18n);
  });

  placeholderNodes.forEach((node) => {
    node.setAttribute("placeholder", getTranslation(language, node.dataset.i18nPlaceholder));
  });

  updateLanguageToggle(language);
  updateThemeToggle(getCurrentTheme());
  updateFooterYear();
  updateWhatsAppLinks(language);
}

function toggleLanguage() {
  const nextLanguage = getCurrentLanguage() === "es" ? "en" : "es";
  localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  applyLanguage(nextLanguage);
}

function getPreferredTheme() {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  rootElement.setAttribute("data-bs-theme", theme);
  bodyElement.setAttribute("data-bs-theme", theme);
  updateThemeToggle(theme);
}

function toggleTheme() {
  const nextTheme = getCurrentTheme() === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  applyTheme(nextTheme);
}

function updateScrollProgress() {
  if (!progressBar) {
    return;
  }

  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  progressBar.style.width = `${progress}%`;
}

function initRevealObserver() {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

function setActiveNavLink(sectionId) {
  navLinks.forEach((link) => {
    const targetId = String(link.getAttribute("href") || "").replace(/^#/, "");
    const isActive = targetId === sectionId;

    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function getCurrentSectionId() {
  const headerOffset = siteHeader?.offsetHeight || 112;
  const anchorLine = window.scrollY + headerOffset + 32;
  let currentSectionId = sections[0]?.id || "";

  sections.forEach((section) => {
    if (anchorLine >= section.offsetTop) {
      currentSectionId = section.id;
    }
  });

  return currentSectionId;
}

function updateCurrentSectionState(forcedSectionId) {
  const currentSectionId =
    forcedSectionId && navLinkMap.has(forcedSectionId) ? forcedSectionId : getCurrentSectionId();

  sections.forEach((section) => {
    section.classList.toggle("is-current", section.id === currentSectionId);
  });

  setActiveNavLink(currentSectionId);
}

function initAnchorScrolling() {
  const hashLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

  hashLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = targetId ? document.querySelector(targetId) : null;

      if (!target || !targetId) {
        return;
      }

      event.preventDefault();
      updateCurrentSectionState(target.id);
      window.history.replaceState(null, "", targetId);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      if (navbarCollapseElement?.classList.contains("show") && navbarCollapse) {
        navbarCollapse.hide();
      }
    });
  });
}

function initCopyEmail() {
  if (!copyEmailButton || !copyFeedback) {
    return;
  }

  copyEmailButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      copyFeedback.textContent = getTranslation(getCurrentLanguage(), "copySuccess");
    } catch (error) {
      copyFeedback.textContent = getTranslation(getCurrentLanguage(), "copyFailure");
    }
  });
}

function initContactForm() {
  if (!contactForm || !formFeedback) {
    return;
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const language = getCurrentLanguage();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const project = String(formData.get("project") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(
      `${getTranslation(language, "mailtoSubjectPrefix")}: ${project}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project: ${project}`,
        "",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
    formFeedback.textContent = getTranslation(language, "formFeedback");
  });
}

function initLanguage() {
  applyLanguage(getPreferredLanguage());

  if (languageToggle) {
    languageToggle.addEventListener("click", toggleLanguage);
  }
}

function initTheme() {
  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const onThemePreferenceChange = (event) => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    if (storedTheme === "light" || storedTheme === "dark") {
      return;
    }

    applyTheme(event.matches ? "dark" : "light");
  };

  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", onThemePreferenceChange);
  } else if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(onThemePreferenceChange);
  }
}

function handleViewportChange() {
  updateScrollProgress();
  updateCurrentSectionState();
}

initLanguage();
initTheme();
renderIcons();
updateScrollProgress();
updateCurrentSectionState(window.location.hash.replace(/^#/, ""));
initRevealObserver();
initAnchorScrolling();
initCopyEmail();
initContactForm();

window.addEventListener("scroll", () => {
  updateScrollProgress();
  updateCurrentSectionState();
}, { passive: true });

window.addEventListener("resize", handleViewportChange);
window.addEventListener("load", handleViewportChange);
window.addEventListener("hashchange", () => {
  updateCurrentSectionState(window.location.hash.replace(/^#/, ""));
});
