// MENU-TOGGLE
var nav = document.getElementById('js-nav-mobile'); 
var button = document.getElementById('js-menu-toggle');
var menu = document.getElementsByClassName('i-menu')[0];
button.classList.add('menu-is-hided');
button.addEventListener('click', toggleMenu, false);

function toggleMenu() {
  if (containsClass(button, 'menu-is-hided')) {
    toggleClass(button,'menu-is-hided');
    toggleClass(nav, 'nav-is-displayed');
    addClass(menu, 'i-menu-close');
    console.log(menu + "close");
  } else {
    toggleClass(button, 'menu-is-hided');
    toggleClass(nav, 'nav-is-displayed');
    removeClass(menu, 'i-menu-close');
  } 
  function show(elements) {
    elements.forEach(function(el) { el.style.display = "block"; }); 
  }
  function hide(elements) {
    elements.forEach(function(el) { el.style.display = "none"; });
  }
};


