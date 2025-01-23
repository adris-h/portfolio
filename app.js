const modeToggleButton = document.querySelector('.mode-toggle');
const bodyElement = document.body;

modeToggleButton.addEventListener('click', () => {
    // Toggle between light-mode and dark-mode classes
    if (bodyElement.classList.contains('light-mode')) {
        bodyElement.classList.remove('light-mode');
        bodyElement.classList.add('dark-mode');
        modeToggleButton.textContent = 'LIGHT MODE';
    } else {
        bodyElement.classList.remove('dark-mode');
        bodyElement.classList.add('light-mode');
        modeToggleButton.textContent = 'DARK MODE';
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