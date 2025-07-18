import { createContext, useContext } from "react"

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export default AuthContext;