$(function () {
    /*
    $('p:first').css("color", "green") =>
    <p style="color:green;">
        p태그1 : 
        <span>
            p태그1 안의 span태그
        </span>
	</p> 
    .next().css('color', 'red') =>
    <p style="color:red;">
		p태그1의 동생 p태그2: <span>
			p태그2 안의 span태그
		</span>
	</p>
    .next().css({ 'color': 'aqua', 
    'font-weight': 'bolder' }) =>
    <p style="color:aqua;font-weight :bolder">p태그3</p>
    .end() =>  
    <p style="color:red;">
		p태그1의 동생 p태그2: 
        <span>
			p태그2 안의 span태그
		</span>
	</p>
    .children('span').css({ 'color': 'blue', 
    'font-weight': 'bolder' });
 ＝＞
    <span style="color:blue;font-weight :bolder">
        p태그2 안의 span태그
    </span>
    */
    $('p:first').css("color", "green")
        .next().css('color', 'red')
        .next().css({ 'color': 'aqua', 'font-weight': 'bolder' })
        .end()
        .children('span')
        .css({ 'color': 'blue', 'font-weight': 'bolder' });

    // slice(시작인덱스, 마지막값-1인덱스) : 시작인덱스요소부터 (마지막값-1인덱스)까지의 요소까지 선택
    // js=> 문자열객체명.slice(시작인덱스, 마지막값-1인덱스);
    // js=> Array객체명.slice(시작인덱스, 마지막값-1인덱스);
    // jquery => 열거형객체명.slice(시작인덱스, 마지막값-1인덱스);
    /*
    	0:<li>내용1-1</li>
		1:<li>내용1-2</li>(0)
		2:<li>내용1-3</li>(0)
		3:<li>내용1-4</li>
    */
    $("#menu1 li").slice(1, 3).css({ "background-color": "#ff0" });
    let list0 = $("#menu1 li");
    let list1 = $("#menu1 li").slice(1, 3);
    let list2 = document.querySelectorAll("#menu1 li");

    // //Array.prototype.slice.call(나열형데이터객체) : 해당 객체를 배열로 만들어 줌
    // let list3 = Array.prototype.slice.call(list2);
    // //배열객체명.slice(startIndex, lastIndex)  lastIndex = lastValue -1 
    // let list4 = list3.slice(1, 3);
    console.log('list0: ', list0);
    console.log('list2: ', list2);
});