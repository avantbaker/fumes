import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { connect } from 'react-redux';

import EntryListContainer from '../../components/containers/EntryListContainer';
import EntryListItem from '../../components/buttons/EntryListItem';

class HomeScreen extends Component {

    static navigationOptions = ({ screenProps, navigation }) => {
        const { navigate } = navigation;
        return {
            title: 'History',
            headerRight: (
                <TouchableOpacity onPress={() => navigate('Add')}>
                    <Icon
                        name="plus"
                        type="font-awesome"
                        color="#ffffff"
                        containerStyle={{ marginRight: 15 }}
                        size={18}
                    />
                </TouchableOpacity>
            ),
            headerLeft: (
                <TouchableOpacity onPress={() => screenProps.rootNavigation.navigate('DrawerOpen')}>
                    <Icon
                        name="bars"
                        type="font-awesome"
                        color="#ffffff"
                        containerStyle={{ marginLeft: 15 }}
                        size={18}
                    />
                </TouchableOpacity>
            ),
        }
    };

    render() {
        const { entries } = this.props;
        const { container } = styles;
        return (
            <View style={container}>
                {
                    entries &&
                    <EntryListContainer
                        items={entries}
                        listItemComponent={EntryListItem}
                        {...this.props}
                    />
                }
            </View>
        );
    }
}

export default compose(
    firebaseConnect((props, store) => ([
        `entries/${store.getState().user.uid}`
    ])),
    connect(({ firebase: { data }, user }) => ({
        entries: data.entries && data.entries[user.uid]
    }))
)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00171f',
        padding: 15,
    }
});
