import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import { NoteType } from "../types/note";

export default function NoteList({ notes }) {
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
						<p>No notes available.</p>
					</div>
				)}
			</div>
		</>
	);
}

NoteList.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.shape(NoteType).isRequired),
};
