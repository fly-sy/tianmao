$(function(){
    $("#tcz_box").find("li").mouseover(function(){
        var index = $(this).index();
        var $cleft = $("#info_leftbox").find(".c_left_if").eq(index);
        $cleft.show().siblings().hide();
        $cleft.css("left",-10).animate({"left":0},200);
        $cleft.mouseleave(function(){
            $(this).fadeOut("slow");
        });
        var color = $(this).data("color");
        var img = $(this).data("img");
        $("#banner_img").attr("src",img).addClass("animated am");
        $("#bannerwarp,.right").css("background",color);
    }).mouseout(function(){
        $("#banner_img").removeClass("animated am");
    });

    /*滚动出现滚动条*/
    $(window).scroll(function(){
        var top =$(this).scrollTop();
        if(top>=500){
            $("#tz_search_box").slideDown("fast");
        }else{
            $("#tz_search_box").slideUp("fast");
        }
    }).trigger("scroll");


    $(window).resize(function(){
        var height = $(this).height();
        $("#tz_rightbox").height(height);
    }).trigger("resize");

    $("#tz_rightbox").click(function(){
        var open = $(this).data("open");
        if(!open){
            $(this).animate({right:-20},300);
            $(this).data("open","true");
        }else{
            $(this).animate({right:0},300);
            $(this).removeData("open");
        }
    });

});
