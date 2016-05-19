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
  console.log(scroll_top);
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

