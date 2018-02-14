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

import { getEntries } from "../../actions/EntryActions";

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
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }
    componentWillMount() {
        this.data = null;
        const { firebase, navigation } = this.props;
        const userId = navigation.state.params.user.uid;
        firebase.ref(`entries/${userId}`).on('value', (snapshot) => {
            this.setState({ data: snapshot.val() });
        })
    }
    // pass navigation to EntryListContainer
    render() {
        const { container } = styles;
        return this.state.data && (
            <View style={container}>
                <EntryListContainer
                    items={this.state.data}
                    listItemComponent={EntryListItem}
                    {...this.props}
                />
            </View>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        entries: state.firebase
    }
};


export default compose(
    firebaseConnect(),
    connect(mapStateToProps, { getEntries })
)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
