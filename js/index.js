/*头部导航栏*/
$("#nav").on("click","a:lt(3)",function(){
    var $tar=$(this);
    $tar.addClass("actived").parent().siblings().children().removeClass("actived")
});
/*头部导航栏更多选项*/
var moreList=$(".more_list");
$(".more_list1").mouseover(function(){
    var $tar=$(this);
    $tar.children().addClass("actived").children("img").attr({src:"img/header/arrowMoreu.png"});
    moreList.css("display","block")
})
    .mouseout(function(){
        var $tar=$(this);
        $tar.children().removeClass("actived").children("img").attr({src:"img/header/arrowMored.png"});
        moreList.css("display","none")
    });
/*新歌首发全部播放*/
$(".new_music>.item-title").on("mouseover","a",function(){
    $(this).children("img").attr({src:"img/index/others/play2.png"})
}).on("mouseout","a",function(){
    $(this).children("img").attr({src:"img/index/others/play1.png"})
});
/*新歌首发标签页切换*/
$(".new_music_tabs").on("mouseover","span",function(){
    var list=$(".new_music_list").children().children(".active");
    var pageNum=$(".page-num");
    pageNum.html(1);
    list.css("margin-top",0);
    var $tar=$(this);
    $tar.addClass("active").siblings().removeClass("active");
    var id=$tar.attr("data-item");
    $(id).addClass("active").siblings().removeClass("active");
});
/*新歌首发列表播放下载显示消失*/
$(".new_music_list").on("mouseover","li",function(){
    var tar=$(this);
    tar.children().children(".icon").addClass("active");
}).on("mouseout","li",function(){
    var tar=$(this);
    tar.children().children(".icon").removeClass("active");
});
/*新歌首发列表播放下载触摸激活*/
$(".icon").on("mouseover","img",function(){
    var tar=$(this)[0];
    if(tar.alt==="down"){
        tar.src="img/index/others/down1.png"
    }else{
        tar.src="img/index/others/play2.png"
    }
}).on("mouseout","img",function(){
    var tar=$(this)[0];
    if(tar.alt==="down"){
        tar.src="img/index/others/down.png"
    }else{
        tar.src="img/index/others/play1.png"
    }
});
/*新歌首发上下页切换*/
$(".new_music_btn").on("click","img",function(){
    var tar=$(this)[0];
    var list=$(".new_music_list").children().children(".active");
    var pageNum=$(".page-num");
    var mt=list.css("margin-top");
    if(tar.alt=="next"){
        if(mt!=="-560px"){
            pageNum.html(parseInt(pageNum.html())+1);
            list.css("margin-top","-=280")
        }
    }else{
        if(mt!=="0px"){
            pageNum.html(parseInt(pageNum.html())-1);
            list.css("margin-top","+=280")
        }
    }
});
/*最新MV*/
$(".one-floor").on("mouseover","img",function(){
    var tar=$(this)[0];
    if(tar.alt=="play"){
        tar.src="img/index/others/search1.png"
    }
}).on("mouseout","img",function() {
    var tar = $(this)[0];
    if (tar.alt == "play") {
        tar.src = "img/index/others/search.png"
    }
});
$(".mask").on("mouseover","img",function(){
    var tar=$(this)[0];
    if(tar.alt=="play"){
        tar.src="img/index/others/search1.png"
    }
}).on("mouseout","img",function() {
    var tar = $(this)[0];
    if (tar.alt == "play") {
        tar.src = "img/index/others/search.png"
    }
});
$(".mask2").on("mouseover","img",function(){
    var tar=$(this)[0];
    if(tar.alt=="play"){
        tar.src="img/index/others/search1.png"
    }
}).on("mouseout","img",function() {
    var tar = $(this)[0];
    if (tar.alt == "play") {
        tar.src = "img/index/others/search.png"
    }
});
/*热门电台*/
$(".radio-item").on("mouseover","li",function(){
    $(this).children().children(".radio-h").css("display","block")
}).on("mouseout","li",function(){
    $(this).children().children(".radio-h").css("display","none")
});
/*热门歌手*/
$(".singer-tabs").on("mouseover","a",function(){
    var tar=$(this);
    tar.addClass("active").parent().siblings().children().removeClass("active");
    var id=tar.attr("href");
    $(id).css("display","block").siblings().css("display","none");
});
$(".singer-tabs2").on("mouseover","a",function(e){
    e.preventDefault();
    var tar=$(this);
    tar.css("background","#009af3").siblings().css("background","#ddd");
    var id=tar.attr("href");
    $(id).css("display","block").siblings().css("display","none");
});
