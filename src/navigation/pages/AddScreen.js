import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { Field, reduxForm, formValueSelector  } from 'redux-form';
import { Button } from 'react-native-elements';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { createBaseEntry } from "../../entryConfig";

import Input from '../../components/forms/Input.component';

class AddForm extends Component {
    render() {
        return (
            <View>
                <Field
                    name="location"
                    component={Input}
                    placeholder="Location"
                    inputStyle={[styles.fieldInputStyles, styles.font]}
                    containerStyle={[styles.fieldContainerStyles, styles.locationContainer ]}
                />
                <Field
                    name="name"
                    component={Input}
                    placeholder="Fume Hood Name"
                    inputStyle={[styles.fieldInputStyles, styles.font]}
                    containerStyle={[styles.fieldContainerStyles, styles.hoodNameContainer ]}
                />
                <View style={styles.submitContainer}>
                    <Button
                        title="Submit"
                        onPress={this.props.handleSubmit}
                        textStyle={styles.submitText}
                        buttonStyle={styles.submitButton}
                    />
                </View>
            </View>
        );
    }
}

AddForm = reduxForm({ form: 'add' })(AddForm);

class AddScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            title: 'New Entry',
        }
    };

    constructor(props) {
        super(props);

        this.createNewEntry = this.createNewEntry.bind(this);
    }

    createNewEntry({ location, name }) {

        const date = new Date();
        const { firebase: Firebase, user, navigation } = this.props;
        const entry = createBaseEntry({ location, name, date });

        Firebase.pushWithMeta(`/entries/${user.uid}`, entry).then((ref) => {
            console.log(ref);
        });

    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#00171f' }}>
                <AddForm onSubmit={this.createNewEntry} />
            </View>
        );
    }

}

export default compose(
    firebaseConnect(),
    connect((state) => ({
        user: state.user,
        form: state.form,
    }))
)(AddScreen);

const styles = {
    submitContainer: {
        marginTop: 20
    },
    fieldContainerStyles: {
        borderBottomWidth: 3,
        borderBottomColor: '#02dccf',
        backgroundColor: 'rgba(0, 127, 198, 0.25)',
        height: 50,
        marginTop: 5,
        marginBottom: 8
    },
    fieldInputStyles: {
        color: '#fff',
        paddingLeft: 10,
        paddingTop: 10,
        fontSize: 15,
    },
    labelStyle: {
        marginBottom: 5,
        color: '#fff'
    },
    font: {
        fontFamily: 'PTSans-Narrow'
    },
    locationContainer: {
        marginTop: 20
    },
    hoodNameContainer: {
        marginBottom: 4
    },
    submitText: {
        fontWeight: '900',
        fontFamily: 'PTSans-Narrow'
    },
    submitButton: {
        backgroundColor: 'rgba(0, 127, 198, 0.25)'
    }
};