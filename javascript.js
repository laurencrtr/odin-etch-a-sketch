const grid = document.querySelector(".grid");


function getNumber() {
    let userNumber = prompt("Please enter a number 0-100. Your input must be a number.")
    return userNumber
}

function createGrid(length) {
    // totalBoxes = length * length
    for (let i = 0; i < length; i++) {
        newRow = document.createElement("div")
        grid.appendChild(newRow)
        for (let i = 0; i < length; i++) {
            newBox = document.createElement("div")
            newRow.appendChild(newBox)
            console.log("grid added")
        }  
    }
}

// let gridSize = getNumber()
// createGrid(gridSize)
createGrid(3)