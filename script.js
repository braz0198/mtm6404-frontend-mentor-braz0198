const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const menuClose = document.querySelector(".close-icon>img");
const desktopLinks = document.querySelectorAll(".desktop-links");
const mobileLinks = document.querySelectorAll(".mobile-links");

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("hide");
  });

menuClose.addEventListener("click", () => {
    mobileMenu.classList.toggle("hide");
  });

desktopLinks.forEach((link) => {
    const subMenu = link.querySelector(".sub-menu");
    const arrow = link.querySelector("img");
    link.addEventListener("click", () => {
      link.classList.toggle("active-item");
      subMenu.classList.toggle("active-menu");
        
      if (link.classList.contains("active-item")) {
        arrow.src = "assets/images/icon-arrow-up.svg";
      } else {
        arrow.src = "assets/images/icon-arrow-down.svg";
      }
    });
  });

mobileLinks.forEach((link) => {
    const subMenu = link.querySelector(".sub-menu");
    const arrow = link.querySelector("img");
    link.addEventListener("click", () => {
      link.classList.toggle("active-item");
      subMenu.classList.toggle("active-menu");
        
      if (link.classList.contains("active-item")) {
        arrow.src = "assets/images/icon-arrow-up.svg";
      } else {
        arrow.src = "assets/images/icon-arrow-down.svg";
      }
    });
  });