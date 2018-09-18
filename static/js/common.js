// 网站顶部导航
$(document).ready(function () {
    $(".siteNavMenu li").hover(function () {
        $(this).addClass("hover");
        $(this).children(".menuHide").show();
    }, function () {
        $(this).removeClass("hover");
        $(this).children(".menuHide").hide();
    })
});

//懒加载
    $("img[data-original]").lazyload({
        threshold: 500,
        skip_invisible: false,
        failurelimit: 2000,
        effect:"fadeIn",
    })

// 侧边导航栏
var __feedCreat = function () {
    var feedHtml = $('<div id="backtotop" class="backtotop" ></div>');
    feedHtml.html(
        '<a class="erweima" id="erweima"><span>扫二维码</span></a><a target="_self" class="fave_b" href="javascript:;" title="添加收藏" onclick="addFav();return false;"><span>添加收藏</span></a><a id="totop" class="totop"><span>返回顶部</span></a>'
    );
    $("body").append(feedHtml);
    $("body").append('');
};
if ($.browser.msie) {
    var ieVersion = parseInt($.browser.version)
}
var $backtotop = function () {
    if ($(this).scrollTop() > 44) {
        var _bw = 1400,
            _wt = document.body.clientWidth;
        $("#backtotop").css('right', ((_wt - _bw) / 2) - 64);
        $("#erweipic").css('right', ((_wt - _bw) / 2) - 0);
        var st = $(document).scrollTop(),
            winh = $(window).height();
        if (ieVersion != 6) {
            $("#backtotop").css('top', (winh / 2) - 44);
        }
        $("#erweipic").css('top', st + 350);
        $("#backtotop").css({
            "display": "block"
        });
    } else {
        $("#backtotop").css({
            "display": "none"
        })
    }
};
var __initEvent = function () {
    $(window).bind("resize", $backtotop);
    $(window).bind("scroll", $backtotop);
    $("#totop").bind("click", function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });
    $("#erweima").bind("mouseover", function () {
        $('#erweipic').css('display', 'block');
    });
    $("#erweima").bind("mouseout", function () {
        $('#erweipic').css('display', 'none');
    });
}
$(function () {
    if (screen.width >= 1640) {
        (function () {
            __feedCreat();
            __initEvent()
        })()
    }
});
function addFav() {
    var title = document.title.toString();
    var url = window.location.href;
    try {
        window.external.AddFavorite(url, title);
    } catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        } catch (e) {
            alert("您的浏览器不支持一键收藏，请按Ctrl+D将本页添加到收藏夹");
        }
    }
}
// 百度统计
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?cdc7b9d439ebb877ba1fca79ac6c2683";
    // var s = document.getElementsByTagName("script")[0];
    // s.parentNode.insertBefore(hm, s);
    document.body.appendChild(hm);
})();
(function () {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    // var s = document.getElementsByTagName("script")[0];
    // s.parentNode.insertBefore(bp, s);
    document.body.appendChild(bp);
})();
(function () {
    var src = (document.location.protocol == "http:") ? "http://js.passport.qihucdn.com/11.0.1.js?d158df339357da7586e198a50b78c863" : "https://jspassport.ssl.qhimg.com/11.0.1.js?d158df339357da7586e198a50b78c863";
    document.write('<script src="' + src + '" id="sozz"><\/script>');
})();