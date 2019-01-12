// Select color input
const inputColor = document.querySelector('#colorPicker');

// Select size input
const inputHeight = document.querySelector('#inputHeight');
const inputWidth = document.querySelector('#inputWidth');

// When size is submitted by the user, call makeGrid()
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {
    // Your code goes here!
    const pixelCanvas = document.querySelector('#pixelCanvas');
    pixelCanvas.innerHTML = "";
    for (let i = 0; i < inputHeight.value; i++) {
        const tableRow = document.createElement(`tr`);
        for (let j = 0; j < inputWidth.value; j++) {
            const tableData = document.createElement('td');
            tableRow.appendChild(tableData);
        }
        pixelCanvas.appendChild(tableRow);
    }
    pixelCanvas.addEventListener('click', function(event) {
        event.target.style.background = inputColor.value;
    });
}
