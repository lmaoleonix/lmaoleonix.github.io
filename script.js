let board = ['', '', '', '', '', '', '', '', ''];

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => cell.addEventListener('click', handleClick));

// Player X always goes first
let currentPlayer = 'X';

function handleClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');
  
    if (board[index] !== '') {
      return;
    }
  
    // Update the board and the cell
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
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-index', i);
      cell.textContent = '';
      board.appendChild(cell);
    }
  }

document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('play-tictactoe');
    const panel = document.getElementById('tictactoe-panel');
    const closeBtn = document.getElementById('tictactoe-close');
  
    playBtn.addEventListener('click', () => {
      panel.classList.add('show');
    });
  
    closeBtn.addEventListener('click', () => {
      panel.classList.remove('show');
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
  currentPlayer = 'X';
}
