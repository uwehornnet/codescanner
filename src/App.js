import { useContext } from "react";
import Output from "./components/Output";

import Reader from "./components/Reader";
import { Context } from "./context";

import styles from "./styles/app.module.css";

function App() {
	const { showReader, setShowReader, output } = useContext(Context);

	return (
		<div className={styles.container}>
			{showReader ? (
				<Reader />
			) : output ? (
				<Output />
			) : (
				<img
					onClick={() => setShowReader(true)}
					src="/logo.png"
					alt="hässlicher Vogel"
					className={styles.logo}
				/>
			)}
		</div>
	);
}

export default App;
