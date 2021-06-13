import { combineReducers } from "redux";
import artistState from "./Artist";
import eventState from "./Event";
export default combineReducers({
  artistState,
  eventState,
});
