import React from "react";
import Layout from "../Layout";
import { useLocale } from "../contexts/LocaleContext";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { register } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import useApiRequest from "../hooks/useApiRequest";
import Button from "../components/Button";

export default function RegisterPage() {
	const { text } = useLocale();
	const [name, setName] = useInput();
	const [email, setEmail] = useInput();
	const [password, setPassword] = useInput();
	const [confirm, setConfirm] = useInput();
	const navigate = useNavigate();
	const { request, isLoading } = useApiRequest();

	const handleOnSubmit = async () => {
		/**
		 * Check all the required field
		 */
		if (!name || !email || !password || !confirm) {
			alert(text.register.validation.allRequired);
			return;
		}

		if (password !== confirm) {
			alert(text.register.validation.confirm);
			return;
		}

		const response = await request(register, {
			name,
			email,
			password,
		});

		if (!response.error) {
			navigate("/login");
		}
	};
	return (
		<Layout>
			<section>
				<h2>{text.register.titlePage}</h2>
				<div className="input-login">
					<label htmlFor="name">{text.register.name.label}</label>
					<input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={setName}
						required
					/>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={setEmail}
						required
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={setPassword}
						required
					/>
					<label htmlFor="password_confirm">
						{text.register.confirm.label}
					</label>
					<input
						type="password"
						name="password_confirm"
						id="password_confirm"
						value={confirm}
						onChange={setConfirm}
						required
					/>
					<Button
						text={text.register.button}
						onClick={handleOnSubmit}
						isLoading={isLoading}
					/>
				</div>
				<p>
					{text.register.toLoginText}{" "}
					<Link to={"/login"}>{text.register.textToLogin}</Link>
				</p>
			</section>
		</Layout>
	);
}
