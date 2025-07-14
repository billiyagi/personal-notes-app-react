import { useState, useMemo, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import { applyTheme, getTheme } from "../utils";

export default function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");

	/**
	 * Init the theme on storage
	 */
	useEffect(() => {
		const initTheme = () => {
			const appliedTheme = getTheme();
			// If its available, then use the local storage theme
			if (appliedTheme) {
				setTheme(appliedTheme);
			}
		};

		initTheme();
	}, []);

	const toggleTheme = () => {
		applyTheme(theme == "light" ? "dark" : "light");
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	const contextValue = useMemo(
		() => ({
			theme,
			toggleTheme,
		}),
		[theme]
	);

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
}
