import React from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useLocale } from "../contexts/LocaleContext";

export default function NotFoundPage() {
	const { text } = useLocale();
	return (
		<Layout>
			<section className="not-found-page">
				<div>
					<h2>{text.notfound.page.title}</h2>
					<p>{text.notfound.page.message}</p>
					<Link to={"/"} className="button-to-home">
						{text.back}
					</Link>
				</div>
			</section>
		</Layout>
	);
}
