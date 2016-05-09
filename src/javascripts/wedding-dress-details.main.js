/**
 * 多个页面通用的js放到common文件夹下
 * 每个页面单独需要的js整理一个.main.js文件
 * 自己写的代码带上作者 创建日期 修改日期 代码功能注释
 * 修改他人代码需要额外注释
 * 例子如下
 */

/**
 * 作者: zhangweinan
 * 作用: 婚纱菜单列表弹出窗口控制
 * 创建日期: 2016-05-04
 * 修改日期: 2016-05-04
 */
$(function () {
  $('#choose-size').click(function () {
	  
    $('.mask').fadeIn(300);
    $('.details-add').fadeIn(300);
    $('body').addClass('overflowY');
  });

  $('.mask').click(function () {
    $('.mask').fadeOut(300);
    $('.details-add').fadeOut(300);
    $('body').removeClass('overflowY');
    $('body').css('overflow-y','visible');
  });
})


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