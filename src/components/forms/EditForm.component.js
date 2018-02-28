import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import SectionResultsDisplay from '../../components/buttons/SectionResultsDisplay';

class EditForm extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${ navigation.state.params.name }`,
    });

    constructor(props) {
        super(props);

        this._goToSubEdit = this._goToSubEdit.bind(this);
    }

    _goToSubEdit(name, value) {
        const { navigate } = this.props.navigation;
        return () => {
            navigate('SubEdit', { name, value, });
        }
    }

    render() {

        const { six, twelve, eighteen } = this.props.initialValues;

        return (
            <View style={this.props.style}>
                <SectionResultsDisplay
                    button
                    onButtonPress={this._goToSubEdit('6 in.', six)}
                    value={six}
                    title="6 in."
                />
                <SectionResultsDisplay
                    button
                    onButtonPress={this._goToSubEdit('12 in.', twelve)}
                    value={twelve}
                    title="12 in."
                />
                <SectionResultsDisplay
                    button
                    onButtonPress={this._goToSubEdit('18 in.', eighteen)}
                    value={eighteen}
                    title="18 in."
                />
                <Text style={styles.helperText}>
                    Click number to edit
                </Text>
            </View>
        );
    }

}

EditForm = reduxForm({ form: 'edit' })(EditForm);

export default connect(
    (state, { details: { six, twelve, eighteen } }) => ({
        initialValues: {
            six: six.toString(),
            twelve: twelve.toString(),
            eighteen: eighteen.toString()
        }
    })
)(EditForm);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    submitContainer: {
        flex: 1,
    },
    helperText: {
        color: '#007fc6',
        alignSelf: 'center'
    }
});