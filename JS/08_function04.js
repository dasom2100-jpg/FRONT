var color = ["red", "blue", "green", "yellow", "purple"];
var i =0;

function changeColor(){
   
    i++;
    if(i >= color.length) i = 0;
    
var bgColor = document.getElementById("bgColor");
    bgColor.style.backgroundColor = color[i];
}