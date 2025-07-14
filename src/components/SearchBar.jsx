import React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocale } from "../contexts/LocaleContext";

export default function SearchBar({ setKeyword, keyword }) {
	const { text } = useLocale();
	const [searchParams, setSearchParams] = useSearchParams();

	const paramKeyword = searchParams.get("keyword");

	/**
	 * Set the Keyword using parameter when its first time access
	 */
	useEffect(() => {
		setKeyword(paramKeyword || "");
	}, [paramKeyword]);

	/**
	 * Handle changes from input search bar
	 */
	const handleSearchNotes = (e) => {
		setSearchParams({
			keyword: e.target.value,
		});
		setKeyword(e.target.value);
	};

	return (
		<section className="search-bar">
			<h2>{text.search.label}</h2>
			<input
				type="text"
				placeholder={text.search.placeholder}
				onChange={handleSearchNotes}
				value={keyword}
			/>
		</section>
	);
}

SearchBar.propTypes = {
	keyword: PropTypes.string.isRequired,
	setKeyword: PropTypes.func.isRequired,
};
