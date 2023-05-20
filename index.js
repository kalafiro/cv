const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
})

var day_night = document.querySelector(".toggle");
const body = document.querySelector(".body");
var header = document.querySelector("header")

day_night.addEventListener("click", () => {
  header.classList.toggle("day");
  body.classList.toggle("day");
})

const readMoreButton = document.querySelector('.btn-read');
const servicesSection = document.querySelector('#serv');

readMoreButton.addEventListener('click', () => {
  servicesSection.scrollIntoView({ behavior: 'smooth' });
});

// header 2
hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
nav.classList.toggle("active2");}
