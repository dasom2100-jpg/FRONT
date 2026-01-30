window.addEventListener('wheel', function (event) {
    event.preventDefault();
    alert('wheel 이벤트 방지');
}, { passive: true });

var code;
$(document).ready(function () {
    /*
    on 함수 호출 형식
    1. 한 개의 이벤트만 적용:  on("이벤트속성자", 콜백함수); 
    2. 여러 개의 이벤트를 적용:
    on({
    "이벤트속성자1" : 콜백함수1 ,
    "이벤트속성자2" : 콜백함수2,
    ...
    });
    3. 여러 개의 이벤트에 한 개의 기능을 적용
    **이벤트 종류 기술하는 경우 공백으로 띄어서 기술해준다.
    on("이벤트속성자1  이벤트속성자2 ...", 콜백함수);
    */

    // $(".a1").hover(
    //     function () { $('.txt1').show(); }  // mouseover
    // ).click(function (e) { e.preventDefault(); });

    // $(".a1").hover(
    //     function () { $('.txt1').show(); }  // mouseover
    //     ,
    //     function () { $('.txt1').hide(); }  // mouseleave
    // ).click(function(e){e.preventDefault();});

    $('.a1').on({
        "mouseover": function () { $('.txt1').show(); },
        "mouseleave": function () { $('.txt1').hide(); },
        "click": function (e) {
            e.preventDefault();
            alert('페이지 이동 방지');
        },
    });

    $(".a2").on("click", function (e) {
        e.preventDefault();
        $('.txt2').show();
    }).on('mouseleave', function () {
        $('.txt2').hide();
    });

    $('.btn1').on({

        "mousedown": function () {
            $('.txt3').show();
        },
        "mouseup mouseleave": function () {
            $('.txt3').hide();
        }

    });

    $(".btn1").on("dblclick", function () {
        $(".txt3").css({ "background-color": "#0f0" });
    });


    //change가 적용되는 시점은 blur시점(focus가 해제되는 상태)임.
    $('#ipBox').change(function () {
        $('#ipText').text(this.value);
    });

    //keyup과 keydown은 값이 적용되는 시점이 다르므로 두 개를 모두 같이 기술해야 
    //입력하는 즉시 바로 반영되는 것처럼 보여짐
    // $('#ipBox').keyup(function (e) {
    //     e.stopPropagation();
    //     $('#ipText').text(this.value);
    // });
    // document.querySelector('#ipBox').addEventListener('keydown', function (e) {
    //     if (e.key == 'Enter'){
    //         e.preventDefault();
    //         this.blur(); //focus 해제하기
    //     } 
    //     $('#ipText').text(this.value);
    // });
    // $('#ipBox').keydown(function (e) {
    //     if (e.key == 'Enter') {
    //         e.preventDefault();
    //         this.blur(); 
    //     }
    //     $('#ipText').text(this.value);
    // });

    /*
    event내장 객체가 가지고 있는 키보드 이벤트에 관련된 속성들(keydown, keyup, keypress등의 이벤트에서만 사용 가능)
    keyCode : 키보드 키에 관련된 아스키코드값을 가지고 있는 내장 객체. deprecated예정으로 old버전에만 사용. 사용 비권장
    key : 키보드 키를 명시적인 문자열값으로 반환해주는 내장 객체. Enter, d 등등
    code : 키보드 키 정보를 보다 세부적인 문자열값으로 반환해주는 내장 객체. Enter, KeyD, AltLeft 등등
    */
    // $('#frm').on(
    //     'submit', function (e) { //submit 이벤트에는 keyCode값이 할당되어있지 않음.
    //         if (e.keyCode == 13) e.preventDefault();
    //     });
    $('#frm').on(
        'submit keydown', function (e) {
            console.log(`e.keyCode : ${e.keyCode},  e.key : ${e.key} , e.code : ${e.code}`);
            if (e.keyCode == 13) e.preventDefault();
    });


    document.addEventListener(
        'keydown',
        function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                alert('html문서에서 엔터 금지');
            };
        },
        true //버블링에서 캡처링으로 변경
    );

});
