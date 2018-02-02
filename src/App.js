import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import AuthScreen from './components/screens/AuthScreen';
import HomeScreen from './components/screens/HomeScreen';

// TODO: Hook up Redux with the Stack Navigator
// TODO: seperate these into their own stacks
// TODO: remove header in the Auth Stack
// TODO: Move AppNavigator and Routes into seperate files

const AppNavigator = StackNavigator(
    {
        Auth: { screen: AuthScreen },
        Home: { screen: HomeScreen }
    },
    {
        initialRouteName: 'Home'
    }
);

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
