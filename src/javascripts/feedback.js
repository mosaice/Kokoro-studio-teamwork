/**
 * 多个页面通用的js放到common文件夹下
 * 每个页面单独需要的js整理一个.main.js文件
 * 自己写的代码带上作者 创建日期 修改日期 代码功能注释
 * 修改他人代码需要额外注释
 * 例子如下
 */

/**
 * 作者: libang
 * 作用: 个人中心页面弹出层页面控制
 * 创建日期: 2016-05-03
 * 修改日期: 2016-05-03
 */
$(function () {
  $('.dropdown-select').click(function () {
    $('.feedbackinfo > img').fadeIn(300);
  });
  $('#dropdown1 a').click(function () {
    var html = $(this).html();
    $('.dropdown-select').html(html);
    $('#dropdown1 a').removeClass('active');
    $(this).addClass('active');
    $('.feedbackinfo > img').fadeOut(300);
  });
  $('body').on('click', function(e) {
    e.preventDefault();
    if (!$('#dropdown1').hasClass('active')) {
      $('.feedbackinfo > img').fadeOut(300);
    }
  });
});
