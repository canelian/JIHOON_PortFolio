//AOS시작
AOS.init();

new Pageable("#container", {
  //여기에 옵션 설정
  onFinish: function(data){
    //페이지 스크롤 되면 실행
    console.log('페이지 이동 완료')
    //몇번째 페이지 인지 해당 페이지 액션
    console.log(data.index)
    let pageNum = data.index;
    $('#container section .fade-action')
    .eq(pageNum)
    .addClass('aos-animate')
  }
});