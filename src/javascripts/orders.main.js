$(function() {
  var $ParentCheck = $('input.js_parent_check'), // 父元素
      $Checkbox = $('dl.js_checkbox'), // 子元素盒子
      $ChildCheck = $('input.js_child_check'); // 子元素

  CheCked.ClickOfAll($ParentCheck, $ChildCheck, $Checkbox);
})


function ClickChecked(parent, child) {
  this.parent = parent;
  this.child = child;
}

ClickChecked.prototype.ClickOfAll = function(parent, child, box) {
  parent.each(function(index) {
    var $self = $(this);
    $self.click(function() {
      if ($self.prop('checked')) {
        box.eq(index).find(child).prop('checked', true);
      }else{
        box.eq(index).find(child).prop('checked', false);
      }
    })
  })
}

var CheCked = new ClickChecked();
