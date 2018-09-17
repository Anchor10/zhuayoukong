$(function(){
    $("#t_zhuanti").addClass("curr");
})
$(function(){
    $(".qrcode").hide();
    $(".game-item").hover(function(){
        $(this).find(".icon").hide();
        $(this).find(".qrcode").show();
    },function(){
        $(this).find(".icon").show();
        $(this).find(".qrcode").hide();
    })
})
  
  
      
   