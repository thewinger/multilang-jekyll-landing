// HELPER FUNCTIONS
var containsClass = function(element, className) {
  return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
};
var addClass = function(element, className) {
  return containsClass(element, className) ? false : (element.className += " " + className);
};
var removeClass = function(element, className) {
  return element.className = (" " + element.className + " ").replace(" " + className + " ", " ");
};
var toggleClass = function(element, className) {
  return (containsClass(element, className) ? removeClass : addClass)(element, className);
};



document.documentElement.classList.add('js');

window.addEventListener('load', function() {
// MENU-TOGGLE
var nav = document.getElementById('js-nav-mobile'); 
var button = document.getElementById('js-menu-toggle');
button.classList.add('menu-is-hided');
button.addEventListener('click', toggleMenu, false);
//button.addEventListener('touchstart', toggleMenu, false);

function toggleMenu() {
  if (containsClass(button, 'menu-is-hided')) {
    toggleClass(button,'menu-is-hided');
    toggleClass(nav, 'nav-is-displayed');
  } else {
    toggleClass(button, 'menu-is-hided');
    toggleClass(nav, 'nav-is-displayed');
  } 
  function show(elements) {
    elements.forEach(function(el) { el.style.display = "block"; }); 
  }
  function hide(elements) {
    elements.forEach(function(el) { el.style.display = "none"; });
  }
};



// MENU STICKY
// Variables
var contact        = document.getElementById('js-contact'),
    contact_height = contact.offsetHeight, 
    header         = document.getElementById('js-navigation'),
    header_height  = header.offsetHeight,
    fix_class      = 'is-sticky',
    quienes        = document.getElementById('quienes'); 

// Method
function stickyScroll() {
  var scroll_top = document.body.scrollTop;

  if (scroll_top >= contact_height) {
    addClass(header, fix_class);
    quienes.style.paddingTop= "120px";
  } else {
    removeClass(header, fix_class);
    quienes.style.paddingTop= "60px";
  }
}
// Handler
window.addEventListener('scroll', stickyScroll);


var contactform =  document.getElementById('form-contact');
var email = btoa('winger.87');
var server = btoa('gmail.com');
var base_url = '//formspree.io/';
var action =  base_url + atob(email) + '@' + atob(server); 
contactform.setAttribute('action', action); 


});
