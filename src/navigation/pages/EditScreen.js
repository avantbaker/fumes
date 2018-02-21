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

    _handleSubmit(values) {
        const { firebase, entry, navigation: { state: { params: { userId, entryId, name }}} } = this.props;

        const newDetails = this.combine(values, { average: this.computeAverage(values) });
        const updatedEntry = this.combine(entry, { [name.toLowerCase()]: newDetails });
        const updatedEntryAverages = [updatedEntry.left.average, updatedEntry.middle.average, updatedEntry.right.average];

        updatedEntry.average = this.computeAverage(updatedEntryAverages);

        firebase.update(`entries/${userId}/${entryId}`, updatedEntry);
    }

    combine(base, update) {
        return Object.assign({}, base, update);
    }

    computeAverage(averages) {

        let value;

        if(averages && typeof averages === 'object') {
            value = (Object.values(averages).reduce((p,c) => parseInt(p) + parseInt(c)) / 3).toFixed(1).toString();
        }

        if(averages && Array.isArray(averages)) {
            value = (averages.reduce((p,c) => parseInt(p) + parseInt(c)) / 3).toFixed(1).toString();
        }

        return value;
    }

    render() {
        const { entry, details } = this.props;
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
                    style={{ flex: 5 }}
                    onSubmit={this._handleSubmit}
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
        padding: 10,
        backgroundColor: '#00171f'
    },
    submitContainer: {
        flex: 1,
    }
});