$(function () {
    $("#g_home").addClass("curr");
})

$(function(){
    var mySwiper1 = new Swiper('#swiper1', {
        speed:800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            waitForTransition: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // loop:true,
        navigation: {
            nextEl: '#next1',
            prevEl: '#prev1',
        },
    })
})

$(function(){
	$('.hot-gift-list li:last').addClass('last');
	$('.hot-gift-list li').mouseover(function() {
		$('.hot-gift-list li').removeClass('on');
		$(this).addClass('on');
	});	
});
