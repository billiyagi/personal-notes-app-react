import React, { useState } from "react";
import Layout from "../Layout";
import NoteList from "../components/NoteList";
import CreateNoteButton from "../components/CreateNoteButton";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/network-data";
import { useEffect } from "react";
import useApiRequest from "../hooks/useApiRequest";
import Loading from "../components/Loading";

export default function HomePage() {
	const { request, isLoading } = useApiRequest();
	const [notes, setNotes] = useState([]);
	const [keywordSearch, setKeywordSearch] = useState("");

	useEffect(() => {
		const fetchNotes = async () => {
			const { data } = await request(getActiveNotes);
			setNotes(data);
		};

		fetchNotes();
	}, []);

	/**
	 * If the keyword exist, use the filtered data, if empty use the original data
	 */
	let searchResult = [];
	if (keywordSearch) {
		searchResult = notes.filter((note) => {
			return note.title
				.toLowerCase()
				.includes(keywordSearch.toLowerCase());
		});
	}

	return (
		<Layout>
			<SearchBar keyword={keywordSearch} setKeyword={setKeywordSearch} />
			{isLoading ? (
				<Loading />
			) : (
				<NoteList notes={keywordSearch ? searchResult : notes} />
			)}
			<CreateNoteButton />
		</Layout>
	);
}
