
//  WAIT TILL THE SITE IS LOADED
document.addEventListener('DOMContentLoaded', function() {

    gsap.registerPlugin(ScrollTrigger); // GET THE PLUGIN SCROLL TRIGGER

    // TIMELINE OF THE WHOLE ANIMATION
    gsap.timeline({
        scrollTrigger: {
            trigger: "#hero-section", // WATCH THIS ELEMENT
            start: "top top", // START WHEN THE TRIGGER IS AT THE TOP TOP OF THE SCREEN
            end: "+=100%", // KEEP WATCHING FOR A WHOLE SCREENS WORTH OF SCROLL

            // ENSURE SNAPPING IF SCROLLED WEIRD
            snap: {
                snapTo: 1, // SNAP HARD
                duration: 2, // MAKE IT LAST 2 SECONDS
                delay: 0, // DONT WAIT
                ease: "power4.inOut" // EASE IN AND OUT
            },
            pin: true, // "GLUE" THE SECTION IN PLACE WHILE SCROLLING
            scrub: 1, // SYNC SCROLL WITH THE ANIMATION
        }
    })


        // BRING THE ELEMENT IN
        .to("#i1", {
            x: "0%", // HORIZONTAL TRANSFORM
            scale: 1, // MAKE IT BIGGER
            opacity: 1, // MAKE IT VISIBLE
            duration: 1, // MAKE IT LAST 1 SECOND
            ease: "power2.inOut" // EASE IN AND OUT
        }, "<"); // DO IT AT THE SAME TIME AS THE THING ABOVE


    let workPosition; // CREATE A VARIABLE
    const work = document.querySelector(".other-work-section");

    function getScrollPositions() {
        const vh = window.innerHeight; // VH - HEIGHT OF THE SCREEN
        const offset = vh * 0.7; // AN OFFSET
        const currentPosition = window.scrollY; // CURRENT SCROLL POSITION

        // FIND WHAT POSITION IS THE SECTION AND BRING IT (THE POSITION) UP BY THE OFFSET
        if (work) {
            workPosition = work.getBoundingClientRect().top + currentPosition - offset;
            console.log('workPosition calculated:', workPosition);
        }
    }

    getScrollPositions(); // CALL FUNCTION
    setTimeout(getScrollPositions, 100); // CALL IT AGAIN FOR SAFETY

    // BASED ON THE POSITION DO SOMETHING ( ADD CLASS )
    window.addEventListener('scroll', function() {
        const currentPosition = window.scrollY;
        console.log('currentPosition:', currentPosition);
        if (workPosition && currentPosition >= workPosition) {
            work.classList.add('active');
            //console.log("work class added");
        } else {
            work.classList.remove('active');
            //console.log("work class removed");
        }
    });

    // IF SCREEN IS RESIZED - CHECK POSITIONS AGAIN
    window.addEventListener('resize', getScrollPositions);
});