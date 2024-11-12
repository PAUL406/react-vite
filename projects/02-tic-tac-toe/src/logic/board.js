import { WINNER_COMBOS } from "../contants";

export const checkWinnerFrom = (checkToBoard) => {
	for (const combo of WINNER_COMBOS) {
		const [a, b, c] = combo;
		//se revisan todas las combinaciones ganadoreas para ver si X/O gano
		if (checkToBoard[a] && checkToBoard[a] === checkToBoard[b] && checkToBoard[a] === checkToBoard[c]) {
			return checkToBoard[a];
		}
	}

	//si no hay ganador
	return null;
};

export const checkEndGame = (newBoard) => {
	//revisamos si existe un empate
	//si no hay espacios vacios en el tablero
	// console.log(newBoard);

	return newBoard.every((Square) => Square !== null);
};
