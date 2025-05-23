document.addEventListener('DOMContentLoaded', () => {
  const navBar     = document.querySelector('.nav-bar');
  const hamburger  = document.querySelector('.hamburger');
  const body       = document.body;

  hamburger.addEventListener('click', () => {
    navBar.classList.toggle('active');
    hamburger.classList.toggle('active');
    body.classList.toggle('active', navBar.classList.contains('active'));
  });


  navBar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navBar.classList.remove('active');
      hamburger.classList.remove('active');
      body.classList.remove('active');
    });
  });
});

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