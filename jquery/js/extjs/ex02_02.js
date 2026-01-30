// css함수 형식 : js style속성을 그대로 받아서 업그레이된 속성임
// $("선택자" 또는 객체명).css("스타일속성명","스타일값").css("스타일속성명","스타일값");
// $("선택자" 또는 객체명).css({"스타일속성명" :"스타일값", "스타일속성명":"스타일값"});

$(document).ready(function () {
    // 체이닝 기법 : 한 객체에 다양한 메서드를 줄줄이 이어서 사용하는 방법
    // 아이디선택자
    $("#tit").css("background-color", "green").css("border", "2px solid #000");

    //제이쿼리는 선택자의 우선순위가 없다.(css보다 나중에 적용되므로 css도 무시됨.)
    //단, css코드에  !important 키워드가 붙어 있으면 이 부분만 우선순위 적용됨.
    // 종속 선택자
    $("h1.tit").css("background-color", "yellow").css("border", "2px dashed #000");
    
    // 클래스 선택자
    $(".tit").css("background-color", "red").css("border", "2px dashed #000");
    // let tits = document.querySelectorAll(".tit");
    // tits.forEach(function(obj){
    //     obj.setAttribute("style", "background-color : red ; border : 2px dashed #000;")
    // });

    //요소 선택자
    $("h2").css("background-color", "blue").css("border", "2px dashed #000");

    // // 후손 선택자
    $('div em').css('border', '3px solid #000').css('padding', '7px 9px 11px 13px');
    $('span em').css({ 'border': '1px dotted #000', 'padding': '7px 10px' });

    // 그룹 선택자
    $("h4, #tit3").css({ "background-color": "#0000ff", "border": "2px dashed #f00" });
});