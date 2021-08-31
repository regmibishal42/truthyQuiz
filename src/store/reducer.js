import { combineReducers } from "redux";
import gameState from "./slices/gameinit";
import quiz from './slices/gameSlice';


export default combineReducers({gameState,quiz}); 