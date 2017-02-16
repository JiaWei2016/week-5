/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */

// We set this to HTTP to prevent 'CORS' issues
// a function that does some kind of transformation on the response
$(document).ready(function() {

 $("#text-input").text();
 $("#text-input").prop("disabled", false);

 $("#text-input2").text();
 $("#text-input2").prop("disabled", false);

 $("#text-input3").text();
 $("#text-input3").prop("disabled", false);

 $('button').click(function(){

    var URL=$('#text-input').val();
    var Latitude=$('#text-input2').val();
    var Longitude=$('#text-input3').val();

    var downloadData=$.ajax(URL);

    // a function that does some kind of transformation on the response
    var parseData=function(rawData){
        return JSON.parse(rawData)};

    // a function that make markers
    var makeMarkers = function(data){
      return _.map(data, function(x) {
        console.log(x);
         return L.marker([x.Lat,x.Lng])
        })
       };

    // plot markers on map
    var plotMarkers=function(marker) {
      _.each(marker, function(n) {
        n.addTo(map)
      });
 };

    var map = L.map('map', {
      center: [39.9522, -75.1639],
      zoom: 14
 });
    var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20,
      ext: 'png'
    }).addTo(map);

/* =====================
 + CODE EXECUTED HERE!
 +===================== */

  downloadData.done(function(data) {
    var parsed = parseData(data);
    console.log("parsed", parsed)
    var markers = makeMarkers(parsed);
    console.log("markers", markers)
    plotMarkers(markers);
  });

 });

})
