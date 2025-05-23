const navBar = document.querySelector(".nav-bar");
const body = document.body;      
       const main = document.querySelector(".main");
const hamburger =document.querySelector(".hamburger");

const homenav = document.querySelector(".homenav");
const teamscc = document.querySelector(".teamscc"); const teamPage = document.querySelector(".team-page");
const aboutnav = document.querySelector(".aboutnav");
const contact = document.querySelector(".contact");
const aboutPage = document.querySelector(".about-page");
const contactPage = document.querySelector(".contact-page");
const header=document.querySelector(".header");
const gg = document.querySelector(".gg");
const devboy = document.querySelector(".devboy");

devboy.addEventListener('click', ()=>{
   aboutPage.classList.remove("active"); gg.classList.add("active");header.classList.add("active");body.classList.remove("active");
 contactPage.classList.remove("active");
 teampage.classList.remove('active');
 foot.classList.remove('active');
 mainpage.classList.add("active"); 
})
const bt=document.getElementById("bt");bt.addEventListener('click', ()=>{
gg.classList.remove("active");
header.classList.remove("active");
body.classList.remove("active");
teampage.classList.remove('active');
foot.classList.remove('active');
mainpage.classList.remove("active"); 
})

hamburger.addEventListener('click', ()=>{
     navBar.classList.toggle("active");
     hamburger.classList.toggle("active");

     if (navBar.classList.contains("active")) {
         body.classList.add("active");
     } else {
         body.classList.remove("active");
     }
});


const teampage=document.querySelector(".teampage");
teamscc.addEventListener('click',()=>{
     teampage.classList.add("active");
     aboutPage.classList.remove("active");
     contactPage.classList.remove("active");
     gg.classList.remove("active");
     body.classList.remove("active");
     foot.classList.remove('active');
     mainpage.classList.add("active"); 
})

aboutnav.addEventListener('click', ()=>{
     aboutPage.classList.add("active");
     contactPage.classList.remove("active");
     teampage.classList.remove('active');
     gg.classList.remove("active");
     body.classList.remove("active");
     foot.classList.remove('active');
     mainpage.classList.add("active"); 
})
contact.addEventListener('click', ()=>{
     contactPage.classList.add("active");
     aboutPage.classList.remove("active");
     teampage.classList.remove('active');
     body.classList.remove("active");
     foot.classList.add('active');
     mainpage.classList.add("active"); 
})
const ztd=document.querySelector(".ztd");
const std=document.querySelector(".std");
const atd=document.querySelector(".atd");
const btd=document.querySelector(".btd");
const ctd=document.querySelector(".ctd");
const dtd=document.querySelector(".dtd");
const fv=document.getElementById('fv');
const sv=document.getElementById('sv');
const tv=document.getElementById('tv');
const fov=document.getElementById('fov');
const fiv=document.getElementById('fiv');

fv.addEventListener('click',()=>{
     std.classList.add('active');
     ztd.classList.add('active');
     atd.classList.remove('active');
     btd.classList.remove('active');
     ctd.classList.remove('active');
     dtd.classList.remove('active');
});
sv.addEventListener('click',()=>{
     atd.classList.add('active');
     std.classList.remove('active');
     ztd.classList.add('active');
     btd.classList.remove('active');
     ctd.classList.remove('active');
     dtd.classList.remove('active');
});
tv.addEventListener('click',()=>{
     btd.classList.add('active');
     std.classList.remove('active');
     ztd.classList.add('active');
     atd.classList.remove('active');
     ctd.classList.remove('active');
     dtd.classList.remove('active');
});
fov.addEventListener('click',()=>{
     std.classList.remove('active');
     ztd.classList.add('active');
     atd.classList.remove('active');
     btd.classList.remove('active');
     ctd.classList.add('active');
     dtd.classList.remove('active');
});
fiv.addEventListener('click',()=>{
     atd.classList.remove('active');
     std.classList.remove('active');
     ztd.classList.add('active');
     btd.classList.remove('active');
     ctd.classList.remove('active');
     dtd.classList.add('active');
});

const foot=document.querySelector(".foot");

const mainpage=document.querySelector(".mainpage");

homenav.addEventListener('click', ()=>{
     mainpage.classList.remove("active");
     contactPage.classList.remove("active");
     aboutPage.classList.remove("active");
     teampage.classList.remove('active');
     body.classList.remove("active");
     foot.classList.remove('active');
})
