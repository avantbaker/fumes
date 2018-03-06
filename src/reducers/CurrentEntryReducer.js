import { UPDATE_ENTRY, UPDATE_SECTION } from "../actions/CurrentEntryActions"
export const currentEntryReducer = (state = {}, action) => {
    let nextState;

    switch(action.type) {
        case UPDATE_ENTRY:
            nextState = { ...state, ...action.payload };
            break;
        case UPDATE_SECTION:
            nextState = { ...state, ...action.payload };
            break;
        default:
            nextState = state;
            break;
    }

    return nextState || state;
};