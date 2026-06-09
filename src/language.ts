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

const FOOTER_CONTENT: LanguageContent = {
  en: {
    "footer-link-1": "service",
    "footer-link-2": "projects",
    "footer-link-3": "workflow",
  },
  es: {
    "footer-link-1": "servicios",
    "footer-link-2": "proyectos",
    "footer-link-3": "flujo de trabajo",
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

const PROJECT_CONTENT: LanguageContent = {
  es: {
    "projects-title": "El Escaparate Digital",
    "project-title-description":
      "Experimente casos interactivos en 3D renderizados directamente desde nuestro flujo de trabajo de Exocad. Altere entre materiales e inspeccione las restauraciones con precisión quirúrgica.",
  },
  en: {
    "projects-title": "The Digital Showcase",
    "project-title-description":
      "Experience interactive 3D cases rendered directly from our Exocad workflow. Toggle materials and inspect restorations with surgical precision.",
  },
};

const SERVICES_CONTENT: LanguageContent = {
  es: {
    "services-title": "Servicios de Laboratorio Digital",
    "services-description":
      "Elevando la odontología restauradora mediante planificación digital de precisión y ciencia de materiales biocompatibles.",
    /* service list - 1*/
    "services-description-1-title": "Planificación de Implantes en 3D",
    "services-description-1-description":
      "Soluciones quirúrgicas totalmente guiadas que incluyen guías apilables y diseños de provisionalización inmediata para casos complejos de múltiples unidades.",
    "services-description-1-extra-1": "Fusión de DICOM / STL",
    "services-description-1-extra-2": "Mapeo del Nervio",
    "services-description-1-extra-3": "Guías de Reducción Ósea",
    /* service list - 2 */
    "services-description-2-title": "Restauración de Arcada Completa",
    "services-description-2-description":
      "Estructuras de Zirconio Monolítico o Pekkton con protocolos de estratificación estética de alta gama.",
    /* service list - 3 */
    "services-description-3-title": "Diseño de Sonrisa",
    "services-description-3-description":
      "Integración facial 2D/3D utilizando Exocad Smile Creator para obtener resultados estéticos predecibles.",
    /* service list - 3 */
    "services-description-4-title": "Dominio de Exocad",
    "services-description-4-description":
      "Aprovechando el scripting avanzado y la integración de librerías personalizadas para ofrecer restauraciones que se adaptan perfectamente y lucen naturales.",
    "services-description-4-extra-1": "Zirconio",
    "services-description-4-extra-2": "E-Max",
    "services-description-4-extra-3": "PMMA",
    "services-description-4-extra-4": "Titanio",
  },
  en: {
    "services-title": "Digital Lab Services",
    "services-description":
      "Elevating restorative dentistry through precision digital planning and biocompatible material science.",
    /* service list - 1*/
    "services-description-1-title": "3D Implant Planning",
    "services-description-1-description":
      "Fully guided surgical solutions including stackable guides and immediate temporization designs for complex multi-unit cases.",
    "services-description-1-extra-1": "DICOM / STL Merging",
    "services-description-1-extra-2": "Nerve Mapping",
    "services-description-1-extra-3": "Bone Reduction Guides",
    /* service list - 2 */
    "services-description-2-title": "Full Arch Restoration",
    "services-description-2-description":
      "Monolithic Zirconia or Pekkton frameworks with high-end aesthetic layering protocols.",
    /* service list - 3 */
    "services-description-3-title": "Smile Design",
    "services-description-3-description":
      "2D/3D facial integration using Exocad Smile Creator for predictable aesthetic outcomes.",
    /* service list - 3 */
    "services-description-4-title": "Exocad Mastery",
    "services-description-4-description":
      "Leveraging advanced scripting and custom library integration to provide restorations that fit perfectly and look natural.",
    "services-description-4-extra-1": "Zirconia",
    "services-description-4-extra-2": "E-Max",
    "services-description-4-extra-3": "PMMA",
    "services-description-4-extra-4": "Titanium",
  },
};

const BEFORE_AFTER_CONTENT: LanguageContent = {
  es: {
    "before-after-title-b": "Antes y Después:",
    "before-after-title-span": "El Cambio de Precisión",
    "before-after-title-description":
      "Nuestro enfoque centrado en lo digital elimina las inconsistencias del modelado manual. Vea la transformación de una dentición comprometida a una restauración dominada digitalmente.",
    "before-after-list-1-b": "Escaneo Intraoral: ",
    "before-after-list-1-span":
      "Las impresiones digitales de alta resolución eliminan los incómodos moldes de masilla manuales.",
    "before-after-list-2-b": "Análisis Dinámico: ",
    "before-after-list-2-span":
      "La simulación oclusal garantiza una estabilidad a largo plazo y un confort funcional.",
  },
  en: {
    "before-after-title-b": "Before & After:",
    "before-after-title-span": "The Precision Shift",
    "before-after-title-description":
      "Our digital-first approach eliminates the inconsistencies of manual modeling. See the transformation from a compromised dentition to a digitally mastered restoration.",
    "before-after-list-1-b": "Intraoral Scan: ",
    "before-after-list-1-span":
      "High-resolution digital impressions eliminate uncomfortable manual putty molds.",
    "before-after-list-2-b": "Dynamic Analysis: ",
    "before-after-list-2-span":
      "Occlusal simulation ensures long-term stability and functional comfort.",
  },
};

const CTA_CONTENT: LanguageContent = {
  es: {
    "cta-title": "¿Listo para digitalizarte?",
    "cta-description":
      'Conéctate con un técnico que habla tanto el idioma del "dentista" como el "digital". Colaboremos en tu próximo caso complejo.',
  },
  en: {
    "cta-title": "Ready to Digitalize?",
    "cta-description":
      'Connect with a technician who speaks both "Dentist" and "Digital". Let\'s collaborate on your next complex case.',
  },
};

const WORKFLOW_CONTENT: LanguageContent = {
  es: {
    "workflow-title": "El ecosistema",
    "workflow-description": "Desde la admisión digital hasta el diseño final",
    /* Steps */
    "workflow-step-1-title": "Portal digital",
    "workflow-step-1-description":
      "Carga segura de datos STL, PLY y DICOM a través de nuestro portal de laboratorio encriptado.",
    "workflow-step-2-title": "Marcado virtual",
    "workflow-step-2-description":
      "Análisis de prediseño de márgenes, vías de inserción y espacio libre oclusal dentro de las 4 horas posteriores a la recepción.",
    "workflow-step-3-title": "Diseño en Exocad",
    "workflow-step-3-description":
      "Modelado de precisión utilizando parámetros específicos del paciente y estándares de oro estéticos.",
    "workflow-step-4-title": "Resultado final",
    "workflow-step-4-description":
      "Las unidades fresadas o impresas se inspeccionan bajo un aumento de 20x antes del envío o de la devolución del archivo digital.",
  },
  en: {
    "workflow-title": "the ecosystem",
    "workflow-description": "Digital Intake to Final Design",
    /* Steps */
    "workflow-step-1-title": "Digital Portal",
    "workflow-step-1-description":
      "Secure upload of STL, PLY, and DICOM data through our encrypted laboratory portal.",
    "workflow-step-2-title": "Virtual Markup",
    "workflow-step-2-description":
      "Pre-design analysis of margins, paths of insertion, and occlusal clearance within 4 hours of receipt.",
    "workflow-step-3-title": "Exocad Craft",
    "workflow-step-3-description":
      "Precision modeling using patient-specific parameters and aesthetic gold-standards.",
    "workflow-step-4-title": "Final Output",
    "workflow-step-4-description":
      "Milled or printed units are inspected under 20x magnification before dispatch or digital file return.",
  },
};

const CONTENT: LanguageContent[] = [
  HEADER_CONTENT,
  HERO_CONTENT,
  SERVICES_CONTENT,
  PROJECT_CONTENT,
  BEFORE_AFTER_CONTENT,
  WORKFLOW_CONTENT,
  FOOTER_CONTENT,
  CTA_CONTENT,
];

CONTENT.forEach((content) => {
  const keys = Object.keys(content[currentLanguage]);

  keys.forEach((k) => {
    const target = document.getElementById(k);
    if (target) target.textContent = content[currentLanguage][k];
  });
});
