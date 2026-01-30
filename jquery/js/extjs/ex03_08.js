function btn( ){
	// clone() : 해당 선택요소 복사
	/*
	$(".box1") = document.getElementsByClassName("box1")[0] =>
	<div class="box1">
		<p>내용1</p>
		<p>내용2</p>
	</div>
	.children() = .children => (원본) = copyObj1
	<p>내용1</p><p>내용2</p>
	.clone() => <p>내용1</p><p>내용2</p> (복제본) = copyObj
	*/
	var copyObj = $(".box1").children().clone();
	var copyObj1 = document.getElementsByClassName("box1")[0].children;

	// remove( ) : 해당 요소 제거
	$(".box2").remove( );
	// document.body.removeChild(document.getElementsByClassName("box2")[0]);

	// empty( ) : 해당 요소의 하위 요소(자식)를 모두 제거
	$(".box3").empty( ); 
	// document.getElementsByClassName("box3")[0].innerHTML ="";
	// document.getElementsByClassName("box3")[0].removeChild(document.getElementsByClassName("box3")[0].getElementsByTagName("p")[0]);
	// document.getElementsByClassName("box3")[0].removeChild(document.getElementsByClassName("box3")[0].getElementsByTagName("p")[0]);

	// append(추가할 요소) : 해당 요소의 가장 마지막 하위(자식) 요소로 추가
	// $(".box3").append(copyObj);
	/*
	copyObj1 (원본)  => <p>내용1</p><p>내용2</p>
	copyObj (복제본) => <p>내용1</p><p>내용2</p>
	*/
	for(let i=0; i < copyObj1.length ; i++){ 
		// document.getElementsByClassName("box3")[0].appendChild(copyObj[i]);
		document.getElementsByClassName("box3")[0].appendChild(copyObj1[i].cloneNode(true));
	}

	for(let i=0; i < copyObj1.length ; ){ 
		console.log('copyObj1[0]: ', copyObj1[i]);
		document.getElementsByClassName("box3")[0].appendChild(copyObj1[i]);
		if (copyObj1.length == 0) break;
	}
	// console.log('copyObj1.length 1: ', copyObj1.length);
	// document.getElementsByClassName("box3")[0].appendChild(copyObj1[0]);
	// console.log('copyObj1.length 2: ', copyObj1.length);
	// document.getElementsByClassName("box3")[0].appendChild(copyObj1[0]);

	$("button").hide();
}