// 860px is point where navbar stops having hamburger menu
const navBarResizePoint = 860;

window.onresize = () => {
  if (window.innerWidth >= navBarResizePoint) {
    createDesktopNavbar();
  } else {
    createMobileNavbar();
  }
};

function createDesktopNavbar() {
  console.log('desktop');
  // Insert desktop navbar
  const navbar = document.querySelector('.nav-bar');

  // Navbar Logo
  link = document.createElement('a');
  image = document.createElement('img');

  // image.setAttribute('id', 'navbar-logo');
  // image.setAttribute('src', 'img/main-logo.png');
  // link.appendChild(image);
  // navbar.replaceChildren(link);
  navbar.replaceChildren('desktop');

  // Microsoft 365
  // Teams
  // Copilot
  // Windows
  // More

  // ALl Microsoft
  // Magnifying Glass
  // Cart
  // User Portrait
}

function createMobileNavbar() {
  console.log('mobile');
  // Insert mobile navbar
  const navbar = document.querySelector('.nav-bar');
  let link = document.createElement('a');
  let icon = document.createElement('i');

  // Hamburger
  icon.setAttribute('class', 'fa-solid fa-bars');
  link.setAttribute('href', '#');
  link.appendChild(icon);
  navbar.replaceChildren(link);

  // Search
  link = document.createElement('a');
  icon = document.createElement('i');

  icon.setAttribute('class', 'fa-solid fa-magnifying-glass');
  link.setAttribute('href', '#');
  link.appendChild(icon);
  navbar.appendChild(link);

  // Navbar Logo
  link = document.createElement('a');
  image = document.createElement('img');

  image.setAttribute('id', 'navbar-logo');
  image.setAttribute('src', 'img/main-logo.png');
  link.appendChild(image);
  navbar.appendChild(link);

  // Shopping Cart
  link = document.createElement('a');
  icon = document.createElement('i');

  icon.setAttribute('class', 'fa-solid fa-cart-shopping');
  link.setAttribute('href', '#');
  link.appendChild(icon);
  navbar.appendChild(link);

  // User Icon
  link = document.createElement('a');
  icon = document.createElement('i');

  icon.setAttribute('class', 'fa-regular fa-user');
  link.setAttribute('href', '#');
  link.appendChild(icon);
  navbar.appendChild(link);
}
