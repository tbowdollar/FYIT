// Vars
const header = document.getElementById('header');
const logo = document.getElementsByClassName('logo')[0];
const nav = document.getElementsByClassName('navigation')[0];
const burger = document.getElementsByClassName('burger')[0];
var br = document.getElementsByClassName('br');

// Functions
function addClass(element, className) {
  element.classList.add(className);
}
function removeClass(element, className) {
  element.classList.remove(className);
}
function toggleClass(element, className) {
  element.classList.toggle(className);
}

burger.addEventListener('click', function() {
  toggleClass(br[1], 'hide');
  toggleClass(br[0], 'openL');
  toggleClass(br[2], 'openR');
});


// Events
window.addEventListener('scroll', function() {
  if(window.pageYOffset > 0){
    addClass(header, 'scroll');
    addClass(logo, 'scroll');
    addClass(nav, 'scroll');
    addClass(burger, 'scroll');
  } else {
    removeClass(header, 'scroll');
    removeClass(logo, 'scroll');
    removeClass(nav, 'scroll');
    removeClass(burger, 'scroll');
  }
});
