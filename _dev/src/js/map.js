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
