var locations = [];
var link = 'https://google-map-generator.herokuapp.com/?';
var markLocation = window.location.search.substr(1).split('&');

markLocation.forEach(function(item, i, arr) {
  coordinats = item.split('/');
  locations.push({lat: 1 * coordinats[0], lng: 1 * coordinats[1]})
});



function init() {
  if (locations.length > 0) {
    var coordinats = locations[0]
    var uluru = new google.maps.LatLng(coordinats.lat, coordinats.lng);
  } 
  else {
    var uluru = new google.maps.LatLng(54.9718,73.3772);
  }
  

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

    map.setOptions({
         center: new google.maps.LatLng(1 * latitude, 1 * longitude)
     });

    link = link + latitude + '/' + longitude + '&'
    console.log(link)
    createrMarker();
    var setlink = document.getElementById('jslink');
    setlink.innerText = 'Ссылка на карту: ' + link;
  };

}

function loadScript() {
  var script = document.createElement('script');     // Создаем элемент script
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDO0tO7a6gKTQSo8PidHuQYNjr-_4PKFvo&callback=init';
  document.body.appendChild(script);                 // Добавляем элемент на страницу
}

window.onload = loadScript;  
