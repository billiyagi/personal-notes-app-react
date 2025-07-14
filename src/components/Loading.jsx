import React from "react";
import { useLocale } from "../contexts/LocaleContext";
export default function Loading() {
	const { text } = useLocale();
	return (
		<div className="w-full loading-indicator">
			<span className="loader loader-screen"></span>
			<div>{text.loading}</div>
		</div>
	);
}
