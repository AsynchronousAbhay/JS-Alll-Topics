var arr = [
    { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" },
    { img: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
]

var clutter = "";
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.img}" alt="">
</div>`
})

document.querySelector("#stories").innerHTML = clutter;


var grow = 0;

document.querySelector("#stories").addEventListener("click", function (dets) {
    document.querySelector("#full-scr").style.display = `initial`;
    document.querySelector("#full-scr").style.backgroundImage = `url(${arr[dets.target.id].img})`;
    if (grow <= 100) {
        setInterval(function () {
            document.querySelector("#growth").style.width = `${grow}%`;
            grow = grow + 1;
        }, 40)
    }
    else {
        grow = 0;
    }

    setTimeout(function () {
        document.querySelector("#full-scr").style.display = `none`;
    }, 4000)

})
