// 网游库页面头部导航
$(function(){
    $("#t_game").addClass("curr");
})

$(function () {
    $('.dd2 a').click(function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.mb-gamelist').eq(index).show().siblings('.mb-gamelist').hide();
        var active = $(".dd2 a").eq(1).hasClass("active");
        active == true ? sessionStorage.setItem("active", "1") : sessionStorage.setItem(
            "active", "0");
    })
})

$(function () {
    var active = sessionStorage.getItem("active");
    active == "1" ? $(".dd2 a").eq(1).trigger("click") : $(".dd2 a").eq(0).trigger("click");
})
