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

const workflowTitle = document.getElementById("workflow-title");
if (!workflowTitle)
  throw new Error("Unable to find the workflow title element");

const workFlowStep1 = document.getElementById("workflow-step-1");
if (!workFlowStep1)
  throw new Error("Unable to find the workflow step 1 element");

const workFlowStep2 = document.getElementById("workflow-step-2");
if (!workFlowStep2)
  throw new Error("Unable to find the workflow step 2 element");

const workFlowStep3 = document.getElementById("workflow-step-3");
if (!workFlowStep3)
  throw new Error("Unable to find the workflow step 3 element");

const workFlowStep4 = document.getElementById("workflow-step-4");
if (!workFlowStep4)
  throw new Error("Unable to find the workflow step 4 element");

const workflowObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      workFlowStep1.classList.toggle("left--in");
      workFlowStep2.classList.toggle("right--in");
      workFlowStep3.classList.toggle("left--in");
      workFlowStep4.classList.toggle("right--in");

      workflowObserver.unobserve(entry.target);
    }
  });
});

workflowObserver.observe(workflowTitle);
beforeAfterObserver.observe(beforeAfterDescriptionContainer);
projectObserver.observe(projectShowcaseContainer);
servicesObserver.observe(serviceList);
