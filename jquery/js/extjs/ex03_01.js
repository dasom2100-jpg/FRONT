$(function(){
    // nth-of-type() 예제
    // let firstele = $('li:nth-of-type');
    // console.log('firstele: ', firstele);

    // let lastele = $('li:nth-of-type');
    // console.log('lastele: ', lastele);

    $('li:nth-of-type(even)').css('backgroundColor', "#ff0202");        

    $('li:nth-of-type(odd)').css('backgroundColor', '#057c3d');
    //:even, :odd =>  jQuery에서 제공하는 의사 클래스 선택자(인덱스기준 짝수, 홀수)
    $('li:even').css('background-color', 'red');
    $('li:odd').css('background-color', 'blue');

    //eq(): 특정 인덱스 요소 선택자
    let eqele = $('li').eq(3);
    console.log('eqele: ', eqele);
    eqele.css({
        'background-color':'purple',
        'color':'#fff',
        'fontWeight':'bold'
    });

    //gt(인텍스번호 0부터): 특정 인덱스 초과 요소 선택자
    $('#menu li:gt(2)').css('backgroundColor', 'orange');

    //lt(인덱스번호 0부터): 특정 인덱스 미만 요소 선택자
    $('#menu li:lt(2)').css('backgroundColor', 'pink'); 

    //nth-child(n), nth-of-type(n) 비교
    //nth-child(): 부모 요소의 자식 요소 중에서 n번째 요소 선택자.
    //nth-of-type(): 부모 요소의 자식 요소 중에서 n번째 같은 타입(태그명) 요소 선택자.
    $('#nthchilde_wrap li:nth-child(3)').css('border', '2px solid red');
    $('#nthchilde_wrap li:nth-of-type(3)').css('border', '2px solid blue');

    //nth-childe(): 정방향(위->아래로)
    //nth-last-child(): 역방향(아래->위로)
    $('#nthchilde_wrap2 li:nth-last-child(2)').css('backgroundColor', 'lightgreen');    
        

});