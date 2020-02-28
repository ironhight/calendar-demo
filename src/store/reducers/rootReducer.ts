import { combineReducers } from "redux";
import doctorReducer from "./doctorReducer";

const rootReducer = combineReducers({ doctorReducer });

export default rootReducer;
