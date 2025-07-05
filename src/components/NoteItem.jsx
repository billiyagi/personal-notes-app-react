import React from "react";
import { Link } from "react-router-dom";
import { NoteType } from "../types/note";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import parse from "html-react-parser";

export default function NoteItem({ note }) {
	return (
		<div className="note-item">
			<h3 className="note-item__title">
				<Link to={`/note/${note.id}`}>{note.title}</Link>
			</h3>
			<p className="note-item__createdAt">
				{showFormattedDate(note.createdAt)}
			</p>
			<div className="note-item__body">{parse(note.body)}</div>
		</div>
	);
}

NoteItem.propTypes = {
	note: PropTypes.shape(NoteType).isRequired,
};
