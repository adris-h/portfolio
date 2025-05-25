
// GLOBAL VAR TO STORE WHERE THE CONTACT SECTION STARTS
let contactPosition;
function setContactPosition() {
    const vh = window.innerHeight;
    const offset = vh * 0.5;

    const contact = document.getElementById("contact-section");

    if (contact) {
        contactPosition = contact.getBoundingClientRect().top + window.scrollY - offset;
    }
}

// ADD/REMOVE "ACTIVE" CLASS BASED ON THE SCROLL POSITION
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

// INITIALIZE CONTACT POSITION ON PAGE LOAD AND WINDOW RESIZE
window.addEventListener('DOMContentLoaded', setContactPosition);
window.addEventListener('resize', setContactPosition);
window.addEventListener('load', setContactPosition);

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".wrapper > div").forEach((section, i) => {
    ScrollTrigger.create({
        trigger: section,
        start: "center-=100% center",
        end: "center center",
        snap: {
            snapTo: 1,
            duration: 0.5,
            delay: 0,
            ease: "power4.inOut"
        },
        markers: false
    });
});


const sections = gsap.utils.toArray(".wrapper > div");

// FADE IN/OUT  SECTIONS WITH SCROLLING
sections.forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => gsap.to(section, { opacity: 1, duration: 0.5, ease: "power2.out" }),
    onEnterBack: () => gsap.to(section, { opacity: 1, duration: 0.5, ease: "power2.out" }),
    onLeave: () => gsap.to(section, { opacity: 0.2, duration: 0.5, ease: "power2.out" }),
    onLeaveBack: () => gsap.to(section, { opacity: 0.2, duration: 0.5, ease: "power2.out" })
  });
  section.style.opacity = 0.1;
});
