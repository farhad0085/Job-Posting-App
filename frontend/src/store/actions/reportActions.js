import * as Types from "./actionTypes";
import axios from "../../utils/axios";

export const submitReport = (data) => (dispatch) => {
  dispatch({ type: Types.REPORT_SUBMISSION_LOADING, payload: true });

  axios
    .post("/reports/", data)
    .then((res) => {
      dispatch({ type: Types.REPORT_SUBMITTED, payload: true });
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({
        type: Types.REPORT_SUBMISSION_ERROR,
        payload: "Error occured",
      });
    });
};
