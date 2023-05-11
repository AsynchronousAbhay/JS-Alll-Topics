const btn = document.querySelector("button");
const stats = document.querySelector("#status");
const grow = document.querySelector("#grow");

var val = 0;

btn.addEventListener("click", function(){
    if(val===0){
        stats.innerHTML = "Pending...";
        stats.style.color = "white";
        setTimeout(function(){
            btn.innerHTML = "Unfollow";
            stats.innerHTML = "Friends";
            stats.style.color =  "green";
            val = 1;    
        } ,2000)
    }
    else{
        stats.innerHTML = "lOADING...";
        stats.style.color = "white";
        setTimeout(function(){
            btn.innerHTML = "Follow";
            stats.innerHTML = "Unkown";
            stats.style.color =  "red";
            val = 0;    
        } ,2000)
    }
     
})


btn.addEventListener("click",function(){
    if(val===0){
        setTimeout(function(){
            grow.style.width = "100%";
            val = 1;
        },2000)
        
    }else{
        grow.style.width = "0%";
        val = 0;
    }
})