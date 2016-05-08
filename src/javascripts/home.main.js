// 首页js  - Momo
$(function () {
  BannerSwitch('.slider');
  mask();
  orderFold();
  shopcarClear()
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
    $('.order-price-info').removeClass('active');
    $('.order-hotel').show();
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

//折叠 --lq
function orderFold() {

  $('.clearfix').delegate('.js_item_price', 'click', function () {
    var thisOrder = $(this).parent().parent().parent().find('.js_order_price_info');
    if (thisOrder.hasClass('active')) {
      thisOrder.removeClass('active');
    } else {
      thisOrder.addClass('active');
    }
  });
  $('.orders-content').delegate('.js_item_price', 'click', function () {
    var thisOrder = $(this).parent().parent().parent().parent().find('.js_order_price_info');
    if (thisOrder.hasClass('active')) {
      thisOrder.removeClass('active');
    } else {
      thisOrder.addClass('active');
    }
  });
}

//购物车结算 --lq
function shopcarClear() {

  $('.js_numadd').click(function () {
    var num = parseInt($('#js_edit_num').val());
    $('#js_edit_num').val(num + 1);
  });
  $('.js_numminus').click(function () {
    var num = parseInt($('#js_edit_num').val());
    if (num > 0) {
      $('#js_edit_num').val(num - 1);
    }
  });
  $('.js_edit-delete').click(function () {
    $('#js_edit_num').val(0);
  });
  $('li').delegate('.js_edit_show', 'click', function () {
    var thisEdit = $(this).parent().parent().find('.edit');
    $('.mask').show();
    if (thisEdit.hasClass('active')) {
      thisEdit.removeClass('active');
    } else {
      thisEdit.addClass('active');
    }
  });
}