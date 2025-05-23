const navBar = document.querySelector(".nav-bar");
const body = document.body;
const hamburger =document.querySelector(".hamburger");
hamburger.addEventListener('click', ()=>{
     navBar.classList.toggle("active");
     hamburger.classList.toggle("active");

     if (navBar.classList.contains("active")) {
         body.classList.add("active");
     } else {
         body.classList.remove("active");
     }
});