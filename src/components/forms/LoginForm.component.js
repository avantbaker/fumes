import React, { Component } from 'react';
import { FormLabel, FormInput } from 'react-native-elements';
import {
    Button,
} from 'react-native-elements';

import {
    View,
} from 'react-native';

export default class LoginForm extends Component {
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
                    <Button title="Submit"/>
                </View>
            </View>
        );
    }
}