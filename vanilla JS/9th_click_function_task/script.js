const menu = document.querySelector(".menu");
const menu_overlay = document.querySelector(".overlay");
const cross = document.querySelector(".cross");


menu.addEventListener("click", function(){
    menu_overlay.style.transform = "translate(0%)";
});


cross.addEventListener("click", function(){
    menu_overlay.style.transform = "translatex(100%)";
});
