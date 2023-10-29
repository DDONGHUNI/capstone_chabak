positions = []

$.ajax({
    type: 'get',
    url: "/api/marker",
    datatype : "json",
    success: function (data) {

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(37.8851316153186, 127.732645975266), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


    // 마커 이미지의 이미지 주소입니다
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";


//  아래는 마커와 인포윈도우 여러개 표시
        $.each(data,function(index, item){
            var gb_position = { content : `<div>${item.id}</div>` , latlng: new kakao.maps.LatLng(item.lng, item.lat)};
            positions.push(gb_position)
        });
        let str = JSON.stringify(positions);
        alert(str);

        $.each(positions, function(index, item){
            var imageSize = new kakao.maps.Size(24, 35);
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
             // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: item.latlng, // 마커를 표시할 위치
                //image : markerImage // 마커 이미지
            });
            var infowindow = new kakao.maps.InfoWindow({
                content: item.content // 인포윈도우에 표시할 내용
            });

            kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
            kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
        });

        // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
        function makeOverListener(map, marker, infowindow) {
            return function() {
                infowindow.open(map, marker);
            };
        }

        // 인포윈도우를 닫는 클로저를 만드는 함수입니다
        function makeOutListener(infowindow) {
            return function() {
                infowindow.close();
            };
        }


    }
})



