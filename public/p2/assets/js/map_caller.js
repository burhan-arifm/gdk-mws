var mymap = L.map('mapid').setView([-6.8874454,107.5962215], 13);

//show map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMaps</a> contributors, <ahref="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYnVyaGFuLWFyaWZtIiwiYSI6ImNqb2JlbjJzajF5d3AzcHJzZzR6ZXdjcWYifQ.Hbh1Hm6POq6yGTHYyPa0FQ'
}).addTo(mymap);