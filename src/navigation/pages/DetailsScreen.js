import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { updateSection } from "../../actions/CurrentEntryActions";

import DetailCard from '../../components/cards/DetailCard';
import DisplayForm from "../../components/forms/DisplayForm.component";

class DetailsScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.name }`,
    });

    constructor(props) {
        super(props);
        this._goToEdit = this._goToEdit.bind(this);
    }

    _goToEdit(title, data) {
        const { navigation: { state, navigate }, entry, updateCurrentSection } = this.props;
        return () => {
            updateCurrentSection(title.toLowerCase());
            navigate('Edit', {
                details: data,
                userId: entry.createdBy,
                entryId: state.params.id,
                name: title
            });
        }
    }

    render() {
        const { entry } = this.props;
        return (
            <View style={styles.container}>
                <DetailCard details={entry} />
                <DisplayForm
                    entry={entry}
                    style={{ flex: 5 }}
                    navigator={this._goToEdit}
                />
            </View>
        );
    }
}

export default compose(
    firebaseConnect(({ navigation: { state: { params: { id, createdBy }}}}) => ([
        `entries/${createdBy}/${id}`
    ])),
    connect(
        ({ firebase: { data }}, { navigation: { state: { params: { id, createdBy }}}}) => ({
            entry: data.entries && data.entries[createdBy][id]
        }),
        (dispatch) => ({
            updateCurrentSection: (section) => dispatch(updateSection(section))
        })
    )
)(DetailsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingTop: 20,
        backgroundColor: '#00171f',
    }
});