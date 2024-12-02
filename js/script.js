"use strict";
console.log("Hello world");

const menuboxEl = document.querySelector(".menu-box");
const menuopenIcon = document.querySelector(".menu-open");
const menucloseIcon = document.querySelector(".menu-close");
const navcontainerEl = document.querySelector(".nav-container");

menuopenIcon.classList.remove("hidden");
menucloseIcon.classList.add("hidden");
// document.body.classList.remove("overflow-stop");
function switchNavigation() {
  console.log("triggered navigation");
  menuopenIcon.classList.toggle("hidden");
  menucloseIcon.classList.toggle("hidden");
  navcontainerEl.classList.toggle("nav-show");

  //   document.body.classList.toggle("overflow-stop");
}

menuboxEl.addEventListener("click", switchNavigation);
