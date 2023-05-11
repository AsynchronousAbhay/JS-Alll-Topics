gsap.from(".page_1 h1", {
    opacity:0,
    duration:2,
})


gsap.from(".page_2 h1", {
    opacity:0,
    scale:0,
    duration:1.5,
    scrollTrigger:{
        trigger:".page_2 h1",
        scroller:"body",
        markers:true,
        start:"top 60%"
    }
    
    // scrollTrigger: ".page_2 h1"   :::---> this is the way to apply scrolltrigger....
})
