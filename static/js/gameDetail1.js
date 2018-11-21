// 网游库头部导航
$(function(){
  $("#t_game").addClass("curr");
})
// 截图
$(function () {
  $("#slide2").on("click", ".swiper-slide", function () {
    $(".logbg").show();
    $("#slide1").show();
    mySwiper1.slideTo($(this).index());
  })
})
$(function () {
  $("#slide1 .swiper-slide,.c-btn").on("click", function () {
    $(".logbg").hide();
    $("#slide1").hide();
  })
})

$(function () {
  var mySwiper1 = new Swiper('#slide1', {
    width: $(window).width() * 0.95,
    hiehgt: ($(window).height() * 0.7),
    freeMode: false,
    pagination: '#pagination1',
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  })
  var mySwiper2 = new Swiper('#slide2', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    freeMode: false,
    freeModeMomentum: false,
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  })
})

// 相关文章加载更多
$(function () {
  $(".more-show").on("click", function () {
    for (var i = 0; i < 10; i++) {
      $(".no").eq(0).removeClass("no");
    }
    if ($(".no").length == 0) {
      $(this).hide();
    }
  })
})
// 游戏简介
$(function(){
  $(".game-con").on("click",".nav-item",function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    $(".tab-con").eq($(this).index()).show().siblings().hide();
  })
})
// 专题下载
$(function(){
  $(".topic-down").on("click",".nav-item",function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    $(".topic-con").eq($(this).index()).show().siblings().hide();
  })
})
// 热门下载榜
$(function(){
  $(".rank").on("click",".nav-item",function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    $(".rank-list").eq($(this).index()).show().siblings(".rank-list").hide();
  })
  $(".rank-list").on("mouseover",".rank-item",function(){
    $(this).find(".info").hide().siblings(".info-on").show();
    $(this).siblings().find(".info").show().siblings(".info-on").hide();
    // $(this).find(".info-on").show().siblings(".info-on").hide();
  })
})

// 二维码下载
$(function(){
  $(".down-btn i").hover(function(){
    $(this).parent(".btn").find(".qr-code").show();
  },function(){
    $(this).parent(".btn").find(".qr-code").hide();
  })
})

 // GM权限点击事件
$(function(){
  $('#GMquanxian .more').click(function () {
    $(this).siblings('.modal').removeClass('aniHide').addClass('aniBlow').fadeIn();
  })
  $('#GMquanxian .t-title span').click(function () {
    $(this).parent().parent().removeClass('aniBlow').addClass('aniHide').fadeOut();
  })
})
