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
  })

  $('.mask').click(function () {
    $('.mask').fadeOut(300);
    $('.details-add').fadeOut(300);
    $('body').removeClass('overflowY');
    $('body').css('overflow-y', 'visible');
  });
});