$(function () {
    //:contains(문자열) =>문자열 포함여부 확인 선택자
    $("#inner_1 p:contains(내용1)").css({ "background-color": "green" });
    $("#inner_1 p :contains(내용1)").css({ "background-color": "red" });

    //:has(요소명) => 해당 요소를 자식이나 자손으로 가지고 있는지의 여부 확인 선택자
    $("#inner_1 p:has(strong)").css({ "background-color": "aqua" });

    //contents( ) => 자식(후손포함안됨)으로 존재하는 엘리먼트(태그)들
    $("#outer_wrap").contents().css({ "border": "1px dashed red", backgroundColor: "lightblue" });

    //not("선택자") =>해당선택한 요소가 아닌 것
    $("#inner_2 p").not(":first").css({ "background-color": "yellow" });
    $("#inner_2 p").eq(2).css({ "color": "red" });


    //end() => 바로 이전 선택 요소로 돌아가라는 기능을 제공해주는 함수. 현재 타겟의 요소를 종료한다는 의미
    $("#inner_2 p").eq(2).end().css({ "color": "red" });
});