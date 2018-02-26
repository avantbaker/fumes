import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { FormLabel, Button } from 'react-native-elements';
import { View } from 'react-native';

import Input from './Input.component';

class LoginForm extends Component {
    render() {
        return(
            <View>
                <View>
                    <Field
                        name="email"
                        component={ Input }
                        placeholder="Email"
                        inputStyle={[styles.fieldInputStyles, styles.font ]}
                        containerStyle={[styles.fieldContainerStyles, styles.emailContainer ]}
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
                    />
                </View>
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