/*
   append함수들: 선택된 요소의 맨 막내자식으로 추가하는데 html형식으로 추가하세요.
   $("부모선택자 또는 부모요소").append("추가할 자식 요소");
   $("추가할 자식 요소").appendTo("부모선택자 또는 부모요소");

   prepend함수들 : 추가할 요소를 해당 부모요소의 제일 처음 요소로 html형식으로 추가하세요.
   $("부모선택자 또는 부모 요소").prepend("추가할 자식요소") 
   $("추가할 자식요소").prependTo("부모선택자 또는 부모 요소") 
*/
$(function () {
    let fruits = ["apple", "banana", "orange", "melon"];
    // fruits.forEach(function (obj, idx) { //javaScript 일때
    //     let list = document.createElement("li");
    //     list.innerText = obj;
    //     document.getElementById('fruit_list').append(list);
    // });

    // $.each(fruits, function (index, value) {
    //     $("#fruit_list").append($("<li>" + value + "</li>"));
    //     $("<li>" + value + "</li>").appendTo("#fruit_list");
    // });

    // $(fruits).each(function (index, value) {
    //    $("#fruit_list").append($("<li>" + value + "</li>"));
    // });

    // fruits.forEach(function (obj, idx) {
    //    let stdlist = document.querySelector("#fruit_list li");
    //    let newlist = document.createElement("li");
    //    newlist.innerText = obj;
    //    document.getElementById('fruit_list').insertBefore(newlist, stdlist);
    // });

    // $.each(fruits, function (index, value) {
    //    $("#fruit_list").prepend($("<li>" + value + "</li>"));
    // });

    let cars = ["sonata", "grandure", "genesis"];
    $.each(cars, function (index, value) {
        // $("<li>" + value + "</li>").appendTo("#car_list");
        // $("#car_list").append("<li>" + value + "</li>");
    });

    $.each(cars, function (index, value) {
       $("<li>" + value + "</li>").prependTo("#car_list");
    });

});