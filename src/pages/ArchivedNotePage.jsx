import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import NoteList from "../components/NoteList";
import useApiRequest from "../hooks/useApiRequest";
import Loading from "../components/Loading";
import { getArchivedNotes } from "../utils/network-data";

export default function ArchivedNotePage() {
	const { request, isLoading } = useApiRequest();
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		const fetchArchivedNotes = async () => {
			const { data } = await request(getArchivedNotes);
			setNotes(data);
		};

		fetchArchivedNotes();
	}, []);

	return (
		<Layout>{isLoading ? <Loading /> : <NoteList notes={notes} />}</Layout>
	);
}
