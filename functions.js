const msgEl = document.getElementById("msg");
let Game = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"],
];
let turn = "X";
function addHoverStyle(cellEl) {
  cellEl.addEventListener("mouseover", () => {
    cellEl.classList.add("hovered");
  });
  cellEl.addEventListener("mouseleave", () => {
    cellEl.classList.remove("hovered");
  });
}

function updateGame(i, j) {
  if (checkGame(Game) === null) {
    Game[i][j] = turn;
    turn === "X" ? (turn = "O") : (turn = "X");
  } else {
    if (checkGame(Game) === "X") msgEl.textContent = "You Won!";
    else if (checkGame(Game) === "O") msgEl.textContent = "The AI Won!";
    else msgEl.textContent = "Tie!";
  }
}

function drawGame(game) {
  GameEl.innerHtml = "";
  const listEl = document.createElement("ul");
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cellEl = document.createElement("li");
      if (game[i][j] != "_") {
        cellEl.innerHTML = game[i][j];
      } else {
        addHoverStyle(cellEl);
        cellEl.addEventListener("click", () => {
          GameEl.removeChild(listEl);
          updateGame(i, j);
          announce(Game);
          drawGame(Game);
        });
      }
      listEl.appendChild(cellEl);
    }
  }
  GameEl.appendChild(listEl);
}
function announce(Game) {
  if (checkGame(Game) === null) {
  } else {
    if (checkGame(Game) === "X") msgEl.textContent = "You Won!";
    else if (checkGame(Game) === "O") msgEl.textContent = "The AI Won!";
    else msgEl.textContent = "Tie!";
  }
}
