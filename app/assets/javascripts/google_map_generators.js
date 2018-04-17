var locations = [
      {lat: 54.97, lng: 73.37}
    ];

function init() {
  var uluru = new google.maps.LatLng(54.9718,73.3772);

  var mapOptions = {                                 // Настраиваем параметры карты
    center: uluru,
    scrollwheel: false,
    zoom: 13
  };

  var map;                                      // Map() рисует карту
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  map.addListener('click', function() {
      map.setOptions({
          scrollwheel: true
      });
  });

    // Enable scroll zoom after drag on map
  map.addListener('drag', function() {
       map.setOptions({
           scrollwheel: true
       });
  });

  // Disable scroll zoom when mouse leave map
  map.addListener('mouseout', function() {
     map.setOptions({
         scrollwheel: false
     });
  });
   
  function createrMarker() {
    var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length]
        });
      });
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  };
  createrMarker();
  
  var submitLocation = document.getElementById('addMarker');

  submitLocation.addEventListener('click', addLocation, false)

  function addLocation() {
    var latitude = document.getElementById('latitude').value;
    var longitude = document.getElementById('longitude').value;
    locations.push({lat: 1 * latitude, lng: 1 * longitude});
    createrMarker();
  };

}

function loadScript() {
  var script = document.createElement('script');     // Создаем элемент script
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDO0tO7a6gKTQSo8PidHuQYNjr-_4PKFvo&callback=init';
  document.body.appendChild(script);                 // Добавляем элемент на страницу
}

window.onload = loadScript;  
