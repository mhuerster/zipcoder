function getZipcode() {
  var params = window.location.search.substr(1).split('&');
  for (i = 0; i < params.length; i++) {
    var p = params[i].split('=');
    if (p[0] === "zipcode") {
      var zipcode = decodeURI(p[1]);
    }
  }
  if (zipcode === undefined) {
    return false;
  } else {
    codeZip(zipcode);
  }
}

function initialize() {
  var mapOptions = {
    center: {
      lat: 39.50,
      lng: -98.35
    },
    zoom: 4,
    disableDefaultUI: true,
    panControl: false,
    zoomControl: true,
    scaleControl: false,
    scrollwheel: false
  };
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
  getZipcode();
}

function codeZip(zipcode) {
  console.log(zipcode);
  geocoder.geocode({
    "address": zipcode
  }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      console.log("something is rotten in " + zipcode);
    }
  })
}

google.maps.event.addDomListener(window, 'load', initialize);