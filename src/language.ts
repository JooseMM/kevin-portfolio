interface LanguageContent {
  es: { [key: string]: string };
  en: { [key: string]: string };
}

let currentLanguage: "es" | "en" = "en";
if (navigator.language?.toLowerCase() === "es") currentLanguage = "es";

const HEADER_CONTENT: LanguageContent = {
  en: {
    "nav-link-1": "service",
    "nav-link-2": "projects",
    "nav-link-3": "workflow",
    "nav-link-button": "connect",
  },
  es: {
    "nav-link-1": "servicios",
    "nav-link-2": "proyectos",
    "nav-link-3": "flujo de trabajo",
    "nav-link-button": "conectar",
  },
};

const HERO_CONTENT: LanguageContent = {
  es: {
    "hero-description-extra": "disponible para pedidos globalmente",
    "hero-description-title": "Artesano Dental",
    "hero-description-title-highlight": "Precision Digital",
    "hero-description-paragraph":
      "Dominio de flujos de trabajo complejos en Exocad para acortar la distancia entre los requisitos clínicos y la perfección estética. Especialización en artesanía dental restauradora de alta gama.",
    "hero-description-actions-primary": "mirar casos",
    "hero-description-actions-secondary": "flujo de trabajo",
  },
  en: {
    "hero-description-extra": "AVAILABLE FOR GLOBAL COMMISSIONS",
    "hero-description-title": "Precision Digital",
    "hero-description-title-highlight": "Dental Artisan",
    "hero-description-paragraph":
      "Mastering complex Exocad workflows to bridge the gap between clinical requirements and aesthetic perfection. Specializing in high-end restorative dental craftsmanship.",
    "hero-description-actions-primary": "view cases",
    "hero-description-actions-secondary": "our workflow",
  },
};

const SERVICES_CONTENT: LanguageContent = {
  es: {
    "services-title": "Servicios de Laboratorio Digital",
    "services-description":
      "Elevando la odontología restauradora mediante una planificación digital de precisión y la ciencia de materiales biocompatibles.",
  },
  en: {
    "services-title": "Digital Lab Services",
    "services-description":
      "Elevating restorative dentistry through precision digital planning and biocompatible material science.",
  },
};

const CONTENT: LanguageContent[] = [
  HEADER_CONTENT,
  HERO_CONTENT,
  SERVICES_CONTENT,
];

CONTENT.forEach((content) => {
  const keys = Object.keys(content[currentLanguage]);

  keys.forEach((k) => {
    const target = document.getElementById(k);
    if (target) target.textContent = content[currentLanguage][k];
  });
});
