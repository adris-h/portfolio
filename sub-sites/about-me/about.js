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

    const info1 = document.getElementById("i1");
    const info2 = document.getElementById("i2");
    const info3 = document.getElementById("i3");
    let infoPos1, infoPos2, infoPos3;
    function getScrollPosition() {
        const vh = window.innerHeight;
        const offset = vh * 0.5;

        if (info1){
            infoPos1 = info1.getBoundingClientRect().top + window.scrollY - offset;
        }
        if (info2){
            infoPos2 = info2.getBoundingClientRect().top + window.scrollY - offset;
        }
        if (info3){
            infoPos3 = info3.getBoundingClientRect().top + window.scrollY - offset;
        }
    }

    getScrollPosition();
    setTimeout(getScrollPosition, 100);

    window.addEventListener('resize', getScrollPosition);
    window.addEventListener('load', getScrollPosition);

    window.addEventListener('scroll', () => {
        const currentPosition = window.scrollY;





        if (currentPosition >= infoPos3) {
            info3.classList.add("active");

        } else if (currentPosition >= infoPos2) {
            info3.classList.remove("active");
            info2.classList.add("active");
        } else if (currentPosition >= infoPos1) {
            info1.classList.add("active");
            info2.classList.remove("active");
        } else{
            info1.classList.remove("active");
        }
    });


});

