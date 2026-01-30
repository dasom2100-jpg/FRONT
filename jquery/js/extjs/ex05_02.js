$(function () {
    var result = new Array(); // ['SPAN', 'P', 'DIV', 'BODY', 'HTML']
    var result2 = new Array(); //[]

    $("b").parents().each(function (i) {
        result[i] = this.tagName; //'P'
        // result[i] = $(this).prop('tagName');
    });
    // console.log('result: ', result);

    // js reverse() : 배열의 순서를 역순으로 가져오기. 원본 변경됨
    // js join("구분자") 함수 : 배열 요소값을 구분 문자열로 연결함. (문자열로 반환됨)
    // 다음 연결할 인수값이 있을 경우 기본적으로 콤마(,)로 추가됨. 
    // 연결값이 없을 경우 구분자 적용되지 않음.

    // $("b").append(result.reverse().join(", "));
    0
    // $("b").append(result.join(", "));
    // console.log('result: ', result);
    // console.log('result.join(", "): ', result.join(", "));
    // console.log('result.join(", "): ', typeof result.join(", "));

    var result2 = new Array();
    $("em").parent().each(function (i) {
        result2[i] = this.tagName;
    });
    $("em").append(result2.join(", "));
});