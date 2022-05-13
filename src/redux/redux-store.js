import {combineReducers, legacy_createStore} from "redux";
import sitebarReducer from "./sitebar-reducer";
import dialoguesReducer from "./dialogues-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    sitebar: sitebarReducer
});

let store = legacy_createStore(reducers);

export default store;