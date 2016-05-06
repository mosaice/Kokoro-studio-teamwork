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
	
  $('.list-meal1 a').click(function () {
<<<<<<< HEAD
	  console.log('111');
=======
>>>>>>> b223e8a3fa33e937e0685cba225526e8191e47a0
    $('.wedding-menu-mask').fadeIn(300);
	$('body').addClass('overflowY');
  })
  $('.wedding-menu-mask').click(function(){
	  $('.wedding-menu-mask').fadeOut(300);
	  $('body').removeClass('overflowY');
  })
  
 }) 
<<<<<<< HEAD
/**
 * 作者: zhangweinan
 * 作用: 婚宴酒店信息展示
 * 创建日期: 2016-05-04
 * 修改日期: 2016-05-04
 */

=======
>>>>>>> b223e8a3fa33e937e0685cba225526e8191e47a0

  
