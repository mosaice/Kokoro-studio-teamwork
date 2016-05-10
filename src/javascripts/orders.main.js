$(function() {
  var $ParentCheck = $('input.js_parent_check');
  var $Checkbox = $('dl.js_checkbox');
  var $ChildCheck = $('input.js_child_check');

  CheCked.ClickOfAll($ParentCheck, $ChildCheck, $Checkbox);
  CheCked.ClickOfChild($ParentCheck, $ChildCheck, $Checkbox);
<<<<<<< HEAD

    $('#function-star1').raty({
      number: 5,//多少个星星设置
      targetType: 'hint',//类型选择，number是数字值，hint，是设置的数组值
      path      : 'static/assets/images/icon',
      cancelOff : 'star01.png',
      cancelOn  : 'star02.png',
      size      : 49,
      starOff   : 'star01.png',
      starOn    : 'star02.png',
      target    : '#function-hint',
      cancel    : false,
      targetKeep: true,
      targetText: '请选择评分'
    });
    $('#function-star2').raty({
      number: 5,//多少个星星设置
      targetType: 'hint',//类型选择，number是数字值，hint，是设置的数组值
      path      : 'static/assets/images/icon',
      cancelOff : 'star01.png',
      cancelOn  : 'star02.png',
      size      : 49,
      starOff   : 'star01.png',
      starOn    : 'star02.png',
      target    : '#function-hint',
      cancel    : false,
      targetKeep: true,
      targetText: '请选择评分'
    });
})

=======
});
>>>>>>> 5739a045b3e4eeeec327aa95136bbecad4d9cb18

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
