import React from 'react';
import { combineReducers, applyMiddleware } from 'redux';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { navigationReducer } from "./NavigationReducer";
import { reducer as formReducer } from 'redux-form';
import { firebaseReducer } from 'react-redux-firebase';
import { createStoreWithFirebase } from "../firebase";
import ReduxThunk from 'redux-thunk';
const rootReducer = combineReducers({
    nav: navigationReducer,
    form: formReducer,
    firebase: firebaseReducer
});

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

export const addListener = createReduxBoundAddListener("root");

// For Debugging
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export default createStoreWithFirebase( rootReducer, composeEnhancers(
    applyMiddleware(middleware, ReduxThunk)
));


// export default createStoreWithFirebase( rootReducer, applyMiddleware(middleware, ReduxThunk));