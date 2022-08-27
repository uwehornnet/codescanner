import { QrReader } from "react-qr-reader";

import { useContext } from "react";
import { Context } from "../context";

import styles from "../styles/reader.module.css";

const Reader = () => {
	const { CONFIG, result, setResult, setError, setShowReader, fetchDataAsync } = useContext(Context);
	return (
		<div className={styles.container}>
			<span
				className={styles.close}
				onClick={() => {
					setShowReader(false);
					setResult(null);
					setError(null);
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</span>
			{result && <span className={styles.result}>{result}</span>}
			<QrReader
				className={styles.reader}
				scanDelay={CONFIG.delay}
				constraints={CONFIG.constraints}
				onResult={(result, error) => {
					if (!!result) {
						setResult(result?.text);
					}

					if (!!error) {
						setError(error);
					}
				}}
				style={{ width: "100%", height: "100%" }}
			/>
			<div className={styles.overlay}>
				<span
					onClick={() => {
						fetchDataAsync();
						setShowReader(false);
						setResult(null);
						setError(null);
					}}
				></span>
			</div>
		</div>
	);
};

export default Reader;
