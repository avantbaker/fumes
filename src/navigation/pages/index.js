import React, { Component } from 'react';
import {
    StackNavigator,
} from 'react-navigation';
import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from "./DetailsScreen";
import EditScreen from "./EditScreen";
import SubEditScreen from './SubEditScreen';

const AuthStack = StackNavigator({
    Login: { screen: AuthScreen }
},{
    headerMode: 'none'
});

const MainStack = StackNavigator({
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
    Edit: { screen: EditScreen },
    SubEdit: { screen: SubEditScreen }
},{
    headerMode: 'screen',
    initialRoute: 'Home',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#00171f',
            borderBottomColor: '#02dccf',
            borderBottomWidth: 3,
            height: 60
        },
        headerTitleStyle: {
            fontFamily: 'PTSans-Narrow'
        },
        headerTintColor: '#fff',
        headerBackTitle: null
    }
});

const Navigator = StackNavigator(
    {
        Auth: { screen: AuthStack },
        Home: { screen: MainStack }
    },
    {
        initialRouteName: 'Auth',
        headerMode: 'none',
    }
);

export default Navigator;