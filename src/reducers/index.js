import { combineReducers } from "redux";
import pageIndexReducer from "./pageIndex";

const allReducers = combineReducers({
    myPageIndex: pageIndexReducer
});

export default allReducers;