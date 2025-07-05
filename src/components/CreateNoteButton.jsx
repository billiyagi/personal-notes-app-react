import React from "react";
import { Link } from "react-router-dom";

export default function CreateNoteButton() {
	return (
		<div className="homepage__action">
			<Link className="action" title="Create New Note" to={"/create"}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 4.5v15m7.5-7.5h-15"
					/>
				</svg>
			</Link>
		</div>
	);
}
