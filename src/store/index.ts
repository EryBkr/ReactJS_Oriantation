import { combineReducers } from "redux";
import { PhotoState } from "../types/photo";
import photoReducer from "./reducers/photoReducer";

export interface AppState{
    photo:PhotoState;
}

const rootReducer=combineReducers<AppState>({
    photo:photoReducer
});

export default rootReducer;