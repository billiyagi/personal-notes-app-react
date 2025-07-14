import React from "react";
import Layout from "../Layout";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import { useLocale } from "../contexts/LocaleContext";
import useInput from "../hooks/useInput";
import useApiRequest from "../hooks/useApiRequest";

export default function CreateNotePage() {
	const { request } = useApiRequest();
	const navigate = useNavigate();
	const [title, setTitle] = useInput();
	const [body, setBody] = useInput();

	const { text } = useLocale();

	const handleSaveNote = async () => {
		await request(addNote, { title, body });

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
						onChange={setTitle}
						value={title}
					/>
					<textarea
						className="add-new-page__input__body"
						placeholder={text.form.body.placeholder}
						onChange={setBody}
						value={body}
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
