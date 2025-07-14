import AuthContext from "./AuthContext";
import { useState, useEffect } from "react";
import {
	putAccessToken,
	getAccessToken,
	getUserLogged,
	login,
} from "../utils/network-data";

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [isInitializing, setIsInitializing] = useState(true);

	/**
	 * If the user first time using/open the app, then do verify the token
	 */
	useEffect(() => {
		const init = async () => {
			const token = getAccessToken();
			if (token) {
				const { error, data } = await getUserLogged();
				if (!error) {
					setUser(data);
				} else {
					// token invalid? hapus
					putAccessToken("");
				}
			}
			setIsInitializing(false);
		};

		init();
	}, []);

	const authenticate = async (response) => {
		if (!response.error) {
			putAccessToken(response.data.accessToken);
			const userResponse = await getUserLogged();
			if (!userResponse.error) {
				setUser(userResponse.data);
			}
			return true;
		}
		return false;
	};

	const logout = () => {
		putAccessToken("");
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{ user, setUser, authenticate, logout, isInitializing }}
		>
			{children}
		</AuthContext.Provider>
	);
}
