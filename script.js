// -----------------------------
// Tic-Tac-Toe: script.js
// -----------------------------

// Game state variables
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "O";
let gameActive = false;

// Winning combinations (indices of board)
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// DOM elements
const statusDisplay = document.getElementById("status");
const controlButton = document.getElementById("controlButton");
const cells = document.querySelectorAll(".cell");
const waterfall = document.getElementById("waterfall");


// -----------------------------
// Utility functions
// -----------------------------

function updateStatus(message) {
  statusDisplay.textContent = message;
}

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("win");
    cell.classList.remove("disabled");
  });
}

// -----------------------------
// Game control functions
// -----------------------------

function startGame() {
  resetBoard();
  currentPlayer = "O";
  gameActive = true;
  updateStatus(`Player ${currentPlayer}'s Turn`);
  controlButton.textContent = "Restart Game";
}

function handleCellClick(e) {
  const clickedCell = e.target;
  const clickedIndex = parseInt(clickedCell.getAttribute("data-index"));

  // Ignore clicks if:
  // - game isn’t active
  // - cell is already taken
  // - game already won
  if (!gameActive || board[clickedIndex] !== "" || clickedCell.classList.contains("disabled") || checkWin()) return;

  // Place player's symbol
  board[clickedIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;

  // Check for win or tie
  if (checkWin()) {
    updateStatus(`Player ${currentPlayer} Wins!`);
    gameActive = false;
    return;
  }

  if (checkTie()) {
    updateStatus("It's a Tie!");
    gameActive = false;
    return;
  }

  // Switch turns
  currentPlayer = currentPlayer === "O" ? "X" : "O";
  updateStatus(`Player ${currentPlayer}'s Turn`);
}

// -----------------------------
// Game state checks
// -----------------------------

function checkWin() {
  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
  highlightWinningCells(condition);
  disableBoard();
  return true;
    }
  }
  return false;
}

function highlightWinningCells(indices) {
  indices.forEach(i => {
    cells[i].classList.add("win");
  });
}

function checkTie() {
  if (board.every(cell => cell !== "")) {
    disableBoard();
    return true;
  }
  return false;
}

function disableBoard() {
  cells.forEach(cell => {
    cell.classList.add("disabled");
  });
}

// -----------------------------
// Event listeners
// -----------------------------

// Start or restart the game when button is clicked
controlButton.addEventListener("click", startGame);

// Handle each cell click
cells.forEach(cell => {
  cell.addEventListener("click", handleCellClick);
});

// -----------------------------
// Initial state
// -----------------------------

updateStatus("Click 'Start Game' to begin");
