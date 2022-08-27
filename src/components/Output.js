import { useContext } from "react";
import { Context } from "../context";

const Output = () => {
	const { output } = useContext(Context);
	return <div>{JSON.stringify(output)}</div>;
};

export default Output;
