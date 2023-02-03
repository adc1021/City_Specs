let map;
  let nmLatLong = { lat: 35.11088, lng: -106.49516}
  let nyLatLong = { lat: 40.60829, lng: -73.907572}
  let laLatLong = { lat: 34.07071, lng: -118.38199}
  let maLatLong = { lat: 42.26791394674359, lng: -71.11596375945184 }
  let arzLatLong = { lat: 33.3831779437061, lng: -112.12923813079168 }
  let txLatLong = { lat: 30.06877545695289, lng: -95.18903482899618}
  let atlLatLong = { lat: 33.70492956485238, lng: -84.49395237311477}
  let scLatLong = { lat: 32.757993300096835, lng: -80.10089195963792}
  let chiLatLong = { lat: 41.930574351275745, lng: -87.78346981528102}
  let miaLatLong = { lat: 25.788796349791753, lng: -80.24064503090607}
  let vaLatLong = { lat: 37.545811543430034, lng: -77.51386318653653}
  let waLatLong = { lat: 47.519255392134994, lng: -122.38580009980777}

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.11088, lng: -106.49516 },
      zoom: 3,
    });

    new google.maps.Marker({
      position: nmLatLong,
      map,
      title: "Albequerque"
    })
    new google.maps.Marker({
      position: nyLatLong,
      map,
      title: "New York"
    })
    new google.maps.Marker({
      position: laLatLong,
      map,
      title: "Los Angeles"
    })
    new google.maps.Marker({
      position: maLatLong,
      map,
      title: "Boston"
    })
    new google.maps.Marker({
      position: arzLatLong,
      map,
      title: "Phoenix"
    })
    new google.maps.Marker({
      position: txLatLong,
      map,
      title: "Houston"
    })
    new google.maps.Marker({
      position: atlLatLong,
      map,
      title: "Atlanta"
    })
    new google.maps.Marker({
      position: scLatLong,
      map,
      title: "South Carolina"
    })

    new google.maps.Marker({
      position: miaLatLong,
      map,
      title: "Miami"
    })
    new google.maps.Marker({
      position: vaLatLong,
      map,
      title: "Richmond"
    })
    new google.maps.Marker({
      position: waLatLong,
      map,
      title: "Seattle"
    })
  }



  window.initMap = initMap;
