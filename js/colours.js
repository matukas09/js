const figure = document.getElementById('figure');
const colours = ['red', 'yellow', 'grey', 'green', 'purple', 'pink', 'teal', 'cyan', 'orange', 'black', 'brown', 'blue', 'Amazon'];

function paintMe() {
    console.log("button clicked!");
    let rnd = Math.floor((Math.random() * colours.length-1) + 1);
    console.log(rnd);
    figure.style.background = colours[rnd];
}