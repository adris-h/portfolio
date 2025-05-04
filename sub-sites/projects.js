const projectsTitle = document.querySelectorAll('.projects-hero__title');
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
        start: "top-=300 top",
        end: "+=300%",
        pin: false,
        scrub: .5,
    }
})
    .to(".projects-section__line", {
        height: "100rem",
        duration: 1,
        ease: "power2.out"
    })