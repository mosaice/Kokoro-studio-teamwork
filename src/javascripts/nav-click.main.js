$(function() {
  var $nav = $('#nav-click');
  var $navChild = $('.nav-list-optional');
  NavClick($nav, $navChild);
})

function NavClick(parent, child) {
  parent.find(child).click(function() {
    var $Self = $(this),
        $Child = $(this).find('i');
    if ($Self.hasClass('active') && $Child.hasClass('triangle_top')) {
      $Child.removeClass('triangle_top');
    } else if ($(this).hasClass('active')) {
      $Child.addClass('triangle_top');
    } else{
      parent.find(child).removeClass('active');
      $Self.addClass('active');
    }
  });
}
