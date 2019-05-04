/**
 * To-do:
 * Include copy gradient option
 * Include dropdown for gradient movement
 * Include color display next to selected color
 * Include edit option for colors
 * Include multiple gradient?
 * Make it possible for people to name and save gradients
 */

//Gradients array for storing saved gradient
let gradientsArray = localStorage.getItem('gradients') ? JSON.parse(localStorage.getItem('gradients')) : [];

localStorage.setItem('gradients', JSON.stringify(gradientsArray));
const data = JSON.parse(localStorage.getItem('gradients'));

data.forEach(gradient => {
    createGradient(gradient.color1, gradient.color2, gradient.direction);
});

function restoreGradient() {
    var lastGradient = gradientsArray[gradientsArray.length-1];
    document.documentElement.style.setProperty('--color-1', lastGradient.color1);
    document.documentElement.style.setProperty('--color-2', lastGradient.color2);document.documentElement.style.setProperty('--gradient-direction', lastGradient.direction);
    document.getElementById("color-1").innerHTML = lastGradient.color1;
    document.getElementById("color-2").innerHTML = lastGradient.color2;
    document.getElementById("gradient-direction").value = lastGradient.direction;
}

gradientsArray.length > 0 && restoreGradient();

// Function to generate random color
function randomColorGenerator() {
    var characters = ["a","b","c","d","e","f",0,1,2,3,4,5,6,7,8,9];
    var randomColorArray = [];
    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random()*characters.length);
        randomColorArray.push(characters[randomIndex])
    }
    return `#${randomColorArray.join("")}`;
}

// Function to set CSS color variables to randomly generated colors
function randomGradient() {
    var color1 = randomColorGenerator();
    var color2 = randomColorGenerator();

    document.documentElement.style.setProperty('--color-1', color1);
    document.documentElement.style.setProperty('--color-2', color2);

    document.getElementById("color-1").innerHTML = color1;
    document.getElementById("color-2").innerHTML = color2;
}

// Function to change gradient direction
function changeDirection() {
    var direction = document.getElementById("gradient-direction").value;
    document.documentElement.style.setProperty('--gradient-direction', direction);
}

// Function to copy Javascript variable to clipboard
// Copied and pasted from StackOverflow https://stackoverflow.com/questions/33855641/copy-output-of-a-javascript-variable-to-the-clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    window.alert("Gradient copied");
}

// Function to collect gradient properties
function copyGradient() {
    var color1 = getComputedStyle(document.documentElement).getPropertyValue('--color-1');
    var color2 = getComputedStyle(document.documentElement).getPropertyValue('--color-2');
    var direction = document.getElementById("gradient-direction").value;

    var gradient = `background: linear-gradient(${direction},${color1},${color2});`
    copyToClipboard(gradient);
}

/** Save gradient */

//Function to create new gradient div
function createGradient(color1, color2, direction) {
    var gradientsWrapper = document.getElementById("gradients-wrapper");

    var newGradient = document.createElement("div");
    newGradient.className = "gradient";
    newGradient.id = "gradient"+document.getElementsByClassName("gradient").length;
    newGradient.style.background = `linear-gradient(${direction}, ${color1},${color2})`;
    newGradient.setAttribute("onclick",`copyToClipboard("background: linear-gradient(${direction}, ${color1}, ${color2})")`);

    var gradientOverlay = document.createElement("div");
    gradientOverlay.className = "gradient-overlay";
    gradientOverlay.id = "gradient-overlay"+document.getElementsByClassName("saved-gradient").length;
    gradientOverlay.innerText = `background: linear-gradient(${direction}, ${color1}, ${color2})`

    newGradient.append(gradientOverlay);
    gradientsWrapper.insertBefore(newGradient, gradientsWrapper.firstChild);
}

// Function to save new gradient to local storage
function saveGradient() {
    var color1 = getComputedStyle(document.documentElement).getPropertyValue('--color-1');
    var color2 = getComputedStyle(document.documentElement).getPropertyValue('--color-2');
    var direction = document.getElementById("gradient-direction").value;
    var gradientContainer = {
        color1: color1,
        color2: color2,
        direction: direction
    };
    gradientsArray.push(gradientContainer);
    localStorage.setItem("gradients", JSON.stringify(gradientsArray));
    createGradient(gradientContainer.color1, gradientContainer.color2, gradientContainer.direction);
    window.alert("Gradient saved");
}