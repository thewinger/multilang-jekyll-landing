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


// When the window has finished loading create our google map below
//google.maps.event.addDomListener(window, 'load', initMap);

var geocoder;
var map;
var address = "Carrer del Convent de Santa Clara, 9, Valencia, España";

function initMap() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 17,
    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(39.4680311, -0.3782913), // Amontero 
    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#38b090"},{"visibility":"on"}]}]
  };

  // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
  if (geocoder) {
    geocoder.geocode({
      'address': address
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
          map.setCenter(results[0].geometry.location);

          var infowindow = new google.maps.InfoWindow({
            content: '<b>' + address + '</b>',
            size: new google.maps.Size(150, 50)
          });

          var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
            title: address
          });
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
          });

        } else {
          alert("No results found");
        }
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(39.4680311, -0.3782913),
        map: map,
        title: 'Amontero Abogados'
    });
}

initMap();

});
