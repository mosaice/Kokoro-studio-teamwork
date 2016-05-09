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

	$('#meal1').click(function () {
		$('#mask-list1').fadeIn(300);
		$('body').addClass('overflowY');
	})
	$('#mask-list1').click(function () {
		$('#mask-list1').fadeOut(300);
		$('body').removeClass('overflowY');
	})

	$('#meal2').click(function () {
		$('#mask-list2').fadeIn(300);
		$('body').addClass('overflowY');
	})
	$('#mask-list2').click(function () {
		$('#mask-list2').fadeOut(300);
		$('body').removeClass('overflowY');
	})

	$('#meal3').click(function () {
		$('#mask-list3').fadeIn(300);
		$('body').addClass('overflowY');
	})
	$('#mask-list3').click(function () {
		$('#mask-list3').fadeOut(300);
		$('body').removeClass('overflowY');
	})
	
	$('#meal4').click(function () {
		$('#mask-list4').fadeIn(300);
		$('body').addClass('overflowY');
	})
	$('#mask-list4').click(function () {
		$('#mask-list4').fadeOut(300);
		$('body').removeClass('overflowY');
	})



})
