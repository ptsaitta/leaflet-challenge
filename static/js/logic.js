//Initialize map

var mapInit = L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    id: "mapbox/dark-v10",
    tileSize: 512,
    zoomOffset : -1,
    accessToken: API_KEY
  }
);

//create map, div id is "mapid"

var map = L.map("mapid", {
    zoom: 3,
    center: [40.7, -73.9]
}
);

//..and add it to mapInit

mapInit.addTo(map);



