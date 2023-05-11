const bulb = document.querySelector("#bulb");
const btn = document.querySelector("button");

var press = 0;

btn.addEventListener("click", function(){
    if(press === 0){
        bulb.style.backgroundColor = "blue";
        press = 1;
    }
    else{
        bulb.style.backgroundColor = "transparent";
        press = 0;
    }
})
