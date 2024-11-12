import PropTypes from "prop-types";

Square.propTypes = {
	children: PropTypes.node,
	isSelected: PropTypes.bool,
	updateBoard: PropTypes.any,
	index: PropTypes.number,
};

export function Square({ children, isSelected, updateBoard, index }) {
	const className = `square ${isSelected ? "is-selected" : ""}`;

	const handleClick = () => {
		updateBoard(index);
	};

	return (
		<div onClick={handleClick} className={className} key={index}>
			{children}
		</div>
	);
}
