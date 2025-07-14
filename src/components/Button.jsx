import React from "react";

export default function Button({ text, onClick, isLoading }) {
	if (isLoading) {
		return (
			<button
				type="button"
				onClick={onClick}
				className="button-submit"
				disabled
			>
				<span className="loader"></span> Loading
			</button>
		);
	} else {
		return (
			<button type="button" onClick={onClick}>
				{text}
			</button>
		);
	}
}
