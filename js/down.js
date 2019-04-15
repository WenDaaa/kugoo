/**
 * Created by web-01 on 2018/9/26.
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