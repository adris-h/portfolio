

//  ENSURE DOM IS FULLY LOADED BEFORE DOING ANYTHING
document.addEventListener('DOMContentLoaded', () => {

    // GET GSAP PLUGIN SCROLLTRIGGER
    gsap.registerPlugin(ScrollTrigger);


    // BARIABLE THAT HOLDS THE MAIN GSAP TIMELINE
    let mainTimeline;

    // BASED ON THE SCREEN ORIENTATION - INITIALIZES SCROLLTRIGGER INSTANCES
    function setupScrollTrigger() {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());


        // KILLS ANY EXISTING TIMELINE
        if (mainTimeline) {
            mainTimeline.kill();
        }

        ScrollTrigger.matchMedia({
            // FOR LANDSCAPE
            "(orientation: landscape)": function() {
                mainTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#main-section", // THE SECTION THAT TRIGGERS THE SCROLL ANIMATION
                        start: "top top", // ANIMATION STARTS WHEN THE TOP OF THE TRIGGER HITS THE TOP OF THE SCREEN
                        end: "+=100%", // IT LASTS FOR THE HEIGHT OF THE TRIGGER
                        pin: true, // ESCTION IS PINNED WHILE SCROLLING
                        scrub: 1, // SMOOTH ANIMATION
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
                // IF THE ORIENTATION IS PORTRAIT THEN MANUAL SCROLLING IS SET UP - NO GSAP ANIMATION
                manualScrolling();
            }
        });
    }


    // THIS IS FOR WHEN GSAP IS NOT PINNING AND STUFF
    function manualScrolling() {
        const info1 = document.getElementById("i1");
        const info2 = document.getElementById("i2");
        const info3 = document.getElementById("i3");

        const par1 = document.getElementById("p1");
        const par2 = document.getElementById("p2");
        const par3 = document.getElementById("p3");


        // DECLARING VARIABLES FOR THE #i POSITIONS
        let infoPos1, infoPos2, infoPos3, parPos1, parPos2, parPos3;

        // FINDING POSITIONS WITH OFFSET
        function getScrollPosition() {
            const vh = window.innerHeight;
            const offset = vh * 0.5; // MIDDLE OF THE SCREEN

            if (info1) {
                infoPos1 = info1.getBoundingClientRect().top + window.scrollY - offset;
            }
            if (info2) {
                infoPos2 = info2.getBoundingClientRect().top + window.scrollY - offset;
            }
            if (info3) {
                infoPos3 = info3.getBoundingClientRect().top + window.scrollY - offset;
            }

            if (par1) {
                parPos1 = par1.getBoundingClientRect().top + window.scrollY - offset;
            }
            if (par2) {
                parPos2 = par2.getBoundingClientRect().top + window.scrollY - offset;
            }
            if (par3) {
                parPos3 = par3.getBoundingClientRect().top + window.scrollY - offset;
            }

            console.log("Calculated Positions (par):", {
                parPos1,
                parPos2,
                parPos3
            });

        }

        // THIS FUNCTION CHECKS SCROLL POSITION AND ADD/REMOVES "ACTIVE" CLASSES
        function infoScrolls() {
            const currentPosition = window.scrollY;

            if (currentPosition >= infoPos3) {
                // IF WE'RE PAST THE THIRD INFO SECTION
                info3.classList.add("active"); // MAKE IT ACTIVE
                info2.classList.remove("active"); // DEACTIVATE
                info1.classList.remove("active"); // DEACTIVATE
            } else if (currentPosition >= infoPos2) {
                // IF WE'RE PAST THE SECOND INFO SECTION
                info3.classList.remove("active"); // DEACTIVATE
                info2.classList.add("active"); // MAKE IT ACTIVE
                info1.classList.remove("active"); // DEACTIVATE
            } else if (currentPosition >= infoPos1) {
                // IF WE'RE PAST THE FIRST INFO SECTION
                console.log("info1 active")
                info1.classList.add("active"); // MAKE IT ACTIVE
                info2.classList.remove("active"); // DEACTIVATE
                info3.classList.remove("active"); // DEACTIVATE
            } else {
                // IF WE'RE NOT PAST ANY OF THEM, DEACTIVATE EVERYTHING
                info1.classList.remove("active");
                info2.classList.remove("active");
                info3.classList.remove("active");
            }
        }

        function bassParScrolls() {
            const currentPosition = window.scrollY;

            if (currentPosition >= parPos3) {
                par3.classList.add("active");
                par2.classList.remove("active");
                par1.classList.remove("active");
            } else if (currentPosition >= parPos2) {
                par3.classList.remove("active");
                par2.classList.add("active");
                par1.classList.remove("active");
            } else if (currentPosition >= parPos1) {
                par1.classList.add("active");
                par2.classList.remove("active");
                par3.classList.remove("active");
            } else {
                par1.classList.remove("active");
                par2.classList.remove("active");
                par3.classList.remove("active");
            }
        }

        // REMOVE ANY OLD SCROLL LISTENERS TO PREVENT DUPLICATES
        window.removeEventListener('scroll', infoScrolls);
        getScrollPosition(); // GET THE INITIAL POSITIONS
        window.addEventListener('scroll', infoScrolls); // START LISTENING FOR SCROLLS

        window.addEventListener('DOMContentLoaded', infoScrolls);
        window.addEventListener('resize', infoScrolls);
        window.addEventListener('load', infoScrolls);

        window.removeEventListener('scroll', bassParScrolls);
        getScrollPosition();
        window.addEventListener('scroll', bassParScrolls);

        window.addEventListener('resize', () => {
            // IF THE WINDOW RESIZES, RECALCULATE POSITIONS AFTER A BIT
            setTimeout(getScrollPosition, 100);
        });
        window.addEventListener('DOMContentLoaded', getScrollPosition);
        window.addEventListener('resize', getScrollPosition);
        window.addEventListener('load', getScrollPosition);

    }

    setupScrollTrigger(); // KICK OFF SCROLLTRIGGER WHEN THE PAGE LOADS

    let resizeTimeout;
    function rezizePlease() {
        // THIS FUNCTION HANDLES WINDOW RESIZES
        clearTimeout(resizeTimeout); // CLEAR ANY PREVIOUS RESIZE TIMEOUTS
        resizeTimeout = setTimeout(() => {
            ScrollTrigger.refresh(); // REFRESH SCROLLTRIGGER
            setupScrollTrigger(); // RE-INITIALIZE SCROLLTRIGGER TO PICK UP NEW ORIENTATION
        }, 250); // WAIT A BIT BEFORE DOING IT
    }


    window.addEventListener('resize', rezizePlease); // LISTEN FOR WINDOW RESIZES

    // IF THE DEVICE CHANGES ORIENTATION
    window.addEventListener('orientationchange', () => {

        // DO THE RESIZE FUNCTION AFTER A SMALL DELAY
        setTimeout(() => {
            rezizePlease();
        }, 500);
    });

    // REFRESH SCROLLTRIGGER AFTER A BIT TO MAKE SURE EVERYTHING IS SET UP
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 1000);



    const videos = document.getElementById('videos');
    const bassSection = document.getElementById('bass-section');
    let videosPos, bassPos;

    // GET THE POSITIONS OF THE VIDEOS AND BASS SECTIONS
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

    // SET POSITIONS ON LOAD
    setSectionPositions();
    setTimeout(setSectionPositions, 100); // SET AGAIN AFTER A SMALL DELAY JUST TO BE SURE
    window.addEventListener('resize', setSectionPositions); // UPDATE ON RESIZE
    window.addEventListener('load', setSectionPositions); // UPDATE ON LOAD



    // LISTEN FOR SCROLLS TO ADD "ACTIVE" CLASSES TO VIDEOS AND BASS SECTIONS
    function showContent(){
        const currentPosition = window.scrollY;

        if (currentPosition > bassPos) {
            bassSection.classList.add("active");
            console.log("pos reached") // FOR DEBUGGING
        } else if (currentPosition >  videosPos) {
            videos.classList.add("active");
            bassSection.classList.remove("active");
        } else{
            videos.classList.remove("active");
        }
    }

    window.addEventListener('DOMContentLoaded', showContent);
    window.addEventListener('scroll', showContent);
    window.addEventListener('resize', showContent);
    window.addEventListener('load', showContent);
});

let contactPosition;
function setContactPosition() {
    const vh = window.innerHeight;
    const offset = vh * 0.5;

    const contact = document.getElementById("contact-section");

    if (contact) {
        contactPosition = contact.getBoundingClientRect().top + window.scrollY - offset;
    }
}

window.addEventListener("scroll", function() {
    const currentPosition = window.scrollY;
    const contactSection = document.querySelector(".contact__container");
    if (currentPosition < contactPosition) {
        console.log("currentPosition", currentPosition);
        contactSection.classList.remove("active");
    } else {
        contactSection.classList.add("active");
    }
})

window.addEventListener('DOMContentLoaded', setContactPosition);
window.addEventListener('resize', setContactPosition);
window.addEventListener('load', setContactPosition);
