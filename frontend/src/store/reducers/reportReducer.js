import * as Types from "../actions/actionTypes";

const initialState = {
  submitted: false,
  loading: false,
  error: "",
};

function reportReducer(state = initialState, action) {
  switch (action.type) {
    case Types.REPORT_SUBMISSION_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case Types.REPORT_SUBMISSION_ERROR: {
      return {
        submitted: false,
        loading: false,
        error: action.payload
      };
    }
    case Types.REPORT_SUBMITTED: {
      return {
        loading: false,
        error: "",
        submitted: action.payload
      };
    }
    default:
      return state;
  }
}

export default reportReducer;
