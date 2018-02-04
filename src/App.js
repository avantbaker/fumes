import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    StackNavigator,
    addNavigationHelpers,
    NavigationActions
} from 'react-navigation';
import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';

import AuthScreen from './components/screens/AuthScreen';
import HomeScreen from './components/screens/HomeScreen';

// TODO: seperate these into their own stacks
// TODO: remove header in the Auth Stack
// TODO: Remove screens from components
// TODO: Move AppNavigator and Routes into seperate files

const Navigator = StackNavigator(
    {
        Auth: { screen: AuthScreen },
        Home: { screen: HomeScreen }
    },
    {
        initialRouteName: 'Auth',
        headerMode: 'none'
    }
);

const initialState = Navigator.router.getStateForAction(NavigationActions.init());

const navReducer = (state = initialState, action) => {
    const nextState = Navigator.router.getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

const appReducer = combineReducers({
    nav: navReducer
});

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Navigator navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener,
                })} />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
    appReducer,
    applyMiddleware(middleware),
);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
