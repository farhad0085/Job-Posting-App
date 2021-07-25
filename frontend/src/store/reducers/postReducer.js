import * as Types from "../actions/actionTypes";

const initialState = {
  posts: {
    next: "",
    prev: "",
    results: []
  },
  loading: false,
  error: "",
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case Types.POST_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case Types.POST_LOAD_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    case Types.POST_LOADED: {
      return {
        ...state,
        loading: false,
        error: "",
        posts: action.payload
      };
    }
    default:
      return state;
  }
}

export default postReducer;
