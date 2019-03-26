$(function(){
    $("#t_news").addClass("curr");
})
// 右侧排行和专题推荐
$(function(){
    $(".hot-gift li, .rank-list li").hover(function(){
        $(this).addClass("hover").siblings("li").removeClass("hover");
    });
})

// 资讯导航
$(function () {
    var text =
        "<li class='more'><a href='javascript:void(0)'>更多<span>+</span></a></li>";
    $('.diaoyong').find('li').eq(7).after(text);

    $('.more').on("click", function () {
        if ($('.newsngNav').css("height") == "64px") {
            $('.newsngNav').css("height", "32px");
        } else {
            $('.newsngNav').css("height", "64px");
        }

        if ($(this).find('span').html() == "+") {
            $(this).find('span').html("-");
        } else {
            $(this).find('span').html("+");
        }
    });
});

$(function(){
    $(".rank-tab .tit, .rank-tab .rtside-title, .rank-tab li").hover(function(){
        if($(this).hasClass("rtside-title")){
            $(this).addClass("hover").siblings(".rtside-title").removeClass("hover");
        }
        else if($(this).hasClass("tit")){
            $(this).addClass("hover").siblings(".tit").removeClass("hover");
        }
        else {
            $(this).addClass("hover").siblings("li").removeClass("hover");
        }
        var cur = $(this).index();
        $(".rank-list").eq(cur).show().siblings(".rank-list").hide();
    }); 
})