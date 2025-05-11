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


// CHANGING TEXT
const changingText = document.querySelector('.about___changing-interests');
const interests = ["Development", "Design", "Applications"];
const intervalTime = 1000;
let i = 0;

function updateText() {
    changingText.textContent = interests[i];
    i = (i + 1) % interests.length;
}
updateText();
setInterval(updateText, intervalTime);


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
const menuButton = document.querySelector('.navbar__menu-toggle--2');
const bigMenu = document.getElementById("menu");
const posSpan = document.querySelector('.navbar___position-span');

menuButton.addEventListener('click', () => {
    bigMenu.classList.toggle('active');
    if (bigMenu.classList.contains('active')) {
        posSpan.textContent = 'menu';
    } else {
        window.dispatchEvent(new Event('scroll'));
    }
    document.body.classList.toggle('unscrollable');
});

// MENU LINK CLICK HANDLING
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor jump

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
const navBar = document.querySelector(".navbar");
const vh = window.innerHeight;
const aboutmePosition = vh * 1.2;
const skillsPosition = vh * 2.6;
const projectsPosition = vh * 3.3;
const contactPositon = vh * 4.5;
const projectsContainerTop = document.querySelector('.projects__container-top');
const projectsContainerBot = document.querySelector('.projects__container-bottom');

window.addEventListener("scroll", function() {
    if (bigMenu.classList.contains('active')) return; // Don't change posSpan while menu is open

    const currentPosition = window.scrollY;

    if (currentPosition > aboutmePosition) {
        navBar.classList.add("scrolled");

        if (currentPosition < skillsPosition) {
            posSpan.textContent = 'about me';
        } else if (currentPosition < projectsPosition) {
            posSpan.textContent = 'skills';
        } else if (currentPosition < contactPositon) {
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
});

secondSkill.addEventListener('mouseover', () => {
    secondDescription.classList.add('active');
    firstDescription.classList.remove('active');
    thirdDescription.classList.remove('active');
    fourthDescription.classList.remove('active');
});

thirdSkill.addEventListener('mouseover', () => {
    thirdDescription.classList.add('active');
    secondDescription.classList.remove('active');
    firstDescription.classList.remove('active');
    fourthDescription.classList.remove('active');
});

// Fourth skill
fourthSkill.addEventListener('mouseover', () => {
    fourthDescription.classList.add('active');
    secondDescription.classList.remove('active');
    thirdDescription.classList.remove('active');
    firstDescription.classList.remove('active');
});


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
        x: -500,
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
