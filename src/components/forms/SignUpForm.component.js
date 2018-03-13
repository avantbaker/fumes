import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Input from './Input.component';

class SignUpForm extends Component {

    static validate({ password, password_confirm, email }) {
        const errors = {};
        if(!email) {
            errors.email = 'Please enter an email';
        }
        if(!password) {
            errors.password = 'Please enter a password';
        }
        if(!password_confirm) {
            errors.password_confirm = 'Please enter a matching password';
        }
        if (email && !password ) {
            errors.password = 'Please enter a password';
        }
        if ( (password && password_confirm) && (password !== password_confirm) ) {
            errors.password_confirm = 'Passwords must match';
        }
        return errors;
    }

    render() {
        const { pristine } = this.props;
        return(
            <View>
                <View>
                    <Field
                        name="email"
                        component={ Input }
                        placeholder="Email"
                        inputStyle={[styles.fieldInputStyles, styles.font ]}
                        containerStyle={[styles.fieldContainerStyles, { marginTop: 20 }]}
                        onChange={() => this.props.resetForm('signup')}
                    />
                </View>
                <View>
                    <Field
                        name="password"
                        component={ Input }
                        placeholder="Password"
                        secureTextEntry
                        inputStyle={[styles.fieldInputStyles, styles.font ]}
                        containerStyle={styles.fieldContainerStyles}
                        onChange={() => this.props.resetForm('signup')}
                    />
                </View>
                <View>
                    <Field
                        name="password_confirm"
                        component={ Input }
                        placeholder="Confirm password"
                        secureTextEntry
                        inputStyle={[styles.fieldInputStyles, styles.font ]}
                        containerStyle={[styles.fieldContainerStyles, { marginBottom: 10 }]}
                        onChange={() => this.props.resetForm('signup')}
                    />
                </View>
                <View style={styles.submitContainer}>
                    <Button
                        disabled={ pristine }
                        disabledStyle={{ backgroundColor: 'rgba(0, 127, 198, 0.04)' }}
                        disabledTextStyle={{ color: '#5e6977' }}
                        title="Submit"
                        onPress={this.props.handleSubmit}
                        textStyle={{ fontWeight: '900', fontFamily: 'PTSans-Narrow' }}
                        buttonStyle={{ backgroundColor: 'rgba(0, 127, 198, 0.25)' }}
                    />
                    <View style={{ alignItems: 'center' }}>
                        {
                            this.props.parentState.error &&
                            this.props.parentState.error.screen === 'signup' &&
                            <Text style={{ color: '#FA4616', fontFamily: 'PTSans-Narrow', paddingTop: 8 }}>
                                { this.props.parentState.errorStates[this.props.parentState.error.code] }
                            </Text>
                        }
                    </View>
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
        height: 45,
        marginTop: 5,
        marginBottom: 15
    },
    fieldInputStyles: {
        color: '#fff',
        paddingLeft: 10,
        paddingTop: 6,
        fontSize: 15,
    },
    labelStyle: {
        marginBottom: 5,
        color: '#fff'
    },
    font: {
        fontFamily: 'PTSans-Narrow'
    }
};

SignUpForm = reduxForm({
    form: 'signup',
    validate: SignUpForm.validate
})(SignUpForm);

export default connect(
    ({ form }) => ({ currentForm: form  })
)(SignUpForm);