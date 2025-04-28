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
const changingText = document.querySelector('.changing-text');
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

    // Check if the user has already loaded the page once
    if (!sessionStorage.getItem("hasVisited")) {
        document.body.classList.add("loading");
        const img = document.createElement("img");
        img.src = `loading-anim.gif?cacheBust=${Date.now()}`;
        img.alt = "";
        loadingScreen.appendChild(img);

        setTimeout(() => {
            loadingScreen.classList.add("hidden");
            loadingScreen.innerHTML = "";
            document.body.classList.remove("loading");
        }, 6000);

        // Mark that the user has visited
        sessionStorage.setItem("hasVisited", "true");
    } else {
        // Immediately hide the loading screen if it's a refresh
        loadingScreen.classList.add("hidden");
        loadingScreen.innerHTML = "";
    }
});
//


// MENU POSITIONS
const navBar = document.querySelector(".navbar");
const posSpan = document.querySelector('.pos-span');
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
        }
        else {
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
    console.log("Current position:", window.scrollY);
});
//



// MENU POP UP
const menuButton = document.querySelector('.menu-2')
const menuPopUp = document.querySelector('.menu-popup')

menuButton.addEventListener('click', () => {
    menuPopUp.classList.toggle('active')
})
//



const absText = document.querySelector('.abs-text')
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
const bottomInfo = document.querySelector(".iw2")

bottomInfo.addEventListener('mouseover', () => {
    bottomInfo.classList.add("selected")
    topInfo.classList.add("unselected")
})
bottomInfo.addEventListener('mouseout', () => {
    bottomInfo.classList.remove("selected")
    topInfo.classList.remove("unselected")
})


const cfButton = document.getElementById("cf-button")
const contForm = document.querySelector(".contact-form")
cfButton.addEventListener('click', () => {
    contForm.classList.toggle('active')
})