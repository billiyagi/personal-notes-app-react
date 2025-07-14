import { createContext, useContext } from "react"

const LocaleContext = createContext();

export function useLocale() {
	return useContext(LocaleContext);
}

export default LocaleContext;