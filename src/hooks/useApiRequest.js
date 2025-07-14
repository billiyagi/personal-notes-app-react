import { useState } from "react";

export default function useApiRequest() {
	const [isLoading, setIsLoading] = useState(false);

	const request = async (apiFunction, ...args) => {
		setIsLoading(true);
		try {
			const result = await apiFunction(...args);
			return result;
		} finally {
			setIsLoading(false);
		}
	};

	return { request, isLoading };
}
