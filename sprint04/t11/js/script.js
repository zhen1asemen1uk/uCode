
mapboxgl.accessToken =
  "pk.eyJ1IjoiemhlbjFhc2VtZW4xdWsiLCJhIjoiY2tsNm9obmZqMmpsaTMwbXN6YnEydmVwMyJ9.fTIwZFT_7Ig-2u1zBHZYPQ";
var map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/dark-v10", // style URL
  center: [165.973, -50.604167], // starting position [lng, lat]
  zoom: 13, // starting zoom

});

map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  })

);

map.addControl(new mapboxgl.NavigationControl());

// Add geolocate control to the map.
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  }))


var marker = new mapboxgl.Marker({
  draggable: true
})
  .setLngLat([165.973, -50.604167])
  .addTo(map);

function onDragEnd() {
  var lngLat = marker.getLngLat();
  coordinates.style.display = 'block';
  coordinates.innerHTML =
    'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
}
marker.on('dragend', onDragEnd);
onDragEnd();

map.on('move', () => {
  let { lng, lat } = map.getCenter();

  coordinates.innerHTML = `Longitude: ${lng}<br />Latitude: ${lat}`;
});