let map;
  // let nmLatLong = { lat: 35.11088, lng: -106.49516}
  // let nyLatLong = { lat: 40.60829, lng: -73.907572}
  // let laLatLong = { lat: 34.07071, lng: -118.38199}
  // let maLatLong = { lat: 42.26791394674359, lng: -71.11596375945184 }
  // let arzLatLong = { lat: 33.3831779437061, lng: -112.12923813079168 }
  // let txLatLong = { lat: 30.06877545695289, lng: -95.18903482899618}
  // let atlLatLong = { lat: 33.70492956485238, lng: -84.49395237311477}
  // let scLatLong = { lat: 32.757993300096835, lng: -80.10089195963792}
  // let chiLatLong = { lat: 41.930574351275745, lng: -87.78346981528102}
  // let miaLatLong = { lat: 25.788796349791753, lng: -80.24064503090607}
  // let vaLatLong = { lat: 37.545811543430034, lng: -77.51386318653653}
  let waLatLong = { lat: 47.519255392134994, lng: -122.38580009980777}



  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.11088, lng: -106.49516 },
      zoom: 3,
    });


    let markers = [
      {
        position: { lat: 35.11088, lng: -106.49516},
        title: "Albequerque",
        img: 'https://photos.zillowstatic.com/fp/94905e46075318c39008595117659872-uncropped_scaled_within_1536_1152.webp'
      },
      {
        position: { lat: 40.60829, lng: -73.907572},
        title: "New York City",
        img: 'https://photos.zillowstatic.com/fp/1bcfc530ae43467c99ff085a5b433393-uncropped_scaled_within_1536_1152.webp'
      },
      {
        position: { lat: 34.07078, lng: -118.38199 },
        title: "Los Angeles",
        img: 'https://photos.zillowstatic.com/fp/63d5345ae1492f4a8442f5094249e280-cc_ft_1536.webp'
      },
      {
        position: { lat: 42.26791394674359, lng: -71.11596375945184 },
        title: "Boston",
        img: 'https://photos.zillowstatic.com/fp/bf78474062fecb62e405e4ae7d4b610f-cc_ft_1536.webp'
      },
      {
        position: { lat: 33.3831779437061, lng: -112.12923813079168 },
        title: "Phoenix",
        img: 'https://photos.zillowstatic.com/fp/90ea5abfa5d99f8b0b22c1c183e6bd3e-cc_ft_1536.webp'
      },
      {
        position: { lat: 30.06877545695289, lng: -95.18903482899618},
        title: "Houston",
        img: 'https://photos.zillowstatic.com/fp/784b2c1d3880917760df75f4b72c4906-cc_ft_1536.webp'
      },
      {
        position: { lat: 33.70492956485238, lng: -84.49395237311477},
        title: "Atlanta",
        img: 'https://photos.zillowstatic.com/fp/002030a1643409eb7435f3eed23a371a-cc_ft_1536.webp'
      },
      {
        position: { lat: 32.757993300096835, lng: -80.10089195963792},
        title: "Charleston",
        img: 'https://photos.zillowstatic.com/fp/c2ab6a4bef84e3f90daeb3a5f9872b02-cc_ft_1536.webp'
      },
      {
        position: { lat: 41.930574351275745, lng: -87.78346981528102},
        title: "Chicago",
        img: 'https://photos.zillowstatic.com/fp/626687d5efa9406ed9dd1103ab408753-cc_ft_1536.webp'
      },
      {
        position: { lat: 25.788796349791753, lng: -80.24064503090607},
        title: "Miami",
        img: 'https://photos.zillowstatic.com/fp/8bd1885ca2f8246aa1baacaeae38b54b-cc_ft_768.webp'
      },
      {
        position: { lat: 37.545811543430034, lng: -77.51386318653653},
        title: "Richmond",
        img: 'https://photos.zillowstatic.com/fp/420cd4c7ab8d1a93db85f28ff8850f71-cc_ft_1536.webp'
      },
      {
        position: { lat: 47.519255392134994, lng: -122.38580009980777},
        title: "Seattle",
        img: 'https://photos.zillowstatic.com/fp/d070ffad25e7de9efff1c71b90194a2e-cc_ft_1536.webp'
      },

    ]

    markers.forEach(({ position, title, img }, i) => {
      let marker = new google.maps.Marker({
        position,
        map,
        title
      })

      const contentString = `<img src="${img}" class="info-window-img">`

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: `${title}`,
      });

      marker.addListener("click", (event) => {
        // debugger
        map.setCenter(marker.getPosition())
        map.setZoom(12);
      })

      marker.addListener("dblclick", () => {
        infowindow.open({
          anchor: marker,
          map,
        });
      })
    })

  }


  window.initMap = initMap;
