var menu = document.querySelector(".menu")
var screen = document.querySelector(".screen")
var line1 = document.querySelector(".line1")
var line2 = document.querySelector(".line2")
var line3 = document.querySelector(".line3")

var flag = 0
menu.addEventListener("click", function(){
    if (flag === 0){
    // nav.style.top = 0
    line1.style.transform = "rotate(40deg)"
    line2.style.opacity = 0
    line3.style.transform = "rotate(-40deg)"
    screen.style.transform = "translatex(100%)";
    flag = 1}
    else{
            line1.style.transform = "rotate(0)"
            line2.style.opacity = 1
            line3.style.transform = "rotate(0)"
            screen.style.transform = "translatex(200%)";
            flag =0; 
    }
})