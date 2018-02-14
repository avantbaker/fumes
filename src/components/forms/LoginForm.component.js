import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormLabel, Button } from 'react-native-elements';
import { View } from 'react-native';

import Input from './Input.component';

class LoginForm extends Component {
    render() {
        return(
            <View>
                <View>
                    <FormLabel>Email</FormLabel>
                    <Field
                        name="email"
                        component={ Input }
                        placeholder="ex. reggie@gsu.edu"
                    />
                </View>
                <View>
                    <FormLabel>Password</FormLabel>
                    <Field
                        secureTextEntry
                        name="password"
                        component={ Input }
                        placeholder="ex. **********"
                    />
                </View>
                <View style={styles.submitContainer}>
                    <Button
                        title="Submit"
                        onPress={this.props.handleSubmit}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    submitContainer: {
        marginTop: 20
    }
};

export default reduxForm({ form: 'login' })(LoginForm);