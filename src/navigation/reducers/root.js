import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import { navigationReducer } from "./navigationReducer";

const rootReducer = combineReducers({
    nav: navigationReducer
});

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

export const addListener = createReduxBoundAddListener("root");

export default createStore( rootReducer, applyMiddleware(middleware) );