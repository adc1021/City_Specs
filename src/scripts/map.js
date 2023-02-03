let map;
  let nyLatLong = { lat: 4, long: 4}
  function initMap() {
    console.log(document.getElementById('map'))
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
    console.log(map)
  }

  window.initMap = initMap;
