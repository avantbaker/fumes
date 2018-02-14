import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import { connect } from 'react-redux';

import { reduxForm, Field } from 'redux-form';
import { Button } from 'react-native-elements';
import SectionResultsDisplay from '../../components/buttons/SectionResultsDisplay';

class EditForm extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${ navigation.state.params.name }`,
    });

    static renderSix(props) {
        return(
            <SectionResultsDisplay
                {...props}
                editable
                title="6 in."
            />
        )
    }

    static renderTwelve(props) {
        return(
            <SectionResultsDisplay
                {...props}
                editable
                title="12 in."
            />
        );
    }

    static renderEighteen(props) {
        return(
            <SectionResultsDisplay
                {...props}
                editable
                title="18 in."
            />
        );
    }

    render() {
        return (
            <View style={this.props.style}>
                <Field
                    name="six"
                    component={ EditForm.renderSix }
                />
                <Field
                    name="twelve"
                    component={ EditForm.renderTwelve }
                />
                <Field
                    name="eighteen"
                    component={ EditForm.renderEighteen }
                />
                <Button
                    title="Submit"
                    containerStyle={styles.submitContainer}
                    onPress={this.props.handleSubmit}
                />
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