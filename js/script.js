"use strict";
console.log("Hello world");

const menuopenIcon = document.querySelector(".menu-open");
const menucloseIcon = document.querySelector(".menu-close");
const navcontainerEl = document.querySelector(".nav-container");

document.body.classList.remove("overflowY-stop");
function switchNavigation() {
  console.log("triggered navigation");
  navcontainerEl.classList.toggle("nav-show");
  document.body.classList.toggle("overflowY-stop");
}
menuopenIcon.addEventListener("click", switchNavigation);
menucloseIcon.addEventListener("click", switchNavigation);
