$(function () {
    // 제이쿼리 기법 : 한 곳에 다양한 메서드를 출줄이 이어서 사용하는 방법
    // 아이디선택자
    $("#tit").css("background-color", "green").css("border", "2px solid #000").width(300)
    .height(200)
    .fadeOut(2000)
    .fadeIn(2000);;

    // 클래스 선택자
    $(".tit").css("background-color", "red").css("border", "2px dashed #000");

    // 중첩 선택자
    $("h1.tit").css("background-color", "yellow").css("border", "2px dashed #000");

    //요소 선택자
    $("h2").css("background-color", "blue").css("border", "2px dashed #000");

    // 후손 선택자
    $('div em').css('border', '3px solid #000').css('padding', '7px 9px 11px 13px');
    $('span em').css({ 'border': '1px dotted #000', 'padding': '7px 10px' });

    // 그룹 선택자
    $("h4, #tit3").css({ "background-color": "#0000ff", "border": "2px dashed #f00" });
});