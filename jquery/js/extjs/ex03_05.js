/*
    is("탐색선택자") : 선택자의 상태에 따라 boolean값을 반환함
    탐색선택자로 올 수 있는 값
    :checked - 체크된 상태인지
    :selected - 선택된 상태인지
*/
$(function () {
    console.log('attr로 가져온 href값: ', $("#aTag").attr("href"));
    console.log('prop로 가져온 href값: ', $("#aTag").prop("href"));

    $("#course").change(function () {
        let z1 = $("#course :selected").val();
        // let z1 = $("#course > option:selected").val();
        let z2 = $("#zone1 :selected").val();
        console.log("z1: ", z1);
        console.log("z2: ", z2);
    });

    $("input[name=chk]").click(function () {
        /*
        this : 이벤트를 발생시킨 대상이 되는 태그나 객체의 정보를 담고 있는 자바스크립트의 내장객체
        this자바스크립트객체를 $(this) 제이쿼리객체로 변환함. => 제이쿼리함수를 사용하기 위해
        */
        if ($(this).is(":checked") == true) {
            let idstr = $(this).attr("id");
            console.log(idstr + "요소는 체크된 상태입니다.");
            $("#"+idstr).css({"width": "30px", "height" : "30px"});
        } else {
            let idstr = $(this).attr("id");
            console.log(idstr + "요소는 해제된 상태입니다.");
            $("#"+idstr).css({"width": "15px", "height" : "15px"});
        }

        /*
        제이쿼리 each()함수 형식: 열거형 객체들을 자동으로 한 개씩 요소와 인덱스로 구분하여 반환해주는 함수
        $( 배열객체명 | "배열객체셀렉터" ).each(function( [인덱스변수, 요소변수] ){ 실행코드들...; });
        $.each(  $( 배열객체명 | "배열객체셀렉터" ) ,function( [인덱스변수, 요소변수] ){ 실행코드들...; });

        prop() : JavaScript의 프로퍼티(property)를 핸들링 함. 동적인 속성을 제어.
        prop("속성명") - 프로퍼티는 JavaScript에서 사용하는 속성 정보를 가져오므로 HTML의 정보와 일치하기도 하고 일치하지 않을 수 있다.
        prop("속성명" , "속성값") - 해당 요소의 속성 정보를 속성값으로 설정(변경)한다.
        */
        let cnt = 0;
     
        $.each($("input[name=chk]"), function (param1, param2) {
            if ($(this).is(":checked")) cnt++;
        });
        if (cnt == $("input[name=chk]").length) {
            $("#allchk").prop("checked", true);
            // $("#allchk").attr("checked", true);
        } else {
            // $("#allchk").attr("checked", true);
            $("#allchk").prop("checked", false);
        }
    });

    $("input[name=allchk], label[for=allchk]").click(function () {
        let allchk; //false
        if (this.tagName == 'INPUT') {
            allchk = $(this).is(":checked");
        } else {
            allchk = $(this).prev().is(":checked");
        }

        $.each($("input[name=chk]"), function (i, o) {
            // console.log('i: ', i, 'o: ', o);
            $(this).prop("checked", allchk);
            // $(this).attr("checked", allchk);
        });
    });

});