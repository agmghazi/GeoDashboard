import { combineReducers } from "redux";
import mapServiceReducer from "./mapService";

export default combineReducers({
  mapService: mapServiceReducer,
});
