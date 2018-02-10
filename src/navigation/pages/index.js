import React, { Component } from 'react';
import {
    StackNavigator,
} from 'react-navigation';
import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from "./DetailsScreen";
import EditScreen from "./EditScreen";

const AuthStack = StackNavigator({
    Login: { screen: AuthScreen }
},{
    headerMode: 'none'
});

const MainStack = StackNavigator({
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
    Edit: { screen: EditScreen }
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
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

export default Navigator;