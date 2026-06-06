let isOpen = false;

const button = document.getElementById("navbar-mobile-menu-button");
if (!button) throw new Error("Unable to find the mobile menu button element");

const navigationMenu = document.getElementById("navbar-mobile-navigation");
if (!navigationMenu)
  throw new Error("Unable to find the mobile navigation menu element");

const closeMenuSVG = `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ddb7ff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#ddb7ff"></path> </g></svg>
`;

const hamburguerSVG = `
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ddb7ff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 18L20 18"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
            <path
              d="M4 12L20 12"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
            <path
              d="M4 6L20 6"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
          </g>
        </svg>
`;

button.innerHTML = hamburguerSVG;

document.body.addEventListener("click", (event) => {
  if (!isOpen) return;
  toggleMenu(event);
});

button.onclick = toggleMenu;

function toggleMenu(event: Event): void {
  if (!button || !navigationMenu)
    throw new Error("Unable to find button or navigationMenu element");

  event.stopPropagation();

  isOpen = !isOpen;
  button.innerHTML = isOpen ? closeMenuSVG : hamburguerSVG;

  navigationMenu.classList.toggle("navbar__navigation--close");
  document.body.classList.toggle("overlay");

  button.classList.toggle("navbar--mobile__menu__button--animate");
  setTimeout(() => {
    button.classList.toggle("navbar--mobile__menu__button--animate");
  }, 150);
}
