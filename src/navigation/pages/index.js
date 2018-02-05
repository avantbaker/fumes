import React, { Component } from 'react';
import {
    StackNavigator,
} from 'react-navigation';
import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';

const AuthStack = StackNavigator({
    Login: { screen: AuthScreen }
},{
    headerMode: 'none'
});

const MainStack = StackNavigator({
    Home: { screen: HomeScreen }
},{
    headerMode: 'screen',
    initialRoute: 'Home'
});

const Navigator = StackNavigator(
    {
        Auth: { screen: AuthStack },
        Home: { screen: MainStack }
    },
    {
        initialRouteName: 'Auth',
        headerMode: 'none'
    }
);

export default Navigator;