import { createContext, useEffect, useState } from "react";

const endpoint = process.env.NODE_ENV === "development" ? "http://localhost:8080/" : "";

const CONFIG = {
	delay: 300,
	constraints: {
		facingMode: "environment",
	},
};

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [showReader, setShowReader] = useState(false);

	const [result, setResult] = useState(null);
	const [output, setOutput] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);

	const fetchDataAsync = async () => {
		try {
			if (!loading) setLoading(true);
			const req = await fetch(result, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const res = await req.json();
			// do something with the result

			console.log({ res });
			setOutput(res);
			setLoading(false);
		} catch (err) {
			setError(err);
		}
	};

	return (
		<Context.Provider
			value={{
				loading,
				setLoading,
				error,
				setError,
				result,
				setResult,
				CONFIG,
				output,
				showReader,
				setShowReader,
				fetchDataAsync,
			}}
		>
			{children}
		</Context.Provider>
	);
};
