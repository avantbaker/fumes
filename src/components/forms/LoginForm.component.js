import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormLabel, FormInput } from 'react-native-elements';
import { Button } from 'react-native-elements';

import {
    View,
} from 'react-native';

export default class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit() {
        // This should be handled by redux action
        const { navigate } = this.props.navigation;
        navigate('Home')
    }

    render() {
        return(
            <View>
                <View>
                    <FormLabel>Email</FormLabel>
                    <FormInput
                        placeholder="ex. reggie@gsu.edu"
                        onChangeText={() => {}}
                    />
                </View>
                <View>
                    <FormLabel>Password</FormLabel>
                    <FormInput
                        placeholder="ex. *********"
                        onChangeText={() => {}}
                    />
                </View>
                <View style={{marginTop: 20}}>
                    <Button
                        title="Submit"
                        onPress={this.handleSubmit}
                    />
                </View>
            </View>
        );
    }
}

