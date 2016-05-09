$(function() {
  var $ParentCheck = $('input.js_parent_check');
  var $Checkbox = $('dl.js_checkbox');
  var $ChildCheck = $('input.js_child_check');

  CheCked.ClickOfAll($ParentCheck, $ChildCheck, $Checkbox);
  CheCked.ClickOfChild($ParentCheck, $ChildCheck, $Checkbox);
});

function ClickChecked(parent, child) {
  this.parent = parent;
  this.child = child;
}

ClickChecked.prototype.ClickOfAll = function (parent, child, box) {
  parent.each(function (index) {
    var $self = $(this);
    $self.click(function () {
      if ($self.prop('checked')) {
        box.eq(index).find(child).prop('checked', true);
      } else {
        box.eq(index).find(child).prop('checked', false);
      }
    });
  });
};

ClickChecked.prototype.ClickOfChild = function (parent, child, box) {
  box.each(function (index, el) {
    var $self = $(this);
    $self.find(child).click(function (event) {
      var $allchild =$(this).parents('dt').parent(box).find(child);
      var $determine = null;
      for (var i = 0; i < $allchild.length; i++) {
        if ($allchild[i].checked === false) {
          $determine = false;
        } else {
          $determine = true;
        }
      }
      if ($(this).prop('checked') && $determine ) {
        parent.eq(index).prop('checked', true);
      } else {
        parent.eq(index).prop('checked', false);
      }
    });
  });
};

var CheCked = new ClickChecked();
