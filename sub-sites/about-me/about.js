



document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
    });

    gsap.registerPlugin(ScrollTrigger); // GET THE PLUGIN SCROLL TRIGGER

    ScrollTrigger.matchMedia({
        "(orientation: landscape)": function() {
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#main-section",
                    start: "top top",
                    end: "+=100%", // 1 SCREEN WORTH OF SCROLL
                    pin: true,
                    scrub: 1,
                    snap: {
                        snapTo: [0, 0.25, 0.5, 0.75, 1], // SNAP TO EACH QUARTER (EACH i ELEMENT)
                        duration: 1.5,
                        ease: "power2.inOut",
                        delay: 0.1
                    }
                }
            })
                .to("#i1", {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut"
                })
                .to("#i2", {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut"
                })

                .to("#i3", {

                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut"
                });
        }
    })

});

