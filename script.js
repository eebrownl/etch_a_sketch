const container = document.querySelector('.container');

container.addEventListener('mouseover', etch)

function etch(e) {
    if (e.target!== container) {
        e.target.style.backgroundColor = 'gray'
    }
}

let sizeButton = document.querySelector('#requestGridSize');
sizeButton.addEventListener('click', requestSize)

function requestSize() {
    let input = prompt('How long would you like the rows and columns to be?')
    let size = parseInt(input)

    if (size > 100 || size < 1) {
        alert('Please choose a number between 1 and 100')
    } else {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let totalCells = size ** 2


    for (let i = 0; i < totalCells; i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'cell';
    }}}

    let reset = document.querySelector('#reset');
    reset.addEventListener('click', clearDivs);

    function clearDivs() {
        let cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.style.backgroundColor = 'gainsboro'
        })
    }

//Keeping this code for the memories! I wrote this before I allowed for user input on sizing to make sure that I could make the etching fucntion work first

//let gridSide = 80

//createGrid(gridSide);

//function createGrid(gridSide) {
 //   container.style.gridTemplateColumns = `repeat(${gridSide}, 1fr)`;
 //   container.style.gridTemplateRows = `repeat(${gridSide}, 1fr)`;
 //   let totalCells = gridSide ** 2


 //   for (let i = 0; i < totalCells; i++) {
  //      let cell = document.createElement('div');
 //       container.appendChild(cell).className = 'cell';
 //   }
//}
