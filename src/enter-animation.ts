const heroDescription = document.getElementById("hero-description-container");
const heroImage = document.getElementById("hero-image-container");

window.addEventListener("load", () => {
  heroDescription?.classList.toggle("left--in");
  heroImage?.classList.toggle("right--in");
});
