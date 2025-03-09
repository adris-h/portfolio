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

const loadingScreen = document.querySelector("#loading-screen");
window.addEventListener('load', function() {
    loadingScreen.style.display = 'none';
})

const navBar = document.querySelector(".navbar");
const targetPosition = 200;
window.addEventListener("scroll", function() {
    const currentPosition = window.scrollY;
    if (currentPosition > targetPosition){
        doThis();
        navBar.classList.add("scrolled");
    } else {
        navBar.classList.remove("scrolled");
    }
})

function doThis(){
    console.log("You scrolled to target position!");
}

console.log(window.scrollY);

const menuButton = document.querySelector('.menu-2')
const menuPopUp = document.querySelector('.menu-popup')

menuButton.addEventListener('click', () => {
    menuPopUp.classList.toggle('active')
})