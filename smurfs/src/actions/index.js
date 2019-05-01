/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import * as AT from "./actionTypes";
import axios from "axios";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: AT.FETCH_DATA_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({
        type: AT.FETCH_DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: AT.FETCH_DATA_FAILURE, payload: err.response });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: AT.ADDING_DATA_START });
  return axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({
        type: AT.ADDING_DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: AT.ADDING_DATA_FAILURE, payload: err.response });
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: AT.DELETING_DATA_START });
  return axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({
        type: AT.DELETING_DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: AT.DELETING_DATA_FAILURE, payload: err.response });
    });
};

export const updateSmurf = (id, smurf) => dispatch => {
  dispatch({ type: AT.UPDATING_DATA_START });
  return axios
    .put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res => {
      dispatch({
        type: AT.UPDATING_DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: AT.UPDATING_DATA_SUCCESS, payload: err.response });
    });
};
