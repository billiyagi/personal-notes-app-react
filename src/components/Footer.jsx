import React from "react";
import { useLocale } from "../contexts/LocaleContext";

export default function Footer() {
	const { text } = useLocale();
	return <footer>{text.footer}</footer>;
}
