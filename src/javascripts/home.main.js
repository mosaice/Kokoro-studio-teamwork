// 首页js  - Momo
$(function () {
  BannerSwitch('.slider');
  mask();
  orderFold();
  shopcarClear();
  onlyNum();
});

function BannerSwitch(el) { // banner图切换
  $(el).slider({
    full_width: true,
    interval: 3000, // 定时器时间
    height: '100%' // 盒子的高度
  });
}

function mask() {
  $('.footer-btn').click(function () {
    $('.mask').fadeIn(300);
    $('body').css('overflow-y', 'hidden');
  });

  $('#freeorder').click(function () {
    $('.order, .mask').fadeIn(300);
  });

  $('#addshop').click(function () {
    $('.order, .emceebar').fadeOut(300);
    $('.emcee-add, .mask').fadeIn(300);
  });

  $('#submit-order').click(function () {
    $('.order-price-info').removeClass('active');
    $('.order-hotel, .paymode').fadeIn(300);
  });

  $('.mask').click(function () {
    $('.edit').removeClass('active').fadeOut();
    $('.emceebar').fadeIn(300);
    $('.paymode, .mask,.order, .emcee-add, .order-hotel').fadeOut(300);
    $('body').css('overflow-y', 'visible');
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

function shopcarClear() {
  $('.js_numadd').click(function () {
    var num = parseInt($(this).parent().parent().find('.js_edit_num').val());
    $(this).parent().parent().find('.js_edit_num').val(num + 1);
  });

  $('.js_numminus').click(function () {
    var num = parseInt($(this).parent().parent().find('.js_edit_num').val());
    if (num > 0) {
      $(this).parent().parent().find('.js_edit_num').val(num - 1);
    }
  });

  $('.js_edit-delete').click(function () {
    $(this).parent().parent().find('.js_edit_num').val(0);
  });

  $('li').delegate('.js_edit_show', 'click', function () {
    var thisEdit = $(this).parent().parent().find('.edit');
    $('.mask').show();
    $('body').css('overflow-y', 'hidden');
    thisEdit.addClass('active');
  });
}

function onlyNum() {
  $('.js_edit_num').bind('keyup afterpaste blur', function () {
    this.value = this.value.replace(/\D/g, '');
  });
}
