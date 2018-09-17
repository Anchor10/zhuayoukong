// 排行榜头部导航
$(function(){
    $("#t_top").addClass("curr");
})
//最全手游排行榜
$(function(){
    $(".game-list li").hover(function() {
        $(this).addClass("on").siblings().removeClass("on")
    })
})
// 热门游戏专题
$(function(){
    var $slider = $('.slider ul');
    var $slider_child_l = $('.slider ul li').length;
    var $slider_width = $('.slider ul li').width()+10;
    $slider.width($slider_child_l * $slider_width);
    var slider_count = 0;
    if ($slider_child_l <= 4) {
        $('#btn-right').css({ cursor: 'auto' });
        $('#btn-right').addClass("dasabled");
    }
    $('#btn-right').click(function () {
        if ($slider_child_l <= 4 || slider_count >= $slider_child_l - 4) {
            return false;
        }
        slider_count++;
        $slider.animate({ left: '-=' + $slider_width + 'px' }, 'slow');
        slider_pic();
    });
    $('#btn-left').click(function () {
        if (slider_count <= 0) {
            return false;
        }
        slider_count--;
        $slider.animate({ left: '+=' + $slider_width + 'px' }, 'slow');
        slider_pic();
    });
    function slider_pic() {
        if (slider_count >= $slider_child_l - 4) {
            $('#btn-right').css({ cursor: 'auto' });
            $('#btn-right').addClass("dasabled");
            $('#btn-left').css({ cursor: 'pointer' });
            $('#btn-left').removeClass("dasabled");
        }
        else if (slider_count > 0 && slider_count <= $slider_child_l - 4) {
            $('#btn-right').css({ cursor: 'pointer' });
            $('#btn-right').removeClass("dasabled");
            $('#btn-left').css({ cursor: 'pointer' });
            $('#btn-left').removeClass("dasabled");
        }
        else if (slider_count <= 0 && slider_count <= $slider_child_l - 4) {
            $('#btn-left').css({ cursor: 'auto' });
            $('#btn-left').addClass("dasabled");
            $('#btn-right').css({ cursor: 'pointer' });
            $('#btn-right').removeClass("dasabled");
        }
    }
    $('.slider a').hover(function () {
        if ($(this).find('img:animated').length) return;
            $(this).find("img").css("transform", "scale(1.2)");
    }, function () {
            $(this).find("img").css("transform", "scale(1)");
    });
})
