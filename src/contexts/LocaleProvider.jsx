import { useState, useMemo } from "react";
import LocaleContext from "./LocaleContext";
import id from "../lang/id";
import en from "../lang/en";

export default function LocaleProvider({ children }) {
	const [locale, setLocale] = useState("id");

	const toggleLocale = () => {
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
