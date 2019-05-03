/**
 * To-do:
 * Include copy gradient option
 * Include dropdown for gradient movement
 * Include color display next to selected color
 * Include edit option for colors
 * Include multiple gradient?
 * Make it possible for people to name and save gradients
 */

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
}

function copyGradient() {
    var color1 = getComputedStyle(document.documentElement).getPropertyValue('--color-1');
    var color2 = getComputedStyle(document.documentElement).getPropertyValue('--color-2');
    var direction = document.getElementById("gradient-direction").value;

    var gradient = `background: linear-gradient(${direction},${color1},${color2});`
    copyToClipboard(gradient);
    window.alert("Copied gradient");
}