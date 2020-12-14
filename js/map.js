let map;

function initMap(lat = 40.38303073630915, long = 71.78192273527556) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: long },
    zoom: 18,
  });

  new google.maps.Marker({
    position: { lat: lat, lng: long },
    map,
    icon:"../img/Pin.png",
    title: "Проложить маршрут",
  });
}
