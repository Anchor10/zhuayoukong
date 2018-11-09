$(function(){
	$("#t_news").addClass("curr");
})
$(function(){
	$(".map, .site-map").hover(function(){
		$(".site-map").addClass("show");
	},function(){
		$(".site-map").removeClass("show");
	});
	$(".hot-gift li, .rank-list li, .hot-package li").hover(function(){
		$(this).addClass("hover").siblings("li").removeClass("hover");
	});

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


	$(".rmlb-list li").hover(function(){
		$(this).addClass("hover").siblings("li").removeClass("hover");
	},function(){
		$(".rmlb-list li").removeClass("hover");
    });
})