import { combineReducers } from "redux";
import postReducer from "./postReducer";
import reportReducer from "./reportReducer";
import themeReducer from "./themeReducer";


const rootReducer = combineReducers({
  post: postReducer,
  report: reportReducer,
  theme: themeReducer,
});

export default rootReducer;
