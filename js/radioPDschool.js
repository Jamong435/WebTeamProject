function showMap(){
    var e=document.getElementById('map');
    var pos={lat:37.560767, lng:126.917323};
    var map=new google.maps.Map(e, {center:pos, zoom:18});

    var contentString='<div id="content" style="width: 220px; text-align: center; padding: 6px; font-size: 13px; line-height: 1.5;">'+
        '<h3>플루토</h3>'+
        '<p>서울 마포구 성미산로 88</p>'+
        '</div>';

    var infowindow=new google.maps.InfoWindow({
        content:contentString
    });

    var marker=new google.maps.Marker({
        position:pos,
        title:"마포FM",
        map:map,
    });

    marker.addListener( 'click',function(){
        infowindow.open(map, marker);
    });
}

export default showMap;