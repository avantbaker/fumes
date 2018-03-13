import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import AppWithNavigationState from './navigation/index';
import store from './reducers/root';
import SplashScreen from 'react-native-splash-screen';

export default class Root extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }

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
