import "./App.css";
import { TwitterfollowCard } from "./TwitterFollowCard";

const users = [
	{
		userName: "paul406",
		name: "paul",
		following: true,
	},
	{
		userName: "Pheralb",
		name: "Pablo H.",
		isFollowing: false,
	},
	{
		userName: "PacoHedez",
		name: "Paco hderz",
		isFollowing: true,
	},
	{
		userName: "TMChein",
		name: "Paco Tomas",
		isFollowing: false,
	},
];
export function App() {
	return (
		<section className="App">
			{users.map(({ userName, name, isFollowing }) => (
				<TwitterfollowCard key={userName} userName={userName} name={name} initialFollowing={isFollowing} />
			))}
		</section>
	);
}
