$(function() {
  var $nav = $('#nav-click');
  var $ListSwitch = $('#list-switch');
  var $SwitchNav = $('#switch-list');
  var $Region = $('#click-region');
  var $MaskClick = $('#mask-list');
<<<<<<< HEAD
  

=======


>>>>>>> 9a6ea4baecfe776ba75f4c07811816d8a5ccc16e
  NavClick($nav, $Region, $MaskClick);
  ClickSwitch($ListSwitch, $SwitchNav);
  $(".button-collapse").sideNav();
})

function NavClick(parent, Region, Mask) {

<<<<<<< HEAD
  parent.find('.nav-list-optional').click(function () {
    var $Self = $(this)
      , $Child = $(this).find('i');
=======
  parent.find('.nav-list-optional').click(function() {
    var $Self = $(this),
      $Child = $(this).find('i');
>>>>>>> 9a6ea4baecfe776ba75f4c07811816d8a5ccc16e
    parent.find('.nav-list-optional').removeClass('active');
    $Self.addClass('active');
    if (parent.find('.nav-list-optional').eq(0).hasClass('active') && Mask.length != 0) {
      Mask.css({
        display: 'block'
      })
      $('body').addClass('overflowY');
    } else {
      Mask.css({
        display: 'none'
      })
      $('body').removeClass('overflowY');
    }
  });
<<<<<<< HEAD
  Mask.find('p').click(function (event) {
    Mask.find('p').removeClass('active');
    $(this).addClass('active');
  });
  Mask.click(function (event) {
=======

  Mask.find('p').click(function(event) {
    Mask.find('p').removeClass('active');
    $(this).addClass('active');
  });
  Mask.click(function(event) {
>>>>>>> 9a6ea4baecfe776ba75f4c07811816d8a5ccc16e
    $('body').removeClass('overflowY');
    $(this).css('display', 'none');
  });

}

function ClickSwitch(element, childelement) {
  element.click(function(event) {
    if (childelement.hasClass('wedding-suti-list-cross')) {
      childelement.removeClass('wedding-suti-list-cross').addClass('wedding-suti-list-upright');
    } else {
      childelement.removeClass('wedding-suti-list-upright').addClass('wedding-suti-list-cross');
    }
  });
}
<<<<<<< HEAD







=======
>>>>>>> 9a6ea4baecfe776ba75f4c07811816d8a5ccc16e
