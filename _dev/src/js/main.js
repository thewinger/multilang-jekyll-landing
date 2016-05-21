document.documentElement.classList.add('js');

//=require helpers.js
//=require vendor/zenscroll-min.js

window.addEventListener('load', function() {
//=include menu-toggle.js
//=include menu-sticky.js
//=include contact-form.js
//=include map.js

  zenscroll.setup(800,50);
});
