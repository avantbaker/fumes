import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import DetailCard from '../../components/cards/DetailCard';
import EditForm from '../../components/forms/EditForm.component';

class EditScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: (<Text style={{ color: '#fff' }}>{ navigation.state.params.name }</Text>),
    });

    constructor(props) {
        super(props);

        this._handleSubmit = this._handleSubmit.bind(this);
    }

    render() {
        const { entry, details, navigation } = this.props;
        return (
            <View style={styles.container}>
                <DetailCard
                    details={entry}
                    subtitle={entry.name}
                    displayText={details.average}
                    title="Final Average"
                />
                <EditForm
                    details={details}
                    navigation={navigation}
                    style={{ flex: 5 }}
                />
            </View>
        );
    }
}

export default compose(
    firebaseConnect(({ navigation: { state: { params: { userId, entryId }}}}) => ([
        `entries/${userId}/${entryId}`
    ])),
    connect(({ firebase: { data }}, { navigation: { state: { params: { userId, entryId, name }}}}) => ({
        entry: data.entries && data.entries[userId][entryId],
        details: data.entries && data.entries[userId][entryId][name.toLowerCase()]
    }))
)(EditScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingTop: 20,
        backgroundColor: '#00171f'
    },
    submitContainer: {
        flex: 1,
    }
});