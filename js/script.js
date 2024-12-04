"use strict";
console.log("Hello world");

const menuopenIcon = document.querySelector(".menu-open");
const menucloseIcon = document.querySelector(".menu-close");
const navcontainerEl = document.querySelector(".nav-container");
const navlistEl = document.querySelector(".nav-list");
const navItemsArr = [...navlistEl.querySelectorAll("li a")];

document.body.classList.remove("overflowY-stop");
function switchNavigation() {
  console.log("triggered navigation");
  navcontainerEl.classList.toggle("nav-show");
  document.body.classList.toggle("overflowY-stop");

  // animation for opened nav-elements
  navItemsArr.forEach((eachItem) => {
    eachItem.classList.toggle("animate--navitem_L");
  });
}

menuopenIcon.addEventListener("click", switchNavigation);
menucloseIcon.addEventListener("click", switchNavigation);
navItemsArr.forEach((eachItem) =>
  eachItem.addEventListener("click", switchNavigation)
);
