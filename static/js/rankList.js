$(function () {
    $("#t_top").addClass("curr");
    $('#footer').css('margin-top', '0');
    $('.tabs-big li').click(function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.info-list').eq(index).show().siblings('.info-list').hide();
    });
    $(".lb-list li").hover(function () {
        $(this).addClass("on").siblings().removeClass("on")
    });
})