import { combineReducers } from "redux";

import ideasReducer from "./idea";

const initial = {};

export function appReducer(state = initial) {
    return state;
}

const rootReducer = combineReducers({
    app: appReducer,
    ideas: ideasReducer,
});

export default rootReducer;