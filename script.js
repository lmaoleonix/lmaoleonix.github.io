let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

function renderBoard() {
  let boardDiv = document.getElementById('tic-tac-toe-board');
  boardDiv.innerHTML = '';
  for (let i = 0; i < gameBoard.length; i++) {
    let cellDiv = document.createElement('div');
    cellDiv.className = 'tic-tac-toe-cell';
    cellDiv.innerText = gameBoard[i];
    cellDiv.addEventListener('click', function() {
      if (gameBoard[i] === '') {
        gameBoard[i] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        renderBoard();
      }
    });
    boardDiv.appendChild(cellDiv);
  }
}

document.getElementById('tic-tac-toe').addEventListener('click', function() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  renderBoard();
});
