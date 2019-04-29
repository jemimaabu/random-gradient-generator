var gradientBackground = document.getElementById("gradient-background");
var gradientDisplay = document.getElementById("gradient-display");

function randomColorGenerator() {
    var characters = ["a","b","c","d","e","f",0,1,2,3,4,5,6,7,8,9];
    var randomColorArray = [];
    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random()*characters.length);
        randomColorArray.push(characters[randomIndex])
    }
    return randomColorArray.join("");
}

function randomGradient() {
    var color1 = randomColorGenerator();
    var color2 = randomColorGenerator();

    gradientBackground.style.background = `linear-gradient(to right, #${color1}, #${color2})`;
    gradientDisplay.innerHTML = `linear-gradient(to right, #${color1}, #${color2})`;
}