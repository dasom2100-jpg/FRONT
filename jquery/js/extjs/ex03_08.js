function btn( ){
	// clone() : 해당 선택요소 복사
	var copyObj = $(".box1").children().clone();
	var copyObj11 = $(".box1").clone();

	var copyObj1 = document.getElementsByClassName("box1")[0].children;
	$(".box1").after(copyObj11);
	// // remove( ) : 해당 요소 제거
	// $(".box2").remove( );
	// document.body.removeChild(document.getElementsByClassName("box2")[0]);

	// empty( ) : 해당 요소의 하위 요소를 모두 제거
	$(".box3").empty( ); 
	// document.getElementsByClassName("box3")[0].innerHTML ="";
	// document.getElementsByClassName("box3")[0].removeChild(document.getElementsByClassName("box3")[0].getElementsByTagName("p")[0]);
	// document.getElementsByClassName("box3")[0].removeChild(document.getElementsByClassName("box3")[0].getElementsByTagName("p")[0]);

	$(".box3").append(copyObj);
	// for(let i=0; i < copyObj1.length ; i++){ 
	// 	document.getElementsByClassName("box3")[0].appendChild(copyObj[i]);
	// 	// document.getElementsByClassName("box3")[0].appendChild(copyObj1[i].cloneNode(true));
	// }

	$("button").hide();
}