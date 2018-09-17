// 免费游戏页头部导航
$(function(){
    $("#t_newgame").addClass("curr");
})

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
})
// 游戏分类切换
$(function(){
    if ($('#adroid-plat').length > 0){
        $("#adroid-plat .cate").on("mouseover", "li",function(){
            $(this).addClass("on").siblings().removeClass("on");
            $(".slideTxtBox").eq($(this).index()/2).show().siblings().hide();
        })
        $("#adroid-plat .tags").on("mouseover","li",function(){
                $(this).addClass("on").siblings().removeClass("on");
                $(this).parents(".slideTxtBox").find(".plat-r").find("ul").eq($(this).index()).show().siblings().hide();

            
        })
    }
    if ($('#ios-plat').length > 0){
        $("#ios-plat .cate").on("mouseover", "li",function(){
            $(this).addClass("on").siblings().removeClass("on");
            $(".slideTxtBox").eq($(this).index()/2).show().siblings().hide();
        })
        $("#ios-plat .tags").on("mouseover","li",function(){
            $(this).addClass("on").siblings().removeClass("on");
            $(this).parents(".slideTxtBox").find(".plat-r").find("ul").eq($(this).index()).show().siblings().hide();
        })
    }
})


  
