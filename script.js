const EMAIL_ADDRESS = "cesar.galvanmedrano@gmail.com";
const THEME_STORAGE_KEY = "portfolio-theme";

const rootElement = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const themeToggleIcon = document.querySelector("#theme-toggle-icon");
const footerYear = document.querySelector("#footer-year");
const progressBar = document.querySelector("#scroll-progress-bar");
const revealItems = document.querySelectorAll("[data-reveal]");
const sections = Array.from(document.querySelectorAll(".section-shell[id]"));
const copyEmailButton = document.querySelector("#copy-email-button");
const copyFeedback = document.querySelector("#copy-feedback");
const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");
const navbarCollapseElement = document.querySelector("#portfolio-navbar");
const navbarCollapse =
  navbarCollapseElement && window.bootstrap
    ? bootstrap.Collapse.getOrCreateInstance(navbarCollapseElement, { toggle: false })
    : null;

function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setThemeIcon(theme) {
  if (!themeToggleIcon) {
    return;
  }

  themeToggleIcon.innerHTML = `<i data-lucide="${theme === "dark" ? "sun" : "moon"}"></i>`;
  renderIcons();
}

function getPreferredTheme() {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function updateThemeToggle(theme) {
  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Cambiar a light mode" : "Cambiar a dark mode"
    );
  }
  setThemeIcon(theme);
}

function applyTheme(theme) {
  rootElement.setAttribute("data-bs-theme", theme);
  document.body.setAttribute("data-bs-theme", theme);
  updateThemeToggle(theme);
}

function toggleTheme() {
  const nextTheme = rootElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  applyTheme(nextTheme);
}

function updateFooterYear() {
  if (footerYear) {
    footerYear.textContent = `© ${new Date().getFullYear()} · Disponible para proyectos web single-page.`;
  }
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

function initSectionObserver() {
  const ratios = new Map(sections.map((section) => [section.id, 0]));

  const markCurrentSection = () => {
    let currentSectionId = sections[0]?.id || "";
    let maxRatio = -1;

    sections.forEach((section) => {
      const currentRatio = ratios.get(section.id) || 0;

      if (currentRatio > maxRatio) {
        maxRatio = currentRatio;
        currentSectionId = section.id;
      }
    });

    sections.forEach((section) => {
      section.classList.toggle("is-current", section.id === currentSectionId);
    });
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
      });

      markCurrentSection();
    },
    {
      threshold: [0.2, 0.35, 0.5, 0.65],
      rootMargin: "-12% 0px -38% 0px",
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
  markCurrentSection();
}

function initScrollSpy() {
  if (!window.bootstrap) {
    return;
  }

  bootstrap.ScrollSpy.getOrCreateInstance(document.body, {
    target: "#portfolio-nav",
    offset: 120,
  });
}

function refreshScrollSpy() {
  if (!window.bootstrap) {
    return;
  }

  const scrollSpy = bootstrap.ScrollSpy.getInstance(document.body);

  if (scrollSpy) {
    scrollSpy.refresh();
  }
}

function initAnchorScrolling() {
  const hashLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

  hashLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = targetId ? document.querySelector(targetId) : null;

      if (!target) {
        return;
      }

      event.preventDefault();
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
      copyFeedback.textContent = "Email copiado al portapapeles.";
    } catch (error) {
      copyFeedback.textContent = "No pude copiarlo automáticamente, pero el correo está visible arriba.";
    }
  });
}

function initContactForm() {
  if (!contactForm || !formFeedback) {
    return;
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const project = String(formData.get("project") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`Consulta web: ${project}`);
    const body = encodeURIComponent(
      [
        `Nombre: ${name}`,
        `Correo: ${email}`,
        `Proyecto: ${project}`,
        "",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
    formFeedback.textContent = "Abrí tu cliente de correo con el mensaje precargado.";
  });
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

initTheme();
renderIcons();
updateFooterYear();
updateScrollProgress();
initRevealObserver();
initSectionObserver();
initScrollSpy();
initAnchorScrolling();
initCopyEmail();
initContactForm();

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", () => {
  updateScrollProgress();
  refreshScrollSpy();
});
