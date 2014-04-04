$(function(){
  var mySwiper = $('.swiper-container').swiper({
    mode:'horizontal',
    loop: true,
    autoplay:2000,
    autoplayDisableOnInteraction:true,
    pagination: '.pager',
    createPagination: true,
    paginationClickable: true,
    calculateHeight: true
  });
})