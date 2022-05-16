import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

//create a store ..
const myStore = createStore(allReducers);
//create  a store ..

root.render(
	<Provider store={myStore}>
		<App />
	</Provider>
);
reportWebVitals();
