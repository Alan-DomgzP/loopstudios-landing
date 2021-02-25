function menuMobile() {
  if (!isOpen) {
    console.log("Opened");
    document.querySelector(".nav-hamburguer").classList.add("active");
    document.querySelector(".logo").classList.add("active");
    document.querySelector(".menu-mobile").classList.add("isOpen");
    document.body.style.overflowY = "hidden";

    navButton.src = "images/icon-close.svg";
    isOpen = true;
    console.log(isOpen);
  } else {
    console.log("Closed");
    document.querySelector(".nav-hamburguer").classList.remove("active");
    document.querySelector(".logo").classList.remove("active");
    document.querySelector(".menu-mobile").classList.remove("isOpen");
    document.body.style.overflowY = "auto";

    navButton.src = "images/icon-hamburger.svg";
    isOpen = false;
    console.log(isOpen);
  }
}

let navButton = document.getElementById("nav-button");
let isOpen = false;

navButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();

  menuMobile();
});
