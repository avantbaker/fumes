import * as firebase from 'firebase';
import { compose, createStore } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';

const rrfConfig = {
    userProfile: 'users',
    enableRedirectHandling: false
};

const config = {
    apiKey: "AIzaSyBp-suaIb50aLSWz84ACmzaXxOfCvAr0OE",
    authDomain: "fumes-b64b1.firebaseapp.com",
    databaseURL: "https://fumes-b64b1.firebaseio.com",
    projectId: "fumes-b64b1",
    storageBucket: "",
    messagingSenderId: "528921267209"
};

firebase.initializeApp(config);
firebase.auth().signOut();

export const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig)
)(createStore);
