import React from 'react';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { navigationReducer } from "./NavigationReducer";
import { reducer as formReducer } from 'redux-form';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import * as firebase from 'firebase';

const rootReducer = combineReducers({
    nav: navigationReducer,
    form: formReducer,
    firebase: firebaseReducer
});

const rrfConfig = {
    userProfile: 'users',
}

let config = {
    apiKey: "AIzaSyBp-suaIb50aLSWz84ACmzaXxOfCvAr0OE",
    authDomain: "fumes-b64b1.firebaseapp.com",
    databaseURL: "https://fumes-b64b1.firebaseio.com",
    projectId: "fumes-b64b1",
    storageBucket: "",
    messagingSenderId: "528921267209"
};

firebase.initializeApp(config);
firebase.auth().signOut();

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig)
)(createStore);

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const addListener = createReduxBoundAddListener("root");

export default createStoreWithFirebase( rootReducer, composeEnhancers(
    applyMiddleware(middleware)
));