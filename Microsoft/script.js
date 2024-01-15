// 860px is point where navbar stops having hamburger menu
const navBarResizePoint = 860;

document.addEventListener('DOMContentLoaded', createNavbar());
window.onresize = createNavbar;

function createNavbar() {
  if (window.innerWidth >= navBarResizePoint) {
    createDesktopNavbar();
  } else {
    createMobileNavbar();
  }
}

function createDesktopNavbar() {
  console.log('desktop');

  const navbarMobile = document.getElementById('navbar-mobile');
  const navbarDesktop = document.getElementById('navbar-desktop');
  const navbarMobileLinks = document.querySelectorAll('.navbar-mobile-link');
  const navbarDesktopLinks = document.querySelectorAll('.navbar-desktop-link');

  navbarMobile.classList.add('hidden');
  navbarDesktop.classList.remove('hidden');
  navbarMobileLinks.forEach((link) => link.classList.add('hidden'));
  navbarDesktopLinks.forEach((link) => link.classList.remove('hidden'));
}

function createMobileNavbar() {
  console.log('mobile');

  const navbarMobile = document.getElementById('navbar-mobile');
  const navbarDesktop = document.getElementById('navbar-desktop');
  const navbarMobileLinks = document.querySelectorAll('.navbar-mobile-link');
  const navbarDesktopLinks = document.querySelectorAll('.navbar-desktop-link');

  navbarDesktop.classList.add('hidden');
  navbarMobile.classList.remove('hidden');
  navbarMobileLinks.forEach((link) => link.classList.remove('hidden'));
  navbarDesktopLinks.forEach((link) => link.classList.add('hidden'));
}
