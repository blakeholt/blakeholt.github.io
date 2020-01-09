/* DON'T CHANGE ANYTHING IN THIS FILE! */

const bullet = "&bullet;";
let row;
let col;

window.onload = function () {
    document.querySelector("#upButton").addEventListener("click", moveUp);
    document.querySelector("#downButton").addEventListener("click", moveDown);
    document.querySelector("#rightButton").addEventListener("click", moveRight);
    document.querySelector("#leftButton").addEventListener("click", moveLeft);

    row = 0;
    col = 0;
    paint(row, col, bullet);
}

function paint(r, c, item) {
    let tempRow = document.querySelectorAll(".row")[r];
    let cell = tempRow.querySelectorAll(".cell")[c];
    cell.innerHTML = item;
}

function moveUp() {
    if (row > 0) {
        paint(row, col, "");
        row--;
        paint(row, col, bullet);
    }
}

function moveDown() {
    if (row < 9) {
        paint(row, col, "");
        row++;
        paint(row, col, bullet);
    }
}

function moveRight() {
    if (col < 9) {
        paint(row, col, "");
        col++;
        paint(row, col, bullet);
    }
}

function moveLeft() {
    if (col > 0) {
        paint(row, col, "");
        col--;
        paint(row, col, bullet);
    }
}
/* DON'T CHANGE ANYTHING IN THIS FILE! */
