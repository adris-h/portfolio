const bigMenu = document.getElementById("menu");
const posSpan = document.querySelector('.navbar___position-span');

const mobileMenuButton = document.querySelector('.mobile-nav_menu-toggle--2');
const navBar = document.querySelector(".navbar");

const introHeading = document.querySelector('.intro_top-container h2');
const introSubheading = document.querySelector('.intro_top-container h3');
const introText = document.querySelector('.intro_bottom-container a');

const skillsHeading = document.querySelector('.skills__title');

const projectsAnim = document.querySelectorAll('#projects-section a');
const contactsAnim = document.querySelector('.contact__container');

const mobilePos = document.querySelector('.mobile-nav__position-span');

const changingText = document.querySelector('.about___changing-interests');

const projectImg1 = document.querySelector('.project_img-1');
const projectIcon1 = document.querySelector('.project_img-1 svg');
const projectText1 = document.querySelector('.project_img-1 p');
const projectImg2 = document.querySelector('.project_img-2');
const projectIcon2 = document.querySelector('.project_img-2 svg');
const projectText2 = document.querySelector('.project_img-2 p');

const projectsAnchor = document.querySelector('.a-projects a');

const copyButton = document.getElementById("copy-button");

const firstSkill = document.querySelector(".skill___item-1");
const secondSkill = document.querySelector(".skill___item-2");
const thirdSkill = document.querySelector(".skill___item-3");
const fourthSkill = document.querySelector(".skill___item-4");

const firstDescription = document.querySelector(".skills___skill-1-desc");
const secondDescription = document.querySelector(".skills___skill-2-desc");
const thirdDescription = document.querySelector(".skills___skill-3-desc");
const fourthDescription = document.querySelector(".skills___skill-4-desc");

const skillHolder = document.querySelector(".skills__right-container");

const interests = ["Development", "UX/UI", "Applications"];
const intervalTime = 1000;

window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// MENU BUTTON TOGGLE
mobileMenuButton.addEventListener('click', () => {
    bigMenu.classList.toggle('active');
    if (bigMenu.classList.contains('active')) {
        posSpan.textContent = 'menu';
    } else {
        window.dispatchEvent(new Event('scroll'));
    }
})
//

const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active'); // OR WHATEVER CLASS SHOWS THE MENU
    });
});


// DEFINED POSITIONS
let aboutmePosition, skillsPosition, projectsPosition, contactPosition;
function setSectionPositions(){
    const vh = window.innerHeight;
    const offset = vh * .5;

    const aboutme = document.getElementById('intro-section');
    const skills = document.getElementById('skills-section');
    const projects = document.getElementById('projects-section');
    const contact = document.getElementById('contact-section');

    if (aboutme) {
        aboutmePosition = aboutme.getBoundingClientRect().top + window.scrollY - offset;
    }
    if (skills) {
        skillsPosition = skills.getBoundingClientRect().top + window.scrollY - offset;
    }
    if (projects) {
        projectsPosition = projects.getBoundingClientRect().top + window.scrollY - offset;
    }
    if (contact) {
        contactPosition = contact.getBoundingClientRect().top + window.scrollY - offset;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    setSectionPositions();
    setTimeout(setSectionPositions, 100);
});
console.log({
    aboutmePosition,
    skillsPosition,
    projectsPosition,
    contactPosition
});
window.addEventListener('resize', setSectionPositions);
window.addEventListener('load', setSectionPositions);
//

window.addEventListener("scroll",  () => {
    const currentPosition = window.scrollY;
    if (currentPosition >= aboutmePosition) {
        navBar.classList.add("scrolled");
        if (currentPosition < skillsPosition) {
            posSpan.textContent = 'about me';

            introHeading.classList.add('active');
            introSubheading.classList.add('active');
            introText.classList.add('active');

            skillsHeading.classList.remove('active');
            skillsHeading.classList.add('inactive');

            setTimeout(() => {
                introText.classList.add('transition');
            }, 1000);

        } else if (currentPosition < projectsPosition) {
            posSpan.textContent = 'skills';

            skillsHeading.classList.remove('inactive');
            skillsHeading.classList.add('active');


            if (window.matchMedia("(min-width: 900px)").matches) {
                projectsAnim.forEach(link => link.classList.remove('active'));
                projectsAnim.forEach(link => link.classList.add('inactive'));
            }

        } else if (currentPosition < contactPosition) {
            posSpan.textContent = 'projects';

            contactsAnim.classList.remove('active');
            projectsAnchor.classList.remove('inactive');

            if (window.matchMedia("(min-width: 900px)").matches) {
                projectsAnim.forEach(link => link.classList.add('active'));
                projectsAnim.forEach(link => link.classList.remove('inactive'));
            }
        } else {
            posSpan.textContent = 'contact';
            projectsAnchor.classList.add('inactive');
            contactsAnim.classList.add('active');
        }
    } else {
        navBar.classList.remove("scrolled");
        posSpan.textContent = 'home';
        introHeading.classList.remove('active');
        introSubheading.classList.remove('active');
        introText.classList.remove('active');
        introText.classList.remove('transition');
    }
});
//

// -MOBILE POS
window.addEventListener("scroll", function() {
    if (bigMenu.classList.contains('active')) return;
    const currentPosition = window.scrollY;
    if (currentPosition > aboutmePosition) {
        if (currentPosition < skillsPosition) {
            mobilePos.textContent = 'about me';
        } else if (currentPosition < projectsPosition) {
            mobilePos.textContent = 'skills';
        } else{
            mobilePos.textContent = 'projects';
        }
    } else {
        mobilePos.textContent = 'home';
    }
});
//

// CHANGING TEXT

let i = 0;

function updateText() {
    changingText.textContent = interests[i];
    i = (i + 1) % interests.length;
}
updateText();
setInterval(updateText, intervalTime);


// PROJECTS SHOWCASE ANIMATION


projectImg1.addEventListener('mouseover', () => {
    projectIcon1.classList.add('active');
    projectText1.classList.add('active');
})

projectImg1.addEventListener('mouseout', () => {
    projectIcon1.classList.remove('active');
    projectText1.classList.remove('active');
})


projectImg2.addEventListener('mouseover', () => {
    projectIcon2.classList.add('active');
    projectText2.classList.add('active');
})

projectImg2.addEventListener('mouseout', () => {
    projectIcon2.classList.remove('active');
    projectText2.classList.remove('active');
})
//


// COPY EMAIL

copyButton.addEventListener('click', () =>{
    const email = "adrianahanouskova2007@gmail.com"
    navigator.clipboard.writeText(email);
});



// SKILLS SECTION - HOVER - DESCRIPTIONS


firstSkill.addEventListener('mouseover', () => {
    skillHolder.classList.add('active');

    firstDescription.classList.add('active');
    secondDescription.classList.remove('active');
    thirdDescription.classList.remove('active');
    fourthDescription.classList.remove('active');

    secondSkill.classList.add('inactive');
    thirdSkill.classList.add('inactive');
    fourthSkill.classList.add('inactive');
    firstSkill.classList.remove('inactive');
});

secondSkill.addEventListener('mouseover', () => {
    skillHolder.classList.add('active');

    secondDescription.classList.add('active');
    firstDescription.classList.remove('active');
    thirdDescription.classList.remove('active');
    fourthDescription.classList.remove('active');

    firstSkill.classList.add('inactive');
    thirdSkill.classList.add('inactive');
    fourthSkill.classList.add('inactive');
    secondSkill.classList.remove('inactive');
});

thirdSkill.addEventListener('mouseover', () => {
    skillHolder.classList.add('active');

    thirdDescription.classList.add('active');
    secondDescription.classList.remove('active');
    firstDescription.classList.remove('active');
    fourthDescription.classList.remove('active');

    secondSkill.classList.add('inactive');
    firstSkill.classList.add('inactive');
    fourthSkill.classList.add('inactive');
    thirdSkill.classList.remove('inactive');
});

fourthSkill.addEventListener('mouseover', () => {
    skillHolder.classList.add('active');

    fourthDescription.classList.add('active');
    secondDescription.classList.remove('active');
    thirdDescription.classList.remove('active');
    firstDescription.classList.remove('active');


    secondSkill.classList.add('inactive');
    thirdSkill.classList.add('inactive');
    firstSkill.classList.add('inactive');
    fourthSkill.classList.remove('inactive');
});
//

// HERO SECTION ANIMAITON WITH GSAP
if (window.getComputedStyle(document.getElementById("hero-section")).display !== "none") {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: 0.5,

            toggleClass: { targets: "#hero-section", className: "animated" },
        }
    })
        .to("#hero-section h1", {
            scale: 0.5,
            x: "-25vw",
            y: "5vh",
            duration: 1,
            ease: "power2.out"
        })
        .to(".hero_bcg-line", {
            x: "-125%",
            duration: 1,
            rotate: 45,
            ease: "power2.out"
        }, "<")
        .to('.hero_right-container', {
            x: 0,
            duration: 1,
            ease: "power2.out"
        }, "<")
        .to('.hero_left-container', {
            x: 0,
            duration: 1,
            ease: "power2.out"
        }, "<")
}
//
