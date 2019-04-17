import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      //Loading is set to true and is grabbing data from api
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case SUCCESS:
      //If data is grabbed, isLoading set to false and characted set to action.payload
      //to render data
      return {
        ...state,
        characters: action.payload,
        isLoading: false
      };
    case FAILURE:
      //If axios call fails, isLoading is set to false, and error is set to action.payload
      //to display error
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
