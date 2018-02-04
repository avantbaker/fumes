import React, { Component } from 'react';
import {
    StackNavigator,
} from 'react-navigation';
import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';

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

export default Navigator;