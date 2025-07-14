import { useState, useMemo } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
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
