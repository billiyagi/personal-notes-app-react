import React from "react";
import { Link } from "react-router-dom";
import { useLocale } from "../contexts/LocaleContext";
import ThemeSwitcherButton from "./ThemeSwitcherButton";
import LocaleSwitcherButton from "./LocaleSwitcherButton";
import ProfileUser from "./ProfileUser";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
	const { user, logout } = useAuth();
	const { text } = useLocale();
	return (
		<header>
			<h1>
				<Link to={"/"}>{text.brand}</Link>
			</h1>
			<nav className="navigation">
				<ul>
					<li>
						<Link to={"/archived"}>{text.nav.archive}</Link>
					</li>
					<li>
						<Link to={"/about"}>{text.nav.about}</Link>
					</li>
				</ul>
			</nav>
			<LocaleSwitcherButton />
			<ThemeSwitcherButton />
			{user && <ProfileUser user={user} logout={logout} />}
		</header>
	);
}
