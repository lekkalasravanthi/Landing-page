function initMap() {
    var restaurantLocation = { lat: -25.363, lng: 131.044 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: restaurantLocation
    });
    var marker = new google.maps.Marker({
        position: restaurantLocation,
        map: map
    });
}
