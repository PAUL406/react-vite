import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
// const board = Array(9).fill(null);
import { Square } from "./components/Square";
import { TURS } from "./contants";
import { checkWinnerFrom } from "./logic/board";
import { WinnerModal } from "./components/winnerModal";

import { checkEndGame } from "./logic/board";

function App() {
	const [board, setBoard] = useState(Array(9).fill(null));

	const [turn, setTurn] = useState(TURS.x);

	//null es que no hay ganador, false es un empate
	const [winner, setWinner] = useState(null);

	const resetGame = () => {
		setBoard(Array(9).fill(null));
		setTurn(TURS.x);
		setWinner(null);
	};

	const updateBoard = (index) => {
		//no actualizar esta posición si ya hay algo

		if (board[index] || winner) return;

		const newBoard = [...board];
		newBoard[index] = turn;

		setBoard(newBoard);

		const newTurn = turn === TURS.x ? TURS.o : TURS.x;
		setTurn(newTurn);

		//revisar si existe un ganador

		const newWinner = checkWinnerFrom(newBoard);

		if (newWinner) {
			confetti();
			setWinner(newWinner);
		} else if (checkEndGame(newBoard)) {
			setWinner(false); //empate
		}
	};
	return (
		<main className="board">
			<h1>tic tac toe</h1>
			<button onClick={resetGame}>Empezar de nuevo</button>

			<section className="game">
				{board.map((square, index) => {
					return (
						<Square key={index} index={index} updateBoard={updateBoard}>
							{square}
						</Square>
					);
				})}
			</section>

			<section className="turn">
				<Square isSelected={turn === TURS.x}>{TURS.x}</Square>
				<Square isSelected={turn === TURS.o}>{TURS.o}</Square>
			</section>

			<WinnerModal resetGame={resetGame} winner={winner} />
		</main>
	);
}

export default App;
