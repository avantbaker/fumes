import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ListItem, Card } from 'react-native-elements';

import AuthScreen from './components/screens/AuthScreen';

const list = [
    {
        title: 'Appointments',
        icon: 'av-timer'
    },
    {
        title: 'Trips',
        icon: 'flight-takeoff'
    }
];

const cardContainerStyles = {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    padding: 0
};
const listItemContainerStyles = {
    backgroundColor: 'white',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    marginBottom: 8
};

class HomeScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            title: 'Entry Log',
            headerRight: (
                <Button
                    title="+"
                    onPress={() => console.log('Adding 1')}
                />
            )
        }
    };

    render() {
        return(
          <View style={styles.container}>
              <Card containerStyle={cardContainerStyles}>
                  {
                      list.map((item, i) => (
                          <ListItem
                              containerStyle={listItemContainerStyles}
                              key={i}
                              title={item.title}
                              leftIcon={{ name: item.icon }}
                          />
                      ))
                  }
              </Card>
          </View>
        );
    }
}

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
