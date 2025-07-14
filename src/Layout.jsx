import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useTheme } from "./contexts/ThemeContext";

export default function Layout({ children }) {
	const { theme } = useTheme();
	return (
		<div data-theme={theme} className="app-container">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
