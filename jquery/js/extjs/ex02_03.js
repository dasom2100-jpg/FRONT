$(function () {
    // parent() : 부모 선택자, 해당 요소의 부모 요소만 선택함.
    //$("#list_1").css('font-size', '32px').parent().css("border", "2px dashed #f00");

    // $(".txt1").parents().css({
    // 	"border": "5px solid red",
    // 	"padding": "10px"
    // });

    // $(".txt2").parents("section").css({
    // 	"border":"5px solid red",
    // 	"padding" : "10px"
    // });

    // $("선택자").closest("조상요소") : 
    // 해당 요소의 조상(부모 포함) 요소들 중 가장 가까운 div요소를 선택함.
     $(".txt1").closest("div").css({
     	"background-color": "pink",
     	"border": "2px solid #f00",
     	"padding": "10px"
     });
});