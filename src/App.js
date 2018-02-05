import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppWithNavigationState from './navigation/index';
import store from './navigation/reducers/root';

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}
