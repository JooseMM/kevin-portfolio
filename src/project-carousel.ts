let currentIndex = 0;
const projectList = ["/projects/project-1.html", "https://example.org"];

const frame = document.getElementById("projects-showcase") as HTMLIFrameElement;
if (!frame) throw new Error("Unable to find the iframe project element");

const previousProject = document.getElementById("project-showcase-prev");
if (!previousProject)
  throw new Error("Unable to find the iframe previous button element");

const nextProject = document.getElementById("project-showcase-next");
if (!nextProject)
  throw new Error("Unable to find the iframe next button element");

frame.src = projectList[0];

previousProject.addEventListener("click", () => {
  if (currentIndex <= 0) {
    frame.src = projectList[0];
    return;
  }
  currentIndex = (currentIndex - 1) % projectList.length;
  frame.src = projectList[currentIndex];
});

nextProject.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projectList.length;
  frame.src = projectList[currentIndex];
});
