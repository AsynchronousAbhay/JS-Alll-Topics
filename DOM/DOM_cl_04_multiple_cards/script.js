var arr = [
    {name:"love pari",bio:"photograph lover, ziddy, model, papa ke udantashtaree",stats:"stranger"},
    {name:"devil prakash",bio:"photographer, single but not available, papa ka magarmuch",stats:"stranger"},
    {name:"Angel riya", bio:" wish me on 30 Feb, Papa ki pari", stats:"Stranger"},
    {name:"misuniverse", bio:"wish me on 12 aug, Papa ki pari", stats:"Stranger"},
    {name:"Angel priti", bio:"wish me on 12 aug, Papa ki pari", stats:"Stranger"},
    {name:"Angel rita", bio:"wish me on 12 aug, Papa ki pari", stats:"Stranger"},
    {name:"Angel kriti", bio:"wish me on 12 aug, Papa ki pari", stats:"Stranger"},
    {name:"Angel jiya", bio:"wish me on 12 aug, Papa ki pari", stats:"Stranger"},
]
// console.log(arr[0].name)

var clutter = "";

arr.forEach(function(data){
    clutter += `<div id="card">
    <h1>${data.name}</h1>
    <p>${data.bio}</p>
    <h5>${data.stats}</h5>
    <button>Add friends</button>
</div>` 
})

document.querySelector("#main").innerHTML = clutter;

