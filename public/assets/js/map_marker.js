let places = [
    {"lokasi": [-6.8874454,107.5962215], "sponsor": "WSE Paris Van Java SOHO Center"},
    {"lokasi": [-6.225074, 106.843316], "sponsor": "WSE Kota Kasablanka Center"},
    {"lokasi": [-6.224128, 106.809427], "sponsor": "WSE Pacific Place Center"},
    {"lokasi": [-6.243979, 106.653879], "sponsor": "WSE Living World Center"},
    {"lokasi": [-6.265633, 106.782871], "sponsor": "WSE Pondok Indah Center"},
    {"lokasi": [-6.156338, 106.909266], "sponsor": "WSE Mall Kelapa Gading Center"},
    {"lokasi": [-6.176792, 106.791271], "sponsor": "WSE Central Park Center"}
];

var mymap = L.map('mapid').setView(places[0].lokasi, 13);
//show map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMaps</a> contributors, <ahref="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYnVyaGFuLWFyaWZtIiwiYSI6ImNqb2JlbjJzajF5d3AzcHJzZzR6ZXdjcWYifQ.Hbh1Hm6POq6yGTHYyPa0FQ'
}).addTo(mymap);
//add marker
for (var center of places) {
    var marker = L.marker(center.lokasi).addTo(mymap).bindPopup(center.sponsor);
}
var popup = L.popup();