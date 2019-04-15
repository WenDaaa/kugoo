/**
 * Created by web-01 on 2018/9/18.
 */
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
/*各大榜单*/
$(".listTitle").click(function(){
    var tar=$(this);
    var img=tar.children();
    var alt=img.attr("alt");
    var height=tar.attr("data-height");
    if(alt=="up"){
        tar.next().animate({height:0},500);
        img.attr({src:"img/list/hotlist/down.png"}).attr({alt:"down"});

    }else{
        tar.next().animate({height:height},500);
        img.attr({src:"img/list/hotlist/up.png"}).attr({alt:"up"});
    }
});
var musicList=$(".musicList");
/*音乐列表背景字体颜色*/
musicList.on("mouseover","li",function(){
    $(this).children(".singer_title").css("color","#009af3");
    $(this).children(".music_time").css("color","#009af3");
})
    .mouseout(function(){
        $(".singer_title").css("color","#333");
        $(".music_time").css("color","#999");
    });
/*复选框全选*/
window.onload = function(){
    document.getElementById("checkall").onclick = function(){
        var flag = this.checked;
        var items = document.getElementsByName("checkitem");
        for(var i = 0; i < items.length; i++){
            items[i].checked = flag;
        }
    };
    var items = document.getElementsByName("checkitem");
    for(var i = 0; i < items.length; i++){
        items[i].onclick = function(){
            //记录有多少个 items 被选中了
            var number = 0;
            for(var j = 0; j < items.length; j++){
                if(items[j].checked){
                    number++;
                }
            }
            document.getElementById("checkall").checked =
                (items.length == number);
        }
    }
};
/*音乐列表播放下载小图标*/
musicList.on("mouseover","li",function(){
    $(this).children(".icon").css("display","block")
})
    .on("mouseout","li",function(){
        $(this).children(".icon").css("display","none")
    });
$(".icon").on("mouseover","img",function(){
    var tar=$(this)[0];
    if(tar.alt==="down"){
        tar.src="img/index/others/down1.png"
    }else if(tar.alt==="play"){
        tar.src="img/index/others/play2.png"
    }else{
        tar.src="img/index/others/share1.png"
    }
})
    .on("mouseout","img",function() {
        var tar = $(this)[0];
        if (tar.alt === "down") {
            tar.src = "img/index/others/down.png"
        } else if (tar.alt === "play") {
            tar.src = "img/index/others/play1.png"
        } else {
            tar.src = "img/index/others/share.png"
        }
    });