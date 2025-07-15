import React from "react";
import PropTypes from "prop-types";

export default function Button({ text, onClick, isLoading }) {
	if (isLoading) {
		return (
			<button
				type="button"
				onClick={onClick}
				className="button-submit"
				disabled
			>
				<span className="loader loader-button"></span> Loading
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

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	isLoading: PropTypes.bool,
};
