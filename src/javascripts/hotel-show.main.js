/**
 * 多个页面通用的js放到common文件夹下
 * 每个页面单独需要的js整理一个.main.js文件
 * 自己写的代码带上作者 创建日期 修改日期 代码功能注释
 * 修改他人代码需要额外注释
 * 例子如下
 */

/**
 * 作者: zhangweinan
 * 作用: 婚宴菜单列表弹出窗口控制
 * 创建日期: 2016-05-04
 * 修改日期: 2016-05-04
 */

$(function () {

  $('.list-content-info').delegate('.list-meal', 'click', function (e) {
    e.preventDefault();
    var $list = $('.list-content-info').find('.list-meal');
    var index = $list.index($(this));
    $('.wedding-menu-mask').eq(index).fadeIn(300);
    $('.wedding-menu-mask').eq(index).find('.mask').fadeIn(300);
    $('body').addClass('overflowY');
  });

  $('.wedding-menu-mask .mask').click(function () {
    $(this).parent().fadeOut(300);
    $('body').removeClass('overflowY');
  });
});

/**
 * 作者: zhangweinan
 * 作用: 商家介绍内容展开
 * 创建日期: 2016-05-04
 * 修改日期: 2016-05-04
 */
$(function () {
  $('.hotel-introduce-box ').click(function () {
     
    $('.hotel-info').css('height','auto');
    $('.img-none').css('opacity','0');
	
    });
	
  $('.img-none').click(function () {
     
    $('.hotel-info').css('height','100px');
    $('.img-none').css('opacity','1');
	
    });

 });
