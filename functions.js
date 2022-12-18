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
function AIPlay(Game) {
  GameEl.innerHtml = "";
  let listEl = document.querySelector("ul");
  listEl.remove();
  listEl = document.createElement("ul");
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cellEl = document.createElement("li");
      if (Game[i][j] != "_") {
        cellEl.innerHTML = Game[i][j].at(0);
        if (Game[i][j].length == 2) {
          console.log("ana hena ai");
          cellEl.classList.add("win");
        }
      } else {
        addHoverStyle(cellEl);
      }
      listEl.appendChild(cellEl);
    }
  }
  GameEl.appendChild(listEl);
  setTimeout(() => {
    const x = bestMove(Game);
    if (x) updateGame(x.i, x.j);
    announce(Game);
    const listEl = document.querySelector("ul");
    listEl.remove();
    drawGame(Game);
  }, 500);
}
function drawGame(game) {
  GameEl.innerHtml = "";
  const listEl = document.createElement("ul");
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cellEl = document.createElement("li");
      if (game[i][j] != "_") {
        cellEl.innerHTML = game[i][j].at(0);
        if (game[i][j].length == 2) {
          console.log("ana hena player");
          cellEl.classList.add("win");
        }
      } else {
        addHoverStyle(cellEl);
        cellEl.addEventListener("click", click(i, j));
      }
      listEl.appendChild(cellEl);
    }
  }
  GameEl.appendChild(listEl);
}
const click = (i, j) => {
  return (e) => {
    const listEl = document.querySelector("ul");
    listEl.remove();
    updateGame(i, j);
    announce(Game);
    drawGame(Game);
    AIPlay(Game);
  };
};
function announce(Game) {
  const result = checkGame(Game);
  if (result === null) {
  } else {
    if (result === "X") {
      msgEl.innerHTML = "<h1>You Won!</h1>";
    } else if (result === "O") {
      DrawWiner(Game);
      msgEl.innerHTML = "<h1>The AI Won!</h1>";
    } else {
      msgEl.innerHTML = "<h1>Tie!</h1>";
    }
  }
}

function DrawWiner(game) {
  const El = document.querySelectorAll("li");
  console.log(El);
  if (
    game[0][0] == game[0][1] &&
    game[0][2] == game[0][1] &&
    game[0][0] != "_"
  ) {
    Game[0][0] = Game[0][0].concat("*");
    Game[0][1] = Game[0][1].concat("*");
    Game[0][2] = Game[0][2].concat("*");
  } else if (
    game[1][0] == game[1][1] &&
    game[1][2] == game[1][1] &&
    game[1][0] != "_"
  ) {
    Game[1][0] = Game[1][0].concat("*");
    Game[1][1] = Game[1][1].concat("*");
    Game[1][2] = Game[1][2].concat("*");
  } else if (
    game[2][0] == game[2][1] &&
    game[2][2] == game[2][1] &&
    game[2][0] != "_"
  ) {
    Game[2][0] = Game[2][0].concat("*");
    Game[2][1] = Game[2][1].concat("*");
    Game[2][2] = Game[2][2].concat("*");
  } else if (
    game[0][0] == game[1][0] &&
    game[1][0] == game[2][0] &&
    game[0][0] != "_"
  ) {
    Game[0][0] = Game[0][0].concat("*");
    Game[1][0] = Game[1][0].concat("*");
    Game[2][0] = Game[2][0].concat("*");
  } else if (
    game[0][1] == game[1][1] &&
    game[1][1] == game[2][1] &&
    game[0][1] != "_"
  ) {
    Game[0][1] = Game[0][1].concat("*");
    Game[1][1] = Game[1][1].concat("*");
    Game[2][1] = Game[2][1].concat("*");
  } else if (
    game[0][2] == game[1][2] &&
    game[1][2] == game[2][2] &&
    game[0][2] != "_"
  ) {
    Game[0][2] = Game[0][2].concat("*");
    Game[1][2] = Game[1][2].concat("*");
    Game[2][2] = Game[2][2].concat("*");
  } else if (
    game[0][0] == game[1][1] &&
    game[1][1] == game[2][2] &&
    game[0][0] != "_"
  ) {
    Game[0][0] = Game[0][0].concat("*");
    Game[1][1] = Game[1][1].concat("*");
    Game[2][2] = Game[2][2].concat("*");
  } else if (
    game[2][0] == game[1][1] &&
    game[1][1] == game[0][2] &&
    game[2][0] != "_"
  ) {
    Game[2][0] = Game[2][0].concat("*");
    Game[1][1] = Game[1][1].concat("*");
    Game[0][2] = Game[0][2].concat("*");
  }
}
function resetGame() {
  Game = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];
  let listEl = document.querySelector("ul");
  listEl.remove();
  drawGame(Game);
  msgEl.innerHTML = "<h1>Game Still On</h1>";
}
