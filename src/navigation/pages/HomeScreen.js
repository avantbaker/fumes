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
import Data from '../../Data';

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

    onPress() {
        const { firebase } = this.props;
        return () => {
            return (item) => {
                firebase.setWithMeta('entries', item);
            }
        }
    }
    // pass navigation to EntryListContainer
    render() {
        const { container } = styles;
        return(
            <View style={container}>
                <EntryListContainer
                    items={Data}
                    listItemComponent={EntryListItem}
                    onPress={this.onPress()}
                    {...this.props}
                />
            </View>
        );
    }

}

export default compose(
    firebaseConnect(),
)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
