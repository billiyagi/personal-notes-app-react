import React from "react";
import Layout from "../Layout";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/local-data";

export default function ArchivedNotePage() {
	const archivedNotes = getArchivedNotes();
	return (
		<Layout>
			<NoteList notes={archivedNotes} />
		</Layout>
	);
}
