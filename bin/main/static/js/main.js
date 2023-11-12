// * 슬라이드 요소 관리
new Swiper('.notice-line .swiper', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});

new Swiper('.news .swiper', {
  autoplay: { // 자동 재생 여부
    delay: 3000 // 3초마다 슬라이드 바뀜
  },
  loop: true,
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 3, // 슬라이드 사이 여백
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.news .swiper-prev', // 이전 버튼 선택자
    nextEl: '.news .swiper-next' // 다음 버튼 선택자
  }
});

new Swiper('.promotion .swiper', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 3000 // 3초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
});


// * Promotion 슬라이드 토글 기능
// 슬라이드 영역 요소 검색!
const promotionEl = document.querySelector('.promotion')
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// 슬라이드 영역 숨김 여부 기본값!
let isHidePromotion = false
// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
  // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
  isHidePromotion = !isHidePromotion
  // 요소를 숨겨야 하면,
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
    // 요소가 보여야 하면,
  } else {
    promotionEl.classList.remove('hide')
  }
});


// * 페이지 스크롤에 따른 요소 제어
// 페이지 스크롤에 영향을 받는 요소들을 검색!
const toTopEl = document.querySelector('#to-top')
// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
});

$('document').ready(function () {
  var area0 = ["전국", "서울", "인천", "대전", "광주", "대구", "울산", "부산", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주", "세종"];
  var area1 = ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"];
  var area2 = ["계양구", "남구", "남동구", "동구", "부평구", "서구", "연수구", "중구", "강화군", "옹진군"];
  var area3 = ["대덕구", "동구", "서구", "유성구", "중구"];
  var area4 = ["광산구", "남구", "동구", "북구", "서구"];
  var area5 = ["남구", "달서구", "동구", "북구", "서구", "수성구", "중구", "달성군"];
  var area6 = ["남구", "동구", "북구", "중구", "울주군"];
  var area7 = ["강서구", "금정구", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구", "기장군"];
  var area8 = ["고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시", "가평군", "양평군", "여주군", "연천군"];
  var area9 = ["강릉시", "동해시", "삼척시", "속초시", "원주시", "춘천시", "태백시", "고성군", "양구군", "양양군", "영월군", "인제군", "정선군", "철원군", "평창군", "홍천군", "화천군", "횡성군"];
  var area10 = ["제천시", "청주시", "충주시", "괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "증평군", "진천군", "청원군"];
  var area11 = ["계룡시", "공주시", "논산시", "보령시", "서산시", "아산시", "천안시", "금산군", "당진군", "부여군", "서천군", "연기군", "예산군", "청양군", "태안군", "홍성군"];
  var area12 = ["군산시", "김제시", "남원시", "익산시", "전주시", "정읍시", "고창군", "무주군", "부안군", "순창군", "완주군", "임실군", "장수군", "진안군"];
  var area13 = ["광양시", "나주시", "목포시", "순천시", "여수시", "강진군", "고흥군", "곡성군", "구례군", "담양군", "무안군", "보성군", "신안군", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군"];
  var area14 = ["경산시", "경주시", "구미시", "김천시", "문경시", "상주시", "안동시", "영주시", "영천시", "포항시", "고령군", "군위군", "봉화군", "성주군", "영덕군", "영양군", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군"];
  var area15 = ["거제시", "김해시", "마산시", "밀양시", "사천시", "양산시", "진주시", "진해시", "창원시", "통영시", "거창군", "고성군", "남해군", "산청군", "의령군", "창녕군", "하동군", "함안군", "함양군", "합천군"];
  var area16 = ["서귀포시", "제주시", "남제주군", "북제주군"];
  var area17 = ["세종시"];

  // 시/도 선택 박스 초기화
  $("select[name^=cate]").each(function () {
    $selsido = $(this);
    $.each(eval(area0), function () {
      $selsido.append("<option value='" + this + "'>" + this + "</option>");
    });
    $selsido.next().append("<option value=''>구/군 선택</option>");
  });

 // 시/도 선택시 구/군 설정
 $("select[name^=cate]").change(function () {
  var area = $(this).val(); // 선택한 시/도 값 가져오기
  var $gugun = $(this).next(); // 선택영역 군구 객체
  $("option:not(:first)", $gugun).remove(); // 구군 초기화

  if (area === "") {
    $gugun.append("<option value=''>구/군 선택</option>");
    return;
  }

  var areaIndex = area0.indexOf(area); // 시/도의 인덱스 찾기

  if (areaIndex !== -1) {
    var gugunArrayName = 'area' + areaIndex; // 해당 시/도에 대한 구군 배열 이름 생성
    var gugunArray = eval(gugunArrayName); // 해당 시/도의 구군 배열 가져오기
    
    $.each(gugunArray, function () {
      $gugun.append("<option value='" + this + "'>" + this + "</option>");
    });
    
    sido(area, areaIndex); // sido() 함수 호출하여 지도 업데이트하기
 }
});

});

var kmap = $("#Map");
function campmap(key) {
  if (key) kmap.attr('src', './img/kormap/' + key + '.gif');

  $('#campMap > area').hover(function () {
    var idx = $(this).attr('class');
    kmap.attr('src', './img/kormap/' + idx + '.gif');
  }, function () {
    if (key) {
      kmap.attr('src', './img/kormap/' + key + '.gif');
    } else {
      kmap.attr('src', './img/kormap/kmap.gif');
    }
  });
};
campmap();


function sido(c1,a1) {
  // if (btype == "next") if (parseInt($('#totalpage').text()) > page) page++;
  // if (btype == "prev") if (page > 1) page--;
  // if (!btype) page = 1;
  function changeOption(city,area) { 
    var selectCity; 
    var selectArea;
  
    selectCity=$("#sido");  
    selectCity.val(c1);  
    selectArea=$("#gugun");  
    selectArea.val(a1);  
  }
  changeOption();
  console.log(a1); 
  switch (c1) {
    case "서울": panToSeoul(), campmap("kmap_02"); break;
    case "광주": panToGwangju(), campmap("kmap_062"); break;
    case "경기": panToGoyang(), campmap("kmap_031"); break;
    case "전남": panToGwangyang(), campmap("kmap_061"); break;
    case "인천": panToIncheon(), campmap("kmap_032"); break;
    case "강원": panToChuncheon(), campmap("kmap_033"); break;
    case "충남": panToGyeryong(), campmap("kmap_041"); break;
    case "대전": panToDaejeon(), campmap("kmap_042"); break;
    case "충북": panToJecheon(), campmap("kmap_043"); break;
    case "세종": panToSejong(), campmap("kmap_044"); break;
    case "부산": panToBusan(), campmap("kmap_051"); break;
    case "울산": panToUlsan(), campmap("kmap_052"); break;
    case "대구": panToDaegu(), campmap("kmap_053"); break;
    case "경북": panToGyeongsan(), campmap("kmap_054"); break;
    case "경남": panToGeoje(), campmap("kmap_055"); break;
    case "전북": panToGunsan(), campmap("kmap_063"); break;
    case "제주": panToJeju(), campmap("kmap_064"); break;
    default: campmap("kmap");
  };
  return false;
};

// * KAKAOMAP
var container = document.getElementById('kakaomap'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.881372876975846, 127.72976953847908), //지도의 중심좌표.
	level: 7 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


function panToSeoul() {
  var moveLatLon = new kakao.maps.LatLng(37.56667, 126.97806);
  map.panTo(moveLatLon);            
}
function panToBusan() {
  var moveLatLon = new kakao.maps.LatLng(35.17944, 129.07556);
  map.panTo(moveLatLon);            
}
function panToIncheon() {
  var moveLatLon = new kakao.maps.LatLng(37.45639, 126.70528);
  map.panTo(moveLatLon);            
}
function panToDaegu() {
  var moveLatLon = new kakao.maps.LatLng(35.87222, 128.60250);
  map.panTo(moveLatLon);            
}
function panToDaejeon() {
  var moveLatLon = new kakao.maps.LatLng(36.35111, 127.38500);
  map.panTo(moveLatLon);            
}
function panToGwangju() {
  var moveLatLon = new kakao.maps.LatLng(35.15972, 126.85306);
  map.panTo(moveLatLon);            
}
function panToUlsan() {
  var moveLatLon = new kakao.maps.LatLng(35.53889, 129.31667);
  map.panTo(moveLatLon);            
}
function panToSejong() {
  var moveLatLon = new kakao.maps.LatLng(36.47982853966825, 127.28930603521691);
  map.panTo(moveLatLon);            
}
function panToJeju() {
  var moveLatLon = new kakao.maps.LatLng(33.50000, 126.51667);
  map.panTo(moveLatLon);            
}
function panToChuncheon() {
  var moveLatLon = new kakao.maps.LatLng(37.88535048289929, 127.72976900685539);
  map.panTo(moveLatLon);            
}
function panToGoyang() {
  var moveLatLon = new kakao.maps.LatLng(37.65844516519566, 126.83198338098317);
  map.panTo(moveLatLon);            
}
function panToJecheon() {
  var moveLatLon = new kakao.maps.LatLng(37.132673673602376, 128.1910167607669);
  map.panTo(moveLatLon);            
}
function panToGyeryong() {
  var moveLatLon = new kakao.maps.LatLng(36.274547305909216, 127.2485302817933);
  map.panTo(moveLatLon);            
}
function panToGunsan() {
  var moveLatLon = new kakao.maps.LatLng(36.274547305909216, 127.2485302817933);
  map.panTo(moveLatLon);            
}
function panToGwangyang() {
  var moveLatLon = new kakao.maps.LatLng(34.94043151895034, 127.69593848802423);
  map.panTo(moveLatLon);            
}
function panToGyeongsan() {
  var moveLatLon = new kakao.maps.LatLng(35.82506802477233, 128.7413196122302);
  map.panTo(moveLatLon);            
}
function panToGeoje() {
  var moveLatLon = new kakao.maps.LatLng(34.88051989337904, 128.62107877700012);
  map.panTo(moveLatLon);            
}


//https://www.5gcamp.com/modules/camping/theme/_pc/default/image/tent1.png
//https://www.5gcamp.com/modules/camping/theme/_pc/default/image/tent2.png 
//https://www.5gcamp.com/modules/camping/theme/_pc/default/image/tent3.png
// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다

