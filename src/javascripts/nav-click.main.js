$(function() {
  var $nav = $('#nav-click');
  var $navChild = $('.nav-list-optional');
  var $ListSwitch = $('#list-switch');
  var $SwitchNav = $('#switch-list');
  var $ClickRegion = $('#click-region');
  var $Region = $('.mask');

  NavClick($nav, $navChild, $ClickRegion);
  ClickSwitch($ListSwitch, $SwitchNav);

  $(".button-collapse").sideNav();
})

function NavClick(parent, child, Region) {
  parent.find(child).click(function() {
    var $Self = $(this),
      $Child = $(this).find('i');
    parent.find(child).removeClass('active');
    $Self.addClass('active');
    if(Region.parent(parent).hasClass('active')){
      $('body').addClass('overflowY');
      Region.siblings('.mask').css({
        display:'block'
      });
    }else{
      $('body').removeClass('overflowY');
      parent.find('.mask').css({
        display:'none'
      })
    }
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
