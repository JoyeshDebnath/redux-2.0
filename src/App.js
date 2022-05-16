import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Increase, Decrease } from "./actions/counterActions";

function App() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();

	console.log(counter, isLogged);
	return (
		<div className="container">
			<h1>
				Counter: <span style={{ color: "green" }}>{counter}</span>
			</h1>
			<Button
				className="btn btn-primary m-4"
				onClick={() => dispatch(Increase())}
			>
				ADD
			</Button>
			<Button
				className="btn btn-danger m-4"
				onClick={() => dispatch(Decrease())}
			>
				Subtract
			</Button>
		</div>
	);
}

export default App;
