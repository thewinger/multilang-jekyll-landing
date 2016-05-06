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



var contactform =  document.getElementById('form-contact');
var email = btoa('winger.87');
var server = btoa('gmail.com');
var base_url = '//formspree.io/';
var action =  base_url + atob(email) + '@' + atob(server); 
contactform.setAttribute('action', action); 


});
