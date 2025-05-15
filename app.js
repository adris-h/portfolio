/*const modeToggleButton = document.querySelector('.mode-toggle');
const bodyElement = document.body;
const darkButton = document.querySelector("#dark")
const lightButton = document.querySelector("#dark")

modeToggleButton.addEventListener('click', () => {
    if (bodyElement.classList.contains('light-mode')) {
        bodyElement.classList.remove('light-mode');
        bodyElement.classList.add('dark-mode');
        modeToggleButton.textContent = 'light mode';
    } else {
        bodyElement.classList.remove('dark-mode');
        bodyElement.classList.add('light-mode');
        modeToggleButton.textContent = 'dark mode';
    }
}); */



// LOADING SCREEN
document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loading-screen");

    if (!sessionStorage.getItem("hasVisited")) {
        document.body.classList.add("unscrollable");
        const img = document.createElement("img");
        img.src = `loading-anim.gif?cacheBust=${Date.now()}`;
        img.alt = "";
        loadingScreen.appendChild(img);

        setTimeout(() => {
            loadingScreen.classList.add("hidden");
            loadingScreen.innerHTML = "";
            document.body.classList.remove("unscrollable");
        }, 3000);

        sessionStorage.setItem("hasVisited", "true");
    } else {
        loadingScreen.classList.add("hidden");
        loadingScreen.innerHTML = "";
    }
});
//
// MENU BUTTON TOGGLE
const bigMenu = document.getElementById("menu");
const posSpan = document.querySelector('.navbar___position-span');

const mobileMenuButton = document.querySelector('.mobile-nav_menu-toggle--2');
mobileMenuButton.addEventListener('click', () => {
    bigMenu.classList.toggle('active');
    if (bigMenu.classList.contains('active')) {
        posSpan.textContent = 'menu';
    } else {
        window.dispatchEvent(new Event('scroll'));
    }
})

// MENU LINK CLICK HANDLING
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            bigMenu.classList.remove('active');
            document.body.classList.remove('unscrollable');

            // Delay smooth scrolling slightly so menu can close first
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        }
    });
});

// MENU POSITION TRACKING
// MENU POSITION TRACKING
const navBar = document.querySelector(".navbar");
const projectsContainerTop = document.querySelector('.projects__container-top');
const projectsContainerBot = document.querySelector('.projects__container-bottom');
const introHeading = document.querySelector('.intro_top-container h2');

let aboutmePosition, skillsPosition, projectsPosition, contactPosition;
function setSectionPositions() {
    const vh = window.innerHeight;

    if (window.matchMedia("(max-width: 768px)").matches) {
        aboutmePosition = vh * 0.8;
        skillsPosition = vh * 2.2;
        projectsPosition = vh * 3.1;
        contactPosition = vh * 4.2;
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
        aboutmePosition = vh * 1.1;
        skillsPosition = vh * 2.4;
        projectsPosition = vh * 3.2;
        contactPosition = vh * 4.4;
    } else {
        aboutmePosition = vh * 1.7;
        skillsPosition = vh * 2.6;
        projectsPosition = vh * 3.3;
        contactPosition = vh * 4.5;
    }
}

setSectionPositions();

window.addEventListener("resize", setSectionPositions);

window.addEventListener("scroll", function () {
    if (bigMenu.classList.contains('active')) return;

    const currentPosition = window.scrollY;

    if (currentPosition > aboutmePosition) {
        navBar.classList.add("scrolled");

        if (currentPosition < skillsPosition) {
            posSpan.textContent = 'about me';
            introHeading.classList.add('active');
        } else if (currentPosition < projectsPosition) {
            posSpan.textContent = 'skills';
        } else if (currentPosition < contactPosition) {
            posSpan.textContent = 'projects';
            projectsContainerTop.classList.add('visible');
            projectsContainerBot.classList.add('visible');
        } else {
            posSpan.textContent = 'contact';
        }

    } else {
        navBar.classList.remove("scrolled");
        posSpan.textContent = 'home';
    }
});



// CHANGING TEXT
const changingText = document.querySelector('.about___changing-interests');
const interests = ["Development", "UX/UI", "Applications"];
const intervalTime = 1000;
let i = 0;

function updateText() {
    changingText.textContent = interests[i];
    i = (i + 1) % interests.length;
}
updateText();
setInterval(updateText, intervalTime);

const projectImg1 = document.querySelector('.project_img-1');
const projectIcon1 = document.querySelector('.project_img-1 i');
const projectText1 = document.querySelector('.project_img-1 p');

projectImg1.addEventListener('mouseover', e => {
    projectIcon1.classList.add('active');
    projectText1.classList.add('active');
})

projectImg1.addEventListener('mouseout', e => {
    projectIcon1.classList.remove('active');
    projectText1.classList.remove('active');
})

const projectImg2 = document.querySelector('.project_img-2');
const projectIcon2 = document.querySelector('.project_img-2 i');
const projectText2 = document.querySelector('.project_img-2 p');

projectImg2.addEventListener('mouseover', e => {
    projectIcon2.classList.add('active');
    projectText2.classList.add('active');
})

projectImg2.addEventListener('mouseout', e => {
    projectIcon2.classList.remove('active');
    projectText2.classList.remove('active');
})




// -MOBILE POS
const mobilePos = document.querySelector('.mobile-nav__position-span');
window.addEventListener("scroll", function() {
    if (bigMenu.classList.contains('active')) return;
    const currentPosition = window.scrollY;
    if (currentPosition > aboutmePosition) {
        if (currentPosition < skillsPosition) {
            mobilePos.textContent = 'about me';
        } else if (currentPosition < projectsPosition) {
            mobilePos.textContent = 'skills';
        } else if (currentPosition < contactPositon) {
            mobilePos.textContent = 'projects';
        } else {
            mobilePos.textContent = 'contact';
        }
    } else {
        mobilePos.textContent = 'home';
    }
});



function doThis() {
    console.log("You scrolled to target position!");
}

window.addEventListener("scroll", () => {
   // console.log("Current position:", window.scrollY);
});
//

const absText = document.querySelector('.contact___abs-text')
const copyButton = document.getElementById("copy-text")
copyButton.addEventListener('click', () =>{
    const email = "adrianahanouskova2007@gmail.com"
    navigator.clipboard.writeText(email);
})

copyButton.addEventListener('mouseover', () => {
    absText.classList.add('hovered')
    console.log("hovered!")
})

copyButton.addEventListener('mouseout', () => {
    absText.classList.remove('hovered')
})

const topInfo = document.querySelector(".iw1")
const bottomInfo = document.querySelector(".contact__info-wrapper--2")

bottomInfo.addEventListener('mouseover', () => {
    bottomInfo.classList.add("selected")
    topInfo.classList.add("unselected")
})
bottomInfo.addEventListener('mouseout', () => {
    bottomInfo.classList.remove("selected")
    topInfo.classList.remove("unselected")
})

const cfButton = document.getElementById("cf-button")
const contForm = document.querySelector(".contact_form")
cfButton.addEventListener('click', () => {
    contForm.classList.toggle('active')
})


// SKILLS SECTION - HOVER - DESCRIPTIONS
const firstSkill = document.querySelector(".skill___item-1");
const secondSkill = document.querySelector(".skill___item-2");
const thirdSkill = document.querySelector(".skill___item-3");
const fourthSkill = document.querySelector(".skill___item-4");

const firstDescription = document.querySelector(".skills___skill-1-desc");
const secondDescription = document.querySelector(".skills___skill-2-desc");
const thirdDescription = document.querySelector(".skills___skill-3-desc");
const fourthDescription = document.querySelector(".skills___skill-4-desc");

// First skill
firstSkill.addEventListener('mouseover', () => {
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
    thirdDescription.classList.add('active');
    secondDescription.classList.remove('active');
    firstDescription.classList.remove('active');
    fourthDescription.classList.remove('active');

    secondSkill.classList.add('inactive');
    firstSkill.classList.add('inactive');
    fourthSkill.classList.add('inactive');
    thirdSkill.classList.remove('inactive');
});

// Fourth skill
fourthSkill.addEventListener('mouseover', () => {
    fourthDescription.classList.add('active');
    secondDescription.classList.remove('active');
    thirdDescription.classList.remove('active');
    firstDescription.classList.remove('active');


    secondSkill.classList.add('inactive');
    thirdSkill.classList.add('inactive');
    firstSkill.classList.add('inactive');
    fourthSkill.classList.remove('inactive');
});

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
        .to("#hero-section h2", {
            opacity: 0,
            ease: "power2.out"
        }, "<");
}
