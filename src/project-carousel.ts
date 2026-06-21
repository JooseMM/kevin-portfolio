let currentIndex = 0;
const projectList = [
  "/projects/project-1.html",
  "/projects/project-2.html",
  "/projects/project-3.html",
  "/projects/project-4.html",
  "/projects/project-5.html",
];

const spinner = document.getElementById(
  "iframe-loading-spinner",
) as HTMLIFrameElement;
if (!spinner)
  throw new Error("Unable to find the iframe loading spinner element");

const frame = document.getElementById("projects-showcase") as HTMLIFrameElement;
if (!frame) throw new Error("Unable to find the iframe project element");

showLoadingSpinner(true);

const previousProject = document.getElementById(
  "project-showcase-prev",
) as HTMLButtonElement;
if (!previousProject)
  throw new Error("Unable to find the iframe previous button element");

const nextProject = document.getElementById(
  "project-showcase-next",
) as HTMLButtonElement;
if (!nextProject)
  throw new Error("Unable to find the iframe next button element");

frame.src = projectList[0];

forbidInteraction(true);
frame.onload = () => {
  forbidInteraction(false);
  showLoadingSpinner(false);
};

previousProject.addEventListener("click", () => {
  if (currentIndex <= 0) {
    frame.src = projectList[0];
    return;
  }
  currentIndex = (currentIndex - 1) % projectList.length;

  forbidInteraction(true);
  showLoadingSpinner(true);
  freeMemory();
  setTimeout(() => (frame.src = projectList[currentIndex]));
});

nextProject.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projectList.length;

  forbidInteraction(true);
  showLoadingSpinner(true);
  freeMemory();
  setTimeout(() => (frame.src = projectList[currentIndex]));
});

function forbidInteraction(disable: boolean) {
  previousProject.disabled = disable;
  nextProject.disabled = disable;
}

function freeMemory() {
  if (frame.contentWindow) {
    frame.contentWindow.document.body.innerHTML = "";
    frame.contentWindow.document.head.innerHTML = "";
  }
}

function showLoadingSpinner(show: boolean) {
  frame.style.display = show ? "none" : "block";
  spinner.style.display = show ? "block" : "none";
}
