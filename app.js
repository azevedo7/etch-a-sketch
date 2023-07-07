let n = 4;

const container = document.querySelector('#container');
const board = document.querySelector('#board');

board.style.cssText += `grid-template-columns: repeat(auto-fit,${400/n}px);`;

function createBoard(n) {
    board.innerHTML = '';
    for(let i = 0; i<(n*n); i++) {
        const div = document.createElement('div');
        div.classList.add('block');
        board.appendChild(div);
    }
}

createBoard(n)

const squares = document.querySelectorAll('.block');
const colorPicker = document.querySelector('#color');

squares.forEach(square => {
    square.addEventListener('mouseover', () => square.style.backgroundColor = colorPicker.value);
});

