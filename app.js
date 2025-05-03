const modeToggleButton = document.querySelector('.mode-toggle');
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
});


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
        }, 6000);

        sessionStorage.setItem("hasVisited", "true");
    } else {
        loadingScreen.classList.add("hidden");
        loadingScreen.innerHTML = "";
    }
});
//

// MENU POP UP
const menuButton = document.querySelector('.navbar__menu-toggle--2')
const menuPopUp = document.querySelector('.popup_menu')
const bigMenu = document.getElementById("menu")

menuButton.addEventListener('click', () => {
    //menuPopUp.classList.toggle('active')
    bigMenu.classList.toggle('active')
    if (bigMenu.classList.contains('active')) {
        posSpan.textContent = 'menu';
    } else {
        window.dispatchEvent(new Event('scroll'));
    }
    document.body.classList.toggle('unscrollable')
})
//

// MENU POSITIONS
const navBar = document.querySelector(".navbar");
const posSpan = document.querySelector('.navbar___position-span');
const aboutmePosition = 1400;
const skillsPosition = 2000;
const projectsPosition = 3000;
const contactPositon = 3800;

window.addEventListener("scroll", function() {
    const currentPosition = window.scrollY;
    
    if (currentPosition > aboutmePosition) {
        navBar.classList.add("scrolled");
    
        if (currentPosition < skillsPosition) {
            posSpan.textContent = 'about me';
        } else if (currentPosition < projectsPosition) {
            posSpan.textContent = 'skills';
        } else if (currentPosition < contactPositon){
            posSpan.textContent = 'projects';
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
