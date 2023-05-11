var arr = [
    {name:"Angel priya", bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorem voluptates in nisi saepe assumenda",stats:"stanger"},
    {name:"devil prakash", bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorem voluptates in nisi saepe assumenda",stats:"stanger"},
    {name:"chhapree", bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorem voluptates in nisi saepe assumenda",stats:"stanger"}
]

function show (){

    var clutter = "";

arr.forEach(function(elem,idx){
    clutter  += ` <div id="card">
    <h1>${elem.name}</h1>
    <p>${elem.bio}</p>
    <h3>${elem.stats}<h3>
    <button id="${idx}">Add friends</button>
</div>`;
})

document.querySelector("#main").innerHTML = clutter;

}

show()
// console.log(arr)

var val = 0;

document.querySelector("#main").addEventListener("click", function(dets){
    // console.log(dets.target.id)

    if(val===0){
        arr[dets.target.id].stats = "friends"; 
        val = 1;
        show()
    }
    else{
        arr[dets.target.id].stats = "unfriend"; 
        val = 0;
        show()     
    }
})






