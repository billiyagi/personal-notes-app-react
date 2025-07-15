import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function ProfileUser({ user, logout }) {
	const navigate = useNavigate();

	const handleLogout = () => {
		const confirmation = confirm("Are you sure?");

		if (confirmation) {
			logout();
			navigate("/login");
		}
	};

	return (
		<button
			className="button-logout"
			title="Logout Button"
			onClick={handleLogout}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
				/>
			</svg>
			{user.name}
		</button>
	);
}

ProfileUser.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
	}).isRequired,
	logout: PropTypes.func.isRequired,
};
