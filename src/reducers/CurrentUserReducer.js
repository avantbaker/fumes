import { UPDATE_USER } from "../actions/CurrentUserActions";
export const currentUserReducer = (state = {}, action) => {
    let nextState;

    switch(action.type) {
        case UPDATE_USER:
            nextState = action.payload;
            break;
        default:
            nextState = state;
            break;
    }

    return nextState || state;
};