import { storeData } from "../../utils/storage";
import * as Types from "../actions/actionTypes";

const initialState = {
  isDarkTheme: false,
};

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case Types.TOGGLE_THEME: {
      storeData("@theme", action.payload)
      return {
        isDarkTheme: action.payload === "dark" ? true : false,
      };
    }
    default:
      return state;
  }
}

export default themeReducer;
