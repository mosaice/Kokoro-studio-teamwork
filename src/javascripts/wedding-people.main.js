/**
 * 多个页面通用的js放到common文件夹下
 * 每个页面单独需要的js整理一个.main.js文件
 * 自己写的代码带上作者 创建日期 修改日期 代码功能注释
 * 修改他人代码需要额外注释
 * 例子如下
 */
/**
 * 作者: zhangweinan
 * 作用: 婚宴酒店信息展示
 * 创建日期: 2016-05-06
 * 修改日期: 2016-05-06
 */


$(function () {
	
  $('.wedding-search-btn1').click(function () {
	  
    $('.wedding-content').fadeIn(300);
	$('.wedding-production').fadeOut(300);
  })
  $('.wedding-search-btn2').click(function(){
	  
	  $('.wedding-production').fadeIn(300);
	  $('.wedding-content').fadeOut(300);
  })
  
 }) 