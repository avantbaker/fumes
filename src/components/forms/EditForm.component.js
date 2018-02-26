import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import { connect } from 'react-redux';

import { reduxForm, Field } from 'redux-form';
import { Button } from 'react-native-elements';
import SectionResultsDisplay from '../../components/buttons/SectionResultsDisplay';

class EditForm extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${ navigation.state.params.name }`,
    });

    constructor(props) {
        super(props);

        this._goToSubEdit = this._goToSubEdit.bind(this);
    }

    _goToSubEdit() {
        const { navigate } = this.props.navigation;
        navigate('SubEdit', { name: 'SubEdit' });
    }

    render() {
        return (
            <View style={this.props.style}>
                <SectionResultsDisplay
                    button
                    onButtonPress={this._goToSubEdit}
                    value={this.props.initialValues.six}
                    title="6 in."
                />
                <SectionResultsDisplay
                    button
                    onButtonPress={this._goToSubEdit}
                    value={this.props.initialValues.twelve}
                    title="12 in."
                />
                <SectionResultsDisplay
                    button
                    onButtonPress={this._goToSubEdit}
                    value={this.props.initialValues.eighteen}
                    title="18 in."
                />
                {/*<Field*/}
                    {/*name="six"*/}
                    {/*component={ EditForm.renderSix }*/}
                {/*/>*/}
                {/*<Field*/}
                    {/*name="twelve"*/}
                    {/*component={ EditForm.renderTwelve }*/}
                {/*/>*/}
                {/*<Field*/}
                    {/*name="eighteen"*/}
                    {/*component={ EditForm.renderEighteen }*/}
                {/*/>*/}
                <Text style={{ color: '#007fc6', alignSelf: 'center' }}>
                    Click number to edit
                </Text>
                {/*<Button*/}
                    {/*title="Submit"*/}
                    {/*containerStyle={styles.submitContainer}*/}
                    {/*onPress={this.props.handleSubmit}*/}
                {/*/>*/}
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
    }
});