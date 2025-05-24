document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    let mainTimeline;

    function initScrollTrigger() {

        ScrollTrigger.getAll().forEach(trigger => trigger.kill());


        if (mainTimeline) {
            mainTimeline.kill();
        }

        ScrollTrigger.matchMedia({
            "(orientation: landscape)": function() {
                mainTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#main-section",
                        start: "top top",
                        end: "+=100%",
                        pin: true,
                        scrub: 1,
                        snap: {
                            snapTo: [0, 0.25, 0.5, 0.75, 1],
                            duration: 1.5,
                            ease: "power2.inOut",
                            delay: 0.1
                        },
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
            },
            "(orientation: portrait)": function() {
                initManualScrollHandling();
            }
        });
    }


    function initManualScrollHandling() {
        const info1 = document.getElementById("i1");
        const info2 = document.getElementById("i2");
        const info3 = document.getElementById("i3");
        const videos = document.getElementById("vides");
        let infoPos1, infoPos2, infoPos3, videosPos;

        function getScrollPosition() {
            const vh = window.innerHeight;
            const offset = vh * 0.5;

            if (info1) {
                infoPos1 = info1.getBoundingClientRect().top + window.scrollY - offset;
            }
            if (info2) {
                infoPos2 = info2.getBoundingClientRect().top + window.scrollY - offset;
            }
            if (info3) {
                infoPos3 = info3.getBoundingClientRect().top + window.scrollY - offset;
            }
        }

        function infoScrolls() {
            const currentPosition = window.scrollY;

            if (currentPosition >= infoPos3) {
                info3.classList.add("active");
                info2.classList.remove("active");
                info1.classList.remove("active");
            } else if (currentPosition >= infoPos2) {
                info3.classList.remove("active");
                info2.classList.add("active");
                info1.classList.remove("active");
            } else if (currentPosition >= infoPos1) {
                info1.classList.add("active");
                info2.classList.remove("active");
                info3.classList.remove("active");
            } else {
                info1.classList.remove("active");
                info2.classList.remove("active");
                info3.classList.remove("active");
            }
        }

        window.removeEventListener('scroll', infoScrolls);

        getScrollPosition();
        window.addEventListener('scroll', infoScrolls);

        window.addEventListener('resize', () => {
            setTimeout(getScrollPosition, 100);
        });
    }

    initScrollTrigger();

    let resizeTimeout;
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            ScrollTrigger.refresh();
            initScrollTrigger();
        }, 250);
    }


    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', () => {

        setTimeout(() => {
            handleResize();
        }, 500);
    });

    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 1000);


    const videos = document.getElementById('videos');
    const bassSection = document.getElementById('bass-section');
    let videosPos, bassPos;
    function setSectionPositions(){
        const vh = window.innerHeight;
        const offset = vh * .5;

        if (videos) {
            videosPos = videos.getBoundingClientRect().top + window.scrollY - offset;
        }
        if (bassSection) {
            bassPos = bassSection.getBoundingClientRect().top + window.scrollY - offset;
        }

    }

    setSectionPositions();
    setTimeout(setSectionPositions, 100);
    window.addEventListener('resize', setSectionPositions);
    window.addEventListener('load', setSectionPositions);


    window.addEventListener("scroll",  () => {
        const currentPosition = window.scrollY;

        if (currentPosition > bassPos) {
            bassSection.classList.add("active");
            console.log("pos reached")
        } else if (currentPosition >  videosPos) {
            videos.classList.add("active");
            bassSection.classList.remove("active");
        } else{
            videos.classList.remove("active");
        }
    });
});