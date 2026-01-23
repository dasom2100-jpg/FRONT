$(function () {
    $('p:first').css("color", "green")
        .next().css('color', 'red')
        .next().css({ 'color': 'aqua', 'font-weight': 'bolder' })
        .end()
        .children('span')
        .css({ 'color': 'blue', 'font-weight': 'bolder' });

    // slice(시작인덱스, 마지막값-1인덱스) : 시작인덱스부터 (마지막값-1인덱스)까지의 요소까지 선택
    $("#menu1 li").slice(1, 3).css({ "background-color": "#ff0" });
    let list0 = $("#menu1 li");
    let list1 = $("#menu1 li").slice(1, 3);
    let list2 = document.querySelectorAll("#menu1 li");

    // Array.prototype.slice.call(나열형데이터객체) : 해당 객체를 배열로 만들어 줌
    let list3 = Array.prototype.slice.call(list2);
    // 배열객체의 slice(startIndex, lastIndex) lastIndex = lastValue -1
    let list4 = list3.slice(1, 3);
    console.log('list0 : ', list0);

});
