// 首页js  - Momo
$(function () {
  BannerSwitch('.slider');
  mask();
});

function BannerSwitch(el) { // banner图切换
  $(el).slider({
    full_width: true
    , interval: 3000, // 定时器时间
    height: '100%' // 盒子的高度
  })
}

function mask() {
  $('.footer-btn').click(function () {
    $('.mask').fadeIn(300);
    $('body').css('overflow-y', 'hidden')
  });
  $('#freeorder').click(function () {
    $('.order').fadeIn(300);
  });
  $('#addshop').click(function () {
    $('.order').fadeOut(300);
    $('.emceebar').fadeOut(300);
    $('.emcee-add').fadeIn(300);
  });
  $('#submit-order').click(function () {
    $('.paymode').fadeIn(300);
  });
  $('.emcee-offer a').click(function () {
    $('.emcee-offer a').removeClass('active');
    $(this).addClass('active');
  });
  $('.details-size li').click(function () {
    $('.details-size li').removeClass('active');
    $(this).addClass('active');
  });
	  $('.details-color li').click(function () {
    $('.details-color li').removeClass('active');
    $(this).addClass('active');
  });

  $('.paymode a').click(function () {
    $('.paymode a').removeClass('active');
    $(this).addClass('active');
  });

}
