/**
 * To-do:
 * Include save gradient option
 * Include copy gradient option
 * Include dropdown for gradient movement
 * Include edit option for colors
 * Include color display next to selected color
 * Include multiple gradient?
 */

var gradientBackground = document.getElementById("gradient-background");
var gradientDisplay = document.getElementById("gradient-display");

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

    gradientBackground.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    document.getElementById("color-1").innerHTML = color1;
    document.getElementById("color-2").innerHTML = color2;
}