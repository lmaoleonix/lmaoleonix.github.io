const board = ['', '', '', '', '', '', '', '', ''];

const cells = document.querySelectorAll('.cell');
const boardElement = document.querySelector('.game-board');
const playBtn = document.getElementById('play-tictactoe');
const panel = document.getElementById('tictactoe-panel');
const closeBtn = document.getElementById('tictactoe-close');

cells.forEach(cell => {
  cell.style.backgroundColor = '#fff';
  cell.style.color = '#000';
  cell.style.fontSize = '2rem';
  cell.style.fontWeight = 'bold';
  cell.style.textAlign = 'center';
  cell.style.cursor = 'pointer';
});

cells.forEach(cell => cell.addEventListener('click', handleClick));

let currentPlayer = 'X';

function handleClick(event) {
  const cell = event.target;
  const index = cell.getAttribute('data-index');

  if (board[index] !== '') {
    return;
  }

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkWinner()) {
    alert(`${currentPlayer} wins!`);
    resetGame();
    return;
  }

  if (checkTie()) {
    alert('Tie game!');
    resetGame();
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function createBoard() {
  const boardElement = document.createElement('div');
  boardElement.classList.add('game-board');
  boardElement.style.display = 'grid';
  boardElement.style.gridTemplateColumns = 'repeat(3, 1fr)';
  boardElement.style.gridTemplateRows = 'repeat(3, 1fr)';
  boardElement.style.gridGap = '10px';

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('data-index', i);
    cell.textContent = '';
    boardElement.appendChild(cell);
  }

  return boardElement;
}

playBtn.addEventListener('click', () => {
  panel.classList.add('show');
  const boardElement = createBoard();
  panel.appendChild(boardElement);
});

closeBtn.addEventListener('click', () => {
  panel.classList.remove('show');
  const boardElement = document.querySelector('.game-board');
  if (boardElement) {
    boardElement.parentNode.removeChild(boardElement);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.getElementById('play-tictactoe');
  const panel = document.getElementById('tictactoe-panel');
  const closeBtn = document.getElementById('tictactoe-close');

  playBtn.addEventListener('click', () => {
    panel.classList.add('show');
    createBoard();

    const boardElement = document.querySelector('.game-board');
    boardElement.style.display = 'grid';
    boardElement.style.gridTemplateColumns = 'repeat(3, 1fr)';
    boardElement.style.gridTemplateRows = 'repeat(3, 1fr)';
    boardElement.style.gridGap = '10px';
  });

  closeBtn.addEventListener('click', () => {
    panel.classList.remove('show');
    boardElement.innerHTML = '';
  });
});

function checkWinner() {
  for (let i = 0; i <= 6; i += 3) {
    if (board[i] !== '' && board[i] === board[i+1] && board[i] === board[i+2]) {
      return true;
    }
  }

  for (let i = 0; i <= 2; i++) {
    if (board[i] !== '' && board[i] === board[i+3] && board[i] === board[i+6]) {
      return true;
    }
  }

  if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
    return true;
  }
  if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
    return true;
  }

  return false;
}

function checkTie() {
  return board.every(cell => cell !== '');
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.textContent = '');
}