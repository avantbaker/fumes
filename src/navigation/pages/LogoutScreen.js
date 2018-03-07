import React, { Component } from 'react';
import {
    View,
    TouchableHighlight,
    Text
} from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { firebaseConnect } from 'react-redux-firebase';

import {logoutUser} from "../../actions/CurrentUserActions";
class LogoutScreen extends Component {
    render() {
        const { firebase, navigation, logoutCurrentUser } = this.props;

        return (
            <View style={entryListStyles.wrapper}>
                <TouchableHighlight
                    style={entryListStyles.container}
                    onPress={() => {
                        firebase.logout().then(() => {
                            logoutCurrentUser();
                            navigation.dispatch(
                                NavigationActions.reset({
                                    actions: [NavigationActions.navigate({routeName: 'Login'})],
                                    index: 0,
                                    key: null
                                })
                            );
                        });
                    }}
                 >
                    <Text style={entryListStyles.name}>Logout</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const mapDispatchToActions = (dispatch) => ({
    logoutCurrentUser: () => dispatch(logoutUser())
});

export default compose(
    firebaseConnect(),
    connect(null, mapDispatchToActions)
)(LogoutScreen);

export const entryListStyles = {
    wrapper: {
        flex: 1,
        backgroundColor: '#00171f',
        padding: 12,
        paddingTop: 24
    },
    container: {
        height: 60,
        backgroundColor: 'rgba(0, 127, 198, 0.25)',
        marginBottom: 12,
        padding: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#02dccf',
        justifyContent: 'center'
    },
    name: {
        paddingTop: 4,
        fontSize: 22,
        color: '#fff',
        fontFamily: 'Impact',
        fontWeight: 'bold'
    }
};