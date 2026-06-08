const heroDescription = document.getElementById("hero-description-container");
const heroImage = document.getElementById("hero-image-container");

window.addEventListener("load", () => {
  heroDescription?.classList.toggle("left--in");
  heroImage?.classList.toggle("right--in");
});

const serviceList = document.getElementById("services-list");
if (!serviceList) throw new Error("Unable to find the services container");

const servicesObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const collection = entry.target.children;

      for (let i = 0; i < collection.length; i++) {
        collection
          .item(i)
          ?.classList.toggle(i % 2 == 0 ? "left--in" : "right--in");
      }

      servicesObserver.unobserve(entry.target);
    }
  });
});

const projectShowcaseContainer = document.getElementById(
  "projects-showcase-container",
);
if (!projectShowcaseContainer)
  throw new Error("Unable to find the project showcase container element");

const projectTitleContainer = document.getElementById(
  "projects-title-container",
);
if (!projectTitleContainer)
  throw new Error("Unable to find the project title element");

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      projectShowcaseContainer.classList.toggle("right--in");
      projectTitleContainer.classList.toggle("left--in");
      projectObserver.unobserve(entry.target);
    }
  });
});

const beforeAfterDescriptionContainer = document.getElementById(
  "before-after-description",
);
if (!beforeAfterDescriptionContainer)
  throw new Error(
    "Unable to find the before-after description container element",
  );

const beforeAfterImage = document.getElementById("before-after-image");
if (!beforeAfterImage)
  throw new Error("Unable to find the before-after image element");

const beforeAfterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      beforeAfterDescriptionContainer.classList.toggle("left--in");
      beforeAfterImage.classList.toggle("right--in");
      beforeAfterObserver.unobserve(entry.target);
    }
  });
});

beforeAfterObserver.observe(beforeAfterDescriptionContainer);
projectObserver.observe(projectShowcaseContainer);
servicesObserver.observe(serviceList);
