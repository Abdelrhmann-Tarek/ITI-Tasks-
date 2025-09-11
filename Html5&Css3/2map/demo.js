var submitBtn = document.getElementById("submitBtn");
var country = document.getElementById("country-selector");
submitBtn.addEventListener("click", function () {
  getCountryLocation(country.value);
});

navigator.geolocation.getCurrentPosition(success, error);

function success(pos) {
  // console.log("Func 1");

  initMap(pos.coords.latitude, pos.coords.longitude);
}

function error(e) {
  console.log("Func 2");
  alert(e.message);
}
function getCountryLocation(countryName) {
  var request = new XMLHttpRequest();


  request.open(
    "GET",
    `https://nominatim.openstreetmap.org/search?format=json&q=${countryName}`
  );


  request.send();

  request.onload = function () {
    var data = JSON.parse(request.responseText);
    initMap(data[0].lat, data[0].lon);
    initMap(parseFloat(data[0].lat), parseFloat(data[0].lon));
  };
}

function initMap(myLat, myLng) {
  const myLatLng = { lat: myLat, lng: myLng };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;
