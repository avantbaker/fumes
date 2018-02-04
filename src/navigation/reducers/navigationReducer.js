import React, { Component } from 'react';
import {
    NavigationActions
} from 'react-navigation';

import Navigator from '../pages/index';

const initialState = Navigator.router.getStateForAction(NavigationActions.init());

export const navigationReducer = (state = initialState, action) => {
    const nextState = Navigator.router.getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};