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


//now retrieve data to use for the map, and create functions to stylize points on map based on values
//style of color and radius will be determined by magnitude

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson", function(data) {

//define functions to get color and radius, and set feature (earthquake) style to match those values
//create function for style for each earthquake first, then use two more functions to get color and radius
//magnitude at features -> properties -> mag
//depth at third geometric coordinate

    function featStyle(feature) {
        return{
            fillColor: getColor(feature.geometry.coordinates[2]),
            radius: getRadius(feature.property.mag)
        };
    }




    //color is defined by feat DEPTH

    function getColor(depth) = {
    //switch will be useful to come up with 5 colors or so to bin earthquakes into

        switch(true) {
            case depth > 100:
                return "#d41002";
            case depth > 80:
                return "#e04604";
            case depth > 60:
                return "#e08804";
            case depth > 40:
                return "#d9e004";
            case depth > 20:
                return "#8fe004";
            default:
                return "#07f22b";
        }
    }
    
    //radius is defined by feat MAGNITUDE

    function getRadius(magnitude) {

        return magnitude;
    }







}




