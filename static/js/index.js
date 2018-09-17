// 首页头部导航
$(function () {
    $("#t_home").addClass("curr");
})
//首页游戏tab
$("#test_iqzt").on("mouseover", "li", function () {
    $(this).delay(8000).addClass("last").siblings().delay(8000).removeClass("last");
    $(".iqzt_list .iqzt").delay(8000).eq($(this).index()).delay(8000).show().siblings().delay(8000).hide();
})
//排行榜
$(function () {
    $(".ios-rank dd,.android-rank dd,.online-rank dd,.new-rank dd").hover(function () {
        $(this).addClass("hover").siblings("dd").removeClass("hover")
    })
})
$(window).scroll(function () {
    var position = $(window).scrollTop();
    if (position > 50) {
        $(".left-sidebar, .right-sidebar").addClass("show");
    } else {
        $(".left-sidebar, .right-sidebar").removeClass("show");
    }
});
$(".back-top").click(function () {
    $("body,html").animate({
        scrollTop: 0
    }, 1000);
    return false;
});
// 轮播图
$(function(){
    $(".swiper-container").hover(function(){
        $(this).find(".swiper-button-prev").show();
        $(this).find(".swiper-button-next").show();
    },function(){
        $(this).find(".swiper-button-prev").hide();
        $(this).find(".swiper-button-next").hide();
    })
    var mySwiper1 = new Swiper('#swiper1', {
        autoplay:{
        delay:2000,
        disableOnInteraction: false,
        waitForTransition: false,
        },    
        pagination: {
    el: '.swiper-pagination',
    clickable :true,
    },
    // loop:true,
    navigation: {
        nextEl: '#next1',
        prevEl: '#prev1',
      },
    })
    var mySwiper2 = new Swiper('#swiper2', {
        autoplay:{
        delay:2000,
        disableOnInteraction: false,
        waitForTransition: false,
        },     
        pagination: {
    el: '.swiper-pagination',
    clickable :true,
    },
    // loop:true,
    navigation: {
        nextEl: '#next2',
        prevEl: '#prev2',
      },
    })
    var mySwiper3 = new Swiper('#swiper3', {
        autoplay:{
        delay:2000,
        disableOnInteraction: false,
        waitForTransition: false,
        },     
        pagination: {
    el: '.swiper-pagination',
    clickable :true,
    },
    // loop:true,
    navigation: {
        nextEl: '#next3',
        prevEl: '#prev3',
      },
    })
})