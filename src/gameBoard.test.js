import gameBoard from './gameBoard';


test('getBoard should return a board with current state', () => {
  expect(gameBoard.getBoard()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

test('setPosition(index,value) should change the positon of the board', () => {
  gameBoard.setPosition(2, 1);
  expect(gameBoard.getBoard()).toEqual([0, 0, 1, 0, 0, 0, 0, 0, 0]);
});

test('clear will clear the board and set it to all 0', () => {
  gameBoard.clear();
  expect(gameBoard.getBoard()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

test('endCondition will return 1 if player 1 wins (row)', () => {
  gameBoard.clear();
  gameBoard.setPosition(0, 1);
  gameBoard.setPosition(1, 1);
  gameBoard.setPosition(2, 1);
  expect(gameBoard.endCondition()).toEqual(1);
});

test('endCondition will return 2 if player 2 wins (col)', () => {
  gameBoard.clear();
  gameBoard.setPosition(0, 4);
  gameBoard.setPosition(3, 4);
  gameBoard.setPosition(6, 4);
  expect(gameBoard.endCondition()).toEqual(2);
});

test('endCondition will return 1 if player 1 wins (diagonal)', () => {
  gameBoard.clear();
  gameBoard.setPosition(0, 1);
  gameBoard.setPosition(4, 1);
  gameBoard.setPosition(8, 1);
  expect(gameBoard.endCondition()).toEqual(1);
});

test('If there is no winner and no more moves endCondition will return 0 (tie)', () => {
  gameBoard.clear();
  gameBoard.setPosition(0, 1);
  gameBoard.setPosition(1, 4);
  gameBoard.setPosition(3, 1);
  gameBoard.setPosition(4, 4);
  gameBoard.setPosition(6, 4);
  gameBoard.setPosition(7, 1);
  gameBoard.setPosition(2, 1);
  gameBoard.setPosition(5, 4);
  gameBoard.setPosition(8, 1);
  expect(gameBoard.endCondition()).toEqual(0);
});

test('validPosition will return false if the position is already filled', () => {
  gameBoard.clear();
  gameBoard.setPosition(0, 1);
  expect(gameBoard.validPosition(0)).toBeFalsy();
});

test('validPosition will return true if the position is not filled yet', () => {
  gameBoard.clear();
  expect(gameBoard.validPosition(0)).toBeTruthy();
});
