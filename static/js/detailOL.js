
$(function(){
    $(".artimglists img").each(function(){
    if($(this).height()>$(this).width()){$(this).css("width","180px");}else if($(this).width()>$(this).height()){$(this).css("height","130px");}
    });
    
    if ($('.snopshot').length > 0) {
        var sst = $(".snopshot");
        if (sst.length == 1) {
            sst.css({"position":"relative","text-align":"center"}).find("img").css({"max-width":"600px","max-height":"462px;"}).next(".elementOverlay").hide();
            $(".snap-shot-btn").hide();
        } else if (sst.length == 2) {
            sst.css({"position":"relative","float":"left"}).find("img").css({"max-width":"400px","margin-right":"10px"}).next(".elementOverlay").hide();
            $(".snap-shot-btn").hide();
        } else {
          var img = new Image();
                            
       img.src =  $(".snapShotCont li").eq(0).find("img").attr("src");
          //window.onload=function(){
            var imgWidth = img.width;
            var imgHeight = img.height;
            if(imgWidth > imgHeight){
                imgHeight = 300;
                imgWidth = 500;
            }else{
                imgHeight = 600;
                imgWidth = 343;
            }
            var snapShotWrap = new posterTvGrid('snapShotWrap',{
                imgHeight : imgHeight,//图片宽高，来调整框架样式
                imgWidth : imgWidth,
                imgP : parseInt(imgWidth/1.2),//小图与大图比例暂定1比1.2
                imgH : parseInt(imgHeight/1.2),
              }
            );
          //}; 
        }
      }
    } )

    var __feedCreat = function () {
        var feedHtml = $('<div id="backtotop" class="backtotop" ></div>');
        feedHtml.html('<a class="erweima" id="erweima"><span>扫二维码</span></a><a target="_self" class="fave_b" href="javascript:;" title="添加收藏" onclick="addFav();return false;"><span>添加收藏</span></a><a id="totop" class="totop"><span>返回顶部</span></a>');
        $("body").append(feedHtml);
        $("body").append('');
    };
    //$(window).scroll(function () {
    //    var temp1 = $(window).scrollTop();
    //    var temp2 = $(document.body).height() - temp1 - $(window).height();
    //    if (temp1 >= 580) {
    //        $(".warp").css({"position": "relative"});
    //        $('.right_box').css({"position": "absolute", "top": temp1 - 210 + "px", "left": "925px"});
    //        if (temp2 <= 75) {
    //            $('.right_box').css({"top": "auto", "bottom": "0"});
    //        }
    //    } else if (temp1 < 580) {
    //        $('.right_box').css({"position": "relative", "top": "0", "left": "0"});
     //   }
    //})

    $(document).ready(function () {
        $("#remenpaihang .item:first").find(".big_ph").css("display", "block");
        $("#remenpaihang .item:first").find(".small_ph").css("display", "none");
        $("#remenpaihang .item:first").addClass("item_big");
        $("#remenpaihang1 .item:first").find(".big_ph").css("display", "block");
        $("#remenpaihang1 .item:first").find(".small_ph").css("display", "none");
        $("#remenpaihang1 .item:first").addClass("item_big");
    
        $("#remenpaihang .item").hover(
                function () {
                    $(this).siblings().find(".small_ph").css("display", "block");
                    $(this).siblings().find(".big_ph").css("display", "none");
                    $(this).parent().find(".item").removeClass("item_big");
                    $(this).find(".small_ph").css("display", "none");
                    $(this).find(".big_ph ").css("display", "block");
                    $(this).addClass("item_big");
                }
        );
        $("#remenpaihang1 .item").hover(
                function () {
                    $(this).siblings().find(".small_ph").css("display", "block");
                    $(this).siblings().find(".big_ph").css("display", "none");
                    $(this).parent().find(".item").removeClass("item_big");
                    $(this).find(".small_ph").css("display", "none");
                    $(this).find(".big_ph ").css("display", "block");
                    $(this).addClass("item_big");
                }
        );
        $(".parHd li").hover(
                function () {
                    var pnum=$(this).index();
                    console.log(pnum);
                    $(this).parent().find("li").removeClass("on");
                    $(".parBd").find(".slideBox").css("display", "none");
                    $(".parBd").find(".slideBox").eq(pnum).css("display", "block");
                    $(this).addClass("on");
                }
        );
        // 盒子下载弹出框
    $(function () {
        $('.shuowan').click(function () {
            $('#zzc,#zzc-download').show();
        })
        $('.dia-close').click(function () {
            $('#zzc,#zzc-download').hide();
        })
    
    })
    $(function(){
        $('.zzc-ios').click(function(e){
          e.stopPropagation();    
          $('.eight-ewm.box3').slideToggle(200);
        })
        $('.android').click(function(e){
          e.stopPropagation();
          $('.eight-ewm.box1').slideToggle(200);
          $('.eight-ewm.box2').slideUp(200);
        })
        $('.ios').click(function(e){
            e.stopPropagation();
            $('.eight-ewm.box2').slideToggle(200);
            $('.eight-ewm.box1').slideUp(200);
          })
        
        $('body').click(function(){$('.eight-ewm').slideUp(200);})
      })
    });