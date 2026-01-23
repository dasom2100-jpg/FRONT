$(function () {
    /*
    $("선택자").find("요소 또는 선택자") : 선택한 요소의 하위 요소를 필터링(검색)할 때 사용. 범위: 자식, 자손 모두 검색 가능
    $("선택자").filter(callback 또는 요소 또는 선택자) : 자기 자신의 레벨에서 필터링(검색)을 할 때 사용. 범위 : 형제, 형제의 자식,자손까지 가능 */
  
    $("#inner_1").find(".txt1").css({ "background-color": "yellow" });

    // javascript의 find함수 : 나열형 객체, object객체 모두 가능
/* NodeList
<p class="txt1">p태그 1번</p>
<p class="txt1">p태그 3번</p>
<p class="txt1">p태그 4번</p>
<p class="txt1">p태그 5번</p>
*/
    // let txt1s = document.querySelectorAll("#inner_1 .txt1");
    // let lists = Array.prototype.slice.call(txt1s);
    // lists.find(o => console.log(o));

    // const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
    // const user = users.find(u => u.id === 2); 
    // console.log(user);

    // $("#inner_1 > p").filter(".txt2").css({ "background-color": "aqua" }); //형제만 가능
    $("#inner_1  p").filter(".txt2").css({ "background-color": "aqua" }); // 형제,형제의 자식,자손까지 가능

//     // javascript filter함수
//     // const numbers = [1, 2, 3, 4, 5, 6];
//     const evens = lists.filter((item, index) => index % 2 === 0); 
//     console.log(evens);

//     $(".inner_2 p").filter(function (i, o) {
//         // 단 아이템매개변수는 생략 가능하지만 인덱스 매개변수는 생략 불가
//         // 첫번째 매개변수 =>인덱스값, 두번째 매개변수 => 아이템(요소)
//         return i % 2 == 0;  //반드시 true값이 되어야 한다.
//     }).css({ "background-color": "yellowgreen" });

//     $("#searchBtn").click(searchFnc);
//     $("#searchStr").keyup(searchFnc);
});

function searchFnc() {
    $("#inner_3 p").show();
    let str = document.getElementById('searchStr').value;
    $("#inner_3 p").filter(function (i, o) {
        if (!o.innerText.includes(str)) { return true; }
        else return false;
    }).hide();
}
