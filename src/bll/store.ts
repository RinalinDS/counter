import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "./localstroge-utility";


const reducers = combineReducers({
    counter: counterReducer
})


export const store = createStore(reducers, loadState())


store.subscribe(() => {
    saveState({
        counter: store.getState().counter

    });
});



export type AppStoreType = typeof store

export type AppRootStateType = ReturnType<typeof reducers>


//@ts-ignore
window.store= store