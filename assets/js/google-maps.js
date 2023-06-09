function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 16.463713, lng: 107.590866};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hue, Viet Nam' // Title Location
    });
}