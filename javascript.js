function createGrid(length) {
    let totalBoxes = length * length;
    let boxWidth = (500/length) + 'px';

    for (let i = 0; i < totalBoxes; i++) {
        newBox = document.createElement("div")
        newBox.style.width = boxWidth
        newBox.style.height = boxWidth
        newBox.style.backgroundColor = gridColor
        newBox.classList.add('gridBoxes')
        grid.appendChild(newBox)
    }

    let allBoxes = document.querySelectorAll('.gridBoxes');
    allBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            currentBoxFunction(box, brushColor)
    });
});
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function changeBoxColor(currentBox, currentcolor) {
    currentBox.style.backgroundColor = currentcolor
}

function getNumber() {
    let userNumber = prompt("Please enter a number 0-100. Your input must be a number.")
    return userNumber
}

function changeToEraser() {
    placeholderColor = brushColor;
    brushColor = gridColor;
}

let currentBoxFunction = changeBoxColor
let gridColor = 'white';
let brushColor = 'black';
let placeholderColor = 'black'

const grid = document.querySelector(".grid");

const colorPicker = document.getElementById("colorPicker")
colorPicker.addEventListener('input', (e) => {
    brushColor = e.target.value;
    placeholderColor = brushColor;
})

const paintButton = document.querySelector("#paint");
paintButton.addEventListener('click', () => {
    brushColor = placeholderColor;
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    clearGrid()
    createGrid(16)
})

const changeGridSizeButton = document.querySelector("#changeGridSize");
changeGridSizeButton.addEventListener("click", () => {
    let gridSize = getNumber()
    clearGrid()
    createGrid(gridSize)
})

const eraserButton = document.querySelector("#eraser");
eraserButton.addEventListener("click", () => {
    changeToEraser()
})

createGrid(16)
 