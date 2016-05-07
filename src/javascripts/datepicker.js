//日历默认配置
$('.datepicker').pickadate({
  monthsFull: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  , format: 'mm / dd / yyyy'
  , selectMonths: true, // Creates a dropdown to control month
  selectYears: 10 // Creates a dropdown of 15 years to control year
});