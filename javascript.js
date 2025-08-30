const grid = document.querySelector(".grid");
const clearButton = document.querySelector("#clear");
const changeGridSizeButton = document.querySelector("#changeGridSize");
const changeColorButton = document.querySelector("#changeColor");
const eraserButton = document.querySelector("#eraser");
// const changeColorButton = document.querySelector("#changeColor");

let gridColor = 'white';
let brushColor = 'black';

function sayHi (){
    alert("hi")
}

let currentBoxFunction = sayHi

function getNumber() {
    let userNumber = prompt("Please enter a number 0-100. Your input must be a number.")
    return userNumber
}

function createGrid(length) {
    let totalBoxes = length * length;
    let boxWidth = (500/length) + 'px';

    for (let i = 0; i < totalBoxes; i++) {
        newBox = document.createElement("div")
        newBox.style.width = boxWidth
        newBox.style.height = boxWidth
        newBox.style.backgroundColor = gridColor
        newBox.textContent = i + 1
        newBox.addEventListener("mouseEnter", currentBoxFunction);
        grid.appendChild(newBox)

    }
}




// let gridSize = getNumber()
// createGrid(gridSize)
createGrid(6)