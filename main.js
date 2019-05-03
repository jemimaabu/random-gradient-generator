/**
 * To-do:
 * Include copy gradient option
 * Include dropdown for gradient movement
 * Include edit option for colors
 * Include color display next to selected color
 * Include multiple gradient?
 * Make it possible for people to name and save gradients
 */

var gradientBackground = document.getElementById("gradient-background");
var gradientDisplay = document.getElementById("gradient-display");
var gradientColor1 = getComputedStyle(document.documentElement).getPropertyValue('--color-1');
var gradientColor2 = getComputedStyle(document.documentElement).getPropertyValue('--color-2');
var gradientDirection = getComputedStyle(document.documentElement).getPropertyValue('--gradient-direction');
console.log(gradientDisplay.innerText)
function randomColorGenerator() {
    var characters = ["a","b","c","d","e","f",0,1,2,3,4,5,6,7,8,9];
    var randomColorArray = [];
    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random()*characters.length);
        randomColorArray.push(characters[randomIndex])
    }
    return `#${randomColorArray.join("")}`;
}

function randomGradient() {
    var color1 = randomColorGenerator();
    var color2 = randomColorGenerator();

    document.documentElement.style.setProperty('--color-1', color1);
    document.documentElement.style.setProperty('--color-2', color2);
    document.getElementById("color-1").innerHTML = color1;
    document.getElementById("color-2").innerHTML = color2;
}

function changeDirection() {
    var direction = document.getElementById("gradient-direction").value;
    document.documentElement.style.setProperty('--gradient-direction', direction);
}