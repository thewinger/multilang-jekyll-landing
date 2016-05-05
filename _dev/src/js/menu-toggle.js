// MENU-TOGGLE
var nav = document.querySelectorAll('.c-navigation nav'); 
var button = document.getElementById('js-menu-toggle');
button.classList.add('menu-hide');
button.addEventListener('click', toggle-menu, false);
button.addEventListener('touchstart', toggle-menu, false);

function toggle-menu() {
  console.log('tocado');
  if (!check(button, 'menu-hide')) {
    console.log('se muestra');
    button.classList.add('menu-hide');
  } else {
    console.log('no se muestra');
    button.classList.remove('menu-hide');
  }
};


