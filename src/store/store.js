import {createStore} from "@reduxjs/toolkit";

const defaultState = {
    authenticationRole: false,
    jwtToken: false
}

const loadState = () => {
    try { 
        const serializedState = sessionStorage.getItem('authenticationStatus');
        if (serializedState === null) {
            return defaultState;
        } else {
            return JSON.parse(serializedState);
        }
    } catch (err) {
        return defaultState;
    }
}

const update = (state = {}, action) => {
    console.log(state)
    return state
}

const store = createStore(update, loadState())
export default store;

