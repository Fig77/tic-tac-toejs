const gameBoard = (() => {
  let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let moves = 0;
  const getBoard = () => board;
  const validPosition = (i) => board[i] === 0;
  const setPosition = (i, v) => {
    board[i] += v;
    moves += 1;
  };

  const state = () => {
    const row1 = board[0] + board[1] + board[2];
    const row2 = board[3] + board[4] + board[5];
    const row3 = board[6] + board[7] + board[8];
    const col1 = board[0] + board[3] + board[6];
    const col2 = board[1] + board[4] + board[7];
    const col3 = board[2] + board[5] + board[8];
    const diag1 = board[0] + board[4] + board[8];
    const diag2 = board[2] + board[4] + board[6];
    return [row1, row2, row3, col1, col2, col3, diag1, diag2];
  };

  const endCondition = () => {
    const status = state();
    if (moves === 9) {
      return 0;
    }
    if (status.some((e => e === 3))) {
      return 1;
    }
    if (status.some((e => e === 12))) {
      return 2;
    }
    return -1;
  };

  const clear = () => {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    moves = 0;
  };

  return {
    getBoard, setPosition, endCondition, clear, validPosition,
  };
})();

export default gameBoard;