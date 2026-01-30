$(function () {
    // let firstele = $("li:first-of-type").css({ "background-color": "red" });
    // // console.log('firstele: ', firstele);
	// let lastele = $("li:last-of-type").css({ "background-color": "green" });
    // // console.log('lastele: ', lastele);

    // $("#menu li:nth-of-type(even)").css({ "background-color": "red" });

    // $("#menu li:nth-of-type(odd)").css({ "background-color": "green" });
    // //:even, :odd => 제이쿼리 탐색선택자(숫자 0부터=인덱스번호) 중 하나(인덱스기준)
    // $("#menu li:even").css({ "background-color": "red" });
    // $("#menu li:odd").css({ "background-color": "green" });

    // eq(인덱스번호(0부터)) : 인덱스번호에 해당되는 요소 선택  
    // $("#menu1 li").eq(2).css({ "background-color": "yellow" , "color": "#fff"});
    // $("#menu1 li:eq(2)").css({ "background-color": "red" });

    // lt(인덱스번호) : 인덱스 번호보다 작은, 전 요소 모두 선택(자신 제외)
    // $("#menu1 li:lt(2)").css({ "background-color": "aqua" });

    // // gt(인덱스번호) : 인덱스 번호보다 큰, 후 요소 모두 선택(자신 제외)
    // $("#menu1 li:gt(2)").css({ "background-color": "hotpink" });

    // nth-child(번호n) , nth-of-type(번호n) : 번호는 1부터. 번호에 해당되는 요소를 선택함. 
    // 인덱스는 맨 처음 요소를 0부터 세지만, 번호는 맨 처음 요소를 1부터 셈.
    // n은 인덱스와 동일하게 0부터 셈. 0부터 1씩 증가하는 증가값 변수임.
    // nth-child : 정방향(위-> 아래로)
    // nth-last-child : 역방향(아래 -> 위로)
    // $("#menu1 li:nth-child(1)").css({ "background-color": "yellow" });

    // $("#menu1 li:nth-child(2n)").css({ "border": "2px dashed red" });
    // $("#menu1 li:nth-last-child(2)").css({ "background-color": "aqua" });

    // $("li:nth-child(2n)").css({ "border": "2px dashed red" });
    $("li:nth-last-child(2)").css({ "background-color": "aqua" });
}); 
