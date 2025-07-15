import { useState, useMemo, useEffect } from "react";
import LocaleContext from "./LocaleContext";
import id from "../lang/id";
import en from "../lang/en";
import PropTypes from "prop-types";
import { getLocale, applyLocale } from "../utils";

export default function LocaleProvider({ children }) {
	const [locale, setLocale] = useState("id");

	/**
	 * Init the locale on storage
	 */
	useEffect(() => {
		const initLocale = () => {
			const appliedLocale = getLocale();
			// If its available, then use the local storage locale
			if (appliedLocale) {
				setLocale(appliedLocale);
			}
		};

		initLocale();
	}, []);

	const toggleLocale = () => {
		applyLocale(locale == "id" ? "en" : "id");
		setLocale((prev) => (prev === "id" ? "en" : "id"));
	};

	const translation = locale == "id" ? id : en;

	const contextValue = useMemo(
		() => ({
			text: translation,
			locale,
			toggleLocale,
		}),
		[locale, translation]
	);

	return (
		<LocaleContext.Provider value={contextValue}>
			{children}
		</LocaleContext.Provider>
	);
}

LocaleProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
