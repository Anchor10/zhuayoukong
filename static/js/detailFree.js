$(function(){
    $("#t_game").addClass("curr");
})

$(document).ready(function () {
    $("#remenpaihang .item:first").find(".big_ph").css("display", "block");
    $("#remenpaihang .item:first").find(".small_ph").css("display", "none");
    $("#remenpaihang .item:first").addClass("item_big");
    $("#remenpaihang1 .item:first").find(".big_ph").css("display", "block");
    $("#remenpaihang1 .item:first").find(".small_ph").css("display", "none");
    $("#remenpaihang1 .item:first").addClass("item_big");

    $("#remenpaihang .item").hover(
            function () {
                $(this).siblings().find(".small_ph").css("display", "block");
                $(this).siblings().find(".big_ph").css("display", "none");
                $(this).parent().find(".item").removeClass("item_big");
                $(this).find(".small_ph").css("display", "none");
                $(this).find(".big_ph ").css("display", "block");
                $(this).addClass("item_big");
            }
    );
    $("#remenpaihang1 .item").hover(
            function () {
                $(this).siblings().find(".small_ph").css("display", "block");
                $(this).siblings().find(".big_ph").css("display", "none");
                $(this).parent().find(".item").removeClass("item_big");
                $(this).find(".small_ph").css("display", "none");
                $(this).find(".big_ph ").css("display", "block");
                $(this).addClass("item_big");
            }
    );
    $(".parHd li").hover(
            function () {
                var pnum=$(this).index();
                console.log(pnum);
                $(this).parent().find("li").removeClass("on");
                $(".parBd").find(".slideBox").css("display", "none");
                $(".parBd").find(".slideBox").eq(pnum).css("display", "block");
                $(this).addClass("on");
            }
    );
});
$(function(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
    });
    $('.fancybox').fancybox();
})

// 盒子下载弹出框
$(function () {
    $('#dnbtn').click(function () {
        $('#zzc,#zzc-download').show();
    })
    $('.dia-close').click(function () {
        $('#zzc,#zzc-download').hide();
    })
})
