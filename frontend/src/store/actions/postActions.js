import axios from "../../utils/axios";
import * as Types from "./actionTypes";


export const loadPosts = (filters, url) => (dispatch) => {
  dispatch({ type: Types.POST_LOADING, payload: true });

  let postUrl = url || "/posts/";

  axios
    .get(postUrl, { params: filters })
    .then((res) => {
      console.log("Posts loaded");
      dispatch({ type: Types.POST_LOADED, payload: res.data });
    })
    .catch((error) => {
      console.log("Error occured", error);
      dispatch({ type: Types.POST_LOAD_ERROR, payload: "Error loading posts" });
    });
};

export const loadPost = (postId) => dispatch => {
  dispatch({ type: Types.POST_DETAIL_LOADING, payload: true });

  axios
    .get(`/posts/${postId}`)
    .then((res) => {
      console.log("Post loaded");
      dispatch({ type: Types.POST_DETAIL_LOADED, payload: res.data });
    })
    .catch((error) => {
      console.log("Error occured", error);
      dispatch({ type: Types.POST_DETAIL_LOAD_ERROR, payload: "Error loading posts" });
    });
}
