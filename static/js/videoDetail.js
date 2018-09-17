$(function(){
    $("#t_video").addClass("curr");
})

$(function(){
    $('.down-link').hover(
        function () {
            $(this).find("img").css({
                "display": "block",
                "left": "144px"
            });
        },
        function () {
            $(this).find("img").css({
                "display": "none"
            });
        }
    )
})

$(function(){
	$(".hot-gift li, .rank-list li").hover(function(){
		$(this).addClass("hover").siblings("li").removeClass("hover");
	});

	$(".rank-tab .tit").hover(function(){

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

