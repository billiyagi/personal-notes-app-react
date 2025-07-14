import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
	getNote,
	deleteNote,
	archiveNote,
	unarchiveNote,
} from "../utils/local-data";
import Layout from "../Layout";
import { showFormattedDate } from "../utils";
import parse from "html-react-parser";
import { useLocale } from "../contexts/LocaleContext";

export default function DetailNotePage() {
	const params = useParams();
	const note = getNote(params.id);
	const navigate = useNavigate();
	const { text } = useLocale();

	/**
	 * Handle when user click the delete button
	 */
	const handleDeleteNote = () => {
		deleteNote(note.id);
		navigate("/");
	};

	/**
	 * Handle when user click the archive/unarchive button
	 */
	const handleArchiveNote = () => {
		if (note.archived) {
			unarchiveNote(note.id);
		} else {
			archiveNote(note.id);
		}
		navigate("/");
	};

	return (
		<Layout>
			<section className="detail-page">
				<h3 className="detail-page__title">{note.title}</h3>
				<p className="detail-page__createdAt">
					{showFormattedDate(note.createdAt)}
				</p>
				<div className="detail-page__body">{parse(note.body)}</div>
				<div className="detail-page__action">
					<button
						className="action"
						title="Arsip This Note"
						onClick={handleArchiveNote}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
						>
							{note.archived ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
								/>
							)}
						</svg>
					</button>
					<button
						className="action"
						title="Delete This Note"
						onClick={handleDeleteNote}
					>
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
								d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
							/>
						</svg>
					</button>
				</div>

				<Link to={"/"} className="button-to-home" title="Back to Home">
					{text.back}
				</Link>
			</section>
		</Layout>
	);
}
