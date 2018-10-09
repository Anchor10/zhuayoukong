// 首页头部导航
$(function () {
    $("#t_home").addClass("curr");
})
//首页游戏tab
$(function(){
    $("#test_iqzt").on("mouseover", "li", function () {
        $(this).addClass("last").siblings().removeClass("last");
        $(".iqzt_list .iqzt").eq($(this).index()).show().siblings().hide();
    })
})
//排行榜
$(function () {
    $(".ios-rank dd,.android-rank dd,.online-rank dd,.new-rank dd").hover(function () {
        $(this).addClass("hover").siblings("dd").removeClass("hover")
    })
})
$(function(){
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
})
// 轮播图
$(function () {
    $("#swiper1,#swiper2,#swiper3").hover(function () {
        $(this).find(".swiper-button-prev").show();
        $(this).find(".swiper-button-next").show();
    }, function () {
        $(this).find(".swiper-button-prev").hide();
        $(this).find(".swiper-button-next").hide();
    })
    var mySwiper1 = new Swiper('#swiper1', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            waitForTransition: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // loop:true,
        navigation: {
            nextEl: '#next1',
            prevEl: '#prev1',
        },
    })
    var mySwiper2 = new Swiper('#swiper2', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            waitForTransition: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // loop:true,
        navigation: {
            nextEl: '#next2',
            prevEl: '#prev2',
        },
    })
    var mySwiper3 = new Swiper('#swiper3', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            waitForTransition: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // loop:true,
        navigation: {
            nextEl: '#next3',
            prevEl: '#prev3',
        },
    })
    var mySwiper4 = new Swiper('#swiper4', {
        loop: true,
        navigation: {
            nextEl: '#next4',
            prevEl: '#prev4',
        },
        slidesPerView: 4,
        spaceBetween: 25,
    })
})