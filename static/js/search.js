$(document).ready(function () {
    $(".siteNavMenu li").hover(function () {
        $(this).addClass("hover");
        $(this).children(".menuHide").show()
    }, function () {
        $(this).removeClass("hover");
        $(this).children(".menuHide").hide()
    })
});
$(function(){
    $(".game-list li").hover(function() {
        $(this).addClass("on").siblings().removeClass("on");
    })
})