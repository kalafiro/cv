const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
let pageTitle = document.title;
let isPageVisible = true;

document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    
    isPageVisible = false;
    document.title = "have a nice day :)";
  } else {
   
    isPageVisible = true;
    document.title = pageTitle;
  }
});

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

$(".register").click(function(){
  $(".hidden").slideDown("hidden");
})


$(".login").click(function(){
  $(".hide").slideUp("slow");
})

hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
nav.classList.toggle("active2");}




