gsap.registerPlugin(ScrollTrigger);

console.log("GSAP and ScrollTrigger initialized");

gsap.to(".square", {
    x: () => window.innerWidth - 100,
    scrollTrigger: {
        trigger: ".scroll-animation",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        markers: true,
        invalidateOnRefresh: true
    }
});