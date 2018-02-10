import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { Icon } from 'react-native-elements';

import EntryListContainer from '../../components/containers/EntryListContainer';
import EntryListItem from '../../components/buttons/EntryListItem';
import Data from '../../Data';

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
    // pass navigation to EntryListContainer
    render() {
        const { container } = styles;
        return(
            <View style={container}>
                <EntryListContainer
                    items={Data}
                    listItemComponent={EntryListItem}
                    {...this.props}
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
