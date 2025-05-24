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
