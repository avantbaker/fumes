import React, { Component } from 'react';
import {
    StackNavigator,
    DrawerNavigator
} from 'react-navigation';

import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from "./DetailsScreen";
import EditScreen from "./EditScreen";
import SubEditScreen from './SubEditScreen';
import AddScreen from './AddScreen';
import LogoutScreen from './LogoutScreen';

const AuthStack = StackNavigator({
    Login: { screen: AuthScreen }
},{
    headerMode: 'none'
});

const MainStack = StackNavigator({
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
    Edit: { screen: EditScreen },
    SubEdit: { screen: SubEditScreen },
    Add: { screen: AddScreen }
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

class MainStackNavigator extends Component {
    render() {
        return (
            <MainStack
                screenProps={{ rootNavigation: this.props.navigation }}
            />
        )
    }
}

const Navigator = DrawerNavigator({
    Auth: { screen: AuthStack },
    Main: { screen: MainStackNavigator }
}, {
    initialRouteName: 'Auth',
    headerMode: 'none',
    contentComponent: LogoutScreen,
    stateName: 'MainAppDrawer'
});

export default Navigator;