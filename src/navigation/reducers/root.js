import React from 'react';
import { combineReducers } from 'redux';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import { navigationReducer } from "./navigationReducer";

export const rootReducer = combineReducers({
    nav: navigationReducer
});

export const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

export const addListener = createReduxBoundAddListener("root");