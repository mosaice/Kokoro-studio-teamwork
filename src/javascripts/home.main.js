// 首页js  - Momo
$(function () {
  BannerSwitch('.slider');
})

function BannerSwitch (el) { // banner图切换
  $(el).slider({
    full_width: true,
    interval: 3000, // 定时器时间
    height: '100%' // 盒子的高度
  })
}
