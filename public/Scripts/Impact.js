
// Locomotive Code
/*
gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
*/

//GSAP Code for Rotating Element
setTimeout(() => {
    gsap.to(".rotating-floating", {
        rotate: -12,
        scrollTrigger: {
            delay: 2,
            trigger: ".rotating-floating",
            scroller: 'body',
            // markers: true,
            start: "top 50%",
            end: "top 10%",
            scrub: 2
        }
    })
}, LoaderTime + 0.5)

