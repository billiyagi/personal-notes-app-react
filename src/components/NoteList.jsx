import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import { NoteType } from "../types/note";
import { useLocale } from "../contexts/LocaleContext";

export default function NoteList({ notes }) {
	const { text } = useLocale();
	return (
		<>
			<div className="notes-list">
				{notes.map((note) => (
					<NoteItem key={note.id} note={note} />
				))}
			</div>
			<div>
				{notes.length === 0 && (
					<div className="notes-list-empty">
						<p>{text.notfound.data}</p>
					</div>
				)}
			</div>
		</>
	);
}

NoteList.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.shape(NoteType).isRequired),
};
