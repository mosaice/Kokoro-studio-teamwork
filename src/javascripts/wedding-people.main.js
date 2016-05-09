/**
 * 多个页面通用的js放到common文件夹下
 * 每个页面单独需要的js整理一个.main.js文件
 * 自己写的代码带上作者 创建日期 修改日期 代码功能注释
 * 修改他人代码需要额外注释
 * 例子如下
 */
/**
 * 作者: zhangweinan
 * 作用: 婚礼人列表展示
 * 创建日期: 2016-05-06
 * 修改日期: 2016-05-08
 */
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
});

function NavClick(parent, Region, Mask, Mask1, Mask2) {
  parent.find('.nav-list-optional').click(function () {
    var $Self = $(this);
    parent.find('.nav-list-optional').removeClass('active');
    $Self.addClass('active');

    if (parent.find('.nav-list-optional').eq(0).hasClass('active')) {
      Mask.css({
        display: 'block'
      });
//      $('body').addClass('overflowY');
    } else {
      Mask.css({
        display: 'none'
      });
//      $('body').removeClass('overflowY');
    }
  });

  Mask.find('p').click(function (event) {
    Mask.find('p').removeClass('active');
    $(this).addClass('active');
  });

  Mask.click(function (event) {
//    $('body').removeClass('overflowY');
    $(this).css('display', 'none');
  });

  parent.find('.nav-list-optional').click(function () {
    var $Self = $(this);
    parent.find('.nav-list-optional').removeClass('active');
    $Self.addClass('active');
    if (parent.find('.nav-list-optional').eq(1).hasClass('active')) {
      Mask1.css({
        display: 'block'
      });
//      $('body').addClass('overflowY');
    } else {
      Mask1.css({
        display: 'none'
      });
//      $('body').removeClass('overflowY');
    }
  });

  Mask1.find('p').click(function (event) {
    Mask1.find('p').removeClass('active');
    $(this).addClass('active');
  });

  Mask1.click(function (event) {
//    $('body').removeClass('overflowY');
    $(this).css('display', 'none');
  });

  parent.find('.nav-list-optional').click(function () {
    var $Self = $(this);
    var $Child = $(this).find('i');
    parent.find('.nav-list-optional').removeClass('active');
    $Self.addClass('active');
    if (parent.find('.nav-list-optional').eq(2).hasClass('active')) {
      Mask2.css({
        display: 'block'
      });
//      $('body').addClass('overflowY');
    } else {
      Mask2.css({
        display: 'none'
      });
//      $('body').removeClass('overflowY');
    }
  });

  Mask2.find('p').click(function (event) {
    Mask2.find('p').removeClass('active');
    $(this).addClass('active');
  });

  Mask2.click(function (event) {
//    $('body').removeClass('overflowY');
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
 * 修改日期: 2016-05-08
 */
$(function () {
  $('.wedding-search-btn1').click(function () {

    $('.wedding-search-btn1').css({
      'background-color': '#FF6600',
      'color': '#fff'
    });

    $('.wedding-search-btn2').css({
      'background-color': '#FFFFFF',
      'color': '#FF6600'
    });
  });

  $('.wedding-search-btn2').click(function () {
    $('.wedding-search-btn1').css({
      'color': '#FF6600',
      'background-color': '#fff'
    });

    $('.wedding-search-btn2').css({
      'color': '#fff',
      'background-color': '#FF6600'
    });
  });
});

$(function () {

  $('.wedding-search-btn1').click(function () {
    $('.wedding-content').fadeIn(300);
    $('.wedding-production').fadeOut(300);
  });

  $('.wedding-search-btn2').click(function(){
    $('.wedding-production').fadeIn(300);
    $('.wedding-content').fadeOut(300);
  });

});
