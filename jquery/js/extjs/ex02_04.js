$(function () {
    // children() : 선택한 요소의 모든 자식 요소들만 선택함.
    /*
    <h1>인접 관계 선택자</h1>
    <h1 class="selected">하위 요소 선택자</h1>
    <h1 class="selected">하위 요소 선택자</h1>
    <h1 class="selected">하위 요소 선택자</h1>    
    */
    $("#wrap h1").css({ "background-color": "yellow" });

    /*
    $("#wrap > section") => section
    <section>
        <div>
            <h1 class="selected">하위 요소 선택자</h1>
            <p>내용2</p>

            <h1 class="selected">하위 요소 선택자</h1>
            <p>내용2</p>

            <h1 class="selected">하위 요소 선택자</h1>
            <p>내용2</p>
        </div>
    </section>
    $("#wrap > section").children() => div
    <div>
        <h1 class="selected">하위 요소 선택자</h1>
        <p>내용2</p>

        <h1 class="selected">하위 요소 선택자</h1>
        <p>내용2</p>

        <h1 class="selected">하위 요소 선택자</h1>
        <p>내용2</p>
    </div>

    */
    // $("#wrap > section").children().css({
    // $("#wrap > section").children("h1").css({
    //     "color": "green",
    //     "font-weight": "bolder",
    //     "border": "2px dashed #f00"
    // });

    var style_1 = {
        "background-color": "aqua",
        "border": "2px solid #f00"
    };
    var style_2 = {
        "background-color": "yellow",
        "border": "2px dashed #f00"
    };

    // prev() : 바로 이전 요소 선택자. 바로 앞 요소 선택자.(바로 윗 형 태그 한 개만 선택)
    $(".txt").prev().css(style_1);
    $(".txt + p").css(style_2);

    // next() or $("선택자 + 다음 선택자"): 선택한 요소의 바로 다음 요소를 선택함.
    // (바로 아래 동생 태그 한 개만 선택)
    $(".txt").next().next().css(style_1);

});