var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDbhWk91P0SsqfNZ8AghGlZTZLBEGOiC6Y&callback=initMap';
script.async = true;

window.initMap = function() {
};

document.head.appendChild(script);

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: 48.5465695, lng: -117.905537 },
    zoom: 8,
  });
}