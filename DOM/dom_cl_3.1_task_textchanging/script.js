const btn = document.querySelector("button");
const line1 = document.querySelector("#line_1");
const line2 = document.querySelector("#line_2");
const line3 = document.querySelector("#line_3");
const line4 = document.querySelector("#line_4");


var val  = 0;

btn.addEventListener("click", function(){
    if(val===0){
        line1.style.transform = "translate(0)";
        line1.style.color = "orange";
        setTimeout(function(){
        line2.style.transform = "translate(0)";
        line2.style.color = "white";
        }, 1000)
        setTimeout(function(){
        line3.style.transform = "translate(0)";
        line3.style.color = "green";
        }, 2000)
        setTimeout(function(){
        line4.style.transform = "translate(0)";
        line4.style.color = "blue";
        }, 3000)
        val = 1;
    }
    else{
        setTimeout(function(){
            line1.style.transform = "translate(-120%)";
        }, 4000)
        setTimeout(function(){
        line2.style.transform = "translate(-120%)"
        }, 3000)
        setTimeout(function(){
        line3.style.transform = "translate(-120%)"
        }, 2000)
        setTimeout(function(){
        line4.style.transform = "translate(-120%)"
        }, 1000)
        val = 0;
    }
    
})


const text = document.querySelector("#text");
const press = document.querySelector("#change_text");

var num = 0;

press.addEventListener("click", function(){
    if(num===0){
        setTimeout(function(){
            text.innerHTML = "M A H A D E V";
            text.style.color = "white";
        },2000)
        num = 1;
    }
    else{
        text.innerHTML = "HAR HAR.....";
        text.style.color = "black";
        num = 0;
    }
})