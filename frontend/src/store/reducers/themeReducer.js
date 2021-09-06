import * as Types from "../actions/actionTypes";

const initialState = {
  isDarkTheme: false,
};

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case Types.TOGGLE_THEME: {
      return {
        isDarkTheme: !state.isDarkTheme,
      };
    }
    default:
      return state;
  }
}

export default themeReducer;
