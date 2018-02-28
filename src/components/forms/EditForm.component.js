import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import SectionResultsDisplay from '../../components/buttons/SectionResultsDisplay';

class EditForm extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${ navigation.state.params.name }`,
    });

    constructor(props) {
        super(props);

        this._goToSubEdit = this._goToSubEdit.bind(this);
        this.renderEighteen = this.renderEighteen.bind(this);
        this.renderSix = this.renderSix.bind(this);
        this.renderTwelve = this.renderTwelve.bind(this);

    }

    _goToSubEdit(name, field, value) {
        const { navigate, onSubmit } = this.props.navigation;
        return () => {
            navigate('SubEdit', { name, field, value, onSubmit });
        }
    }

    renderSix(props) {
        const { six } = this.props.initialValues;
        return(
            <SectionResultsDisplay
                {...props}
                button
                onButtonPress={this._goToSubEdit('6 in.', 'six', six)}
                title="6 in."
            />
        )
    }

    renderTwelve(props) {
        const { twelve } = this.props.initialValues;
        return(
            <SectionResultsDisplay
                {...props}
                button
                onButtonPress={this._goToSubEdit('12 in.', 'twelve', twelve)}
                title="12 in."
            />
        );
    }

    renderEighteen(props) {
        const { eighteen } = this.props.initialValues;
        return(
            <SectionResultsDisplay
                {...props}
                button
                onButtonPress={this._goToSubEdit('18 in.', 'eighteen', eighteen)}
                title="18 in."
            />
        );
    }

    render() {
        return (
            <View style={this.props.style}>
                <Field
                    name="six"
                    component={ this.renderSix }
                />
                <Field
                    name="twelve"
                    component={ this.renderTwelve }
                />
                <Field
                    name="eighteen"
                    component={ this.renderEighteen }
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
    ({ form: { edit }}, { details: { six, twelve, eighteen } }) => ({
        initialValues: {
            six: edit ? edit.values.six : six.toString(),
            twelve: edit ? edit.values.twelve : twelve.toString(),
            eighteen: edit ? edit.values.eighteen : eighteen.toString()
        }
    }),
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