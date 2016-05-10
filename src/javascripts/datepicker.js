$('.datepicker').pickadate({
  monthsFull: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  format: 'mm / dd / yyyy',
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 10 // Creates a dropdown of 15 years to control year
});

$('.calendar').click(function (e) {
  $('.emceebar').css('z-index', 9);
  event.stopPropagation();
  var $datepicker = $('.datepicker');
  var picker = $datepicker.pickadate('picker');
  picker.open();
  // 底部菜单放在mask下面防止被点击
  //  picker.on({
  //    close: function () {
  //      $('.emceebar').css('z-index', 13);
  //    }
  //  })
});	