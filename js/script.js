const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const menuImg = document.querySelector(".icon-hamburger")

navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible") ? navToggle.setAttribute("aria-expanded", false) : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    menuImg.classList.toggle("img-close")
})

