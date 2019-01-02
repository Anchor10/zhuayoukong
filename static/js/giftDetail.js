$(function () {
    $("#g_gift").addClass("curr");
})
// 相关攻略和小编推荐切换
$(function(){
    $(".zttit5 .hd span").on('mouseover',function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".tab-list").eq($(this).index()).show().siblings(".tab-list").hide();
    })
})
// 热门礼包
$(function(){
	$('.hot-gift-list li:last').addClass('last');
	$('.hot-gift-list li').mouseover(function() {
		$('.hot-gift-list li').removeClass('on');
		$(this).addClass('on');
	});	
});

// 盒子下载弹出框
$(function () {
    $('.box-btn').click(function () {
        $('#zzc,#zzc-download').show();
    })
    $('.dia-close').click(function () {
        $('#zzc,#zzc-download').hide();
    })
    $('.zzc-ios').click(function(e){
        e.stopPropagation();    
        $('.eight-ewm.box3').slideToggle(200);
      })
      $('body').click(function(){$('.eight-ewm').slideUp(200);})
  })

