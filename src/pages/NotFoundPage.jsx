import React from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
	return (
		<Layout>
			<section className="not-found-page">
				<div>
					<h2>Not Found</h2>
					<p>The page you are looking for is empty</p>
					<Link to={"/"} className="button-to-home">
						Back to Home
					</Link>
				</div>
			</section>
		</Layout>
	);
}
