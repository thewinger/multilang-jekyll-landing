document.documentElement.classList.add('js');

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



!function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():t.zenscroll=e()}(this,function(){"use strict";if(!window||!document)return{};var t=function(t,e,n){e=e||999,n||0===n||(n=9);var o,i=document.documentElement,r=function(){return"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t?t:document.body)["scroll-behavior"]},c=function(){return t?t.scrollTop:window.scrollY||i.scrollTop},u=function(){return t?Math.min(t.offsetHeight,window.innerHeight):window.innerHeight||i.clientHeight},f=function(e){return t?e.offsetTop-t.offsetTop:e.getBoundingClientRect().top+c()-i.offsetTop},l=function(){clearTimeout(o),o=0},a=function(n,f,a){if(l(),r())(t||window).scrollTo(0,n),a&&a();else{var s=c(),d=Math.max(n,0)-s;f=f||Math.min(Math.abs(d),e);var m=(new Date).getTime();!function h(){o=setTimeout(function(){var e=Math.min(((new Date).getTime()-m)/f,1),n=Math.max(Math.floor(s+d*(.5>e?2*e*e:e*(4-2*e)-1)),0);t?t.scrollTop=n:window.scrollTo(0,n),1>e&&u()+n<(t||i).scrollHeight?h():(setTimeout(l,99),a&&a())},9)}()}},s=function(t,e,o){a(f(t)-n,e,o)},d=function(t,e,o){var i=t.getBoundingClientRect().height+2*n,r=u(),l=f(t),d=l+i-n,m=c();n>l-m||i>r?s(t,e,o):0>m+r-d?a(d-r,e,o):o&&o()},m=function(t,e,n,o){a(Math.max(f(t)-u()/2+(n||t.getBoundingClientRect().height/2),0),e,o)},h=function(t,o){t&&(e=t),(0===o||o)&&(n=o)};return{setup:h,to:s,toY:a,intoView:d,center:m,stop:l,moving:function(){return!!o}}},e=t();if("addEventListener"in window&&"smooth"!==document.body.style.scrollBehavior&&!window.noZensmooth){var n=function(t){try{history.replaceState({},"",window.location.href.split("#")[0]+t)}catch(e){}};window.addEventListener("click",function(t){for(var o=t.target;o&&"A"!==o.tagName;)o=o.parentNode;if(!(!o||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){var i=o.getAttribute("href")||"";if(0===i.indexOf("#"))if("#"===i)t.preventDefault(),e.toY(0),n("");else{var r=o.hash.substring(1),c=document.getElementById(r);c&&(t.preventDefault(),e.to(c),n("#"+r))}}},!1)}return{createScroller:t,setup:e.setup,to:e.to,toY:e.toY,intoView:e.intoView,center:e.center,stop:e.stop,moving:e.moving}});

window.addEventListener('load', function() {
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



// MENU STICKY
// Variables
var header         = document.getElementById('js-navigation'),
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


var geocoder;
var map;
var latlng = new google.maps.LatLng(39.4682113, -03783852);
var address = "Carrer del Convent de Santa Clara, 9, Valencia, España";
var company = 'Amontero Abogados'
var mapElement = document.getElementById('map');

function initMap() {
  geocoder = new google.maps.Geocoder();

  var myOptions = {
    zoom: 17,
    center: latlng, 
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#38b090"},{"visibility":"on"}]}]
  }

  map = new google.maps.Map(mapElement, myOptions);

  if (geocoder) {
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
        map.setCenter(results[0].geometry.location);

        var contentString = '<h2 style="text-align: center; padding:12px 0; margin-bottom:0;">'+company+'</h2><b style="text-align:center;">'+address+'</b>';
          var infowindow = new google.maps.InfoWindow({ 
                content: contentString, 
                size: new google.maps.Size(150,50)
          });
  
          var image = '../img/i-map.png';
          var marker = new google.maps.Marker({
              position: results[0].geometry.location,
              map: map, 
              animation: google.maps.Animation.DROP,
              icon: image
          }); 
          google.maps.event.addListener(marker, 'click', function() {
              infowindow.open(map,marker);
          });

        } else {
          alert("No results found");
        }
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
}

initMap();


  zenscroll.setup(800,50);
});
