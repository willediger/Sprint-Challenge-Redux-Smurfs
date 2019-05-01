/*
  Be sure to import in all of the action types from `../actions`
*/
import * as AT from "../actions/actionTypes";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.FETCH_DATA_START:
      return {
        ...state,
        error: null,
        fetchingSmurfs: true
      };
    case AT.ADDING_DATA_START:
      return {
        ...state,
        error: null,
        addingSmurf: true
      };
    case AT.UPDATING_DATA_START:
      return {
        ...state,
        error: null,
        updatingSmurf: true
      };
    case AT.DELETING_DATA_START:
      return {
        ...state,
        error: null,
        deletingSmurf: true
      };
    case AT.FETCH_DATA_SUCCESS ||
      AT.ADDING_DATA_SUCCESS ||
      AT.UPDATING_DATA_START ||
      AT.DELETING_DATA_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        smurfs: action.payload
      };
    case AT.FETCH_DATA_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case AT.ADDING_DATA_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    case AT.UPDATING_DATA_FAILURE:
      return {
        ...state,
        updatingSmurf: false,
        error: action.payload
      };
    case AT.DELETING_DATA_FAILURE:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
