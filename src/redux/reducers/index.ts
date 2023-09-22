import { combineReducers } from "redux";
import employeeReducer from "./userReducer";

const rootReducer = combineReducers({
	employee: employeeReducer,
});

export default rootReducer;
