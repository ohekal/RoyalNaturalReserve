 
let menuBtn = document.getElementById("menu-icon");
let navBar = document.getElementById("nav-bar");
let overlay = document.querySelector(".overlay");
 
menuBtn.addEventListener("click" , ()=>{
  navBar.classList.toggle("nav-open")
   overlay.classList.toggle("overlay-open")
});
overlay.addEventListener("click" , ()=>{
  navBar.classList.remove("nav-open");
  overlay.classList.toggle("overlay-open") ;

})
 