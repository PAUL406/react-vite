import { useState } from "react";

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export function TwitterfollowCard({ userName, name, initialFollowing }) {
	// const state = useState(false);
	// const isfollowing = state[0];
	// const setIsfollowing = state[1];

	const [isFollowing, SetIsFollowing] = useState(initialFollowing);

	const text = isFollowing ? "siguiendo" : "seguir";
	const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";

	const handleClick = () => {
		SetIsFollowing(!isFollowing);
	};
	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img className="tw-followCard-avatar" src={`https://unavatar.io/${userName}`} alt="avatar simple" />
				<div className="tw-followCard-info">
					<strong>{name}</strong>
					<span className="tw-followCard-infoUserName">@{userName}</span>
				</div>
			</header>

			<aside>
				<button className={buttonClassName} onClick={handleClick}>
					<span className="tw-followCard-text">{text}</span>
					<span className="tw-followCard-stopFollow">Dejar de seguir</span>
				</button>
			</aside>
		</article>
	);
}
