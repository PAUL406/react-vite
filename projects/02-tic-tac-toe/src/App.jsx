import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
const TURS = { x: "X", o: "O" };
// const board = Array(9).fill(null);
import PropTypes from "prop-types";

Square.propTypes = {
	children: PropTypes.node.isRequired,
	isSelected: PropTypes.bool.isRequired,
	updateBoard: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
};

const Square = ({ children, isSelected, updateBoard, index }) => {
	const className = `square ${isSelected ? "is-selected" : ""}`;

	const handleClick = () => {
		updateBoard(index);
	};

	return (
		<div onClick={handleClick} className={className} key={index}>
			{children}
		</div>
	);
};

// Definir las combinaciones ganadoras
const WINNER_COMBOS = [
	[0, 1, 2], // Fila superior
	[3, 4, 5], // Fila media
	[6, 7, 8], // Fila inferior
	[0, 3, 6], // Columna izquierda
	[1, 4, 7], // Columna central
	[2, 5, 8], // Columna derecha
	[0, 4, 8], // Diagonal de izquierda a derecha
	[2, 4, 6], // Diagonal de derecha a izquierda
];

function App() {
	const [board, setBoard] = useState(Array(9).fill(null));

	const [turn, setTurn] = useState(TURS.x);

	//null es que no hay ganador, false es un empate
	const [winner, setWinner] = useState(null);

	const checkWinner = (checkToBoard) => {
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

	const resetGame = () => {
		setBoard(Array(9).fill(null));
		setTurn(TURS.x);
		setWinner(null);
	};

	const checkEndGame = (newBoard) => {
		//revisamos si existe un empate
		//si no hay espacios vacios en el tablero
		// console.log(newBoard);

		return newBoard.every((Square) => Square !== null);
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

		const newWinner = checkWinner(newBoard);

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

			{winner !== null && (
				<section className="winner">
					<div className="text">
						<h2>{winner === false ? "Empate" : `Gano ${winner}`}</h2>
						<header className="win">{winner && <Square>{winner}</Square>}</header>
						<footer>
							<button onClick={resetGame}>Empezar de nuevo</button>
						</footer>
					</div>
				</section>
			)}
		</main>
	);
}

export default App;
