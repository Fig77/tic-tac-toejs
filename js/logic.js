const gameBoard = (() => {
	const board = [0,0,0,0,0,0,0,0,0];
	let moves = 0;
	const getBoard = () => {
		return board;
	}
	const validPosition = (i) => board[i] == 0;
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
		let status = state();
		if(moves == 8) {
			return 0;
		}
		if(status.some((e => e == 3))) {
			return 1;
		}
		if(status.some((e => e == 12))) {
			return 2;
		}
		return -1;
	};

	const clear = () => board = [0,0,0,0,0,0,0,0,0];

	return { getBoard, setPosition, endCondition, clear, validPosition }
})();

const gameFlow = (() => {
	let turn = 1; // player 1 - player 2
	const switch_turn = () => {
		turn = (turn == 1 ? 4 : 1);
	};
	const getTurn = () => turn;
	const game = (i) => {
		console.log(getTurn());
		let state = gameBoard.validPosition(i);
		if(state) {
		 gameBoard.setPosition(i, turn);
		 state = gameBoard.endCondition();
		 state != -1 ? gameBoard.clear() : switch_turn();
		}
		return state;
	};

	return { game, getTurn }
})();
