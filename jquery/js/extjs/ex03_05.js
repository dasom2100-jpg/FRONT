/*
is("탐색선택자") : 선택자의 상태에 따라 boolean값을 반환함
탐색선택자로 올 수 있는 값
:checked - 체크된 상태인지
:selected - 선택된 상태인지
*/

$(function () {
    $("#course").change(function () {
        let z1 = $("#course :selected").val();
        let z2 = $("#zone1 :selected").val();
        console.log("z1: ", z1);
        console.log("z2: ", z2);
    });

    $("input[name=chk]").click(function () {

        //this는 이벤트가 발생한 요소 자신을 가리킨다.
        //$(this) 제이쿼리 객체로 변환
        //is("탐색선택자") : 선택자의 상태에 따라 boolean값을 반환함
        //:checked - 체크된 상태인지
        //:selected - 선택된 상태인지
        if ($(this).is(":checked") == true) {
            let idstr = $(this).attr("id");
            $("#" + idstr ).css({ "color": "blue", "font-weight": "bold", "width": "50px", height: "50px" });   

            console.log($(this).attr("id") + "요소는 체크된 상태입니다.");
        } else {
            console.log($(this).attr("id") + "요소는 해제된 상태입니다.");
            let idstr = $(this).attr("id");
            $("#" + idstr ).css({ "color": "black", "font-weight": "normal", "width": "auto", height: "auto" }); 

        }
        /*
제이쿼리 each()함수 형식: 열거형 객체들을 자동으로 한 개씩 요소와 인덱스로 구분하여 반환해주는 함수
$( 배열객체명 | 배열객체셀렉터 ).each(function( [인덱스변수, 요소변수] ){ 실행코드들... });
$.each( 배열객체명 | 배열객체셀렉터 ,function( [인덱스변수, 요소변수] ){ 실행코드들... });

prop() : JavaScript의 프로퍼티(property)를 핸들링 함. 동적인 속성을 제어.
prop("속성명") - 프로퍼티는 JavaScript에서 사용하는 속성 정보를 가져오므로 HTML의 정보와 일치하기도
하고 일치하지 않을 수 있다.
prop("속성명", "속성값") - 해당 요소의 속성 정보를 속성값으로 설정(변경)한다.
*/
let cnt = 0;
$.each($("input[name=chk]"), function (param1, param2) {
    if ($(this).is(":checked")) cnt++;
});
if (cnt == $("input[name=chk]").length) {
    $("#allchk").prop("checked", true);
} else {
    $("#allchk").prop("checked", false);
}
});

//$().click(function(){ ... });
$("input[name=allchk], label[for=allchk]").click(function () {
    let allchk;
    if (this.tagName == 'INPUT') {
        allchk = $(this).is(":checked");
        updateDebug();
    } else {
        allchk = $(this).prev().is(":checked");
        updateDebug();
    }

    //$.each(배열객체명 | 배열객체셀렉터, function(인덱스변수, 요소변수){ ... });
    $.each($("input[name=chk]"), function (index, element) {
        console.log(this);
        console.log("index: ", index, " element: ", element);
        $(this).prop("checked", allchk);
    });

    updateDebug();

 });

}); 
