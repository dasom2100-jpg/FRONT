function exeFnc() {
    /*
javascript의 innerText와 동일
text() : 해당 요소의 자식요소(자손포함)중 텍스트만 가져옴
text("변경할 내용") : 해당 요소의 자식요소(자손포함)의 내용을 모두 지우고 변경할 내용을 text로 넣음

javascript의 innerHTML와 동일
html() : 해당 요소의 자식요소(자손포함) 텍스트만 가져옴
html("변경할 내용") : 해당 요소의 자식요소(자손포함)의 내용을 모두 지우고 변경할 내용을 html로 넣음
*/

console.log($("#divBox1 li:first").html());
console.log($("#divBox1 li:last").text());

// :first => jquery탐색선택자 가장 맨 처음 (전부 모아서 그 중에 맨 처음 한 개만)
$("#divBox1 li:first").text("첫번째 내용").css({ "color": "#f00" });

// :last => jquery탐색선택자 가장 맨 마지막 (전부 모아서 그 중에 맨 마지막 한 개만)
$("#divBox1 li:last").text("마지막 내용").css({ "color": "#f00" });



// let innerString = "<h1>탐색 선택자</h1>\
// <ul>\
//     <li>내용1-1</li>\
//     <li>내용1-2</li>\
//     <li>내용1-3</li>\
// </ul>";


let innerString = `<h1>탐색 선택자</h1>
<ul>
    <li>내용1-1</li>
    <li>내용1-2</li>
    <li>내용1-3</li>
</ul>`;
$("#divBox2").html(innerString);









}