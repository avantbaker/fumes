import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormLabel, Button } from 'react-native-elements';
import { View } from 'react-native';

import Input from './Input.component';

class SignUpForm extends Component {
    render() {
        return(
            <View>
                <View>
                    <Field
                        name="email"
                        component={ Input }
                        placeholder="Email"
                        inputStyle={styles.fieldInputStyles}
                        containerStyle={[styles.fieldContainerStyles, { marginTop: 20 }]}
                    />
                </View>
                <View>
                    <Field
                        name="password"
                        component={ Input }
                        placeholder="Password"
                        inputStyle={styles.fieldInputStyles}
                        containerStyle={styles.fieldContainerStyles}
                    />
                </View>
                <View>
                    <Field
                        name="password_confirm"
                        component={ Input }
                        placeholder="Confirm password"
                        inputStyle={styles.fieldInputStyles}
                        containerStyle={[styles.fieldContainerStyles, { marginBottom: 10 }]}
                    />
                </View>
                <View style={styles.submitContainer}>
                    <Button
                        title="Submit"
                        onPress={this.props.handleSubmit}
                        textStyle={{ fontWeight: '900' }}
                        buttonStyle={{ backgroundColor: 'rgba(0, 127, 198, 0.25)' }}
                    />
                </View>
            </View>
        );
    }
}

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
        marginBottom: 15
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
    }
};

export default reduxForm({ form: 'signup' })(SignUpForm);