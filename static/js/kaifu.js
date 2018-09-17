// 开服页头部导航
$(function(){
    $("#t_time").addClass("curr");
})
// 侧边锚点导航
$("#onclick1").click(function () {
    $(this).addClass("current").siblings().removeClass("current");
});
$("#onclick2").click(function () {
    $(this).addClass("current").siblings().removeClass("current");
});
$("#onclick3").click(function () {
    $(this).addClass("current").siblings().removeClass("current");
});
$(window).on("scroll",function(){
    if($('#todaydiv').offset().top - $(window).scrollTop()<=500){       
        if($('#tit02').offset().top - $(window).scrollTop()<=500){
            if($('#tit03').offset().top - $(window).scrollTop()<=500){
                $("#onclick3").addClass("current").siblings().removeClass("current");
                return;
            }
            $("#onclick2").addClass("current").siblings().removeClass("current");
            return;
        }
        $("#onclick1").addClass("current").siblings().removeClass("current");
        return;
    }
})
