$(function () {

    // children(): 선택한 요소의 모든 자식 요소를 선택함.
    $("#wrap h1").css({ "background-color": "yellow" });

    $("#wrap > section").children().css({
        // $("#wrap > section").children("h1").css({
        // $("#wrap > section").children(".selected").css({
        "color": "green",
        "font-weight": "bolder",
        "border": "2px dashed #050775"
    });

    var style_1 = {
        "background-color": "aqua",
        "border": "2px solid #f00"
    };
    var style_2 = {
        "background-color": "yellow",
        "border": "2px dashed #f00"
    };

    // prev(): 바로 이전 요소 선택자. 바로 앞 요소 선택자.
    $(".txt").prev().css(style_1);
    $(".txt + p").css(style_2);

    //next() or $("선택자 + 다음 선택자"): 바로 다음 요소 선택자. 바로 뒤 요소 선택자.
    $(".txt").next().next().css(style_1);
    $(".txt ~ p").css(style_2); 

});
