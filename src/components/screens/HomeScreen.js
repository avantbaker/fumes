import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { Icon } from 'react-native-elements';

import EntryListContainer from '../containers/EntryListContainer';
import EntryListItem from '../buttons/EntryListItem';

const list = [
    {
        location: 'Science Building 1',
        name: 'Center Room Fume-hood #1',
        date: '1/10/18',
        average: '70.4'
    },
    {
        location: 'Science Building 3',
        name: 'Room 4 Fume-hood #2',
        date: '1/10/18',
        average: '34.7'
    },
    {
        location: 'Science Building 6',
        name: 'Room 2 Fume-hood #1',
        date: '1/8/18',
        average: '64.3'
    },
    {
        location: 'Science Building 5',
        name: 'Room 2 Fume-hood #7',
        date: '1/7/18',
        average: '93.8'
    },
    {
        location: 'Science Building 8',
        name: 'Room 1 Fume-hood #4',
        date: '1/4/18',
        average: '77.0'
    }
];

export default class HomeScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            title: 'History',
            headerRight: (
                <Icon
                    name="plus"
                    type="font-awesome"
                    containerStyle={{ marginRight: 15 }}
                    size={23}
                />
            )
        }
    };

    render() {
        const { container } = styles;
        return(
            <View style={container}>
                <EntryListContainer
                    items={list}
                    listItemComponent={EntryListItem}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
