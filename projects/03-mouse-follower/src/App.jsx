import { useEffect, useState } from "react";

const FollowMouse = () => {
	const [enabled, setEnablad] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	//pointer move
	useEffect(() => {
		// console.log("efecto");
		console.log("effect", { enabled });

		const handleMove = (event) => {
			const { clientX, clientY } = event;
			// console.log("handleMove", { clientX, clientY });
			setPosition({ x: clientX, y: clientY });
		};
		if (enabled) {
			window.addEventListener("pointermove", handleMove);
		}
		//cleanup
		// --> Cuando el componente se desmonta
		// --> Cuando cambian las dependencias antes de ejecutar el effect de nuevo
		return () => {
			//cleanup method
			console.log("cleanup");
			window.removeEventListener("pointermove", handleMove);
		};
	}, [enabled]);

	//change body classname
	useEffect(() => {
		document.body.classList.toggle("no-cursor", enabled);

		return () => {
			document.body.classList.remove;
		};
	}, [enabled]);

	return (
		<>
			<div
				style={{
					position: "absolute",
					backgroundColor: "rgba(0, 0, 0, 0.5)",
					border: "1px solid #fff",
					borderRadius: "50%",
					opacity: 0.8,
					pointerEvents: "none",
					left: -25,
					top: -25,
					width: 50,
					height: 50,
					transform: `translate(${position.x}px,${position.y}px)`,
				}}
			></div>
			<button
				onClick={() => {
					setEnablad(!enabled);
				}}
			>
				{enabled ? "Desativar" : "activar"} seguir puntero
			</button>
		</>
	);
};

function App() {
	const [mounted, setMounted] = useState(true);

	return (
		<main>
			{mounted && <FollowMouse />}
			<button onClick={() => setMounted(!mounted)}>Toggle mounted followMous component</button>
		</main>
	);
}

export default App;
