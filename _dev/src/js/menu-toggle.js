// MENU-TOGGLE
var nav = document.querySelectorAll('.c-navigation nav'); 
var button = document.getElementById('js-menu-toggle');
button.classList.add('menu-hide');
button.addEventListener('click', toggleMenu, false);
//button.addEventListener('touchstart', toggleMenu, false);

function toggleMenu() {
  if (!containsClass(button, 'menu-hide')) {
    console.log('se esconde');
    toggleClass(button,'menu-hide');
    animate({
      el: nav,
      opacity: [1, 0],
      easing: "easeInOutCubic",
      begin: hide
    });
  } else {
    console.log('se muestra');
    toggleClass(button, 'menu-hide');
    animate({
      el: nav,
      opacity: [0, 1],
      easing: "easeInOutCubic",
      begin: show
    });
  } 
  function show(elements) {
    elements.forEach(function(el) { el.style.display = "block"; }); 
  }
  function hide(elements) {
    elements.forEach(function(el) { el.style.display = "none"; });
  }
};


