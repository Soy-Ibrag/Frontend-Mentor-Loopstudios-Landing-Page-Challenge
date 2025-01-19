"use strict";

const menuBtn = document.querySelector(".menu");
const hero = document.querySelector(".hero");
const infoBox = document.querySelector(".info-box");
const gallery = document.querySelector(".gallery");
const footer = document.querySelector(".footer");
const menu = document.querySelector(".hamburguer-menu");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "block";
    hero.style.display = "none";
    infoBox.style.display = "none";
    gallery.style.display = "none"; 
    footer.style.display = "none";
});

closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
    hero.style.display = "block";
    infoBox.style.display = "flex";
    gallery.style.display = "flex"; 
    footer.style.display = "flex";
});