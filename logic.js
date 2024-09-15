// logic.js
// Holds the logic for the etch-a-sketch web project

// 1. create the 16x16 etch-a-sketch board using javascript
const body = document.querySelector("body");
const board = document.querySelector("#board");

function handleMouseOver(e) {
    e.target.classList.toggle("hoverState");
}

function addEventListeners() {
    const tiles = document.querySelectorAll(".tile")
    tiles.forEach(tile => {
        tile.addEventListener("mouseover", handleMouseOver);
    });
}

function removeEventListeners() {
    const tiles = document.querySelectorAll(".tile")
    tiles.forEach(tile => {
        tile.removeEventListener("mouseover", handleMouseOver);
    })
}

const createBoard = (size = 16) => {

    removeEventListeners();

    board.replaceChildren();

    for (let i = 0; i < size; i++) {
        const newRow = document.createElement("div");
        newRow.id = `row-${i}`;
        newRow.classList.add("row");
        board.appendChild(newRow);
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement("div");
            newDiv.id = `${i}-${j}`
            newDiv.classList.add("tile");
            newRow.appendChild(newDiv);
        }
    }

    addEventListeners();

}

createBoard(16);
// for (let i = 0; i < 16; i++) {
//     const newRow = document.createElement("div");
//     newRow.id = `row-${i}`;
//     newRow.classList.add("row");
//     board.appendChild(newRow);
//     for (let j = 0; j < 16; j++) {
//         const newDiv = document.createElement("div");
//         newDiv.id = `${i}-${j}`
//         newDiv.classList.add("tile");
//         newRow.appendChild(newDiv);
//     }
// }
// 2. create styles for grid states

// 3. create javascript listener events to change the colors on hover of divs. 
const tiles = document.querySelectorAll(".tile")
tiles.forEach(tile => {
    tile.addEventListener("mouseover", (e) => {
        e.target.classList.toggle("hoverState");
    })
});

const newBoardSubmitButton = document.querySelector("#newBoardSubmit");

newBoardSubmitButton.addEventListener("click", () => {
    const gridSizeInput = document.querySelector("#gridSizeInput");
    let gridSize = Number(gridSizeInput.value);
    createBoard(gridSize);
})




