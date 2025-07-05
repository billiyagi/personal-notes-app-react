import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<h1>
				<Link to={"/"}>Personal Notes App</Link>
			</h1>
			<nav className="navigation">
				<ul>
					<li>
						<Link to={"/archived"}>Arsip</Link>
					</li>
					<li>
						<Link to={"/about"}>About</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
