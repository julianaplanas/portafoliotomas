// Main menu buttons
const about = document.querySelector('.about-nav');
const projects = document.querySelector('.projects-nav');
const events = document.querySelector('.events-nav');
const publications = document.querySelector('.publications-nav');
const contact = document.querySelector('.contact-nav');

// Main sections
const navbar = document.getElementById('navbar-box')
const mainMenuBox = document.getElementById('main-menu-box');
const aboutBox = document.getElementById('about-box');
const eventsBox = document.getElementById('events-box');
const publicationsBox = document.getElementById('publications-box');
const contactBox = document.getElementById('contact-box');
const projectsBox = document.getElementById('projects-box');

// Burger nav
const aboutBurgerNav = document.getElementById('about-burger-nav');
const projectsBurgerNav = document.getElementById('projects-burger-nav');
const eventsBurgerNav = document.getElementById('events-burger-nav');
const publicationsBurgerNav = document.getElementById('publications-burger-nav');
const contactBurgerNav = document.getElementById('contact-burger-nav');

about.addEventListener('click', ()=>{
    navbarDisplay()
    aboutBox.style.display = 'block';
    eventsBox.style.display = 'none';
    publicationsBox.style.display = 'none';
    contactBox.style.display = 'none';
    projectsBox.style.display = 'none';
})

projects.addEventListener('click', () =>{
    navbarDisplay()
    aboutBox.style.display = 'none';
    eventsBox.style.display = 'none';
    publicationsBox.style.display = 'none';
    contactBox.style.display = 'none';
    projectsBox.style.display = 'block';
})

events.addEventListener('click', () =>{
    navbarDisplay()
    aboutBox.style.display = 'none';
    eventsBox.style.display = 'block';
    publicationsBox.style.display = 'none';
    contactBox.style.display = 'none';
    projectsBox.style.display = 'none';
})

publications.addEventListener('click', () =>{
    navbarDisplay()
    aboutBox.style.display = 'none';
    eventsBox.style.display = 'none';
    publicationsBox.style.display = 'block';
    contactBox.style.display = 'none';
    projectsBox.style.display = 'none';
})

contact.addEventListener('click', () =>{
    navbarDisplay()
    aboutBox.style.display = 'none';
    eventsBox.style.display = 'none';
    publicationsBox.style.display = 'none';
    contactBox.style.display = 'block';
    projectsBox.style.display = 'none';
})

// Navbar for secondary pages

const menuBox = document.getElementById('menu-box');
const contactFooter = document.getElementById('contactFooter')
const burgerMenuBox = document.getElementById('burger-menu-box')

const navbarDisplay = ()=>{
    contactFooter.style.display = 'none';
    mainMenuBox.style.display = 'none'
    burgerMenuBox.style.display = 'block'
}

aboutBurgerNav.addEventListener('click', ()=>{
    aboutBox.style.display = 'block';
    eventsBox.style.display = 'none';
    publicationsBox.style.display = 'none';
    contactBox.style.display = 'none';
    projectsBox.style.display = 'none';
})

projectsBurgerNav.addEventListener('click', () =>{
    aboutBox.style.display = 'none';
    eventsBox.style.display = 'none';
    publicationsBox.style.display = 'none';
    contactBox.style.display = 'none';
    projectsBox.style.display = 'block';
})

eventsBurgerNav.addEventListener('click', () =>{
    aboutBox.style.display = 'none';
    eventsBox.style.display = 'block';
    publicationsBox.style.display = 'none';
    contactBox.style.display = 'none';
    projectsBox.style.display = 'none';
})

publicationsBurgerNav.addEventListener('click', () =>{
    aboutBox.style.display = 'none';
    eventsBox.style.display = 'none';
    publicationsBox.style.display = 'block';
    contactBox.style.display = 'none';
    projectsBox.style.display = 'none';
})

contactBurgerNav.addEventListener('click', () =>{
    aboutBox.style.display = 'none';
    eventsBox.style.display = 'none';
    publicationsBox.style.display = 'none';
    contactBox.style.display = 'block';
    projectsBox.style.display = 'none';
})

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
});

// Publications

const imageTYL = document.getElementById('image-tyl');
const textTYL = document.getElementById('text-tyj');
const imageMM = document.getElementById('image-mm');
const textMM = document.getElementById('text-mm');

imageTYL.addEventListener('click', () =>{
    textTYL.style.display = 'block';
})

imageMM.addEventListener('click', ()=>{
    textMM.style.display = 'block';
})

// Contact
const gmailLink = document.getElementById('gmail-link')
const gmail = document.getElementById('gmail');

gmailLink.addEventListener('click', ()=>{
    gmail.style.display = 'block';
})