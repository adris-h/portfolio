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

// CURRENT DATE AND TIME
window.addEventListener('DOMContentLoaded', () => {
    function updateTimeUTCPlus2() {
        const now = new Date();

        const options = {
            timeZone: 'Europe/Prague',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        };
        const formatter = new Intl.DateTimeFormat('cs-CZ', options);
        const formatted = formatter.format(now).replace(',', '');
        const isoString = now.toISOString();
        const timeEl = document.getElementById('current-time');
        if (timeEl) {
            timeEl.textContent = formatted;
            timeEl.setAttribute('datetime', isoString);
        }
    }

    updateTimeUTCPlus2();
    setInterval(updateTimeUTCPlus2, 60000);
});


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
