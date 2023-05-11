var arr = [
    {image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name: "dakku", bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus quod fugiat quasi, iusto suscipit!",stats:"stranger", btn:"Add friend"},
    {image:"https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name: "badboy", bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus quod fugiat quasi, iusto suscipit!",stats:"stranger",btn:"Add friend"},
    {image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name: "pappu", bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim minus quod fugiat quasi, iusto suscipit!",stats:"stranger",btn:"Addfriend"}
]

function show(){
    var clutter = "";

arr.forEach(function(elem,idx){
   clutter += `<div id="card">
   <img src="${elem.image}" alt="">
   <h1>${elem.name}</h1>
   <p>${elem.bio}</p>
   <h3 class="${elem.stats}">${elem.stats}</h3>
   <button id="${idx}" class="${elem.btn}">${elem.btn}</button>
</div>`
})

document.querySelector(".main").innerHTML = clutter;

}

show()

var val = 0;
document.querySelector(".main").addEventListener("click", function(dets){
    if(val===0){
        arr[dets.target.id].stats = "friends";
        arr[dets.target.id].btn = "unfriend";
        show()
        val  = 1;
    }
    else{
        arr[dets.target.id].stats = "stranger";
        arr[dets.target.id].btn = "Add friend";
        show()
        val  = 0;        
    }
})
