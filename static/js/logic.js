//Initialize map

var mapInit = L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    id: "mapbox/dark-v10"
    accessToken: API_KEY
  }
);

