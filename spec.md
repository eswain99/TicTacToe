# Tic-Tac-Toe Web Game Specification

## 🎯 Project Overview
A simple **two-player Tic-Tac-Toe** game playable on a single webpage.  
Two users alternate turns placing their symbols (`O` and `X`) on a 3×3 grid until one wins or the board is full (tie).  
The interface should guide users to start, play, and restart the game.

---

## 🧱 Core Features
1. **Two players (on one webpage)**  
   - Player 1 uses symbol `O`  
   - Player 2 uses symbol `X`
   - Players alternate turns.

2. **Game flow control**  
   - On page load, a “Start Game” prompt appears.  
   - After the game ends (win or tie), show a “Restart Game” button.  
   - Resetting clears the board and restarts the turn cycle.

3. **Game board**  
   - A **3×3 grid** (9 clickable cells).  
   - Each cell can hold one symbol and cannot be overwritten.  
   - Clicking a filled cell should do nothing.

4. **Turn display**  
   - A label or banner showing **whose turn it is**.  
   - Updates dynamically after each move.

5. **Winning and tie detection**  
   - Game ends immediately when:
     - A player has 3 of their symbols aligned horizontally, vertically, or diagonally.
     - All cells are filled with no winner (tie).  
   - On win/tie, display a message (e.g., “Player 1 wins!” or “It’s a tie!”).

---

## 🧩 Implementation Steps

### 1. Project Setup
Create three files:
- `index.html` — UI markup.
- `style.css` — Layout and design.
- `script.js` — Game logic.

---

### 2. HTML Structure (`index.html`)

**Main sections:**
- Header area for title and turn status.
- A 3×3 grid container for tiles.
- A start/restart button area.

```html
<body>
  <main>
    <h1>Tic Tac Toe</h1>
    <div id="status">Click “Start Game” to begin</div>
    <div id="board" class="board"></div>
    <button id="start-btn">Start Game</button>
  </main>
  <script src="script.js"></script>
</body>
