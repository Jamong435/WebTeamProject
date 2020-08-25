defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBchLS_OuBctVfQWdSm-Fjiv7RDo60dp6s&callback=ininMap"
async

function showMap(){
    var e= document.getElementById('map');

    var pos = {lat:37.560729, lng:126.917350};

    map = new google.maps.Map(e, {center: pos, zoom:14});
}