import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
	const response = await fetch(url, config);
	const resData = await response.json();
	if (!response.ok) {
		throw new Error(resData.message || "Some http Error");
	}
	return resData;
}
export default function useHttp(url, config, initialData) {
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(initialData);

	const sendRequest = useCallback(
		async function sendRequest(data) {
			setIsLoading(true);
			try {
				const resData = await sendHttpRequest(url, { ...config, body: data });
				setData(resData);
			} catch (err) {
				setError(err.message || "Something went wrong");
			}
			setIsLoading(false);
		},
		[url, config],
	);

	useEffect(() => {
		if (config?.method === "GET" || !config?.method) {
			sendRequest();
		}
	}, [sendRequest, config]);

	return {
		data,
		error,
		isLoading,
		sendRequest,
	};
}
