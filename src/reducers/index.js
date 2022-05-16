import counterReducer from "./counter";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";
//combine the reducers as one reducer
const allReducers = combineReducers({
	counter: counterReducer,
	isLogged: loggedReducer,
});

export default allReducers;
