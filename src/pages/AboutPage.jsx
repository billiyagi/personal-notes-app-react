import React from "react";
import Layout from "../Layout";
import { useLocale } from "../contexts/LocaleContext";

export default function AboutPage() {
	const { text } = useLocale();
	return (
		<Layout>
			<section>
				<h1>{text.about.title}</h1>
				<p>{text.about.body}</p>
			</section>
		</Layout>
	);
}
