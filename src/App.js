import { useContext } from "react";

import Reader from "./components/Reader";
import { Context } from "./context";

import styles from "./styles/app.module.css";

function App() {
	const { showReader, setShowReader } = useContext(Context);

	return (
		<div className={styles.container}>
			{showReader ? (
				<Reader />
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
