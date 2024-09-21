const nav = document.querySelector(".menu-ul")
const burger = document.querySelector(".burger")
const menu = document.querySelector(".menu")
var x = window.matchMedia("(max-width: 700px)")
function openNav() {
    /*if (x.matches) { // If media query matches
    menu.style.width = '100vw'
    nav.style.transform = 'translateX(100%)'
    nav.style.transition = '.7s all'
    burger.style.transform = 'translateY(-100%)'
    burger.style.transition = '1s all' }
    else {
    menu.style.width = '50vw'
    nav.style.transform = 'translateX(100%)'
    nav.style.transition = '.7s all'
    burger.style.transform = 'translateY(-100%)'
    burger.style.transition = '1s all'
    }*/
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    if (x.matches) {
        menu.style.width = '100vw';
        nav.style.transform = 'translateX(100%)';
        nav.style.transition = '.7s all'
    } else {
        menu.style.width = '50vw';
        nav.style.transform = 'translateX(100%)';
        nav.style.transition = '.7s all'
    }
    burger.style.transform = 'translateY(-100%)';
}


function closeNav() {
    /*nav.style.transform = 'translateX(-100%)'
    nav.style.transition = '1s all'
    burger.style.transform = 'translateY(0)'
    burger.style.transition = '1s all'*/
    document.body.style.overflow = ''; // Re-enable scrolling
    nav.style.transform = 'translateX(-100%)';
    burger.style.transform = 'translateY(0)';
    burger.style.transition = '1s all'
}

function myFunction(x) {
    if (x.matches) { // If media query matches
      nav.style.transform = 'translateX(200%)'
    nav.style.transition = '1s all'
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }
  

  
