$(function () {
  var $nav = $('#nav-click');
  var $ListSwitch = $('#list-switch');
  var $SwitchNav = $('#switch-list');
  var $Region = $('#click-region');
  var $MaskClick = $('#mask-list');
  var $Mask1Click = $('#mask-list1');
  var $Mask2Click = $('#mask-list2');

  NavClick($nav, $Region, $MaskClick, $Mask1Click, $Mask2Click);
  ClickSwitch($ListSwitch, $SwitchNav);
  $(".button-collapse").sideNav();
})

function NavClick(parent, Region, Mask, Mask1, Mask2) {
  //司仪列表
  parent.find('.nav-list-optional').click(function () {
    var $Self = $(this)
      , $Child = $(this).find('i');
    parent.find('.nav-list-optional').removeClass('active');
    $Self.addClass('active');
    if (parent.find('.nav-list-optional').eq(0).hasClass('active')) {
      Mask.css({
        display: 'block'
      })
      $('body').addClass('overflowY1');
    } else {
      Mask.css({
        display: 'none'
      })
      $('body').removeClass('overflowY1');
    }
  });
  Mask.find('p').click(function (event) {
    Mask.find('p').removeClass('active');
    $(this).addClass('active');
  });
  Mask.click(function (event) {
    $('body').removeClass('overflowY1');
    $(this).css('display', 'none');
  });
  //全城列表
  parent.find('.nav-list-optional').click(function () {
    var $Self = $(this)
      , $Child = $(this).find('i');
    parent.find('.nav-list-optional').removeClass('active');
    $Self.addClass('active');
    if (parent.find('.nav-list-optional').eq(1).hasClass('active')) {
      Mask1.css({
        display: 'block'
      })
      $('body').addClass('overflowY2');
    } else {
      Mask1.css({
        display: 'none'
      })
      $('body').removeClass('overflowY2');
    }
  });
  Mask1.find('p').click(function (event) {
    Mask1.find('p').removeClass('active');
    $(this).addClass('active');
  });
  Mask1.click(function (event) {
    $('body').removeClass('overflowY2');
    $(this).css('display', 'none');
  });
  //智能排序
  parent.find('.nav-list-optional').click(function () {
    var $Self = $(this)
      , $Child = $(this).find('i');
    parent.find('.nav-list-optional').removeClass('active');
    $Self.addClass('active');
    if (parent.find('.nav-list-optional').eq(2).hasClass('active')) {
      Mask2.css({
        display: 'block'
      })
      $('body').addClass('overflowY');
    } else {
      Mask2.css({
        display: 'none'
      })
      $('body').removeClass('overflowY');
    }
  });
  Mask2.find('p').click(function (event) {
    Mask2.find('p').removeClass('active');
    $(this).addClass('active');
  });
  Mask2.click(function (event) {
    $('body').removeClass('overflowY');
    $(this).css('display', 'none');
  });
}

function ClickSwitch(element, childelement) {
  element.click(function (event) {
    if (childelement.hasClass('wedding-suti-list-cross')) {
      childelement.removeClass('wedding-suti-list-cross').addClass('wedding-suti-list-upright');
    } else {
      childelement.removeClass('wedding-suti-list-upright').addClass('wedding-suti-list-cross');
    }
  });
}







/**
 * 作者: zhangweinan
 * 作用: 婚礼人、作品跳转按钮
 * 创建日期: 2016-05-06
 * 修改日期: 2016-05-06
 */
$(function () {
  $('.wedding-search-btn1').click(function () {
    $('.wedding-search-btn1').css({
      'background-color': '#FF6600'
      , 'color': '#fff'
    });
    $('.wedding-search-btn2').css({
      'background-color': '#FFFFFF'
      , 'color': '#FF6600'
    });
  })
  $('.wedding-search-btn2').click(function () {
    $('.wedding-search-btn1').css({
      'color': '#FF6600'
      , 'background-color': '#fff'
    });
    $('.wedding-search-btn2').css({
      'color': '#fff'
      , 'background-color': '#FF6600'
    });
  })
})