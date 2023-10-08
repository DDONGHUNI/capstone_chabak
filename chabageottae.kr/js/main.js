

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

var cmap = $("#Map");
var cate1 = $("#cate1");
var cate2 = $("#cate2");
var cate3 = $("#cate3");

function campmap(key) {
  if (key) cmap.attr('src', '/chabageottae.kr/img/kormap/' + key + '.gif');

  $('#campMap > area').hover(function () {
    var idx = $(this).attr('class');
    cmap.attr('src', '/chabageottae.kr/img/kormap/' + idx + '.gif');
  }, function () {
    if (key) {
      cmap.attr('src', '/chabageottae.kr/img/kormap/' + key + '.gif');
    } else {
      cmap.attr('src', '/chabageottae.kr/img/kormap/kmap.gif');
    }
  });
};
campmap();

var page = 1;
function sido(c1, c2, c3, btype) {
  if (btype == "next") if (parseInt($('#totalpage').text()) > page) page++;
  if (btype == "prev") if (page > 1) page--;
  if (!btype) page = 1;


  switch (c1) {
    case "서울": campmap("kmap_02"); break;
    case "광주": campmap("kmap_062"); break;
    case "경기": campmap("kmap_031"); break;
    case "전남": campmap("kmap_061"); break;
    case "인천": campmap("kmap_032"); break;
    case "강원": campmap("kmap_033"); break;
    case "충남": campmap("kmap_041"); break;
    case "대전": campmap("kmap_042"); break;
    case "충북": campmap("kmap_043"); break;
    case "세종": campmap("kmap_044"); break;
    case "부산": campmap("kmap_051"); break;
    case "울산": campmap("kmap_052"); break;
    case "대구": campmap("kmap_053"); break;
    case "경북": campmap("kmap_054"); break;
    case "경남": campmap("kmap_055"); break;
    case "전북": campmap("kmap_063"); break;
    case "제주": campmap("kmap_064"); break;
    default: campmap("kmap");
  }

  var ca1 = "&cate1=" + encodeURI(c1);
  var ca2 = "&cate2=" + encodeURI(c2);
  var ca3 = "&cate3=" + encodeURI(c3);

  // $.ajax({
  //   type: "get",
  //   url: "./?_ajax=sido" + ca1 + ca2 + ca3,
  //   data: "p=" + page,
  //   dataType: 'html',
  //   success: function (data) {
  //     $('.camp_right_content').html(data);
  //     $('#cate1 option:contains(' + c1 + ')').prop({ selected: true });

  //     if (c1) {
  //       var ajdata = getAjaxFilterString(data, 'RESULT');
  //       cate2.html(ajdata).show();
  //     } else {
  //       cate2.hide();
  //       $("#cate1 option:first").attr('selected', 'selected');
  //     }

  //     if (c2) {
  //       var ajdata2 = getAjaxFilterString(data, 'RESULT2');
  //       cate3.html(ajdata2).show();
  //     } else {
  //       cate3.hide();
  //     }

  //     $('#nowpage').text($('#npage').text());
  //     $('#totalpage').text($('#tpage').text());
  //     $('#total_cnt').text($('#tcount').text());
  //   }
  // });

  return false;
}





