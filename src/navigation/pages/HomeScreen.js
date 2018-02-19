import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { connect } from 'react-redux';

import EntryListContainer from '../../components/containers/EntryListContainer';
import EntryListItem from '../../components/buttons/EntryListItem';

class HomeScreen extends Component {

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
    firebaseConnect(({ navigation: { state: { params: { user }}}}) => ([
        `entries/${user.uid}`
    ])),
    connect(({ firebase: { data }}, { navigation: { state: { params: { user }}}}) => ({
        entries: data.entries && data.entries[user.uid]
    }))
)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
