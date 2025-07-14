import React from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useLocale } from "../contexts/LocaleContext";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { login, putAccessToken } from "../utils/network-data";
import useApiRequest from "../hooks/useApiRequest";
import Button from "../components/Button";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
	const { request, isLoading } = useApiRequest();
	const { text } = useLocale();
	const [email, setEmail] = useInput();
	const [password, setPassword] = useInput();
	const navigate = useNavigate();
	const { authenticate } = useAuth();

	const handleOnSubmit = async () => {
		/**
		 * Check required field
		 */
		if (!email || !password) {
			alert(text.login.validation);
			return;
		}

		const response = await request(login, { email, password });

		if (authenticate(response)) {
			navigate("/");
		}
	};

	return (
		<Layout>
			<section className="login-page">
				<h2>{text.login.titlePage}</h2>
				<div className="input-login">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={setEmail}
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={setPassword}
					/>
					<Button
						text={text.login.button}
						isLoading={isLoading}
						onClick={handleOnSubmit}
					/>
				</div>
				<p>
					{text.login.toRegistText}{" "}
					<Link to={"/register"}>{text.login.textToRegist}</Link>
				</p>
			</section>
		</Layout>
	);
}
