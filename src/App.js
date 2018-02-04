import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppWithNavigationState, { store } from './navigation/index';

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}
