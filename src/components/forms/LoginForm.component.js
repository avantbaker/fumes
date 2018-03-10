import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { FormLabel, Button } from 'react-native-elements';
import { View, Text } from 'react-native';

import Input from './Input.component';

class LoginForm extends Component {
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
                        containerStyle={[styles.fieldContainerStyles, styles.emailContainer ]}
                        onChange={() => this.props.resetError('login')}
                    />
                </View>
                <View>
                    <Field
                        secureTextEntry
                        name="password"
                        component={ Input }
                        placeholder="Password"
                        inputStyle={[styles.fieldInputStyles, styles.font ]}
                        containerStyle={[styles.fieldContainerStyles, styles.passwordContainer ]}
                        onChange={() => this.props.resetError('login')}
                    />
                </View>
                <View style={styles.submitContainer}>
                    <Button
                        title="Submit"
                        onPress={this.props.handleSubmit}
                        textStyle={styles.submitText}
                        buttonStyle={styles.submitButton}
                        disabledStyle={{ backgroundColor: 'rgba(0, 127, 198, 0.04)' }}
                        disabledTextStyle={{ color: '#5e6977' }}
                    />
                    <View style={{ alignItems: 'center' }}>
                        {
                            this.props.parentState.error &&
                            this.props.parentState.error.screen === 'login' &&
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
    },
    emailContainer: {
        marginTop: 20
    },
    passwordContainer: {
        marginBottom: 10
    },
    submitText: {
        fontWeight: '900',
        fontFamily: 'PTSans-Narrow'
    },
    submitButton: {
        backgroundColor: 'rgba(0, 127, 198, 0.25)'
    }
};

const Login = reduxForm({ form: 'login' })(LoginForm);

export default connect(
    (state) => ({
        initialValues: {
            email: 'b.avant89@gmail.com',
            password: 'Chitown1',
        }
    })
)(Login);