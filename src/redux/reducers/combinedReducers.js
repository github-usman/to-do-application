import todoReducers from "./toDoReducer";

import { combineReducers } from "redux";
const combinedReducers = combineReducers({
    todoReducers
})


export default combinedReducers;