import React from "react";
import Layout from "../Layout";
import { useState } from "react";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import { useLocale } from "../contexts/LocaleContext";

export default function CreateNotePage() {
	const navigate = useNavigate();
	const { text } = useLocale();
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
			body: e.target.value,
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
						placeholder={text.form.title.placeholder}
						onChange={handleChangeTitle}
						value={note.title}
					/>
					<textarea
						className="add-new-page__input__body"
						placeholder={text.form.body.placeholder}
						onChange={handleChangeBody}
						value={note.body}
					></textarea>
				</div>

				<div className="add-new-page__action">
					<button
						className="action"
						title={text.form.button}
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
