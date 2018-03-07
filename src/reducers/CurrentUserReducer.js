import {LOGOUT_USER, UPDATE_USER} from "../actions/CurrentUserActions";
export const currentUserReducer = (state = {}, action) => {
    let nextState;

    switch(action.type) {
        case UPDATE_USER:
            nextState = action.payload;
            break;
        case LOGOUT_USER:
            nextState = action.payload;
            break;
        default:
            nextState = state;
            break;
    }

    return nextState || state;
};