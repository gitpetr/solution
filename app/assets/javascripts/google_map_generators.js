function init() {
  var uluru = new google.maps.LatLng(54.9718,73.3772);

  var mapOptions = {                                 // Настраиваем параметры карты
    center: uluru,
    scrollwheel: false,
    zoom: 13
  };

  var map;                                      // Map() рисует карту
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

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
    // Добавляем маркер
    var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });


}

function loadScript() {
  var script = document.createElement('script');     // Создаем элемент script
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDO0tO7a6gKTQSo8PidHuQYNjr-_4PKFvo&callback=init';
  document.body.appendChild(script);                 // Добавляем элемент на страницу
}

window.onload = loadScript;  
