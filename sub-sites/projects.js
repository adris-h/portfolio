const projectTitles = document.querySelectorAll('.projects-hero__title');

projectTitles.forEach(title => {
    title.addEventListener('mouseover', () => {
        projectTitles.forEach(t => t.classList.add('hovered'));
        console.log("hovered");
    });

    title.addEventListener('mouseout', () => {
        projectTitles.forEach(t => t.classList.remove('hovered'));
    });
});



gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
    scrollTrigger: {
        trigger: "#projects-section",
        start: "top-=100 top",
        end: "+60%",
        pin: false,
        scrub: 1
    }
})
    .to(".projects-section__line", {
        height: "70rem",
        duration: 1,
        ease: "power2.out",
    })
//
window.addEventListener("scroll", (e) => {
    const currentPos = window.scrollY;
    const vh = window.innerHeight;
    const animFinalPos = vh * 2;
    if (currentPos > animFinalPos) {
        document.querySelector(".projects-section__timeline-final-date").classList.add("finished");
    }
})

const menuButton = document.querySelector('#menu-toggle');
const popupMenu = document.querySelector('.popup-menu');
menuButton.addEventListener('click', () => {
    popupMenu.classList.toggle('active');
})


document.querySelectorAll('.popup-menu a').forEach(anchor => {
    anchor.addEventListener('mouseenter', () => {
        document.querySelectorAll('.popup-menu a').forEach(other => {
            if (other !== anchor) {
                other.classList.add('inactive');
            }
        });
    });

    anchor.addEventListener('mouseleave', () => {
        document.querySelectorAll('.popup-menu a').forEach(other => {
            other.classList.remove('inactive');
        });
    });
});