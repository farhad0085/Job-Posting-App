import { combineReducers } from "redux";
import postReducer from "./postReducer";
import reportReducer from "./reportReducer";


const rootReducer = combineReducers({
  post: postReducer,
  report: reportReducer,
});

export default rootReducer;
