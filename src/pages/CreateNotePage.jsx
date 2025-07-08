import React from "react";
import Layout from "../Layout";
import { useState } from "react";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

export default function CreateNotePage() {
	const navigate = useNavigate();
	const [note, setNote] = useState({
		title: "",
		body: "",
	});

	const handleChangeTitle = (e) => {
		setNote({
			...note,
			title: e.target.value,
		});
	};

	const handleChangeBody = (e) => {
		setNote({
			...note,
			body: e.target.innerHTML,
		});
	};

	const handleSaveNote = () => {
		addNote(note);
		navigate("/");
	};

	return (
		<Layout>
			<section className="add-new-page">
				<div className="add-new-page__input">
					<input
						type="text"
						className="add-new-page__input__title"
						placeholder="Your Title Here"
						onChange={handleChangeTitle}
						value={note.title}
					/>
					<textarea
						className="add-new-page__input__body"
						placeholder="some word of your notes..."
						onChange={handleChangeBody}
						value={note.body}
					></textarea>
				</div>

				<div className="add-new-page__action">
					<button
						className="action"
						title="Save this Note"
						type="button"
						onClick={handleSaveNote}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m4.5 12.75 6 6 9-13.5"
							/>
						</svg>
					</button>
				</div>
			</section>
		</Layout>
	);
}
