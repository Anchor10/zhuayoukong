$(function(){
    $("#t_game").addClass("curr");
})
// 盒子下载弹出框
$(function () {
    $('.box-down').click(function () {
        $('#zzc,#zzc-download').show();
    })
    $('.dia-close').click(function () {
        $('#zzc,#zzc-download').hide();
    })
})
// 热门游戏
$(function(){
    $(".subject_h_g li").hover(function () {
        $(this).addClass("hover").siblings().removeClass("hover");
    })
})
// 游戏截图
$(function(){
    var mySwiper1 = new Swiper('#swiper1', {
        spaceBetween : 20,
        slidesPerView : 3,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    $('#swiper1 .swiper-slide').each(function(index){
        $(this).click(function(){
            $('.mask').show();
            var thisIndex = index;
            $('#swiper2').show();
            var swiper = new Swiper('#swiper2', {
                paginationClickable: true,
                initialSlide:thisIndex,
                slidesPerView : 1,
                centeredSlides : true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        });
    });
    $(".swiper-close").on("click",function(){
        $('.mask').hide();
        $('#swiper2').hide();
    })  
})