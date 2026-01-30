function exeFnc() {
    /* 
    attr 상태가 변경되지 않는 속성(정적속성)을 설정할 때 사용(동적속성은 인식 못함)
    - attr("속성명", "속성값") : 해당 요소에 해당 속성과 값을 설정한다. =>js  setAttribute()기능
    - attr("속성명") : 해당 요소에 해당 속성의 값을 가져오라는 의미임.  =>js  getAttribute()기능
    */
   //$(".wrap_1 p.active") => <p class="active">내용2</p>
   //.removeClass("active") =>  <p class="on">내용2</p>
    // $(".wrap_1 p.active").removeClass("active").addClass("on");
    // $(".wrap_1 p.active").attr("class", "on"); 
    // .addClass("on") => <p class="active on">내용2</p>
    // $(".wrap_1 p.active").addClass("on");

    // //attr("class") => 문자열값으로 반환
    // console.log($(".wrap_1 p.active").attr("class"));
    // //classList => 배열객체로 반환  
    // // <p class="active on">내용2</p>
    // console.log(document.querySelector('.wrap_1 p.active').classList);

    /*
    자바스크립트의 value속성객체와 동일
    val함수
    - val() : input요소의 value속성값 가져오기 -> js의 값자리에 존재하는 value속성객체 기능
    - val("값") : input요소의 value속성값 설정/변경 -> js의 공간자리에 존재하는 value속성객체 기능
    */
    //$(".wrap_1 p:eq(3) input") => 
    // <input type="text" value="Korea">
    // $(".wrap_1 p:eq(3) input").val("Korea");

    //$(".wrap_1 p:eq(3) input") => 
    // <input type="text" value="Korea">
    // alert($(".wrap_1 p:eq(3) input").val());

    //after("요소") : 해당 요소 뒤에(바로 동생으로) 추가할 요소(html형태)를 넣는다.
    // $(".wrap_2 p:eq(1)").after("<p>After(추가1)</p>");

    //before("요소") : 해당 요소 앞에(바로 형으로) 추가할 요소(html형태)를 넣는다.
    // $(".wrap_2 p:eq(1)").before("<p>Before(추가2)</p>");

    //unwrap() :선택한 요소의 부모 요소를 삭제한다.
    // //wrapInner() : 선택한 요소의 자식 요소를 감싼다.
    // $(".wrap_3 p").unwrap();
    // $(".wrap_3 p").unwrap().wrapInner("<strong>");
    // 
    $('button').hide();
}