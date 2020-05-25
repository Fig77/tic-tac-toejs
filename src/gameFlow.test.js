import game from './gameFlow';

test('When game starts, getTurn should return 1', () => {
  expect(game.getTurn()).toEqual(1);
});

test('When player 1 takes state will be -1', () => {
  const state = game.game(1);
  expect(state).toEqual(-1);
});

test('When player 1 takes his turn, the turn will be 4', () => {
  expect(game.getTurn()).toEqual(4);
});

test('When player 2 tries to play on a position that is taken, state will be false', () => {
  const state = game.game(1);
  expect(state).toBeFalsy();
});

test('When player 2 tries to play on a position that is taken turn should not change', () => {
  expect(game.getTurn()).toEqual(4);
});

test('After player one gets a winning combination, state should be one', () => {
  game.game(7);
  game.game(2);
  game.game(8);
  const state = game.game(3);
  expect(state).toEqual(1);
});

test('After player one gets a winning combination, and getScore should be [1, 0]', () => {
  expect(game.getScore()).toEqual([1, 0]);
});

test('After player two gets a winning combination, getScore should be [1, 1]', () => {
  game.game(7);
  game.game(1);
  game.game(4);
  game.game(2);
  game.game(8);
  const state = game.game(3);
  expect(state).toEqual(2);
});

test('After player two gets a winning combination, state should be 2', () => {
  expect(game.getScore()).toEqual([1, 1]);
});


test('After players get a tie combination, state should be false', () => {
  game.game(7);
  game.game(1);
  game.game(4);
  game.game(2);
  game.game(8);
  game.game(5);
  game.game(3);
  game.game(6);
  const state = game.game(9);
  expect(state).toEqual(0);
});

test('After players get a tie combination, score should be [1,1]', () => {
  expect(game.getScore()).toEqual([1, 1]);
});
