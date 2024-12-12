import { useEffect, useState } from "react";

function App() {
	const [enabled, setEnablad] = useState(false);

	useEffect(() => {
		console.log("efecto");
	});

	return (
		<main>
			<div
				style={{
					position: "absolute",
					backgroundColor: "#09f",
					borderRadius: "50%",
					opacity: 0.8,
					pointerEvents: "none",
					left: -20,
					top: -20,
					width: 40,
					height: 40,
					transform: "translate(0px,0px)",
				}}
			></div>
			<button
				onClick={() => {
					setEnablad(!enabled);
				}}
			>
				{enabled ? "Desativar" : "activar"} seguir puntero
			</button>
		</main>
	);
}

export default App;
