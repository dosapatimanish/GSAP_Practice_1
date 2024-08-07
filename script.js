// gsap.to("#box",{
//     x: 1000,
//     duration: 2, // in seconds
//     delay: 1, // in seconds
//     rotate:360, // in degrees
//     backgroundColor: "blue",
//     borderRadius:"50%",
//     scale:0.5
// });

// gsap.from ("#box2",{
//     x:1000,
//     duration:2,
//     delay:1
// })

// gsap.from("h1",{
//     // color:"red",
//     opacity:0,
//     duration:2,
//     y:30,
//     delay:1,
//     stagger:0.3 // one by one will come
// })

// gsap.to("#box",{
//     x:1000,
//     duration:1,
//     delay:1,
//     rotate:360,
//     repeat:1,
//     yoyo:true,
//     borderRadius:"50%",
// })

// gsap.to("#box1",{
//     x:1000,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })

// gsap.to("#box2",{
//     x:1000,
//     backgroundColor:"yellow",
//     duration:1.5,
//     delay:2.5
// })

// gsap.to("#box3",{
//     x:1000,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4
// })

// var tl= gsap.timeline();

// tl.to("#box1",{
//     x:1000,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })

// tl.to("#box2",{
//     x:1000,
//     duration:1.5
// })

// tl.to("#box3",{
//     x:1000,
//     duration:1.5
// })

var tl=gsap.timeline();

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:0.3,
    delay:0.1
})

tl.from("h4",{
    y:-20,
    opacity:0,
    duration:0.3,
    delay:0.1,
    stagger:0.2
})

tl.from("h1",{
    y:20,
    opacity:0,
    duration:0.5,
    delay:0.5,
    scale:0
})