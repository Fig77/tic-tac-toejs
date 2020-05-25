import gameBoard from './gameBoard';

/* eslint-disable no-unused-vars */
const gameFlow = (() => {
  let turn = 1; // player 1 - player 2
  const score = [0, 0];
  const switchTurn = () => {
    turn = (turn === 1 ? 4 : 1);
  };
  const getTurn = () => turn;
  const getScore = () => score;
  const game = (i) => {
    let state = gameBoard.validPosition(i - 1);
    if (state) {
      gameBoard.setPosition(i - 1, turn);
      state = gameBoard.endCondition();
      if (state === 1) score[0] += 1;
      else if (state === 2) score[1] += 1;
      if (state !== -1) {
        gameBoard.clear();
      } else {
        switchTurn();
      }
    }
    return state;
  };

  return { game, getTurn, getScore };
})();

export default gameFlow;
