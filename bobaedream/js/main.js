// 헤더 메뉴
$(function () {
  $('.navigation #gnb > .gnb_ali').hover(function () {
      $(this).find('.gnb_bul').stop().slideDown();
  }, function () {
      $(this).find('.gnb_bul').stop().slideUp();
  });
});