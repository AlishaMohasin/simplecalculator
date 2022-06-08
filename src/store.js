import { legacy_createStore } from "redux";
import { reducer } from "./Reducer";
let initialstate = {
    count: 0
}
export const store =legacy_createStore(reducer,initialstate)
    
