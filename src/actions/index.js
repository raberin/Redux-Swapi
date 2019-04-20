// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const fetchData = () => dispatch => {
  //Dispatch FETCH before using axios call in doing so, the 'FETCH' state is set to
  //true and can be used to display a loading screen. Once either the data requested
  //is successful or failure the 'FETCH state is switch to false and data is rendered
  //or err is displayed
  dispatch({ type: FETCHING });
  axios
    .get("https://swapi.co/api/people/")
    .then(res => dispatch({ type: SUCCESS, payload: res.data.results }))
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};
