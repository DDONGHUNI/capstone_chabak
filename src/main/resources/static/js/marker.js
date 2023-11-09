positions = []



$.ajax({
    type: 'get',
    url: "/api/marker",
    datatype : "json",
    success: function (data) {

//    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
//        mapOption = {
//            center: new kakao.maps.LatLng(37.8851316153186, 127.732645975266), // 지도의 중심좌표
//            level: 3 // 지도의 확대 레벨
//        };
//
//    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


    // 마커 이미지의 이미지 주소입니다
    var imageSrc = "https://www.5gcamp.com/modules/camping/theme/_pc/default/image/tent1.png";


// <br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a>
//  아래는 마커와 인포윈도우 여러개 표시
        $.each(data,function(index, item){
//`<div>${item.name} </div>`
            var gb_position = {

        title : item.name,
        img : item.img,
        address : item.address,
        latlng: new kakao.maps.LatLng(item.lng, item.lat)};
            positions.push(gb_position)

        });

        $.each(positions, function(index, item){
            var imageSize = new kakao.maps.Size(30, 30);
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
             // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: item.latlng, // 마커를 표시할 위치
                image : markerImage, // 마커 이미지
            });

            var overlay = new kakao.maps.CustomOverlay({
                content: item.content,
                map: map,
                position: marker.getPosition()
            });
            overlay.setMap(null);
            // 새로운 div 요소 생성
            const contentElement = document.createElement('div');
            contentElement.classList.add('wrap'); // 클래스 추가

            // 내부 요소 생성 및 추가
            const infoElement = document.createElement('div');
            infoElement.classList.add('info');

            const titleElement = document.createElement('div');
            titleElement.classList.add('title');
            titleElement.innerHTML = item.title; // 내용 설정

            const closeElement = document.createElement('div');
            closeElement.classList.add('close');
            closeElement.title = '닫기';
            closeElement.addEventListener('click', function() {
                overlay.setMap(null);
            });

            // titleElement에 closeElement를 추가
            titleElement.appendChild(closeElement);

            // infoElement에 titleElement를 추가
            infoElement.appendChild(titleElement);

            // body 요소 생성 및 추가
            const bodyElement = document.createElement('div');
            bodyElement.classList.add('body');

            // img 요소 생성 및 추가
            const imgElement = document.createElement('div');
            imgElement.classList.add('img');
            imgElement.innerHTML = `<img src= \"${item.img}\" width="73" height="70">`;

            // desc 요소 생성 및 추가
            const descElement = document.createElement('div');
            descElement.classList.add('desc');
            descElement.innerHTML = `<div class="ellipsis">${item.title}</div>` +
                                    `<div class="jibun ellipsis">${item.address}</div>` +
                                    '<div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>';

            // bodyElement에 imgElement와 descElement를 추가
            bodyElement.appendChild(imgElement);
            bodyElement.appendChild(descElement);

            // infoElement에 bodyElement를 추가
            infoElement.appendChild(bodyElement);

            // contentElement에 infoElement를 추가
            contentElement.appendChild(infoElement);

            overlay.setContent(contentElement);

            kakao.maps.event.addListener(marker, 'click', function() {
                overlay.setMap(map);
            });


        });




    }
})







