const gameBoard = () => {
	const board = [0,0,0,0,0,0,0,0,0];
	const moves = 0;
	const getBoard = () => {
		return board;
	}
	const setPosition = (i, v) => {
		board[i] += v;
		moves++;
	}

	const state = () => {
		let row1 = board[0] + board[1] + board[2];
		let row2 = board[3] + board[4] + board[5];
		let row3 = board[6] + board[7] + board[8];
		let col1 = board[0] + board[3] + board[6];
		let col2 = board[1] + board[4] + board[7];
		let col3 = board[2] + board[5] + board[8];
		let diag1 = board[0] + board[4] + board[8];
		let diag2 = board[2] + board[4] + board[6];
		return [row1, row2, row3, col1, col2, col3, diag1, diag2];
	}

	const endCondition = () => {
		let state = state();
		if(moves == 8) {
			return 'tie';
		}
		if(state.some((e => e == 3))) {
			return 'Player one win';
		}
		if(state.some((e => e == 12))) {
			return 'Player two win';
		}
		return -1;
	}
	return { getBoard, setPosition, endCondition }
}

const gameFlow = () => {
	const player_one = 1;
	const player_two = 4;
	let turn = 1;
	let state = 1;
}
