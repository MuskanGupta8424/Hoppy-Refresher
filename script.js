gsap.registerPlugin(ScrollTrigger);
var tl =gsap.timeline();

tl.to("#main #hrpy",{
    scrollTrigger:{
        trigger:"#hrpy",
        start:"+=30%",
        pin:true,
        end:"+=390%",
        scrub:3
    },
    scale:.7,
    rotate:0,
    ease:Expo.easeIn
})
tl.to("#navbar",{
ease:Expo.easeIn,
stagger:1,
    opacity:1
})
.to("#heading h1",{
    ease:Expo.easeIn,
    stagger:.2,
        opacity:1
    })

.to(".btl .b",{
    scrollTrigger:{
        trigger:".b",
        start:"-=100%",
        pin:true,
        scrub:1,
        end:"-=100%"
    },
    y:-100

})
.to(".btl .c",{
    scrollTrigger:{
        trigger:".c",
        start:"-=100%",
        pin:true,
        scrub:2,
        end:"-=100%"
    },
    y:-140

})
.to(".btl .d",{
    scrollTrigger:{
        trigger:".d",
        start:"-=100%",
        pin:true,
        scrub:1,
        end:"-=100%"
    },
    y:-200,

})
.to(".btl .e",{
    scrollTrigger:{
        trigger:".e",
        start:"-=100%",
        pin:true,
        scrub:1,
        end:"-=100%"
    },
    y:-170

})