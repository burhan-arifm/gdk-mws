let places = [
    {
        "lokasi"    : [-6.8874454,107.5962215],
        "sponsor"   : "WSE Paris Van Java SOHO Center"
    },
    {
        "lokasi"    : [-6.225074, 106.843316],
        "sponsor"   : "WSE Kota Kasablanka Center"
    },
    {
        "lokasi"    : [-6.224128, 106.809427],
        "sponsor"   : "WSE Pacific Place Center"
    },
    {
        "lokasi"    : [-6.243979, 106.653879],
        "sponsor"   : "WSE Living World Center"
    },
    {
        "lokasi"    : [-6.265633, 106.782871],
        "sponsor"   : "WSE Pondok Indah Center"
    },
    {
        "lokasi"    : [-6.156338, 106.909266],
        "sponsor"   : "WSE Mall Kelapa Gading Center"
    },
    {
        "lokasi"    : [-6.176792, 106.791271],
        "sponsor"   : "WSE Central Park Center"
    }
]
 

//add marker
for (var center of places) {
    var marker = L.marker(center.lokasi).addTo(mymap).bindPopup(center.sponsor);
    marker.on('click', showLocation);
}