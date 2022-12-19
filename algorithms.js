function checkGame(game) {
  //verticals
  for (let i = 0; i < 3; i++) {
    if (
      game[i][0] === game[i][1] &&
      game[i][1] === game[i][2] &&
      game[i][0] !== "_"
    ) {
      return game[i][0];
    }
  }
  //horizontals
  for (let i = 0; i < 3; i++) {
    if (
      game[0][i] === game[1][i] &&
      game[1][i] === game[2][i] &&
      game[0][i] !== "_"
    ) {
      return game[0][i];
    }
  }
  if (
    game[0][0] === game[1][1] &&
    game[1][1] === game[2][2] &&
    game[0][0] !== "_"
  ) {
    return game[0][0];
  }
  if (
    game[2][0] === game[1][1] &&
    game[1][1] === game[0][2] &&
    game[1][1] !== "_"
  ) {
    return game[1][1];
  }
  let noOfEmptyCells = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (game[i][j] === "_") {
        noOfEmptyCells++;
      }
    }
  }
  if (noOfEmptyCells === 0) {
    return "tie";
  }
  return null;
}
function bestMove(game) {
  let bestScore = -Infinity;
  let bestMove;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (game[i][j] === "_") {
        game[i][j] = "O";
        let score = minimax(game, 0, false);
        game[i][j] = "_";
        if (score > bestScore) {
          bestScore = score;
          bestMove = { i, j };
        }
      }
    }
  }
  return bestMove;
}
function minimax(game, depth, t) {
  let result = checkGame(game);
  if (result === "X") {
    return -10;
  } else if (result === "O") {
    return 10;
  } else if (result === "tie") {
    return 0;
  }
  if (t) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (game[i][j] === "_") {
          game[i][j] = "O";
          let score = minimax(game, depth + 1, false);
          game[i][j] = "_";
          if (score > bestScore) {
            bestScore = score;
          }
        }
      }
    }
    return bestScore - depth;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (game[i][j] === "_") {
          game[i][j] = "X";
          let score = minimax(game, depth + 1, true);
          game[i][j] = "_";
          if (score < bestScore) {
            bestScore = score;
          }
        }
      }
    }
    return bestScore + depth  ;
  }
}
