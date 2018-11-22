$(function () {
    $("#t_game").addClass("curr");
})
// 游戏介绍切换
$(function () {
    $(".inav").on("click", "li", function () {
        $(this).addClass("on").siblings().removeClass("on");
        if ($(this).find("i")) {
            $(this).find("i").remove();
        }
        $(".tab-container").eq($(this).index()).show().siblings(".tab-container").hide();
    })
})
// 盒子下载弹出框
$(function () {
    $('.box').click(function () {
        $('#zzc,#zzc-download').show();
    })
    $('.dia-close').click(function () {
        $('#zzc,#zzc-download').hide();
    })
})
// 截图
window.onload = function () {
    $(".artimglists img").each(function () {
        if ($(this).height() > $(this).width()) {
            $(this).css("width", "180px");
        } else if ($(this).width() > $(this).height()) {
            $(this).css("height", "130px");
        }
    });
    
    if ($('.snopshot').length > 0) {
        var sst = $(".snopshot");
        if (sst.length == 1) {
            sst.css({
                "position": "relative",
                "text-align": "center"
            }).find("img").css({
                "max-width": "600px",
                "max-height": "462px;"
            }).next(".elementOverlay").hide();
            $(".snap-shot-btn").hide();
        } else if (sst.length == 2) {
            sst.css({
                "position": "relative",
                "float": "left"
            }).find("img").css({
                "max-width": "400px",
                "margin-right": "10px"
            }).next(".elementOverlay").hide();
            $(".snap-shot-btn").hide();
        } else {
            var img = new Image();

            img.src = $(".snapShotCont li").eq(0).find("img").attr("src");
            //window.onload=function(){
            var imgWidth = img.width;
            var imgHeight = img.height;
            if (imgWidth > imgHeight) {
                imgHeight = 300;
                imgWidth = 500;
            } else {
                imgHeight = 500;
                imgWidth = 300;
            }
            var snapShotWrap = new posterTvGrid(
                'snapShotWrap', {
                    width:700,
                    imgHeight: imgHeight, //图片宽高，来调整框架样式
                    imgWidth: imgWidth,
                    imgP: parseInt(imgWidth / 1.2) //小图与大图比例暂定1比1.2
                }
            );
        }
    }
}