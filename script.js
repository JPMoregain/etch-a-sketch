const container = document.getElementById("grid");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

let size = 16; 
const test = document.querySelectorAll('.cell');

function makeGrid(size) {
    for (r = 0; r < size; r++) {
        let row = document.createElement("div");
        row.classList.add("gridRow");
    for (i = 0; i < size; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
    }
        container.appendChild(row);
        const test = document.querySelectorAll('.cell');
test.forEach(cell => {
    cell.addEventListener('mouseover', function() {
        cell.style.backgroundColor = "black"; 
    });
    });
}
}

makeGrid(size);

document.getElementById("btn");
btn.addEventListener('click', event => {
    click();
});

function removeAllTiles() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
}

function newGrid() {
    let size = prompt("Please enter the number of squares for each side of the new grid");
    removeAllTiles();
    makeGrid(size);
}

function click() {
    for (var i = 0; i < test.length; i++) {
        test[i].style.backgroundColor = "white";
    }
    newGrid();
}
