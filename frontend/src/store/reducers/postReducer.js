import * as Types from "../actions/actionTypes";

const initialState = {
  posts: {
    next: "",
    prev: "",
    results: []
  },
  singlePost: {
    loading: false,
    postData: {}
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
      state[action.whereTo || "posts"] = action.payload
      return {
        ...state,
        loading: false,
        error: "",
      };
    }
    case Types.POST_DETAIL_LOADING: {
      return {
        ...state,
        singlePost: {
          ...state.singlePost,
          loading: action.payload
        }
      };
    }
    case Types.POST_DETAIL_LOADED: {
      return {
        ...state,
        singlePost: {
          ...state.singlePost,
          loading: false,
          postData: action.payload,
          error: ""
        }
      };
    }
    case Types.POST_DETAIL_LOAD_ERROR: {
      return {
        ...state,
        singlePost: {
          ...state.singlePost,
          loading: false,
          postData: {},
          error: action.payload
        }
      };
    }
    default:
      return state;
  }
}

export default postReducer;
