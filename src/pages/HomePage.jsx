import React, { useState } from "react";
import Layout from "../Layout";
import NoteList from "../components/NoteList";
import CreateNoteButton from "../components/CreateNoteButton";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/local-data";

export default function HomePage() {
	let notes = getActiveNotes();

	const [keywordSearch, setKeywordSearch] = useState("");

	/**
	 * If the keyword exist, use the filtered data, if empty use the original data
	 */
	if (keywordSearch) {
		notes = notes.filter((note) => {
			return note.title
				.toLowerCase()
				.includes(keywordSearch.toLowerCase());
		});
	}

	return (
		<Layout>
			<SearchBar keyword={keywordSearch} setKeyword={setKeywordSearch} />
			<NoteList notes={notes} />
			<CreateNoteButton />
		</Layout>
	);
}
