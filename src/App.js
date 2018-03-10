import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import AppWithNavigationState from './navigation/index';
import store from './reducers/root';

export default class Root extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#00171f'}} >
                <Provider store={store}>
                    <AppWithNavigationState />
                </Provider>
            </SafeAreaView>
        );
    }
}
