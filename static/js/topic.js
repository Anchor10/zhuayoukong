// 专题头部导航
$(function(){
    $("#t_zhuanti").addClass("curr");
})

$(function(){
    var num = sessionStorage.getItem('num');
    console.log(num)
    if(num){
        $(".snav a").eq(num).addClass("cur").siblings().removeClass("cur");
        $(".topic-list").eq(num).show().siblings(".topic-list").hide();
    }
    $(".snav").on("click","a",function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $(".topic-list").eq($(this).index()).show().siblings(".topic-list").hide();
        sessionStorage.setItem('num',($(this).index()))
        
    })
})
