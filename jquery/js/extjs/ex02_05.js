$(function(){
    var style_1 = {
        "background-color":"aqua",
        "border":"2px solid #f00"
    };
    var style_2 = {
        "background-color":"yellow",
        "border":"2px dashed #f00"
    };

    // prevAll(): 바로 이전 요소 선택자. 바로 앞 요소 선택자.

    $(".txt").prevAll().css(style_1);
    $(".txt").prevAll("p").css(style_2);

    //nextAll(): 바로 다음 요소 선택자. 바로 뒤 요소 선택자.
    $(".txt").nextAll().css(style_1);
    $(".txt").nextAll("p").css(style_2);

    //siblings(): 형제 요소 선택자.
    $(".txt").siblings().css(style_1);
    $(".txt").siblings("p").css(style_2);

    var style_4 = {
        "background-color":"pink",
        "border":"2px dotted #00f"
    };
    //prevUntil(): 특정 요소 전까지의 이전 모든 요소 선택자.  
    $(".txt3").prevUntil(".title").css(style_4);  
    
    //nextUntil(): 특정 요소 전까지의 다음 모든 요소 선택자.  
    $(".txt3").nextUntil(".txt6").css(style_4);

    //siblings()를 javaScript로 구현하기
    // var txt = document.querySelector(".txt");
    // var parent = txt.parentNode;
    // var siblings = parent.children;
    // for(var i=0; i<siblings.length; i++){
    //     if(siblings[i] !== txt){
    //         siblings[i].style.backgroundColor = "aqua";
    //         siblings[i].style.border = "2px solid #f00";
    //     }
    // }
}
);









