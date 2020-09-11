
var map;
var locations = [
    {
        location: 'Portland',
        latitude: 45.5051,
        longitude: -122.6750
    },
    {
        location: 'Pittsburgh',
        latitude: 40.4406,
        longitude: -79.9959
    },
    {
        location: 'San Franciso',
        latitude: 37.7749,
        longitude: -122.4194
    },
    {
        location: 'Seattle',
        latitude: 47.6062,
        longitude: -122.3321
    },
    {
        location: 'Milwaukee',
        latitude: 43.0389,
        longitude: -87.9065
    },
    {
        location: 'Denver',
        latitude: 39.7392,
        longitude: -104.9903
    },
    {
        location: 'Dallas',
        latitude: 32.7767,
        longitude: -96.7970
    },

];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 39.8097343, lng: -98.5556199 },
        zoom: 4
    });

    locations.forEach(function (city) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(city.latitude, city.longitude),
            //-   icon: '../documentation/images/Coffee_5.png', 
            scaledSize: new google.maps.Size(64, 64),
            map: map,
            title: city.location,
            animation: google.maps.Animation.DROP
        });
    });
}
