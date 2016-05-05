$(function() {
  var $nav = $('#nav-click');
  var $navChild = $('.nav-list-optional');
  var $ListSwitch = $('#list-switch');
  var $SwitchNav = $('#switch-list');

  NavClick($nav, $navChild);
  ClickSwitch($ListSwitch, $SwitchNav);

  $(".button-collapse").sideNav();
})

function NavClick(parent, child) {
  parent.find(child).click(function() {
    var $Self = $(this),
      $Child = $(this).find('i');
    if ($Self.hasClass('active') && $Child.hasClass('triangle_top')) {
      $Child.removeClass('triangle_top');
    } else if ($(this).hasClass('active')) {
      $Child.addClass('triangle_top');
    } else {
      parent.find(child).removeClass('active');
      $Self.addClass('active');
    }
  });
}

function ClickSwitch(element, childelement) {
  element.click(function(event) {
    if(childelement.hasClass('wedding-suti-list-cross')){
      childelement.removeClass('wedding-suti-list-cross').addClass('wedding-suti-list-upright');
    }else{
      childelement.removeClass('wedding-suti-list-upright').addClass('wedding-suti-list-cross');
    }
  });
}
