// 免费游戏页头部导航
$(function () {
    $("#t_newgame").addClass("curr");
})

// 轮播图
$(function () {
    $(".swiper-container").hover(function () {
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
})
