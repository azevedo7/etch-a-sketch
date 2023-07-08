let n = 6;

const container = document.querySelector('#container');
const board = document.querySelector('#board');
const range = document.querySelector('#side');
const p = document.querySelector('p');

let squares = document.querySelectorAll('.block');
const colorPicker = document.querySelector('#color');

function createBoard(grid) {
    board.innerHTML = '';
    for(let i = 0; i<(grid*grid); i++) {
        const div = document.createElement('div');
        div.classList.add('block');
        board.setAttribute("draggable", false);
        board.appendChild(div);
    }
    board.style.gridTemplateColumns = `repeat(auto-fit,${400/grid}px)`;
    updateSquares();
    p.innerHTML = (`${grid} x ${grid}`)
}

//On mouse over it changes the color of the block
function updateSquares() {
    squares = document.querySelectorAll('.block');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => square.style.backgroundColor = colorPicker.value);
    });
}

createBoard(range.value);

range.addEventListener('input', () => createBoard(range.value));


